// ### Calculadora Simples (2 pontos)

// **Enunciado:**

// Crie uma função chamada Calcular, que recebe dois números e uma operação matemática (`+`, `-`, `*`, `/`). A função deve:

// - Retornar `"Erro: parâmetros inválidos"` se `a` ou `b` não forem números.
// - Retornar `"Erro: divisão por zero"` se tentar dividir por zero;
// - Retornar `"Erro: operação inválida"` se for passado um operador desconhecido;
// - Executar a operação correta e retornar o resultado;

function calcular(num1, num2, operador) {
  if(typeof num1 !== 'number' || typeof num2 !== 'number' ){
    return "Erro: parâmetros inválidos"
  }
  else{
    if(operador === "+"){
      soma = num1 + num2
      return soma
    }
    else if(operador === "-"){
      sub = num1 - num2
      return sub
    }
    else if(operador === "*"){
      mult = num1 * num2
      return mult
    }
    else if(operador === "/"){
      if(num2 === 0){
        return "Erro: divisão por zero"
      }
      else{
        divi = num1/num2
        return divi
      }
    }
    else{
      return "Erro: operação inválida"
    }
  }

  
  
}


//NÃO REMOVA O CÓDIGO ABAIXO
module.exports = { calcular };