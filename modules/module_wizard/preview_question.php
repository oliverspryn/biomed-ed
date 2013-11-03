<?php
//Header functions
	require_once('../../system/connections/connDBA.php');
	$monitor = monitor("Preview Test Question", "tinyMCESimple,validate,newObject", true);

//Check to see if a question exists
	if (isset ($_GET['id'])) {
		if (exist($monitor['testTable'], "id", $_GET['id']) == false) {
			die("The test question does not exist.");
		}
	} else {
		die("A required parameter is missing.");
	}
	
//Title
	title("Preview Test Question", false, false, "preview");
	
//Display the test question
	test($monitor['testTable'], true, $_GET['id']);
	
//Include the footer
	footer(false, true);
?>