import {getGifs} from "../../helpers/getGifs"
describe('pruebas con getGifs Fecth', () => {
    //  con esta prueba, prueba cuantos elementos esta trayendo mi API
    test('debe de traer 10 elementos', async() => {
        const gifs =await getGifs('One punch')
        expect(gifs.length).toBe(10)
    })
    
})
