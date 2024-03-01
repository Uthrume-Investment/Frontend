import React,{useState,useContext,createContext} from "react"

const StateContext = createContext({
    user: null,
    token: null,
    loading: false,
    setUser: () => {},
    setToken: () => {},
});

export const ContextProvider = ({children})=>{

    const [user,_setUser] = useState(null);
    const [token,_setToken] = useState(localStorage.getItem('token'));

    // fxn to set the token in the localstorage
    const setToken = (token)=>{
        _setToken(token);
        
        if(token){
            localStorage.setItem('token',token);
        }
        else{
            localStorage.removeItem('token');
        }
    }

    const setUser = (user) => {
        _setUser(user);
    }

    return(
    <StateContext.Provider value={{
        user,
        token,
        setUser,
        setToken,
    }}>
        {children}
    </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);