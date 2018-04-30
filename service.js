var Service = require('node-windows').Service;

var svc = new Service({
	name: 'CURSO_NODE',
	description: 'CURSO DE NODEJS UDEMY',
	script: 'D:\\Particular\\Project\\CURSO_NODE\\app.js'
});

//############# INSTALA SERVIÇO ######################
/*svc.on('install',function(){
	console.log('Install Service complete.');
    console.log('The service exists: ',svc.exists);
	svc.start();
});
 
svc.install();*/

//############## (DESINSTALA SERVICO) ##################
svc.on('uninstall',function(){
  console.log('Uninstall complete.');
  console.log('The service exists: ',svc.exists);
  svc.stop();
});

svc.uninstall();