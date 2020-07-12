from flask import Flask, request, jsonify, render_template
import pickle
import json
import sys
from Contents import TouristRecommender

app = Flask(__name__)
@app.route('/recommand',methods=['POST'])
def recommand():
    data = request.get_json(force=True)
    intrest = data['intrest']
    location = data['location']
    with open("TouristRecommand.pkl","rb") as f:
        obj = pickle.load(f)    
    var = obj.RecommandPlaces(intrest,location)
    str1 = []
    for i in var:
        str1.append(i)
    places = {"places":str1 }
    jsonresponse= json.dumps(places)


    return jsonresponse


if __name__ == "__main__":
    app.run(debug=True)