import styled from "styled-components/native";

export const Container = styled.View`

    display: flex;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-content: center;
    background: #ECEDEC;

`
export const Background = styled.Image`

    width: 100%;
    height: 90%;
    position: absolute;
    bottom: 0;

`
export const Title = styled.Text`
    position: absolute;
    top: 50px;
    font-size: 30px;
    max-width: 80%;
    text-align: center;
    color: black;
    line-height: 50px;
    font-weight: 900;


`
export const Button = styled.TouchableOpacity`
    position: absolute;
    bottom: 30px;
    height: 50px;
    width: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 30px;
    background: #4E6AFF;
`
