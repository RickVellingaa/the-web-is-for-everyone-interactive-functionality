import express from 'express'

// Maak een nieuwe express app
const server = express()

// Stel de public map in
server.use(express.static('public'))

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({ extended: true }))

// Maak een route voor de index
server.get('/', (request, response) => {
  const baseurl = "https://whois.fdnd.nl/api/v1"
  const slug = request.query.squad || 'squad-a-2022'
  const url = `${baseurl}/squad/${slug}`

  fetchJson(url).then((data) => {
    response.render('index', data)
  })
})

server.get('/form', (request, response) => {
  response.render('form')
})

server.post('/form', (request, response) => {
  const baseurl = "https://whois.fdnd.nl/api/v1"

  const url = `${baseurl}/member`

  postJson(url, request.body).then((data) => {
    let newMember = { ... request.body }

    if (data.success) {
      response.redirect('/?memberPosted=true') 
      // TODO: squad meegeven, message meegeven
      // TODO: Toast meegeven aan de homepagina
    } else {
      const errormessage = `${data.message}: Mogelijk komt dit door de slug die al bestaat.`
      const newdata = { error: errormessage, values: newMember }
      
      response.render('form', newdata)
    }
  })
})

// Stel het poortnummer in
server.set('port', 4000)

// Start met luisteren
server.listen(server.get('port'), () => {
  console.log(`Application started on http://localhost:${server.get('port')}`)
})

/**
 * Wraps the fetch api and returns the response body parsed through json
 * @param {*} url the api endpoint to address
 * @returns the json response from the api endpoint
 */
async function fetchJson(url) {
  return await fetch(url)
    .then((response) => response.json())
    .catch((error) => error)
}

/**
 * postJson() is a wrapper for the experimental node fetch api. It fetches the url
 * passed as a parameter using the POST method and the value from the body paramater
 * as a payload. It returns the response body parsed through json.
 * @param {*} url the api endpoint to address
 * @param {*} body the payload to send along
 * @returns the json response from the api endpoint
 */
export async function postJson(url, body) {
  return await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' },
  })
    .then((response) => response.json())
    .catch((error) => error)
}