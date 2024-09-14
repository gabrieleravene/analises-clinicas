/* programa que confere se resultados de exames laboratorias estão dentro da normalidade */


// obtem elementos do dom para interação
const botao = document.getElementById('botao') // botão para verificar o resultado
const seletorExame = document.getElementById('seletor') // seletor de exames
const seletorSexo = document.getElementById('sexo') // seletor de sexo
const res = document.getElementById('res') // div onde o resultado será exibido

/**
 * função que avalia o resultado do exame com base no tipo de exame e no sexo.
 * exibe uma mensagem indicando se o resultado está dentro da normalidade, acima ou abaixo do valor de referência.
 */

function valorReferencia(){
    const result = document.getElementById('result');
    const resultado = Number(result.value); // converter o valor do resultado

    const opcao = seletorExame.value; // obtém o tipo de exame selecionado
    const genero = seletorSexo.value; // obtém o sexo selecionado

    // verifica se todos os campos foram preenchidos
    if (resultado === 0){
        alert('Preencha todos os campos para prosseguir.') // alerta se algum campo não foi preenchido
    } else {
       // avalia o resultado com base no tipo de exame e no sexo
    switch (opcao) {
        case 'gli':
            if (resultado > 100){
                res.innerHTML = 'Acima do valor de referência.'
            } else if (resultado < 70){
                res.innerHTML = 'Abaixo do valor de referência.'
            } else {
                res.innerHTML = 'Dentro do normal.'
            }
            break;

        case 'ast':
            if (genero === 'm' && resultado > 38){
                res.innerHTML = 'Acima do valor de referência.'
            } else if (genero === 'f' && resultado > 35){
                res.innerHTML = 'Acima do valor de referência.'
            } else {
                res.innerHTML = 'Dentro do normal.'
            }
            break;

        case 'alt':
            if (genero === 'm' && resultado > 41){
                res.innerHTML = 'Acima do valor de referência.'
            } else if (genero === 'f' && resultado > 31){
                res.innerHTML = 'Acima do valor de referência.'
            } else {
                res.innerHTML = 'Dentro do normal.'
            }
            break;

        case 'ure':
            if (resultado > 50){
                res.innerHTML = 'Acima do valor de referência.'
            } else if (resultado < 20){
                res.innerHTML = 'Abaixo do valor de referência.'
            } else {
                res.innerHTML = 'Dentro do normal.'
            }
            break;

        case 'cre':
            if (resultado > 1.2 && genero === 'm'){
                res.innerHTML = 'Acima do valor de referência.'
            } else if(resultado > 1 && genero === 'f'){
                res.innerHTML = 'Acima do valor de referência.'
            } else if (resultado < 0.7 && genero === 'm'){
                res.innerHTML = 'Abaixo do valor de referência.'
            } else if (resultado < 0.5 && genero === 'f'){
                res.innerHTML = 'Abaixo do valor de referência.'
            } else {
                res.innerHTML = 'Dentro do normal.'
            }
            break;

            case 'fe':
                if (genero === 'm'){
                    if (resultado > 150){
                        res.innerHTML = 'Acima do valor de referência.'
                    } else if (resultado < 50){
                        res.innerHTML = 'Abaixo do valor de referência.'
                    }
                } else if (genero === 'f'){
                    if (resultado > 145){
                        res.innerHTML = 'Acima do valor de referência.'
                    } else if (resultado < 35){
                        res.innerHTML = 'Abaixo do valor de referência.'
                    } else {
                        res.innerHTML = 'Dentro do normal.'
                    }
                }
                break;

                case 'col':
                    if (resultado < 190){
                        res.innerHTML = 'Dentro do normal.'
                    } else {
                        res.innerHTML = 'Acima do normal.'
                    }
                    break;

                case 'tri':
                    if (resultado < 150){
                        res.innerHTML = 'Dentro do normal.'
                    } else {
                        res.innerHTML = 'Acima do normal.'
                    }
                    break;

                case 'na':
                    if (resultado > 145){
                        res.innerHTML = 'Acima do normal.'
                    } else if (resultado < 135){
                        res.innerHTML = 'Abaixo do normal.'
                    } else {
                        res.innerHTML = 'Dentro do normal.'
                    }

                case 'k':{
                    if(resultado > 5){
                        res.innerHTML = 'Acima do normal.'
                    } else if (result < 3.5){
                        res.innerHTML = 'Abaixo do normal.'
                    } else {
                        res.innerHTML = 'Dentro do normal'
                    }
                }
                break;

                case 'tsh':
                    if (resultado > 5){
                        res.innerHTML = 'Acima do valor de referência.'
                    } else if (resultado < 0.5){
                        res.innerHTML = 'Abaixo do valor de referência.'
                    } else {
                        res.innerHTML = 'Dentro do normal.'
                    }
                    break;

                case 't3t':
                    if (resultado > 180){
                        res.innerHTML = 'Acima do valor de referência.'
                    } else if (resultado < 80){
                        res.innerHTML = 'Abaixo do valor de referência.'
                    } else {
                        res.innerHTML = 'Dentro da normalidade.'
                    }
                    break;

                case 'ttpa':
                    if (resultado > 40){
                        res.innerHTML = 'Acima do valor de referência.'
                    } else if (resultado < 24){
                        res.innerHTML = 'Abaixo do valor de referência.'
                    } else {
                        res.innerHTML = 'Dentro do normal.'
                    }
                    break;

                case 'tp':
                    if (resultado > 15){
                        res.innerHTML = 'Acima do valor de referência.'
                    } else if (resultado < 11){
                        res.innerHTML = 'Abaixo do valor de referência.'
                    } else {
                        res.innerHTML = 'Dentro do normal.'
                    }
                    break;

                    default:
                    res.innerHTML = 'Exame não encontrado.'; //  mensagem padrão para exames nao listados
    }
    
    // mensagens adicionais de referência e aviso
    res.innerHTML += '<br> <br> Os valores de referência variam com base em vários fatores, como o laboratório específico que os fornece. <br><br> <span> &#9888 Os resultados devem ser interpretados por um médico com base no caso clínico do paciente.</span>'
    res.innerHTML += '<br><br> <small>Referência bibliográfica: <a href="https://www.msdmanuals.com/pt-br/profissional/recursos/valores-laboratoriais-normais/exames-de-sangue-valores-normais">Manual MSD</a>.</small>'


  }
}

// associa a função valorReferência ao evento de clique do botão
botao.onclick = valorReferencia;
