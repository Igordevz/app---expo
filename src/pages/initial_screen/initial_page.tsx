import { Text, View } from "react-native";
import { Button, Container, ContentInput, Input, Title, TitleBtn } from "./style";

export default function HomeScreen() {
    return (
        <Container >
           <Title>Crie Sua Conta Gratuita</Title>
            <ContentInput>
                <Input placeholder="Digite Seu Email"/>
                <Button>
                  <TitleBtn> Entrar</TitleBtn>
                </Button>
            </ContentInput>
         </Container>
    );
}

