import pandas as pd
import numpy as np
import re, math
from collections import Counter
from googlemaps import convert
from googlemaps import Client
from googlemaps.convert import as_list
import pickle
WORD = re.compile(r'\w+')

class TouristRecommender:
    
    def __init__(self):
        pass    
    
    def get_cosine(self,vec1, vec2):
        intersection = set(vec1.keys()) & set(vec2.keys())
        numerator = sum([vec1[x] * vec2[x] for x in intersection])
        sum1 = sum([vec1[x]**2 for x in vec1.keys()])
        sum2 = sum([vec2[x]**2 for x in vec2.keys()])
        denominator = math.sqrt(sum1) * math.sqrt(sum2)
        if not denominator:
            return 0.0
        else:
            return float(numerator) / denominator
    
    def text_to_vector(self,text):
        words = WORD.findall(text)
        return Counter(words)
        
    def clean_data(self,x):
        if isinstance(x, list):
            return [str.lower(i.replace(" ", "")) for i in x]
        else:
            if isinstance(x, str):
                return str.lower(x.replace(" ", ""))
            else:
                return ''
            
    def RecommandPlaces(self,vec,loc):
        self.Vec = vec
        self.Loc = loc
        self.dest=""
        metadata = pd.read_csv('test2.csv', low_memory=False)
        text1 =self.Vec 
        vector1 = self.text_to_vector(text1)
        C = metadata['p_rating'].mean()
        m = metadata['count'].quantile(0.75)
        def weighted_rating(x, m=m, C=C):
            v = x['count']
            R = x['p_rating']
            # Calculation based on the Bayesian Rating Formula
            return (v/(v+m) * R) + (m/(m+v) * C)

        metadata['category'] = metadata['category'].apply(self.clean_data)
        metadata['score'] = metadata.apply(weighted_rating, axis=1)
        cos=[]
        for i in list(metadata['category']):
            text2 = i
            vector2 = self.text_to_vector(text2)
            cosine = self.get_cosine(vector1, vector2)
            cos.append(cosine)
        metadata['cosine']=cos
        x=metadata['cosine']>0.0
        rec=pd.DataFrame(metadata[x])
        rec=rec.sort_values('score',ascending=False)
        src=self.Loc 
        dest=list(rec['title'])
        client = Client(key='AIzaSyCdcI0g5cz2bs35M_N7fkXFYMBQXDWYMUA')
        dist=[]
        dur=[]
        recommand=[]
        for d in dest:
            d=d+",Pakistan"
            recommand.append(d)
        return recommand

        
    
    def distance_matrix(client,origins, destinations,
                        mode=None, language=None, avoid=None, units=None,
                        departure_time=None, arrival_time=None, transit_mode=None,
                        transit_routing_preference=None, traffic_model=None, region=None):
        params = {
                "origins": convert.location_list(origins),
                "destinations": convert.location_list(destinations)}

        if mode:
        # NOTE(broady): the mode parameter is not validated by the Maps API
        # server. Check here to prevent silent failures.
            if mode not in ["driving", "walking", "bicycling", "transit"]:
                    raise ValueError("Invalid travel mode.")
            params["mode"] = mode

        if language:
            params["language"] = language

        if avoid:
            if avoid not in ["tolls", "highways", "ferries"]:
                raise ValueError("Invalid route restriction.")
            params["avoid"] = avoid

        if units:
            params["units"] = units

        if departure_time:
            params["departure_time"] = convert.time(departure_time)

        if arrival_time:
            params["arrival_time"] = convert.time(arrival_time)

        if departure_time and arrival_time:
            raise ValueError("Should not specify both departure_time and"
                                "arrival_time.")

        if transit_mode:
            params["transit_mode"] = convert.join_list("|", transit_mode)

        if transit_routing_preference:
            params["transit_routing_preference"] = transit_routing_preference

        if traffic_model:
            params["traffic_model"] = traffic_model

        if region:
            params["region"] = region
            #print(client._request("/maps/api/distancematrix/json", params))
            return client._request("/maps/api/distancematrix/json", params)


obj = TouristRecommender()
var=obj.RecommandPlaces("historical heritage","islam barrage")
print(var)
