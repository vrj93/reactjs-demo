import { useState } from 'react';
import ReactDOM from 'react-dom';
import {name, age} from "./person.js";
import message from './message.js';
import {goals, TwoWheel} from './components.js';
import FavoriteColor from './hooks.js';

class Car {
    constructor(name){
        this.brnad = name;
    }

    present(){
        return "This is my " + this.brnad;
    }
}

class Model extends Car {
    constructor(name, model){
        super(name);
        this.model = model;
    }

    show(){
        return this.present() + ", It is a " + this.model;
    }
}

const mycar = new Model("Porche", "Turbo");
const fruits = ['apple', 'banana', 'orange'];

const details = [name, age];
const detailslist = details.map((item) => <p>{item}</p>);

// ReactDOM.render(<TwoWheel isGoal={goals} />, document.getElementById('root'));
// ReactDOM.render(<FavoriteColor />, document.getElementById('root'));

function MyForm() {

    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name] : value}))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(inputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter username:
                <input 
                    type='text'
                    name='username'
                    value={inputs.username || ''}
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <br></br>
            <label>Enter age:
                <input 
                    type='number'
                    name='age'
                    value={inputs.age || ''}
                    onChange={handleChange}
                />
            </label>
            <br></br>
            <br></br>
            <input type="submit" />
        </form>
    );
}

ReactDOM.render(<MyForm/>, document.getElementById('root'));
