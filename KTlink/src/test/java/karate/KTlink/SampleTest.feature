@test 
Feature: Test your Webservices 


Background: 

	* url baseUrl

Scenario Outline: Connect to webservice 

	Then path <Path> 
	When method GET 
	Then status 200 
	
	
	Examples: 
		|Path				|
		|'all'				|
		|'name/united'		|
		|'alpha/col'		|
		|'currency/cop'		|
		|'capital/tallinn'	|
		|'regionalbloc/eu'	|
		
	Scenario Outline: Connect to webservice 
	
		Given path <Path>
		When method GET 
		Then status 200 
		
		
		Examples: 
			|Path					   |
			|read('webservicelist.txt')|
    