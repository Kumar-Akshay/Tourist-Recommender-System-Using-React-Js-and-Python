import React from "react";
import axios from "axios";
import baseUrl from '../utils/baseUrl';
import PlacesSummary from '../components/Places/PlacesSummary'
import { Button } from 'antd';
import Router from "next/router";


function Place({ places }) {

  function handleChange(event) {
    Router.push('/infoform')
  }

return <>
    <Button size="large" onClick={handleChange} className="recomend-button">
     Get Places According to your Interest
    </Button>
    <div className="places-form">
      <PlacesSummary placesdata={places} />
    </div>

  </>;
}

Place.getInitialProps = async () => {
  // fetch data on server
  const url = `${baseUrl}/api/places`;
  const response = await axios.get(url);
  return { places: response.data };
  // return response data as an object
  // note: this object will be merged with existing props
};


export default Place;
