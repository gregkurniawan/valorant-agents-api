const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

const agents = {

    'phoenix': {
        'role': 'duelist',
        'q': 'curveball',
        'e': 'hot hands',
        'c': 'blaze',
        'x': 'run it back',
    },

    'kayo': {
        'role': 'initiator',
        'q': 'flash drive',
        'e': 'zero point',
        'c': 'fragment',
        'x': 'null command',
    },

    'sage': {
        'role': 'sentinel',
        'q': 'slow orb',
        'e': 'healing orb',
        'c': 'barrier orb',
        'x': 'resurrection',
    },

    'brimstone': {
        'role': 'controller',
        'q': 'incendiary',
        'e': 'sky smoke',
        'c': 'stim beacon',
        'x': 'orbital strike',
    },

    'unknown': {
        'role': 'unknown',
        'q': 'unknown',
        'e': 'unknown',
        'c': 'unknown',
        'x': 'unknown',
    }

}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:agent', (request, response) => {
    const agentName = request.params.agent.toLowerCase()

    if (agents[agentName]) {
        response.json(agents[agentName])
    } else {
        response.json(agents['unknown'])
    }
})

app.listen(PORT, _ => {
    console.log(`The server is currently running on port ${PORT}.`)
})