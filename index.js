var agent = require('superagent')
  , q     = require('q')
  , _     = require('lodash')
;

module.exports = {
  /**
   * The main entry point for the Dexter module
   *
   * @param {AppStep} step Accessor for the configuration for the step using this module.  Use step.input('{key}') to retrieve input data.
   * @param {AppData} dexter Container for all data used in this workflow.
   */
  run: function(step, dexter) {
    var url = step.input('url').first()
     , message = step.input('message').first()
     , slack_userid = step.input('slack_userid').first()
     , slack_channelid = step.input('slack_channelid').first()
     , slack_teamid = step.input('slack_teamid').first()
     , self = this
    ;

    var parameters = {
      text: message,
      vars: {
        user_id: slack_userid,
        channel_id: slack_channelid,
        team_id: slack_teamid
      }
    };

    agent.get(url).type('json').query(parameters).end(function (err, result) {
      self.complete({
        response: result.body.row[3],
        attachment_url: result.body.row[4]
      });
    });
  }
};