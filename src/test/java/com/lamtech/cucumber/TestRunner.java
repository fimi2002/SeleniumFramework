package com.lamtech.cucumber;


import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src/test/resources/features",
        glue = {"com.lamtech.stepDefinition", "com.lamtech.cucumber"},
        format = {"pretty", "html:target/site/cucumber-pretty", "json:target/cucumber.json"},
        monochrome = true,
        tags = {"@AccountManagement"})
public class TestRunner {
}
