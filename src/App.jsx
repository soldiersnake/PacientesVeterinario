import { useState } from "react";
import { Header } from "./components/Header";
import { Formulario } from "./components/Formulario";
import { ListadoPacientes } from "./components/ListadoPacientes";

function App() {

  const [cuenta, setCuenta] = useState(0);

  function sumar(){
    let sumatoria = 0;
    sumatoria = cuenta +1;
    setCuenta(sumatoria);
  }
  return (
    <>
      <Header/>
      <Formulario/>
      <ListadoPacientes/>
    </>
  );
}

export default App;
