interface Iprops{
    isLoading : boolean
}

const Loading = ({isLoading}:Iprops)=>{
    if(isLoading){
        return(
            <div className="w-screen h-screen fixed top-0 left-0 bg-black bg-opacity-70 flex items-center justify-center text-white" dir="ltr">
                Loading ...
            </div>
        )
    }

    return <></>
}

export default Loading