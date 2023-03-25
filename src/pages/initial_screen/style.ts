import styled from "styled-components/native";

export const Container = styled.View`

    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #820AD1;

`
export const Title = styled.Text`
    margin-bottom: 50px;
    font-size: 30px;
    color: white;

`
export const ContentInput = styled.View`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

`
export const Input = styled.TextInput`
    padding-left: 20px;
    border-radius: 50px;
    height: 50px;
    width: 70%;
    background: white;
`
export const Button = styled.TouchableOpacity`

    margin-top: 150px;
    padding: 20px 110px 20px 110px;
    border: 2px solid white;
    border-radius: 50px;


`
export const TitleBtn = styled.Text`
    font-weight: bold;
    color: white;
    font-size: 20px;

`