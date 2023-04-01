import { Image, Text, View } from "react-native";
import {  Background, Button, Container,  Title, } from "./style";
import { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";

export default function InitialPage({ navigation }:any) {

    const { user }:any = useContext(AuthContext);
    if(user?.user){
        navigation.navigate('Home')
    }
   
    function Btn(){
        navigation.navigate('screen02')
      
    }
    return (
        <Container >
            <Background source={require('../../../assets/background1.png')}/>
            <Title> 
            Small change, big difference
            </Title>
            <Button onPress={Btn}>
                    <Text style={{
                        fontSize: 15,
                        color: 'white',

                    }} >
                     Get started
                    </Text>
            </Button>
        </Container>
    );
}

