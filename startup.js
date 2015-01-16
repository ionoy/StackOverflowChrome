$(function () {
    var sites = localStorage.getItem("sites");
    
    SE.init({
	    clientId: 1,
	    key: SOChrome.getOption('apiKey'),
	    channelUrl: 'file://',
	    complete: function(data) {
    		if (false && !!sites && new Date().getTime() - parseInt(localStorage.getItem("lastUpdate")) < 259200000) {//if cached and cached for less than 3 days                    
        		SOChrome.renderSites(JSON.parse(sites));
		    }
		    else {
	    		$.get("http://api.stackexchange.com/2.1/sites", { pagesize: 1024, key: SOChrome.getOption('apiKey') }, function(data) {
    				SOChrome.renderSites(data);
	    		});
		    }		    
	    }
	});    
});