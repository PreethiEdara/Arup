type inputprops ={
    handleChange : (event : React.ChangeEvent<HTMLInputElement>) => void
}



export default function Input(props : inputprops){
    return(
        <input type="text" onChange={props.handleChange}/>
    )
}