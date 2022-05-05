import React from 'react';

class Etapa1 extends React.Component {
    
render() {

    return(
        <FormContainer>

        <h3>Etapa 1 - Dados Gerais</h3>
            <p>1. Qual o seu nome?</p>
            <input></input>
        
            <p>2. Qual a sua idade?</p>
            <input></input>
        
            <p>3. Qual o seu email?</p>
            <input></input>

            <p>4. Qual sua escolaridade?</p>
            <select>
                <option value="Ensino médio incompleto"> Ensino médio incompleto</option>
                <option value="Ensino médio completo">Ensino médio completo</option>
                <option value="Ensino superior incompleto">Ensino superior incompleto</option>
                <option value="Ensino superior completo">Ensino superior completo</option>
            </select>
        

    </FormContainer>
  )
}
}

export default Etapa1