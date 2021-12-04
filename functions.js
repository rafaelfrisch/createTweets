const { temas, dates, users } = require('./constants')

const temasSize = Object.keys(temas).length
const datesSize = Object.keys(dates).length
const usersSize = Object.keys(users).length
const maxUsers = 10

const getRandomTema = () => {
    minValue = 0
    maxValue = temasSize - 1
    randomIndex = Math.floor(Math.random() * (maxValue - minValue)) + minValue
    return temas[randomIndex];
}

const getRandomDates = () => {
    minValueInicio = 0
    maxValueInicio = datesSize - 2
    maxValueFim = datesSize - 1
    randomIndexInicio = Math.floor(Math.random() * (maxValueInicio - minValueInicio)) + minValueInicio
    randomIndexFim = Math.floor(Math.random() * (maxValueFim - randomIndexInicio)) + randomIndexInicio
    return {
        inicio: dates[randomIndexInicio],
        fim: dates[randomIndexFim]
    }
}

const getRandomUser = () => {
    minValue = 0
    maxValue = usersSize - 1
    randomIndex = Math.floor(Math.random() * (maxValue - minValue)) + minValue
    return users[randomIndex];
}

const getRandomUsers = () => {
    let usersString = ''
    for(let i=0; i<maxUsers;i++){
        const user = getRandomUser()
        usersString += '@' + user + ','
    }
    return usersString.slice(0, -1)
}

const getRandomNumberOfTweets = () => {
    return Math.floor(Math.random() * 15) + 1
}

module.exports = {
    getRandomTema, 
    getRandomDates,
    getRandomUsers,
    getRandomNumberOfTweets
}