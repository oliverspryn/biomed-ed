<?php
/*
---------------------------------------------------------
(C) Copyright 2010 Apex Development - All Rights Reserved

This script may NOT be used, copied, modified, or
distributed in any way shape or form under any license:
open source, freeware, nor commercial/closed source.
---------------------------------------------------------

Created by: Oliver Spryn
Created on: November 28th, 2010
Last updated: December 8th, 2010

This is the role administration overview page, which 
displays a summary of all of the roles within the system.
*/

//Header functions
	require_once('../../system/core/index.php');
	require_once(relativeAddress("admin/system/php") . "index.php");
	require_once(relativeAddress("admin/system/php") . "functions.php");
	headers("Role Administration Panel", false, true);
	
//Reorder roles
	reorder("roles", "index.php");
	
//Delete roles
	delete("roles", "index.php");
	
//Title
	title("Role Administration Panel", "This is the role administration panel, designed for developers to create and manage user roles.");
	
//Admin toolbar
	echo "<div class=\"toolBar\">\n";
	echo toolBarURL("Add New Role", "manage_role.php", "toolBarItem new") . "\n";
	echo toolBarURL("Back to Overview", "../index.php", "toolBarItem back") . "\n";
	echo "</div>\n";
	
//Display message updates
	message("message", "inserted", "success", "The role was successfully inserted");
	message("message", "updated", "success", "The role was successfully updated");
	
//Roles table
	if (exist("roles")) {
		$rolesGrabber = query("SELECT * FROM `roles` ORDER BY `position` ASC", "raw");
		$count = 1;
		
		echo "<br />\n<table class=\"dataTable\">\n<tr>\n";
		echo column("Order", "75");
		echo column("Role", "200");
		echo column("Description");
		echo column("Edit", "50");
		echo column("Delete", "50");
		echo "</tr>\n";
		
		while($roles = fetch($rolesGrabber)) {
			echo "<tr";
			if ($count & 1) {echo " class=\"odd\">\n";} else {echo " class=\"even\">\n";}
			echo reorderMenu("roles", $roles['id']);
			echo preview($roles['name'], "details.php?id=" . $roles['id'], "role details", "200");
			echo cell(commentTrim(150, $roles['description']));
			echo editURL("manage_role.php?id=" . $roles['id'], $roles['name'], "role");	
			echo deleteURL("manage_role.php?action=delete&id=" . $roles['id'], $roles['name'], "role");	
			echo "</tr>\n";
			
			$count++;
		}
		
		echo "</table>\n";
	} else {
		echo "<div class=\"noResults\">There are no roles within this system.</div>\n";
	}
	
//Include the footer
	footer();
?>