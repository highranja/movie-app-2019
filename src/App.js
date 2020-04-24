import React from 'react';

function Food({ name,picture }) {
    return <h3>I love {name} {picture}</h3>;
    
}

const foodILike = [{
    name: "수육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},{
    name: "김치",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},{
    name: "제육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},{
    name: "편육",
    image:"https://craftlog.com/m/i/6244757=s1280=h960.jpg"
},];

function App() {
  return (
    <div>
        <h1>Hello!</h1>
        {foodILike.map(dish => (
            <Food name={dish.name} picture={dish.image} />
        ))}
        
    </div>
  );
}

export default App;
