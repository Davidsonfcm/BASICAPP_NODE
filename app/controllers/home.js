module.exports.index = function(application, req, res) {
	var connection = application.config.dbConnection();
	var noticiaModel = new application.app.models.NoticiasDAO(connection);

	noticiaModel.get5UltimasNoticias(function(error, result){
		res.render('home/index', {noticias: result});
	});
}