package com.lamtech.stepDefinition;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class AccountManagementSteps {
    WebDriver driver;
    @Given("^User on  Create Account Page$")
    public void userOnCreateAccountPage() {

        WebDriverManager.chromedriver().setup();
        driver = new ChromeDriver();
        //To Open Website
        driver.get("https://demo1-m2.mage.direct/");

        //maximise browser
        driver.manage().window().maximize();

        //click on register link
        driver.findElement(By.linkText("Create an Account")).click();

    }

    @When("^lUser enters first name$")
    public void luserEntersFirstName() {

        driver.findElement(By.name("firstname")).sendKeys("olajide");
    }

    @And("^User enters last name$")
    public void userEntersLastName() {
        driver.findElement(By.name("lastname")).sendKeys("ojo");

    }

    @And("^User enters Email$")
    public void userEntersEmail() {
    }

    @And("^User enter password$")
    public void userEnterPassword() {
    }

    @And("^User enter confirm password$")
    public void userEnterConfirmPassword() {
    }

    @And("^User click submit$")
    public void userClickSubmit() {
    }
}
