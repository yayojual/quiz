module.exports = function (sequelize, DataTypes) {
	return sequelize.define(
		'Comment', 
		{ texto: {
		  type: DataTypes.STRING,
		  validate: {notEmpty: {msg: "->El texto no debe estar vacío"}}
		},
		publicado: {
		  type: DataTypes.BOOLEAN,
		  defaultValue: false
		}		
		});
}
