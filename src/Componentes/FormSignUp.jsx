import { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Switch from "@mui/material/Switch";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function FormSignUp({ handleSubmit }) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [prom, setProm] = useState(true);
  const [nov, setNov] = useState(false);
  const [errors, setErrors] = useState({
    name: { error: false, message: "" },
    lastName: { error: false, message: "" },
    email: { error: false, message: "" },
  });

  // Funciones de validación
  function validarNombre(nombre) {
    return nombre.length >= 3;
  }

  function validarApellido(apellido) {
    return apellido.length >= 3;
  }

  function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expresión regular para validar el formato del correo
    return regex.test(email);
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const nameError = !validarNombre(name);
        const lastNameError = !validarApellido(lastName);
        const emailError = !validarEmail(email);

        if (!nameError && !lastNameError && !emailError) {
          handleSubmit({
            name,
            lastName,
            email,
            prom,
            nov,
          });
        } else {
          // Actualiza los errores si la validación falla
          setErrors({
            name: { error: nameError, message: nameError ? "Deben ser al menos 3 caracteres" : "" },
            lastName: { error: lastNameError, message: lastNameError ? "Deben ser al menos 3 caracteres" : "" },
            email: { error: emailError, message: emailError ? "El correo no es válido" : "" },
          });
        }
      }}
    >
      <TextField
        id="name"
        label="Nombre"
        variant="outlined"
        fullWidth
        margin="normal"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          // Restablecer el error de nombre si es válido
          if (validarNombre(e.target.value)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              name: { error: false, message: "" },
            }));
          }
        }}
        error={errors.name.error}
        helperText={errors.name.error ? errors.name.message : ""}
      />
      <TextField
        id="lastName"
        label="Apellidos"
        variant="outlined"
        fullWidth
        margin="normal"
        value={lastName}
        onChange={(e) => {
          setLastName(e.target.value);
          // Restablecer el error de apellido si es válido
          if (validarApellido(e.target.value)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              lastName: { error: false, message: "" },
            }));
          }
        }}
        error={errors.lastName.error}
        helperText={errors.lastName.error ? errors.lastName.message : ""}
      />
      <TextField
        id="email"
        label="Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          // Restablecer el error de email si es válido
          if (validarEmail(e.target.value)) {
            setErrors((prevErrors) => ({
              ...prevErrors,
              email: { error: false, message: "" },
            }));
          }
        }}
        error={errors.email.error}
        helperText={errors.email.error ? errors.email.message : ""}
      />
      <FormGroup>
        <FormControlLabel
          control={<Switch checked={prom} onChange={(e) => setProm(e.target.checked)} />}
          label="Promociones"
        />
        <FormControlLabel
          control={<Switch checked={nov} onChange={(e) => setNov(e.target.checked)} />}
          label="Novedades"
        />
      </FormGroup>
      <Button variant="contained" type="submit">
        Registrarse
      </Button>
    </form>
  );
}

export default FormSignUp; 