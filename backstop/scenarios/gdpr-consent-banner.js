/*---------------------------------------------------------------------------------------------
 * Copyright (c) Bentley Systems, Incorporated. All rights reserved.
 * See LICENSE.md in the project root for license terms and full copyright notice.
 *--------------------------------------------------------------------------------------------*/
const { scenario } = require('../scenarioHelper');

module.exports = [
  // GDPR consent banner types
  scenario('Type default', {
    selectors: ['viewport'],
    viewports: [{ width: 800, height: 600 }],
    hideSelectors: ['h1', 'hr', 'theme-button', '.hide-me'],
  }),
];
