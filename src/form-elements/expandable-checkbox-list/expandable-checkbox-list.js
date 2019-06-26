var jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery-ui-dist/jquery-ui.js");

$(".expandable-checkbox-list__menu").click(function(){
	$(".expandable-checkbox-list__submenu").stop(true, false).fadeToggle(200);
})
