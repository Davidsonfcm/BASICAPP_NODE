function NoticiasDAO(connection){
	this._connection = connection
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('Select * from noticias order by reg_data desc ', callback);
};

NoticiasDAO.prototype.getNoticia =  function(id, callback){
	console.log(id);
	this._connection.query('Select * from noticias where id_noticia = ' + id, callback);
}

NoticiasDAO.prototype.salvarNoticia = function(form,callback){
	this._connection.query('insert into noticias set ? ', form, callback);
}

NoticiasDAO.prototype.get5UltimasNoticias = function(callback) {
	this._connection.query('Select * from noticias order by reg_data desc limit 5', callback);
}

module.exports = function(){
	return NoticiasDAO;
}