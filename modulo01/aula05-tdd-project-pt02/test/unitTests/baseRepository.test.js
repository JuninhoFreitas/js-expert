const { describe, it, before,beforeEach, afterEach } = require('mocha')
const fs = require('fs/promises')
const sinon = require('sinon')
const BaseRepository = require('./../../src/repository/base/baseRepository')
const { expect } = require('chai')

let mock = {
    file: {
        "id": "6adc6ed0-deb0-40e6-8882-198984ab893c",
        "name": "Jetta",
        "releaseYear": 2019,
        "available": true,
        "gasAvailable": true
    }      
}
describe('BaseRepository', () => {
    let sandbox = {}

    beforeEach(()=>{
        sandbox = sinon.createSandbox()
    })
    afterEach(()=>{
        sandbox.restore()
    })
    it('given a fileName it should return an file', async () =>{
        const baseRepository = new BaseRepository({file:'test.json'});
        
        const expected = JSON.stringify(mock.file)
        sandbox.stub(baseRepository, 'find').returns(expected);
        
        expect(baseRepository.find()).to.be.deep.equals(expected);
    })
})