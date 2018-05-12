const path = require('path')
const fs = require('fs')
const express = require('express')
const spdy = require('spdy')
const proxy = require('http-proxy-middleware')

const app = express()

app.use(express.static(path.resolve(__dirname, '../dist')))
// app.use('/api', proxy({
//   target: 'http://www.baidu.com',
//   changeOrigin: true
// }))

const options = {
  key: fs.readFileSync(__dirname + '/cert/server.key', 'utf-8'),
  cert: fs.readFileSync(__dirname + '/cert/server.crt', 'utf-8')
}

const port = 20001
const server = spdy.createServer(options, app).listen(port, (err) => {
  if (err) {
    return console.log(err)
  }
  console.log('Listening on ', `https://localhost:${port}`)
})

// app.listen(20002, (err) => {
//   if (err) {
//     return console.log(err)
//   }
//   console.log('Listening on http://localhost:20002')
// })
