module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'Quiz', 
		{ pregunta: {
		  type: DataTypes.STRING,
		  validate: {notEmpty: {msg: "->La pregunta no debe estar vacía"}}
		},
		  respuesta: {
		  type: DataTypes.STRING,
		  validate: {notEmpty: {msg: "->La respuesta no debe estar vacía"}}
		}		
		});
}
