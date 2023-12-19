const mensagem = "seu herói de nome "
const mensagemii = "Está no nível "

let nomeHeroi = "Giovanni"
let XP = 15000
let nivel 

if(XP <= 1000)
{
    nivel = "Ferro"
}
else if(XP >= 1001 &&  XP <= 2000)
{
    nivel = "Bronze"
}
else if(XP >= 2001 && XP <= 5000)
{
    nivel = "prata"
}
else if(XP >= 5001 && XP <= 7000)
{
    nivel = "ouro"
}
else if(XP >= 7001 && XP <= 8000)
{
    nivel = "platina"
}
else if(XP >= 8001 && XP <= 9000)
{
    nivel = "ascendente"
}
if(XP >= 10001)
{
    nivel = "radiante"
}

console.log(mensagem + nomeHeroi, mensagemii + nivel)
