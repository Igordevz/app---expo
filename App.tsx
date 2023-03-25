import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';


export default function App() {
  return (
    <Container>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </Container>
  );
}

export const Container = styled.View`

    display: flex;
    background: #FAFAFA;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
`