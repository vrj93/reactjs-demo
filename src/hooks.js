import { useState, useEffect } from "react";

function FavoriteColor() {
    const [color, setColor] = useState({
        red: 'red',
        blue: 'blue',
        purple: 'purple'
    });

    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0);

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
    }, [count]); // <- add the count variable here

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
            <p>Count: {count}</p>
            <button onClick={() => setCount((c) => c + 1)}>+</button>
            <p>Calculation: {calculation}</p>
        </>
    );
}

export default FavoriteColor; 