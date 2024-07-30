type objprops ={
    details :{
        num : number,
        name : string,
    },
    subjects : {
        sub : string,
        chapters : number
    }[]
}





export default function Obj_arr(props:objprops){
    return(
        <>
            <h2>This is from the object type {props.details.num}</h2>
            <h2>{props.details.name}</h2>
            {props.subjects.map((subject) => {
                return (
                    <h2>Subject {subject.sub} has {subject.chapters}</h2>
                ) 
            } )}
        </>
    )
}