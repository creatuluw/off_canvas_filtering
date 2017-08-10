/*global require, alert*/
/*
 *
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var prefix = window.location.pathname.substr( 0, window.location.pathname.toLowerCase().lastIndexOf( "/extensions" ) + 1 );
var config = {
	host: window.location.hostname,
	prefix: prefix,
	port: window.location.port,
	isSecure: window.location.protocol === "https:"
};
require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port: "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.setOnError( function ( error ) {
		alert( error.message );
	} );


	//open apps -- inserted here --

	var app = qlik.openApp('Mashup Components.qvf', config);

	// Filter objects used in this component example
	app.getObject('EducationFilter','XaKjuDZ');
	app.getObject('GenderFilter','ppcAAPm');
	app.getObject('OccupationFilter','AyLrc');

	// Example Viz
	app.getObject('Viz','MdDvu');


	// Clear All selections
		$("#ClearAll").click(function() {
    		app.clearAll();
  		});


	// Objects
	// app.getObject('SalesGeo','jrLZYUN');
	// app.getObject('SalesTreemap','jadSyWt');
	// app.getObject('SalesScatter','PJpgC');
	// app.getObject('SalesOverTime','KCJNp');


} );
