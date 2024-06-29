interface Iprops{
    hasError : boolean
}

const Error = ({hasError}:Iprops)=>{
    if(hasError){
        return(
            <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-40 flex items-center justify-center">
                there is a problem
            </div>
        )
    }

    return <></>
}

export default Error