package com.cucumber.bdd.steps;

public class ConvertersSet {
	int temperature;
	int convertedValue;
	String type_of_convertion;
	
	public int getTemperature() 
	{
		return temperature;
	}
	public void setTemperature(int temperature)
	{
		this.temperature = temperature;
	}
	public int getConvertedValue() 
	{
		return convertedValue;
	}
	public void setConvertedValue(int convertedValue) 
	{
		this.convertedValue = convertedValue;
	}
	
	public String getType_of_convertion()
	{
		return type_of_convertion;
	}
	public void setType_of_convertion(String type_of_convertion)
	{
		this.type_of_convertion = type_of_convertion;
	}
	public void inputToFran()
	{
		convertedValue = (int) ((this.getTemperature() * 1.8)+32);
		this.setConvertedValue(convertedValue);
	
		
	}
	public void inputToCenti()
	{
		convertedValue = (int) ((this.getTemperature() -32)*0.56);
		this.setConvertedValue(convertedValue);
	
		
	}
	

}
