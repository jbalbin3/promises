/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var request = require('request');
Promise.promisifyAll(fs);
var promoLib = require('./promisification.js');
// var getGitHubProfileAsync = require('getGitHubProfileAsync');
// var generateRandomTokenAsync = require('generateRandomTokenAsync');
// var readFileAndMakeItFunnyAsync = require('readFileAndMakeItFunnyAsync');
var promo2Lib = require('./promiseConstructor.js');
// var getStatusCodeAsync = require('getStatusCodeAsync');
// var pluckFirstLineFromFileAsync = require('pluckFirstLineFromFileAsync');

var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {

  return promo2Lib.pluckFirstLineFromFileAsync(readFilePath)
    .then(promoLib.getGitHubProfileAsync)
    .then(function(userProfile) {
      return fs.writeFileAsync(writeFilePath, JSON.stringify(userProfile));
    });
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
