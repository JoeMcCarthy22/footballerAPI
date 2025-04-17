const express = require('express')
const app = express()
const PORT = 8000

app.use(express.static(__dirname + '/public'))


const ballers = {

    'messi': {
    'firstName': 'lionel',
    'Age': 34,
    'Nation': 'argentina'
    },
    'ronaldo':{
    'firstName': 'cristiano',
    'Age': 38,
    'Nation': 'portugal'  
    },
    'hazard':{
    'firstName': 'eden',
    'Age': 32,
    'Nation': 'belgium'
    },
    'unknown':{
    'firstName': 'unknown',
    'Age': 'unknown',
    'Nation': 'unknown'
    },
}

app.get('/', (request, response) =>{
    response.sendFile(__dirname + '/index.html')
} )

app.get('/api/:name', (request, response) =>{
    const ballersSurname = request.params.name.toLowerCase()
    if (ballers[ballersSurname]){
        response.json(ballers[ballersSurname])
    } else {
        response.json(ballers['unknown'])
    }
    
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The Server is now running on Port ${PORT}! Better go catch it!`)
})