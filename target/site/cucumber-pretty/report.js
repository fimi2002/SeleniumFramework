$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("AccountManagemaent.feature");
formatter.feature({
  "line": 1,
  "name": "Account Management",
  "description": "",
  "id": "account-management",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Create An Account",
  "description": "",
  "id": "account-management;create-an-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@AccountManagement"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "User on  Create Account Page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "lUser enters first name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "User enters last name",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "User enters Email",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter password",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "User enter confirm password",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "User click submit",
  "keyword": "And "
});
formatter.match({
  "location": "AccountManagementSteps.userOnCreateAccountPage()"
});
formatter.result({
  "duration": 17843367900,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.luserEntersFirstName()"
});
formatter.result({
  "duration": 880875200,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEntersLastName()"
});
formatter.result({
  "duration": 202192700,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEntersEmail()"
});
formatter.result({
  "duration": 58000,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEnterPassword()"
});
formatter.result({
  "duration": 55800,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userEnterConfirmPassword()"
});
formatter.result({
  "duration": 47300,
  "status": "passed"
});
formatter.match({
  "location": "AccountManagementSteps.userClickSubmit()"
});
formatter.result({
  "duration": 46900,
  "status": "passed"
});
});