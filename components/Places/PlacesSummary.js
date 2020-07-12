import { Card } from 'semantic-ui-react';



function PlacesSummary({ placesdata }) {

    console.log(placesdata)
    function mapPlaces(placesdata) {
        return placesdata.map(place => ({
            header: place.name,
            meta: place.description,
            color: 'teal',
            childkey: place._id,
            href: `/place?_id=${place._id}`,
            image: place.picture,
        
        }))
    }


    return <>
        <Card.Group itemsPerRow="4" stackable items={mapPlaces(placesdata)} />;
    </>;
}


export default PlacesSummary;
