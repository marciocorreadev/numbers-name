# Numbers Name BR
API to get the long number of a number.

----

### How was it done
- Node.js
- TypeScript
- Express
- Jest
- Supertest
- Docker
## Features
- [x] Get the long number of a number

## Installation
###### Numbers Name Requires [Node.js](https://nodejs.org/) v10+ or docker to run.
Clone the project:
```sh
git clone git@github.com:marciocorreadev/numbers-name.git
```
### - Run with Docker
```sh
docker-compose up
```
### - Run Local
```sh
npm install 
npm run dev
```
### Exemple Request

```sh
curl http://localhost:3000/12
```
```JSON
{"extenso":"Doze."}
```
####

| Method | Route |
| ------ | ------ |
| GET | http://localhost:3000/{number} |
| GET | http://localhost:3000/ping  |

## Tests

### - Run with Jest
```sh
npm run test
```

-  Integers Numbers
    `✓ You should be able to get the name of ones (49 ms)`
    `✓ You should be able to get the name of tens (4 ms)`
    `✓ You should be able to get the name of hundreds (14 ms)`
    `✓ You should be able to get the name of thousands (5 ms)`
    `✓ You should be able to get the name of ten thousands (5 ms)`
    `✓ You should be able to get the name of hundreds thousands (3 ms)`
    `✓ You should be able to get the name of millions (4 ms)`
    `✓ You should be able to get the name of billions (3 ms)`
    `✓ You should be able to get the name of trillions (3 ms)`
    `✓ You should be able to get the name of quadrillions (3 ms)`
- Floating Numbers
    `✓ You should be able to get the name of tenths (5 ms)`
    `✓ You should be able to get the name of hundredths (7 ms)`
    `✓ You should be able to get the name of thousandths (3 ms)`
    `✓ You should be able to get the name of ten thousandths (3 ms)`
    
### - Run with sh
```sh
npm run testsh
```
``` JSON
{"extenso":"Um."}
{"extenso":"Doze."}
{"extenso":"Cento e vinte e três."}
{"extenso":"Um mil e duzentos e trinta e quatro."}
{"extenso":"Doze mil e trezentos e quarenta e cinco."}
{"extenso":"Cento e vinte e três mil e quatrocentos e cinquenta e seis."}
{"extenso":"Um milhão e duzentos e trinta e quatro mil e quinhentos e sessenta e sete."}
{"extenso":"Doze milhões e trezentos e quarenta e cinco mil e seiscentos e setenta e oito."}
{"extenso":"Cento e vinte e três milhões e quatrocentos e cinquenta e seis mil e setecentos e oitenta e nove."}
{"extenso":"Zero vírgula um décimo."}
{"extenso":"Zero vírgula doze centésimos."}
{"extenso":"Zero vírgula cento e vinte e três milésimos."}
{"extenso":"Zero vírgula um mil e duzentos e trinta e quatro décimos de milésimo."}
{"extenso":"Zero vírgula doze mil e trezentos e quarenta e cinco centésimos de milésimo."}
{"extenso":"Zero vírgula cento e vinte e três mil e quatrocentos e cinquenta e seis milionésimos."}
```

#### Building for source
For production release:

```sh
npm run build
npm start
```



**Free Software, Hell Yeah!**
