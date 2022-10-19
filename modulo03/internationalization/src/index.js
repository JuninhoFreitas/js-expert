import database from './../database.json'
import Person from './person.js'
import TerminalController from './terminalController.js'

const DEFAULT_LANGUAGE = 'pt-BR'
const STOP_TERM = ":q"

const terminalController = new TerminalController()
terminalController.initializeTerminal(database, DEFAULT_LANGUAGE)

async function mainLoop() {
    try {
        const answer = await terminalController.question('What?')
        console.log('answer', answer)
        if (answer === STOP_TERM) {
            return terminalController.closeTerminal()
        }
        const person = Person.generateInstanceFromString(answer);
        //1 Bike,Carro,Moto 500 2000-10-30 2000-11-21
        return mainLoop()
    } catch (e) {
        console.error('Deu Ruim**', e)
        return mainLoop();
    }
}


await mainLoop()