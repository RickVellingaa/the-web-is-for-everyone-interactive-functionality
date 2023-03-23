import express from 'express'

const url = 'https://api.vervoerregio-amsterdam.fdnd.nl/api/v1'

// Maak een nieuwe express app
const server = express()

// Stel de public map in
server.use(express.static('public'))

// Stel de view engine in
server.set('view engine', 'ejs')
server.set('views', './views')

// Stel afhandeling van formulieren in
server.use(express.json())
server.use(express.urlencoded({
  extended: true
}))

// Maak een route voor de index
server.get('/', (request, response) => {
  fetchJson(`${url}/principes`).then((data) => {
    response.render('index', data)
  })
})

server.get('/contact', (request, response) => {
  response.render('contact')
})

server.get('/form', function (request, response) {
  fetchJson(`${url}/websites`).then((data) => {
    response.render('form', { data: data, active: '/form' })
  })
})


server.post('/new', (request, response) => {
  console.log(request.body)
  postJson(`${url}/urls`, request.body).then((data) => {
    let newURL = { ...request.body }

    if (data.success) {
      response.redirect('/?urlPosted=true')
    } else {
      const errorMessage = data.message
      const newData = { error: errorMessage, values: newURL }

      response.render('form', { data: newData, active: '/form' })
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
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then((response) => response.json())
    .catch((error) => error)
}