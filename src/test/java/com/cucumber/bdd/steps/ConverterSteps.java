package com.cucumber.bdd.steps;


import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ConverterSteps {
	

	ConvertersSet convert = new ConvertersSet();

	
	@Given("^the input temperature (\\d+)$")
	public void the_input_temperature(int temp) throws Throwable {
	   
	   System.out.println();
	   System.out.println("------------------------------------------------------------------");
	   System.out.println("Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter");
	   System.out.println("------------------------------------------------------------------");
	   convert.setTemperature(temp);
	   System.out.println("The temparture value inputed is :"+ convert.getTemperature());
	   	   
	}

	@When("^check the type of convertion required (.*)$")
	public void check_the_type_of_convertion_required_fahrenheit(String required_in_type) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		convert.setType_of_convertion(required_in_type);
		if(convert.getType_of_convertion().equalsIgnoreCase("centigrade"))
		{
			System.out.println("Converting given temperature to Centigrade");
			convert.inputToCenti();
			//System.out.println(convert.getConvertedValue());
		}
		else
		{
			System.out.println("Converting given temperature to Fahrenheit");
			convert.inputToFran();
			//System.out.println(convert.getConvertedValue());
			
		}
	    
	}

	@Then("^the output should be (\\d+)$")
	public void the_output_should_be(int value) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		if(convert.getConvertedValue() == value)
		{
			if(convert.getType_of_convertion().equals("centigrade"))
			{
				System.out.println("Converted input value "+ convert.getTemperature()+ " to "+ convert.getType_of_convertion()+ ":"+ convert.getConvertedValue()+ "C");
			}
			else
			{
				System.out.println("Converted input value "+ convert.getTemperature()+ " to "+ convert.getType_of_convertion()+ ":"+ convert.getConvertedValue()+ "F");
			}
			System.out.println();
			System.out.println("------------------------------------------------------------------");
			System.out.println();
			
		}
		else
		{
			System.out.println("Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter failed to perform correctly");
			System.out.println();
			System.out.println("------------------------------------------------------------------");
			System.out.println();
			
		}
	 
	}

}
