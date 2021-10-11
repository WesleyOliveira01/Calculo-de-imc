


function calcularimc(){
    let n1 = document.querySelector("#peso")

    let n2 = document.querySelector("#altura")

    let res = document.querySelector("#Res")

    let resultado = Number(n1.value) / (Number(n2.value) * Number(n2.value))

    if(peso.length === 0 & altura.length === 0){
        alert('ERRO! Campo em branco, por favor verificar os campos')
    }
    else{
        if(resultado.toFixed(2) < 18.5){
            res.style.background = '#ff1a1a8e'
            res.innerHTML = `${resultado.toFixed(1)} <p> <strong>Magreza:</strong> É um distúrbio alimentar resultado da preocupação exagerada com o peso corporal, que pode provocar problemas psiquiátricos graves. A pessoa se olha no espelho e, embora extremamente magra, se vê obesa. Com medo de engordar, exagera na atividade física, jejua, jejua, vomita, toma laxantes e diuréticos </p>`
        }
        else if(resultado.toFixed(2) >= 18.5 & resultado.toFixed(2) < 24.9){
            res.style.background = '#379637cb'
            res.innerHTML = `${resultado.toFixed(1)}<p> <strong>Normal:</strong> você esta no peso ideal! </p>`
        }
        else if(resultado.toFixed(2) > 24.9 & resultado.toFixed(2) < 30){
            res.style.background = '#ed8f3cb9'
            res.innerHTML = `${resultado.toFixed(1)}<p><strong>sobrepeso</strong> O sobrepeso refere-se ao aumento do peso corporal em relação à estatura, quando comparado a algum padrão de peso aceitável ou desejável, podendo resultar do aumento de gordura corporal ou mesmo da massa magra do indivíduo</p>`
            
        }
        else{
            res.style.background = '#ff1a1a8e'
            res.innerHTML = `${resultado.toFixed(1)}<p><strong>Obesidade</strong> A obesidade é uma doença cônica, definida pela Organização Mundial de Saúde (OMS) Procure um médico, e receba as orientações para conquistar uma vida mais saudável </p>`
        }
        
    }
}

//rascunho

/*let peso = 100

let altura = 1.77

function calcularimct(){
    
    let resultado = peso / (altura*altura)
    if(peso.length === 0 & altura.length === 0){
        alert('ERRO! Campo em branco, por favor verificar os campos')
    }
    else{
        if(resultado.toFixed(2) < 18.5){
            console.log(resultado.toFixed(1))
            console.log( '<p> <strong>Magreza:</strong> É um distúrbio alimentar resultado da preocupação exagerada com o peso corporal, que pode provocar problemas psiquiátricos graves. A pessoa se olha no espelho e, embora extremamente magra, se vê obesa. Com medo de engordar, exagera na atividade física, jejua, jejua, vomita, toma laxantes e diuréticos </p>')
        }
        else if(resultado.toFixed(2) >= 18.5 & resultado.toFixed(2) < 24.9){
            console.log(resultado.toFixed(1))
            console.log('<p> <strong>Normal:</strong> você esta no peso ideal! </p>')
        }
        else if(resultado.toFixed(2) > 24.9 & resultado.toFixed(2) < 30){
            console.log(resultado.toFixed(1))
            console.log('<p><strong>sobrepeso</strong> O sobrepeso refere-se ao aumento do peso corporal em relação à estatura, quando comparado a algum padrão de peso aceitável ou desejável, podendo resultar do aumento de gordura corporal ou mesmo da massa magra do indivíduo</p>')
            
        }
        else{
            console.log(resultado.toFixed(1))
            console.log('<p><strong>Obesidade</strong> A obesidade é uma doença cônica, definida pela Organização Mundial de Saúde (OMS) Procure um médico, e receba as orientações para conquistar uma vida mais saudável </p>')
        }
        
    }
}

calcularimct() */

