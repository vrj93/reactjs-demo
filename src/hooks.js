import { useState, useEffect, createContext, useContext } from "react";

const UserContext = createContext();

function FavoriteColor() {
    // initialising the Hook
    const [color, setColor] = useState({
        red: 'red',
        blue: 'blue',
        purple: 'purple'
    });

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

    const [text, setText] = useState('John Doe');
    /////

    const updateColor = () => {
        setColor(state => {
            return {...state, red: 'yellow'} 
        });
    }

    /*useEffect(() => {
        setTimeout(() => {
            setCount((count) => count + 1);
        }, 1000);
    }, []);*/

    useEffect(() => {
        setCalculation(() => count * 2);
    }, [count]); // <- add the count variable here, setEffect(<function>, <dependency>)

    return(
        <>
            <h1>My favorite color is {color.red}, {color.blue} and {color.purple}</h1>
            {/* <button
                type="button"
                onClick={() => setColor('blue')}
            >Click me!</button>
            <button
                type="button"
                onClick={() => setColor('purple')}
            >Click me!</button> */}
            <button
                type="button"
                onClick={updateColor}
            >Change Color</button>
            <br></br>
            {/* <h2>This effect is rendered {count} times.</h2> */}
            {/* <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p> */}
            <UserContext.Provider value={text}>
                <h2>{`Hi, I am ${text}!`}</h2>
                <Component1 text={text}/>
            </UserContext.Provider>
        </>
    );
}

function Component1() {
    return (
        <>
            <h2>Component 1</h2>
            <Component2/>
        </>
    );
}

function Component2() {
    return (
        <>
            <h2>Component 2</h2>
            <Component3/>
        </>
    );
}

function Component3() {
    return (
        <>
            <h2>Component 3</h2>
            <Component4/>
        </>
    );
}

function Component4() {
    const user = useContext(UserContext);

    return (
        <>
            <h2>Component 4</h2>
            <h2>{`Hello, ${user} again!`}</h2>
        </>
    );
}

export default FavoriteColor;