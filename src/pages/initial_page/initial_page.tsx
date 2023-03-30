import { Image, Text, View } from "react-native";
import {  Background, Button, Container,  Title, } from "./style";

export default function InitialPage({ navigation }:any) {

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

