const { createLiveStream, retrieveLiveStreams, deleteLiveStream } = require('../service/mux_client.service')

const app = require('express').Router()

app.post('/start',createLiveStream)
app.post('/close',deleteLiveStream)
app.get('',retrieveLiveStreams)




module.exports = app