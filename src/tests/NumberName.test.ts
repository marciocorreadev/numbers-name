import request from 'supertest'
import app from '../app'

describe('Integers Numbers', () => {
    it('You should be able to get the name of ones', async () => {
        const response = await request(app).get('/1') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Um.')
    })

    it('You should be able to get the name of tens', async () => {
        const response = await request(app).get('/14') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Quatorze.')
    })

    it('You should be able to get the name of hundreds', async () => {
        const response = await request(app).get('/991') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Novecentos e noventa e um.')
    })


    it('You should be able to get the name of thousands', async () => {
        const response = await request(app).get('/5134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Cinco mil e cento e trinta e quatro.')
    })

    it('You should be able to get the name of ten thousands', async () => {
        const response = await request(app).get('/25134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Vinte e cinco mil e cento e trinta e quatro.')
    })

    it('You should be able to get the name of hundreds thousands', async () => {
        const response = await request(app).get('/825134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Oitocentos e vinte e cinco mil e cento e trinta e quatro.')
    })

    it('You should be able to get the name of millions', async () => {
        const response = await request(app).get('/9825134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Nove milhões e oitocentos e vinte e cinco mil e cento e trinta e quatro.')
    })

    it('You should be able to get the name of billions', async () => {
        const response = await request(app).get('/1999825134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Um bilhão e novecentos e noventa e nove milhões e oitocentos e vinte e cinco mil e cento e trinta e quatro.')
    })


    it('You should be able to get the name of trillions', async () => {
        const response = await request(app).get('/1000999825134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Um trilhão e novecentos e noventa e nove milhões e oitocentos e vinte e cinco mil e cento e trinta e quatro.')
    })

    it('You should be able to get the name of quadrillions', async () => {
        const response = await request(app).get('/1000000999825134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Um quatrilhão e novecentos e noventa e nove milhões e oitocentos e vinte e cinco mil e cento e trinta e quatro.')
    })
})

describe('Floating Numbers', () => {
    it('You should be able to get the name of tenths', async () => {
        const response = await request(app).get('/0.1') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Zero vírgula um décimo.')
    })

    it('You should be able to get the name of hundredths', async () => {
        const response = await request(app).get('/0.991') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Zero vírgula novecentos e noventa e um milésimos.')
    })

    it('You should be able to get the name of thousandths', async () => {
        const response = await request(app).get('/0.5134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Zero vírgula cinco mil e cento e trinta e quatro décimos de milésimo.')
    })

    it('You should be able to get the name of ten thousandths', async () => {
        const response = await request(app).get('/0.25134') as any
        const { extenso } = response.body
        expect(response.status).toBe(200)
        expect(extenso).toBe('Zero vírgula vinte e cinco mil e cento e trinta e quatro centésimos de milésimo.')
    })
})

