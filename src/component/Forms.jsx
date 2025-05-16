import Inputs from "./Inputs";
function Forms(){

    return(

        <div className="w-[] border">

    
            <h3>Preencha os dados para criar o card do colaborador.</h3>
            
            <Inputs
            
                type="text"
                placeholder="Digite seu nome"
                text="Nome"
                value="Nome do colaborador"
                id="nome"
            
            />

            <Inputs
                type="text"
                placeholder="Digite seu cargo"
                text="Cargo"
                value="Cargo do colaborador"
            />

            <form action="">
  
            </form>

        </div>
    )

} 

export default Forms;