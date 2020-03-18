package com.example.step;

import java.util.List;
import java.util.Map;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class LoginStep {
	
	@Given("^the application is working$")
	public void the_application_is_working() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("the application is working>>>>>");
	}

//	@When("^the credentials are \"([a-zA-Z0-9]{1,})\"$")
//	public void the_credentials_are_valid(String validStatus, DataTable dataTable) throws Throwable {
	
	@When("^the credentials are valid$")
	public void the_credentials_are_valid(DataTable dataTable) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("the credentials are valid>>>>>");
	    
	    List<Map<String, String>> list=dataTable.asMaps(String.class, String.class);
	    
//	    System.out.println("Login Name : " +list.get(0).get("login"));
//	    System.out.println("Password : " +list.get(0).get("password"));
//	    System.out.println("Usertype : " +list.get(0).get("usertype"));
//	    
//	    System.out.println("Login Name : " +list.get(1).get("login"));
//	    System.out.println("Password : " +list.get(1).get("password"));
	    
	   for(Map<String, String> temp: list) {
		   System.out.println(temp.get("login")+","+temp.get("password")+","+temp.get("usertype"));
	   }
	    
	}

	@Then("^take user to home page$")
	public void take_user_to_home_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    System.out.println("take user to home page>>>>>");
	}

	@Then("^take user to login page$")
	public void take_user_to_login_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.out.println("take user to login page>>>>>");
	}

}
