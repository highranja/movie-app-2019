import React from 'react';

function Food({ name,picture }) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img width='300' src={picture} alt={name}/>
        </div>
    )
}

const foodILike = [{
    id:1,
    name: "수육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},{
    id:2,
    name: "김치",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},{
    id:3,
    name: "제육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},{
    id:4,
    name: "편육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},];

function renderFood(dish){
    return <Food key={dish.id} name={dish.name} picture={dish.image}/>;
}

function App() {
  return (
    <div>
        <h1>Hello!</h1>
        {foodILike.map(renderFood)}
        
    </div>
  );
}

export default App;
