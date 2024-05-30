//  SIN CONTROLAR EL DOM

// const miConvertidor =()=>{
//     let celsius= Number(prompt("digite el numero de grados Celsius que quiere convertir a Fareheit y Kelvin"));
//     if(isNaN(celsius)){
//         alert ("Ingrese un valor numerico (solo NUMEROS)")
//         miConvertidor(); //vuelve a solicitar el valor
//     }else{
//     const fareheit=(celsius * 1.8)+32;
//     const kelvin=celsius+273.15;
//     console.log(`el valor convertido en Kelvin es ${kelvin.toFixed(2)}K y el valor en Farenheit es ${fareheit.toFixed(2)}F`); //.toFixed(#) me ayuda a que solo muestre la cantidad de numeros que le indico despues del punto 
// }
// }
// miConvertidor();

// CON DOM

let form =document.getElementById("formulario");
form.addEventListener('submit',(e)=>{
    e.preventDefault();  //preventDefault evita que se envie la info asi manipulo su respuesta

    let inputCelsius=document.getElementById("celsius").value;
    let gradosCelsius=parseFloat(inputCelsius)

    if(isNaN(gradosCelsius)){
        alert ("Ingrese un valor numerico (solo NUMEROS)")
        
        console.log("Entrada inválida: Ingrese un valor numerico (solo NUMEROS)");
        miConvertidor(); //vuelve a solicitar el valor
    }else{
    const fareheit=(gradosCelsius * 1.8)+32;
    const kelvin=gradosCelsius+273.15;
    console.log(`el valor convertido en Kelvin es ${kelvin.toFixed(2)}K y el valor en Farenheit es ${fareheit.toFixed(2)}F`); //.toFixed(#) me ayuda a que solo muestre la cantidad de numeros que le indico despues del punto 


    //mostrar en el Dom
        document.getElementById("result").innerText =`Grados Kelvin:  ${kelvin.toFixed(2)}K\nGrados Farenheit:  ${fareheit.toFixed(2)}F`;
    }


 } ) ;