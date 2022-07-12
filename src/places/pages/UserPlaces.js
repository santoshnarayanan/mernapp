import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
    {
        id:'p1',
        title:'Empire State Building',
        description:'One of the most famous sky scrapers in the world',
        imageUrl:'https://images.unsplash.com/photo-1555109307-f7d9da25c244?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW1waXJlJTIwc3RhdGUlMjBidWlsZGluZ3xlbnwwfHwwfHw%3D&w=1000&q=80',
        address:'20 W 34th St., New York, NY 10001',
        location:{
            lat:40.7484405,
            lng:-73.9856644
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