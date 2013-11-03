(function($) {
	$.fn.validationEngineLanguage = function() {};
	$.validationEngineLanguage = {
		newLang: function() {
			$.validationEngineLanguage.allRules = 	{
					"required":{    			// Add your regex rules here, you can take telephone as an example
						"regex":"none",
						"alertText":"* Required (Click to hide)",
						"alertTextCheckboxMultiple":"* Required (Click to hide)",
						"alertTextCheckboxe":"* Required (Click to hide)"},
					"length":{
						"regex":"none",
						"alertText":"* Between ",
						"alertText2":" and ",
						"alertText3": " characters allowed"},
					"maxCheckbox":{
						"regex":"none",
						"alertText":"* Checks allowed Exceeded"},	
					"minCheckbox":{
						"regex":"none",
						"alertText":"* Please select at least ",
						"alertText2":" option"},	
					"confirm":{
						"regex":"none",
						"alertText":"* Your field is not matching"},		
					"telephone":{
						"regex":"/^[0-9\-\(\)\ ]+$/",
						"alertText":"* Invalid phone number"},	
					"email":{
						"regex":"/^[a-zA-Z0-9_\.\-]+\@([a-zA-Z0-9\-]+\.)+[a-zA-Z0-9]{2,4}$/",
						"alertText":"* Invalid email address"},	
					"date":{
                         "regex":"/^[0-9]{4}\-\[0-9]{1,2}\-\[0-9]{1,2}$/",
                         "alertText":"* Invalid date, must be in YYYY-MM-DD format"},
					"onlyNumber":{
						"regex":"/^[0-9\ ]+$/",
						"alertText":"* Numbers only"},	
					"noSpecialCharacters":{
						"regex":"/^[0-9a-zA-Z ]+$/",
						"alertText":"* No special characters allowed"},	
					"noSpecialCharactersSpaces":{
						"regex":"/^[0-9a-zA-Z]+$/",
						"alertText":"* No special characters allowed"},	
					"ajaxUser":{
						"file": document.location.href,
						"extraData":"name=eric",
						"alertTextOk":"* This user is available",	
						"alertTextLoad":"* Loading, please wait",
						"alertText":"* This user is already taken"},	
					"ajaxName":{
						"file": document.location.href,
						"alertText":"* This name is already taken",
						"alertTextOk":"* This name is available",	
						"alertTextLoad":"* Loading, please wait"},		
					"onlyLetter":{
						"regex":"/^[a-zA-Z\ \']+$/",
						"alertText":"* Letters only"},
					"validate2fields":{
    					"nname":"validate2fields",
    					"alertText":"You must have a firstname and a lastname"},
					"uploadCheck":{
						"nname":"uploadCheck",
						"alertText":"* Invalid file type"},
					"URL":{
						"regex":"/^http\://[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(/\S*)?$/",
						"alertText":"* Invalid address"}
					}	
					
		}
	}
})(jQuery);

$(document).ready(function() {	
	$.validationEngineLanguage.newLang()
});