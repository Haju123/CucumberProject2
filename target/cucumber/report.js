$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("cucumber/converter.feature");
formatter.feature({
  "line": 1,
  "name": "Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "As a user\r\nI want to enter data in Centigrade/Fahrenheit\r\nSo that I get the output in Fahrenheit/Centigrade",
  "id": "centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 15,
  "name": "Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "",
  "id": "centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the input temperature 20",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check the type of convertion required fahrenheit",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the output should be 68",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 22
    }
  ],
  "location": "ConverterSteps.the_input_temperature(int)"
});
formatter.result({
  "duration": 109039407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "fahrenheit",
      "offset": 38
    }
  ],
  "location": "ConverterSteps.check_the_type_of_convertion_required_fahrenheit(String)"
});
formatter.result({
  "duration": 1624354,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "68",
      "offset": 21
    }
  ],
  "location": "ConverterSteps.the_output_should_be(int)"
});
formatter.result({
  "duration": 509734,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "",
  "id": "centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the input temperature 70",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check the type of convertion required centigrade",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the output should be 21",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 22
    }
  ],
  "location": "ConverterSteps.the_input_temperature(int)"
});
formatter.result({
  "duration": 1455198,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "centigrade",
      "offset": 38
    }
  ],
  "location": "ConverterSteps.check_the_type_of_convertion_required_fahrenheit(String)"
});
formatter.result({
  "duration": 161982,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 21
    }
  ],
  "location": "ConverterSteps.the_output_should_be(int)"
});
formatter.result({
  "duration": 479528,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Centigrade to Fahrenheit and Fahrenheit to Centigrade Converter",
  "description": "",
  "id": "centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;centigrade-to-fahrenheit-and-fahrenheit-to-centigrade-converter;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "the input temperature 70",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "check the type of convertion required centigrade",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "the output should be 128",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "70",
      "offset": 22
    }
  ],
  "location": "ConverterSteps.the_input_temperature(int)"
});
formatter.result({
  "duration": 725333,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "centigrade",
      "offset": 38
    }
  ],
  "location": "ConverterSteps.check_the_type_of_convertion_required_fahrenheit(String)"
});
formatter.result({
  "duration": 242407,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "128",
      "offset": 21
    }
  ],
  "location": "ConverterSteps.the_output_should_be(int)"
});
formatter.result({
  "duration": 544849,
  "status": "passed"
});
});