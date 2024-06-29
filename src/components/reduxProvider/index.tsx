'use client'

import store from "@/redux/store";
import { Provider } from "react-redux";

interface Iprops{
    children : React.ReactNode;
}

const ReduxProvider = ({children}:Iprops)=>{
    return(
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default ReduxProvider