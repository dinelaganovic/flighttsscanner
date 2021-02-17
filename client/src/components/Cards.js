import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
    return ( < div className = 'cards' >
        <h1 > See some interesting destinations! </h1>   
        <div className = 'cards__container' >
        <div className = 'cards__wrapper' >
        <ul className = 'cards__items' >
        <CardItem src = 'images/skrivenivodopad.jpg'
        text = 'Explore the hidden waterfall deep inside the Amazon Jungle '
        label = 'Hidden waterfall'
        path = '/popmesta' />
        <CardItem src = 'images/bali.jpg'
        text = 'Travel through the Islands of Bali in a Private Cruise'
        label = 'Bali Islands'
        path = '/popmesta' />
        </ul>   
        <ul className = 'cards__items' >
        <CardItem src = 'images/atlanski.jpg'
        text = ' Set Sail in the Atlantic Ocean visiting Uncharted Waters'
        label = 'Atlantic'
        path = '/popmesta' />
        <CardItem src = 'images/himalaj.jpeg'
        text = 'Experience Football on Top of the Himilayan Mountains'
        label = 'Himalayan mountains'
        path = '/popmesta' />
        <CardItem src = 'images/sahara.jpg'
        text = ' Remember the beautiful experiences from the Sahara Desert'
        label = 'Sahara'
        path = '/popmesta' />
        </ul> </div > </div> </div>
    );
}

export default Cards;