import React from 'react';
import PropTypes from 'prop-types'; // 맞는 데이터나 변수를 넣어주는지 확인


function Food({ name, picture, rating }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <h4>{rating}/5.0</h4>
            <img width='300' src={picture} alt={name}/>
        </div>
    )
}

Food.propTypes = {
    name:PropTypes.string.isRequired,
    picture:PropTypes.string.isRequired,
    rating:PropTypes.number.isRequired
}

const foodILike = [{
    id:1,
    name: "수육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg",
    rating: 5
},{
    id:2,
    name: "김치",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg",
    rating: 5
},{
    id:3,
    name: "제육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg",
    rating: 5
},{
    id:4,
    name: "편육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg",
    rating: 5
},];


function App() {
  return (
    <div>
        <h1>Hello!</h1>
        {foodILike.map(dish => (
            <Food 
            key={dish.id} 
            name={dish.name} 
            picture={dish.image} 
            rating={dish.rating}/>
        ))}        
    </div>
  );
}

export default App;
