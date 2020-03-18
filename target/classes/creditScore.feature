@sanity @loan
Feature: to sanction loan

#before
Background:
Given the computer is working

Scenario Outline: 
Given the person is working in "<officetype>" office
When the credit score is more than "<creditScore>"
Then grant loan of "<amount>"

Examples:

|	officetype |	creditScore	|	amount	|
|	govt |	200	|	2lakhs	|
|	govt |	500	|	3lakhs	|
|	private |	600	|	4lakhs	|
|	private |	650	|	5lakhs	|

