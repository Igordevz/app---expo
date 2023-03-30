import { Text, Image } from "react-native";
import { BtnBack, Button, Container, Header, Input, Link } from "./style";
import   AsyncStorage   from '@react-native-async-storage/async-storage';
import { Api } from "../../services/apiconfig";
import { useState } from "react";
import axios from "axios";

export default function Pagesingup({ navigation }:any) {


  const [email, setEmail] = useState<string | any>('')
  const [password, setPassword] = useState<string | any>('')
  const [username, setUsername] = useState<string | any>('')
  const [error, setError] = useState([])
  
  console.log(AsyncStorage.getItem('@token'));
  
  

  async function CreateUser(){
    await Api.post('/create_user', {
      email: email,
      password: password,
      username: username
    })
    .then(async (Response)  =>{
      await AsyncStorage.setItem('@token', Response?.data?.token);
      console.log(
        await AsyncStorage.getItem('@token')
      );
      
    })
    .catch((err) =>{
      console.log('deu error', err);
    })
  }
  return (
    <>
      <Header>
        <BtnBack onPress={() => {
         navigation.goBack()
        }}>
            <Image source={require('../../../assets/back.png')}/>
        </BtnBack>
        <Text
          style={{
            fontWeight: '600',
            fontSize: 20,
          }}
        >
          Sign up
        </Text>
      </Header>
      <Container>
          <Image source={require('../../../assets/login.png')}/>
          <Input placeholder="Email" onChangeText={(e:any) => setEmail(e)}/>
          <Input placeholder="Username" onChangeText={(e:any) => setUsername(e)}/>
          <Input placeholder="Password" onChangeText={(e:any) => setPassword(e)}/>
          <Button onPress={CreateUser}>
            <Text style={{
              color: 'white'
            }}>Sing Up</Text>
          </Button>
          <Link style={{
            marginTop: 50
          }} onPress={() =>{
            navigation.navigate('login')
          }}>
          Have you an account already?
          </Link>
      </Container>
    </>
  );
}
