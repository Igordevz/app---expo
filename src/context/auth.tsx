import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import { Api } from "../services/apiconfig";

interface Iprops{ 
    children: React.ReactNode
}
export const AuthContext  = createContext({});
// criar logica de log
export default function AuthProvider({ children }:Iprops){
    
    const [ token, setToken ] = useState<any | undefined>();
    const [ user, setUser ] = useState<any |  undefined>();
    
    useEffect(() =>{
        async function PegarToken(){
            setToken(await AsyncStorage.getItem('@token'));
        }
        PegarToken();
    })
  
    useEffect(() =>{
        async function BuscarUser(){
            await Api.post('/getuser', {
                token: token,
            }).then((data) =>{
                setUser(data.data);
            }).catch((err) =>{
                setUser(err);
            })
        }
         BuscarUser(); 
    }, [])
    console.log(user);
    return(
        <AuthContext.Provider value={{ user }}>
            {children}
        </AuthContext.Provider>
    );

}