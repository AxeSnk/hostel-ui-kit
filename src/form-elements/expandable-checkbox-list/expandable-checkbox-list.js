var jquery = require("jquery");
window.$ = window.jQuery = jquery;
require("jquery-ui-dist/jquery-ui.js");

$(document).ready(function(){
	function hideallDropdowns() {
		$(".dropped .expandable-checkbox-list__submenu").hide();
	}

	function showDropdown(el) {
        var el_li = $(el).parent().addClass('dropped');
        el_li
            .find('.title')
            .click(function () {
                hideallDropdowns();
            })
            .html($(el).html());
 
        el_li.find('.expandable-checkbox-list__submenu').show();
	}
	
	$(".expandable-checkbox-list__menu").click(function(){
        showDropdown(this);
    });
 
    $(document).mouseup(function () {
        hideallDropdowns();
    });
 
})