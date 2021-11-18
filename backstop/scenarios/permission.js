const { scenario } = require('../scenarioHelper');

module.exports = [
  // Types
  scenario('Type default', {
    selectors: ['viewport'],
    viewports: [{ width: 800, height: 600 }],
  }),
];
