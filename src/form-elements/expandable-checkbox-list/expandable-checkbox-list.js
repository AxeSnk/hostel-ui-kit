var jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery-ui-dist/jquery-ui.js");

$(".expandable-checkbox-list__menu").click(function(){
	$(".expandable-checkbox-list__submenu").parent().children("ul").stop(true, false).fadeToggle(200);
	// $(".expandable-checkbox-list__menu").css("background-image","url('./form-elements/expandable-checkbox-list/svg/expand_more.svg')")
	// Не работает
})
