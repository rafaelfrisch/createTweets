const { baseStrings } = require('./constants')
const { getRandomTema, getRandomDates, getRandomUsers, getRandomNumberOfTweets } = require('./functions') 

const date_appears_constant = 1
const user_appears_constant = 1

const getRandomEntrada = () => {
    const entradaValues = {
        numTweets: undefined,
        tema: undefined,
        dataInicio: undefined,
        dataFim: undefined,
        user: undefined
    }
    const numTweets = getRandomNumberOfTweets()
    entradaValues.numTweets = numTweets
    const tema = getRandomTema()
    entradaValues.tema = tema

    const isDateShown = Math.random()
    if(isDateShown<date_appears_constant){
        const datas = getRandomDates()
        entradaValues.dataInicio = datas.inicio
        entradaValues.dataFim = datas.fim
        const isUserShown = Math.random()
        if(isUserShown<user_appears_constant){
            const user = getRandomUsers()
            entradaValues.user = user
        }
    }
    return entradaValues
}

const printEntrada = (entradaValues) => {
    const valuesArray = []
    for(const key in entradaValues){
        if(entradaValues[key]!=undefined)
            valuesArray.push(entradaValues[key])
    }
    let finalString = ''

    valuesArray.map((value, index) => {
        finalString += baseStrings[index] + "'" + value +"'"
    })
    console.log(finalString)
}

module.exports = { 
    getRandomEntrada,
    printEntrada 
}