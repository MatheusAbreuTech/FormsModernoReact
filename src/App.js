import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";

import { Container, Typography } from "@material-ui/core";

function App() {
    function aoEnviarForm(dados) {
        console.log(dados);
    }

    function validarCPF(cpf) {
        if (cpf.length !== 11) {
            return {
                valido: false,
                texto: "CPF deve ter 11 digitos.",
            };
        } else {
            return {
                valido: true,
                texto: "",
            };
        }
    }
    return (
        <Container component="article" maxWidth="sm">
            <Typography variant="h3" component="h1" align="center">
                Formulário de Cadastro
            </Typography>
            <FormularioCadastro
                onSubmit={aoEnviarForm}
                validarCPF={validarCPF}
            />
        </Container>
    );
}

export default App;
