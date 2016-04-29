# Using This Module
This [Dexter](https://rundexter.com/) module takes a message as input, matches it against a set of regular expressions specified in a Google Sheet, and returns the URL. The module is configured to work with a specific spreadsheet template and a **Google Script URL** is a key input to the module that basically specifies that sheet to read from.

To obtain a Google Script URL:

1. Make a copy of [this sheet](https://docs.google.com/spreadsheets/d/1imo2Fn0aco5_WGfG2xEyge4Fi0mL7c1oaWHnoGSmC84/edit#gid=0)
1. Modify your spreadsheet to generate the responses you want. The first column is a regular expression that matches the user's input, the second column is the response. (Make sure everything you add is above the `.*` line, which basically serves as the catch-all response.)
1. In that sheet, go to Tools -> Script editor
1. In the editor, select Publish -> Deploy as web app...
1. In the dropdown labelled "Who has access to my app," choose "Anyone, even anonymous" and click "Deploy." Authorize if necessary.
1. The URL you see is what should go as the input into this module's **Google Script URL** input