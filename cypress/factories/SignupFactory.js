const { faker } = require('@faker-js/faker');
var cpf = require('gerador-validador-cpf');

export default {
    deliver: function () {

        var firstName = faker.name.firstName("female")
        var lastName = faker.name.lastName("female")

        var data = {
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '11999999999',
            address: {
                postalcode: '04534011',
                street: 'Rua Joaquim Floriano',
                number: '1000',
                details: 'apto 142',
                district: 'Itaim Bibi',
                city_state: 'São Paulo/SP'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }

}