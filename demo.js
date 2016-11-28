'use strict'

const textPrompt = require('./index')

textPrompt('What is your name?', {value: 'Jane Doe'})
.on('abort', (v) => console.log(`Aborted with ${v}.`))
.on('submit', (v) => console.log(`Submitted with ${v}.`))
