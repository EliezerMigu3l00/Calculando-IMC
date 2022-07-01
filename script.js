function verificar(){
    var txtalt = document.getElementById('txtalt')
    var txtpes = document.getElementById('txtpes')
    var res = document.getElementById('res')
    var altura = (Number(txtalt.value))/100
    var peso  = Number(txtpes.value)
    var imc = peso / altura ** 2
    if (imc < 18.5){
        res.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está abaixo do peso!`
    } else if (imc < 24.9){
        res.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está no peso ideal`
    } else if (imc < 29.9){
        res.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está acima do peso!`
    } else if (imc < 34.9){
        res.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade do grau I!`
    } else if (imc <39.9){
        res.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade do grau II`
    } else {
        res.innerHTML = `Seu IMC é ${imc.toFixed(2)} e você está com obesidade morbida`
    }
}
