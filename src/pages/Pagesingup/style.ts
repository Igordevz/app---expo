import styled from "styled-components/native";

export const  Container = styled.View`

    display: flex;
    align-items: center;
    align-items: center;
    height: 100%;
    width: 100%;

`

export const Header = styled.View`
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`
export const BtnBack = styled.TouchableOpacity`
    left: 20px;
    border-radius: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;

`
export const Bg = styled.Image`

    width: 80%;
    height: 50px;

`

export const Input = styled.TextInput`
    margin-bottom: 10px;
    padding-left: 10px;
    width: 80%;
    border-radius: 10px;
    height: 40px;
    border: 1px solid #E3E5E5;

`
export const Button = styled.TouchableOpacity`
    height: 40px;
    margin-top: 50px;
    border-radius: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 70%;
    background: #4E6AFF;

`
export const Link = styled.Text`

    color: #4E6AFF;

`