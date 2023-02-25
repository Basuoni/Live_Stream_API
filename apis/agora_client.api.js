const { createAgoraAccessToken } = require('../service/agora_client.service')

const app = require('express').Router()

app.post('/',createAgoraAccessToken)


module.exports = app