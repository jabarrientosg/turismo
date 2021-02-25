const nombreUsuario = document.querySelector("#nombre");
const email = document.querySelector("#email");
const paquete = document.querySelector("#paquete");
const boton = document.querySelector("#enviar");


async function envioRegistro  () {
    const envioFetch = await fetch('http://localhost:8888/registrar', {
        method:"post",
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify()
        // mode: "cors"
        }
    
        );            
}


async function envioCompraPaquete  () {
    const envioFetch = await fetch('http://localhost:8888/comprar', {
        method:"post",
        headers: {
            "Content-Type": "application/json"},
        body: JSON.stringify()
        }        
        );            
}


boton.addEventListener('click', ()=>{
    const datosAEnviar = {
        nombre: nombre.value,
        email: email.value,
        paquete: paquete.value
    }
  
  
  
    if (paquete.value === "Seleccionar"){
        
        envioRegistro(datosAEnviar);
        console.log("pasé por registro");       
    }
    else{
        envioCompraPaquete(datosAEnviar);
        console.log("pasé por compra"); 
    }




    // console.log("Datos enviados");
    // console.log(email.value);
    // const datosAEnviar = {
    //     nombre: nombre.value,
    //     email: email.value,
    //     paquete: paquete.
    // }


})


// console.log(email.value);

// function validacionEmail {
//     email.val
// }

// function validacionNombre {

// }

// function valicacionPaquete {

// }