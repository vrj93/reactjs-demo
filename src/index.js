import React from 'react';
import ReactDOM from 'react-dom';
import {name, age} from "./person.js";
import message from './message.js';

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

// const mycar = new Model("Porche", "Turbo");
// const fruits = ['apple', 'banana', 'orange'];

const details = [name, age];
const detailslist = details.map((item) => <p>{item}</p>);

ReactDOM.render(message(), document.getElementById('root'));
