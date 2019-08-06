let swaggerUI = require('swagger-ui-express');
let swaggerJsdoc = require('swagger-jsdoc');


const options = {
	//swagger문서 설정
		swaggerDefinition: {
			info: {
				title: 'Test API',
				version: '1.0.0',
				description: 'Test API with express',
			},
			host: 'localhost:3001',
			basePath: '/',
		},
	//swagger api가 존재하는 곳 입니다.
		apis: ['endPoints.js'],
};
	
const specs = swaggerJsdoc(options);

module.exports = (app) => {
    app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
}