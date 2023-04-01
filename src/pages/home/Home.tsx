import { Text } from 'react-native'
import { useContext } from 'react'
import { AuthContext } from '../../context/auth';
export default function Home(){

    const { user }:any =  useContext(AuthContext);

    return(
        <Text>{user?.user?.username}</Text>
    );

}