import React from 'react';
import PropTypes from 'prop-types'; // 맞는 데이터나 변수를 넣어주는지 확인

class App extends React.Component{
    constructor(props) {
        super(props);
        console.log('hello');
    }
    state = {
        count: 0
    }

    add = () => {
        this.setState(current => ({count: current.count++ }));
    };
    minus = ()=> {
        this.setState(current => ({count: current.count-- }));
    };

    componentDidMount() { //  컴포넌트가 마운트된 직후
        console.log('componet render')
    }

    componentDidUpdate() {
        console.log('im update!')
    }

    

    render(){
        console.log('im rendering');
        return (
            <div>
                <h1>The number is :  {this.state.count}</h1>
                <button onClick={this.add}>Add</button>
                <button onClick={this.minus}>Minus</button>
            </div>
        )
    }
}

export default App;
