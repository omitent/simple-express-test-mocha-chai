let app = require('../index');
let chai = require('chai');
const db = require('../database/models/posts')

let chaiHttp = require('chai-http');

chai.should();
chai.use(chaiHttp);

describe('Test posts', () => {

    describe('Should return with a 200 status code', () => {
        it('GET/', (done) => {
            chai.request(app)
                .get('/')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.not.be.eql(0);
                    done();
                });
        });
    });

    describe('should return with a 200 status code', () => {
        it('GET/:id', (done) => {
            const id = 1;

            chai.request(app)
                .get(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('id').eql(1);
                    res.body.should.have.property('titulo').eql('Javascript');
                    res.body.should.have.property('descricao').eql('Curso Javascript');
                    res.body.should.have.property('conteudo').eql('Curso tudo sobre Javascript.');
                    done();
                });
        });
    });

    describe('Should return with a 404 NOT_FOUND status code', () => {
        it('GET/:id', (done) => {
            const id = 3;

            chai.request(app)
                .get(`/${id}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('message').eql('Postagem não existe!');
                    done();
                });
        });
    });

    describe('should return with a 200 status code', () => {
        it('PUT/:id', (done) => {

            const data = {
                titulo: "New title for Test",
                descricao: "description for test",
                conteudo: "testing"
            }

            chai.request(app)
                .put(`/update/${5}`)
                .send(data)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('atualizado com sucesso');
                    done();
                });
        });
    });

    describe('should return with a 404 NOT_FOUND status code', () => {
        it('PUT/:id', (done) => {

            const data = {
                titulo: "New title for Test",
                descricao: "description for test",
                conteudo: "testing"
            }

            chai.request(app)
                .put(`/update/${3}`)
                .send(data)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('message').eql('Postagem não existe!');
                    done();
                });
        });
    });

    describe('should return with a 200 status code', () => {
        it('DELETE/:id', async () => {

            const data = await db.create({
                titulo: "Teste Delete",
                descricao: "Delete",
                conteudo: "Delete"
            })

            chai.request(app)
                .delete("/delete/" + data.id)
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.have.property('message').eql('Postagem deletado com sucesso');
                });
        });
    });

    describe('should return with a 404 NOT_FOUND status code', () => {
        it('DELETE/:id', (done) => {
            chai.request(app)
                .delete(`/delete/${999}`)
                .end((err, res) => {
                    res.should.have.status(404);
                    res.body.should.have.property('message').eql('Postagem não existe!');
                    done();
                });
        });
    });

});

