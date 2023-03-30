import { Text, Image } from "react-native";
import { BtnBack, Button, Container, Header, Input, Link } from "../Pagesingup/style";

export default function Pagelogin({ navigation }:any) {
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
          Login
        </Text>
      </Header>
      <Container style={{
        marginTop: 20,
      }}>
          <Image source={require('../../../assets/login2.png')} style={{
            marginBottom: 20,
          }}/>
          <Input placeholder="Email"/>
          <Input placeholder="Passoword" secureTextEntry={true}/>
          <Button>
            <Text style={{
              color: 'white'
            }}>Login</Text>
          </Button>
          <Link style={{
            marginTop: 50
          }} onPress={() =>{
            navigation.navigate('singup');
          }}>
          Dont you have an account?
          </Link>
      </Container>
    </>
  );
}
