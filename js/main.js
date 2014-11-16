require.config({
    baseUrl: 'js/lib',
    paths: {
        jquery: loadJquey(iUser)
    }
});
function loadJquey(paramater){
	if(paramater.country==="CN"){
		return "http://cdn.bootcss.com/jquery/2.1.1/jquery.min";
	}else{
		return "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min";
	}
}
require(["jquery"],function($){
	$("h1").text("Jquery");
});