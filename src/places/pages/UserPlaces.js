import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://lh5.googleusercontent.com/p/AF1QipNVlM5lo7fIJrmvjN4EOrTMiQjDgDyTfw7ATdV6=w408-h272-k-no',
        address:'20 W 34th St., New York, NY 10001',
        location:{
            lat:40.7484405,
            lng:-73.9878531
        },
        creator:'u1'
    },
    {
        id:'p2',
        title:'Burj Khalifa',
        description:'One of the most famous sky scrapers in Dubai',
        imageUrl:'https://lh5.googleusercontent.com/p/AF1QipO2Ij2qKRmKpCPKC7Y6WF6nJVet3C7Mfc0W8sMf=w408-h291-k-no',
        address:'1 Sheikh Mohammed bin Rashid Blvd - Downtown Dubai',
        location:{
            lat:25.197197,
            lng:55.2721877
        },
        creator:'u2'
    }
]

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
    return <PlaceList items={loadedPlaces}/>
};

export default UserPlaces;