const { response, request } = require('express');
const express = require('express');
const app = express();

let usuarios = [
    {nome: "Caio", sobrenome: "Cezar"}
];

// http://localhost:3000/inicio
app.get("/inicio", (request, response) => {
    return response.send('Ola Mundo!') //enviar mensagem
})

// http://localhost:3000/usuarios
app.get("/usuarios", (request, response) => {
    return response.json(usuarios); //enviar json
})

app.listen(3000, () => {
    console.log('Servidor rodando!')
})