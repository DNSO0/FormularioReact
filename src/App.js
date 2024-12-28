import "./App.css";
import FormSighUp from "./Componentes/FormSignUp";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

function App() {

  const handleSubmit = (valores) => {
    console.log('Apps:', valores);
  }

  return (
    <Container component="section" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulario Registro
      </Typography>
      <FormSighUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
