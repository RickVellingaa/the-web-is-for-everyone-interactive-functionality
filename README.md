# Content Layer WTF?!

## Grote plaatje schetsen: refactor + resimpel

In deze les ga ik vanaf nul de basisfunctionaliteit nabouwen wat Justus heeft voorgedaan. Hoe werkt het? Wat betekent het? Wat doet het? Ik ga jullie laten zien hoe je kan ontdekken en begrijpen door te gaan 'pielen'. Lekker spelen!

## Opzet project

- NPM init + npm install ejs express dotenv
- Package.json aanpassen: start script
- index.js boiler plate doorlopen
- app starten en testen
- Package.json aanpassen: module, start script

### Wat gaan we maken?

- Voorbeeld laten zien, waar willen we naar toe
- eerste route bepalen voor de homepagina: get('/')

### get('/')

- reponse.render, views mapje aanmaken, index.ejs en
- bepalen welke data we nodig hebben en hoe krijgen we die terug van de API: https://whois.fdnd.nl/docs (RTFM)
- variablen aanmaken: baseurl, slug, url
- hoe komen we te weten wat de slug is? Query! Console loggen van request
- fetch functie gebruiken en data meesturen naar EJS
- EJS template aanpassen

### get('/new')

- EJS template aanmaken
  - method (zowel post als get laten zien) en action uitleggen en de basis opzetten van de post('/new')
  - zie vorig college voor semantics
  - attributen die de gebruiker helpen (zie artikel Krijn)
  - select maken voor de squads

### post('/new')

- postJSON functie kopieëren
- voeg de regels toe voor het afhandelen van een formulier in express (anders ben je heel lang bezig.....)
- post requesten = iets meesturen, dit zit in de body
- ID wordt gemaakt door de API

### optimaliseren

SS:

- brainstormen wat goed werkt..
- slug bestaat al
- db connectie
- posten wel/niet gelukt (meerdere manieren mogelijk, wat werkt?)

HTML:

- required
- slug check

Refactoren code:

- helpers mapje aanmaken
