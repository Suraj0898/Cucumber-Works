package com.runner;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
	features= {"src/main/resources"},
	glue= {"com.example.step"},
	plugin= {"pretty","html:target/cucumber-html-report","json:target/cucumber-json-report"},
	monochrome=true,
	tags= {"@loan"}
		
)

public class TestRunner {
	//Dont put anything here
}
