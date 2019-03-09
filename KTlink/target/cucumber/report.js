$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("karate/KTlink/SampleTest.feature");
formatter.feature({
  "line": 2,
  "name": "Test your links",
  "description": "",
  "id": "test-your-links",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "Connect to webservice",
  "description": "",
  "id": "test-your-links;connect-to-webservice",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "url \u0027http://services.groupkt.com/state/get/USA/all\u0027",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "method GET",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "status 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "\u0027http://services.groupkt.com/state/get/USA/all\u0027",
      "offset": 4
    }
  ],
  "location": "StepDefs.url(String)"
});
formatter.result({
  "duration": 1310892334,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "GET",
      "offset": 7
    }
  ],
  "location": "StepDefs.method(String)"
});
formatter.result({
  "duration": 1071379313,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 7
    }
  ],
  "location": "StepDefs.status(int)"
});
formatter.result({
  "duration": 1219205,
  "status": "passed"
});
});