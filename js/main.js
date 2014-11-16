require.config({
    baseUrl: 'js/lib',
    paths: {
        angular: loadAngular(iUser)
    }
});
function loadJquey(paramater){
	if(paramater.country==="CN"){
		return "http://cdn.bootcss.com/jquery/2.1.1/jquery.min";
	}else{
		return "http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min";
	}
}
function loadAngular(paramater){
	if(paramater.country==="CN"){
		return "http://cdn.bootcss.com/angular.js/1.3.0/angular.min";
	}else{
		return "http://cdnjs.cloudflare.com/ajax/libs/angular.js/1.3.0/angular.min";
	}
}
define(["angular"],function(angular){
	require('angular');
});