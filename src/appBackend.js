const express = require("express");
const cors = require("cors");

const server = express();
const body = require("body-parser");



const clientes =[];
const compras = [];


server.use(body.json());

server.use(cors());

server.post("/registrar", (req, resp)=>{
    console.log(`Este vino por registrar ${req.body}`);
    let mensaje = crearCliente(req.body);
    resp.send(mensaje);
});


let crearCliente = (cliente)=>{
    clientes.push(cliente);
    return "Cliente Creado Exitosamente";
};

server.post("/comprar", (req, resp)=>{
    console.log(`Este vino por comprar ${req.body}`);
   let compra = registrarCompra(req.body);
   resp.send(`El cliente ${compra.nombre} realizo la compra del paquete ${compra.paquete} satisfactoriamente`);
});

let registrarCompra = (compra)=>{
    compras.push(compra);
    return compras[compras.length-1];
}


server.listen(8888, ()=>{
    console.log("server ok");
});
