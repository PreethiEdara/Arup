type Buttonprops ={
    handleclick : (event: React.MouseEvent<HTMLButtonElement>) => void
}

export default function Button(props : Buttonprops){
    return (
        <button onClick={props.handleclick}>Click Me</button>
    )
}