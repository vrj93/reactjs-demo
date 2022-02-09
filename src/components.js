function FourWheel(prop){
    return <h2>This is a {prop.num} wheel drive.</h2>;
}

function Oddwheel(prop){
    return <h2>This is a {prop.odd.model} wheel drive.</h2>;
}

function TwoWheel(){
    const oddwheel = { name: '7.5', model:'6' };
    return (
        <>
            <h2>This is a 2 wheel drive.</h2>
            <FourWheel num="4"/>
            <Oddwheel odd={oddwheel}/>
        </>
    );
}

export default TwoWheel;