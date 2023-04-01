import React, { useState, useContext, useEffect} from 'react'
import { Text } from 'react-native'
import { Button } from '../initial_page/style'
import { Container, Item, Itemc, Table, Title } from './style'
import { AuthContext } from '../../context/auth'


export default function Screen2({ navigation }:any) {
  const { user }:any = useContext(AuthContext);
  if(user?.user){
   console.log("tem usuario");
  }
  const [button, setButton] = useState(true)
  const [button2, setButton2] = useState(true)
  const [button3, setButton3] = useState(true)
  const [button4, setButton4] = useState(true)
  const [button5, setButton5] = useState(true)
  const [button6, setButton6] = useState(true)
  const [button7, setButton7] = useState(true)



  return (
    <Container>
       <Title>
          <Text style={{
            fontSize: 30,
            fontWeight: '800',
          }}>Areas you Like</Text>
          <Text style={{
            fontSize: 15,

          }}>Pick the areas that appeal to you most</Text>
       </Title>

       <Table>
        {button ? (
          <Item onPress={() => setButton(!button)}>
              <Text>
                No Poverty
              </Text>
            </Item>
        ): (
          <Itemc onPress={() => setButton(!button)}>
              <Text style={{
                color: '#4E6AFF'
              }}>
                No Poverty
              </Text>
            </Itemc>
          )}
           {button2 ? (
          <Item onPress={() => setButton2(!button2)}>
              <Text>
               Gender Equality

              </Text>
            </Item>
        ): (
          <Itemc onPress={() => setButton2(!button2)}>
              <Text style={{
                color: '#4E6AFF'
              }}>
               Gender Equality

              </Text>
            </Itemc>
          )}
           {button3 ? (
          <Item onPress={() => setButton3(!button3)}>
              <Text>
                Help Elders 
              </Text>
            </Item>
        ): (
          <Itemc onPress={() => setButton3(!button3)}>
              <Text style={{
                color: '#4E6AFF'
              }}>
                Help Elders 
              </Text>
            </Itemc>
          )}
           {button4 ? (
          <Item onPress={() => setButton4(!button4)}>
              <Text>
                Zero Hunger

              </Text>
            </Item>
        ): (
          <Itemc onPress={() => setButton4(!button4)}>
              <Text style={{
                color: '#4E6AFF'
              }}>
                Zero Hunger

              </Text>
            </Itemc>
          )}
           {button5 ? (
          <Item onPress={() => setButton5(!button5)}>
              <Text>
                Good Health and Well Being
              </Text>
            </Item>
        ): (
          <Itemc onPress={() => setButton5(!button5)}>
              <Text style={{
                color: '#4E6AFF'
              }}>
                Good Health and Well Being
              </Text>
            </Itemc>
          )}
           {button6 ? (
          <Item onPress={() => setButton6(!button6)}>
              <Text>
                Clean Water
              </Text>
            </Item>
        ): (
          <Itemc onPress={() => setButton6(!button6)}>
              <Text style={{
                color: '#4E6AFF'
              }}>
                Clean Water
              </Text>
            </Itemc>
          )}
           {button7 ? (
          <Item onPress={() => setButton7(!button7)}>
              <Text>
               Reduced trash
              </Text>
            </Item>
        ): (
          <Itemc onPress={() => setButton7(!button7)}>
              <Text style={{
                color: '#4E6AFF'
              }}>
               Reduced trash
              </Text>
            </Itemc>
          )}
       </Table>
       <Button onPress={() =>{
         navigation.navigate('singup')
       }}>
        <Text style={{ color: 'white'}}>
        Continue
        </Text>
       </Button>
    </Container>
  )
}
