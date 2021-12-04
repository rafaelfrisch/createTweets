const { getRandomEntrada, printEntrada} = require('./generateEntrada')

for(let i = 0; i<40; i++){
    const entrada = getRandomEntrada()
    printEntrada(entrada)
}