[![Generic badge](https://img.shields.io/badge/Express-Nodejs-<COLOR>.svg)](https://shields.io/)


![ts](https://badgen.net/badge/-/TypeScript/blue?icon=typescript&label)

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
### - Run with debug Vs Code
![enter image description here](https://raw.githubusercontent.com/marciocorreadev/numbers-name/main/views/image/debug.png)
### Exemple Request
| Method | Route |
| ------ | ------ |
| GET | http://localhost:3000/{number} |
| GET | http://localhost:3000/ping  |

```sh
curl http://localhost:3000/12345
```
```JSON
{"extenso":"Doze mil e trezentos e quarenta e cinco."}
```

```sh
curl http://localhost:3000/ping
```
```JSON
{
  "info": "API to obtain a number name.",
  "status": "OK",
  "time": "02:24:32"
}
```


## Tests

### - Run with Jest
```sh
npm run test
```
![enter image description here](https://raw.githubusercontent.com/marciocorreadev/numbers-name/main/views/image/jest.png)
    
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

### Building for source
For production release:

```sh
npm run build
npm start
```

### Collection
The collection for insomnia or postman is with to the project

_______

**Free Software, Hell Yeah!**
