import styled from "styled-components/native";

export const Container = styled.View`

    height: 100%;
    width: 100%;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;

`
export const Title = styled.View`

    display: flex;
    align-items: center;
    position: absolute;
    top: 50px;

`
export const Table = styled.View`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`
export const Item = styled.TouchableOpacity`
    padding: 10px 30px 10px 30px;
    margin-left: 20px;
    margin-bottom: 30px;
    border-radius: 40px;
  
    border: 1px solid #D3D3D3;

    // ajeitar isso, responsividade
`
export const Itemc = styled.TouchableOpacity`
    padding: 10px 30px 10px 30px;
    margin-left: 20px;
    margin-bottom: 30px;
    border-radius: 40px;
    background: #E7E7FF;
    
`