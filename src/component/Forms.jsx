import Inputs from "./Inputs";

const Forms = () => {

    return(

        <div className=' flex justify-center flex-col items-center m-[20px_0px]'>
            <form action="" className="max-w-[80%] bg-[#f2f2f2] rounded-[20px] p-[36px_64px] shadow-[8px,_8px,_16px_rgba(0,_0,_0,_0.08)]" >
                <h2 className="text-[32px] ">Preencha os dados para criar o card do colaborador.</h2>
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
            </form>

        </div>
    )

} 

export default Forms;