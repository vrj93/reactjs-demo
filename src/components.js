function FourWheel(prop){
    return <h2>This is a {prop.num} wheel drive.</h2>;
}

function Oddwheel(prop){
    return <h2>This is a {prop.odd.model} wheel drive.</h2>;
}

function LuxuryCar(prop) { 
    return <p><b>This is a {prop.luxurymodel}</b></p>;
}

function TwoWheel(prop){
    const oddwheel = { name: '7.5', model:'6' };
    const shoot = (a) => {
        alert(a);
    }
    const shoot2 = (j, k) => {
        alert(k.type);
    }
    const isGoal = prop.isGoal;
    const models = [
        {id: 1, brand: 'Ford'},
        {id: 2, brand: 'BMW'},
        {id: 3, brand: 'Audi'}
    ];

    //Conditional operator using 'if'
    /*if (isGoal) {
        return (
            <>
                <h2>This is a 2 wheel drive.</h2>
                <FourWheel num="4" />
                <button onClick={() => shoot("Button is Clicked!")}>Take the shot!</button>
                <br></br>
                <button onClick={(event) => shoot2("random", event)}>Click!</button>
            </>
        );
    }
    
    return (
        <>
            <h2>This is a 2 wheel drive.</h2>
            <Oddwheel odd={oddwheel} />
            <button onClick={() => shoot("Button is Clicked!")}>Take the shot!</button>
            <br></br>
            <button onClick={(event) => shoot2("random", event)}>Click!</button>
        </>
    );*/

    //Conditional operator using '&&'
    return (
        <>
            <h2>This is a 2 wheel drive.</h2>
            
            {/* conditional operator */}
            {isGoal.length > 0 &&
               <FourWheel num="4" /> 
            }
            <Oddwheel odd={oddwheel} />
            
            {/* array map method */}
            <ul>
                {models.map((model) => <LuxuryCar key={model.id} luxurymodel={model.brand}/>)}
            </ul>
            
            <button onClick={() => shoot("Button is Clicked!")}>Take the shot!</button>
            <br></br>
            <button onClick={(event) => shoot2("random", event)}>Click!</button>
        </>
    );

}

const goals = [1, 2, 3];

export {goals, TwoWheel};