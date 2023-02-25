const express = require('express')
const app = express()
const port = 3000
app.use(express.json());
app.use('/liveStream', require('./apis/mux_client.api'))
app.use('/agoraAccessToken', require('./apis/agora_client.api'))

app.get('.', (req, res) => res.send('Hi, Ahmed'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))