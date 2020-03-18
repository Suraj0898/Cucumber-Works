$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("creditScore.feature");
formatter.feature({
  "line": 2,
  "name": "to sanction loan",
  "description": "",
  "id": "to-sanction-loan",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.scenarioOutline({
  "line": 8,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"\u003cofficetype\u003e\" office",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"\u003ccreditScore\u003e\"",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"\u003camount\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 13,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;",
  "rows": [
    {
      "cells": [
        "officetype",
        "creditScore",
        "amount"
      ],
      "line": 15,
      "id": "to-sanction-loan;;;1"
    },
    {
      "cells": [
        "govt",
        "200",
        "2lakhs"
      ],
      "line": 16,
      "id": "to-sanction-loan;;;2"
    },
    {
      "cells": [
        "govt",
        "500",
        "3lakhs"
      ],
      "line": 17,
      "id": "to-sanction-loan;;;3"
    },
    {
      "cells": [
        "private",
        "600",
        "4lakhs"
      ],
      "line": 18,
      "id": "to-sanction-loan;;;4"
    },
    {
      "cells": [
        "private",
        "650",
        "5lakhs"
      ],
      "line": 19,
      "id": "to-sanction-loan;;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 746000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 144622800,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"govt\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"200\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"2lakhs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "govt",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 2403500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 162200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2lakhs",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 131100,
  "status": "passed"
});
formatter.after({
  "duration": 56700,
  "status": "passed"
});
formatter.before({
  "duration": 109000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 88600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"govt\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"500\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"3lakhs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "govt",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 156000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "500",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 137800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3lakhs",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 137800,
  "status": "passed"
});
formatter.after({
  "duration": 54200,
  "status": "passed"
});
formatter.before({
  "duration": 76000,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 102000,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"private\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"600\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"4lakhs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "private",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 160300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "600",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 121500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4lakhs",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 124100,
  "status": "passed"
});
formatter.after({
  "duration": 64500,
  "status": "passed"
});
formatter.before({
  "duration": 93900,
  "status": "passed"
});
formatter.background({
  "comments": [
    {
      "line": 4,
      "value": "#before"
    }
  ],
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "the computer is working",
  "keyword": "Given "
});
formatter.match({
  "location": "LoanStep.the_computer_is_working()"
});
formatter.result({
  "duration": 105200,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "",
  "description": "",
  "id": "to-sanction-loan;;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    },
    {
      "line": 1,
      "name": "@loan"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "the person is working in \"private\" office",
  "matchedColumns": [
    0
  ],
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "the credit score is more than \"650\"",
  "matchedColumns": [
    1
  ],
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "grant loan of \"5lakhs\"",
  "matchedColumns": [
    2
  ],
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "private",
      "offset": 26
    }
  ],
  "location": "LoanStep.the_person_is_working_in_office(String)"
});
formatter.result({
  "duration": 199600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "650",
      "offset": 31
    }
  ],
  "location": "LoanStep.the_credit_score_is_more_than(String)"
});
formatter.result({
  "duration": 236700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5lakhs",
      "offset": 15
    }
  ],
  "location": "LoanStep.grant_loan_of(String)"
});
formatter.result({
  "duration": 97000,
  "status": "passed"
});
formatter.after({
  "duration": 77400,
  "status": "passed"
});
});