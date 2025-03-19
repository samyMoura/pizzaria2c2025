import { useState } from "react"

function App(){

  const [nome, setNome] = useState ('Ronaldo')

   const Formulario = () => {
   
    return {
      <div>
      <input
      className="nome"
      onChange={(e)=>{setNome(e.target.value)}}
      name="nome"

      <button>
      type="text" />
      <button
      onClick={()=>{alert(nome)}}
      className="botao">
        CLIQUE AQUI
      </button>
    }
   }

  return(
    <div>
      <h3>Pizzaria 2c</h3>
    <Formulario/>
    </div>
  )
}

export default App
