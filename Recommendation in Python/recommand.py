import pickle
import json
from Contents import TouristRecommender
from flask import jsonify

with open("TouristRecommand.pkl","rb") as f:
    obj = pickle.load(f)
    
var = obj.RecommandPlaces("romantic","ss world park")
str1 = []
for i in var:
    str1.append(i)
places = {"places":str1 }
jsonresponse= json.dumps(places)

