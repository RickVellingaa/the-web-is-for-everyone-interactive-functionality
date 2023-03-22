// Maak een route voor de index
server.get('/', (request, response) => {
  const url = `${process.env.API_URL}/tribes`

  fetchJson(url).then((data) => {
    response.render('index', data)
  })
})

// Maak een route voor de index
server.get('/:squad', (request, response) => {
  const slug = request.params.squad
  const url = `${process.env.API_URL}/squad/${slug}`
  // const urlTribe = `${process.env.API_URL}/tribes`

  fetchJson(url).then((data) => {
    response.render('squad', data)
  })
})