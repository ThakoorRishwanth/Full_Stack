const {version} = require('mongoose')
const swaggerJsdoc = require('swagger-jsdoc')

const options = {
    definition:{
        openapi:'3.0.0',
        info:{
            title:'Book Api',
            version:'1.0.0',
        },

        servers:[{url:'http://localhost:8181'},{url:'http://localhost:9090'}]
    },
    apis:['/src/routes/*.js']
};

const openapiSpecification = swaggerJsdoc(options);

module.exports = openapiSpecification