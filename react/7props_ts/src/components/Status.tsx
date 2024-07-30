type statusprops ={
    status : "loading" | "success" | "error"
}


export default function Status(props : statusprops){
    let msg;
    if (props.status === "loading") msg = "Loading da!!!"
    else if (props.status === "success") msg = "Data succesfully loaded"
    else if (props.status === "error") msg = "There's an error"

    return (
        <>
            <h2> {msg} </h2>
        </>
    )
}