/* eslint-disable prefer-destructuring */
/* eslint-disable no-console */
/* eslint-disable quotes */
const AWS = require('aws-sdk');

module.exports.invalidate = (e, ctx, cb) => {
  var cloudfront = new AWS.CloudFront();
  var params = {
    DistributionId: process.env.CF_DISTRIBUTION, 
    InvalidationBatch: { 
      CallerReference: Date.now().toString(),
      Paths: { 
        Quantity: 1,
        Items: [
          '/*'
        ]
      }
    }
  };
  cloudfront.createInvalidation(params, function(err, data) {
    cb(null, { statusCode: 200 });
  });
};
