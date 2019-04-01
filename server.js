const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
var cors = require('cors')
const app = express()

// app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.get('/', function (req, res) {
  console.log(req.query);
  var { authaction, tok, redir } = req.query;

  var reply = '<!DOCTYPE html><html class="h-100"><head>'
  reply += '<title>LIGHTNING CAPTIVE PORTAL</title>'
  reply += '<meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />'
  reply += '<meta http-equiv="Pragma" content="no-cache" />'
  reply += '<meta http-equiv="Expires" content="0" />'

  reply += '<meta charset="utf-8">'
  reply += '<meta name="viewport" content="width=device-width, initial-scale=1">'
  reply += '</head><body class="h-100">'
  reply += '<br>'
  reply += '<h1>LIGHTNING CAPTIVE PORTAL</h1><br>'
  reply += 'Pay 100 sats to get wifi-access.<br><br>'
  reply += `<form method="GET" action="${authaction}">`
  reply += `<input type="hidden" name="tok" value="${tok}">`
  reply += `<input type="hidden" name="redir" value="${redir}">`
  reply += '<input type="submit" value="Click Here to Enter">'
  reply += '</form >'
  reply += '</body>'
  reply += '</html>'
  res.send(reply);
});

// app.use(express.static(path.join(__dirname, '../static')))

app.listen(3000, '0.0.0.0', function () {
  console.log('Listening to port:  ' + 3000);
});