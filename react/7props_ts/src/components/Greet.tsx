type Greetprops ={
    name: string,
    age : number,
    isGiven : boolean,
}



export default function Greet(props : Greetprops) {
    return(
        <>
        {props.isGiven ? (<div><h2>Hey I'm {props.name}</h2>
                                <h2>I am {props.age} years old</h2>
                        </div>) : (<h2> Please provide info!!!</h2>)}
        </>
    )
}