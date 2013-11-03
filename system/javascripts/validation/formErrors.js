/*
---------------------------------------------------------
(C) Copyright 2010 Apex Development - All Rights Reserved

This script may NOT be used, copied, modified, or
distributed in any way shape or form under any license:
open source, freeware, nor commercial/closed source.
---------------------------------------------------------
*/

//Script to validate all form field types, and tie serveral validation technologies together

function errorsOnSubmit(form, upload, forced, extension) {
	var jqueryValidate = $('#validate').validationEngine({returnIsValid:true});
	
	if (jqueryValidate == true) {
		if (upload == false || !upload) {
			return successDisplay('1', '0', '0', '1');
		} else {
			return uploadCheck(upload, forced, extension, 'true');
		}
	}
	
	if (jqueryValidate == false) {
		return errorDisplay('1', '1', '0', '1');
		return uploadCheck(upload, forced, extension, 'false');
	}
}

function uploadCheck (uploadInput, forcedInput, extensionInput, returnTrue) {
	if (uploadInput != "" || uploadInput != false) {
		var uploadSplit = uploadInput.split(".");
		var i;
		var result = "1";
		var extensionCheck = "0";
		for (i in uploadSplit) {
			var fileCheck = document.getElementById(uploadSplit[i]).value;
			
			if (fileCheck == "" || fileCheck == false) {					
				var result = "0";
			} else {
				if (extensionInput != undefined) {
					var extensionSplit = extensionInput.split(".");
					var n;
					for (n in extensionSplit) {
						var lowerCase = fileCheck.toLowerCase();
													
						if (lowerCase.match(extensionSplit[n])) {			
							var extensionCheck = "1";
						}
					}
				} else {
					var extensionCheck = "1";
				}
			}
		}
		
		if (result == "0") {
			if (forcedInput == "true") {
				$.validationEngine.buildPrompt('#file','This is not a supported file type','error');
				return errorDisplay('1', '1', '0', '1');
			} else {
				return successDisplay('1', '0', '1', '1');
			}
		} else {
			if (extensionCheck == "1") {				
				if(returnTrue == "true") {
					return successDisplay('1', '1', '1', '1');
				} else {
					return successDisplay('1', '1', '1', '0');
				}
			}
			
			if (extensionCheck == "0") {
				$.validationEngine.buildPrompt('#file','This is not a supported file type','error');
				return errorDisplay('1', '1', '1', '1');
			}
		}
	} else {
		if(returnTrue == "true") {
			return successDisplay('1', '1', '1', '1');
		} else {
			return successDisplay('1', '1', '1', '0');
		}
	}
}

function errorDisplay(errorShow, progressClear, errorWinShow, errorReturn) {
	var errorWindow = document.getElementById('errorWindow');
	var progressBox = document.getElementById('progress');
	var errorBox = document.getElementById('errorBox');
	
	if (errorShow == "1") {
		errorBox.style.display = 'block';
		errorBox.style.border = '1px solid #CC3333';
		errorBox.style.color = '#CC3333';
		errorBox.style.width = '405px';
	}
	
	
	if (progressClear == "1") {
		progressBox.style.display = 'none';
	}
	
	if (errorWinShow == "1") {
		if (errorWindow) {
			errorWindow.style.display = 'block';
		}
	}
	
	if (errorReturn == "1") {
		return false;
	}
}

function successDisplay(errorClear, progressShow, errorWinClear, errorClearReturn) {
	var errorWindow = document.getElementById('errorWindow');
	var progressBox = document.getElementById('progress');
	var errorBox = document.getElementById('errorBox');
	
	if (errorClear == "1") {
		errorBox.style.display = 'none';
	}
	
	if (progressShow == "1") {
		progressBox.style.display = 'block';
	}
	
	if (errorWinClear == "1") {
		if (errorWindow) {
			errorWindow.style.display = 'none';
		}
	}
	
	if (errorClearReturn == "1") {
		return true;
	}
}