const app = require("../app");
const supertest = require('supertest');
const requestWithSupertest = supertest(app);

const chai = require("chai");
const expect = chai.expect;

describe('App health check Endpoint', () => {
    const path = '/health-check'
    it(`type = GET path = ${path}`, async () => {
        const res = await requestWithSupertest.get(path);
        expect(res.status).equal(200);
        expect(res.body.message).equal('OK')
    });

});

describe('App root Endpoint', () => {
    it('type = GET path = root', async () => {
        const res = await requestWithSupertest.get('');
        expect(res.status).equal(200);
        expect(res.text).equal('Hello World')
    });
});



