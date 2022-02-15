import { useState } from "react";

function FavoriteColor() {
    const [color, setColor] = useState({
        red: 'red',
        blue: 'blue',
        purple: 'purple'
    });

    const updateColor = () => {
        setColor(state => {
            return {...state, red: 'yellow'} 
        });
    }

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
        </>
    );
}

export default FavoriteColor; 