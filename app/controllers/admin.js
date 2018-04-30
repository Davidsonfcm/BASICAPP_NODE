module.exports.form_add_noticia = function(application, req, res) {
	res.render('admin/form_add_noticia', {validacao : '', noticia: '' });
}

module.exports.noticia_salvar = function(application, req, res) {
	var form = req.body;

	req.assert('titulo','O Título é obrigatório').notEmpty();
	req.assert('resumo','O Resumo é obrigatório').notEmpty();
	req.assert('resumo','O Resumo deve conter entre 10 e 100 caracteres').len(10,100);
	req.assert('autor','O Autor é obrigatório').notEmpty();		
	req.assert('data_noticia','Data é obrigatório').notEmpty();		
	req.assert('noticia','A notícia é obrigatório').notEmpty();

	var errors = req.validationErrors();

	if(errors){
		res.render('admin/form_add_noticia', { validacao: errors, noticia: form });
		return;
	}

	var connection = application.config.dbConnection();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.salvarNoticia(form, function(error, result){
		res.redirect('/noticias');
	});
}