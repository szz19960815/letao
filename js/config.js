require.config({
	baseUrl : "/",
	paths : {
		"jquery" : ["https://code.jquery.com/jquery-1.12.4.min","letao/lib/jquery/jquery-1.12.4.min"],
		"cookie" : "letao/lib/jquery_plugins/jquery.cookie",
		"template" : "letao/lib/arttemplate/template",
		"loadHeaderFooter" : "letao/js/loadHeaderFooter",
		"zoom" : "letao/lib/jquery_plugins/jquery.elevatezoom"
	},
	shim : {
		"zoom" : {
			deps : ["jquery"]
		}
	}
});