import React from 'react';

class Etapa3 extends React.Component {
    
render() {

    return(
        <FormContainer>

        <h3>Etapa 3 - Informações Gerais de Ensino</h3>
            <p>7. Porque você não terminou o curso de graduação?</p>
            <input></input>
        
            <p>8. Você fez algum curso complementar?</p>
            <select>
                <option value="Nenhum">Nenhum</option>
                <option value="Curso técnico">Curso técnico</option>
                <option value="Curso de inglês">Curso de inglês</option>
            </select>
            <input></input>
        

    </FormContainer>
  )
}
}

export default Etapa3