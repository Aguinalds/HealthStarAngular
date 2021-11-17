require('./mongodb');
const remedioModel = require('../models/remedioModel');
const dados = require('./remedios.json');

function carregarDados() {
    remedioModel.deleteMany({}, () => {
        dados.forEach(remedio => {
            remedioModel.create(remedio);
        });
    });
}

carregarDados();
setTimeout(process.exit, 3000);