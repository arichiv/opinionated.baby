// @flow

import '@babel/polyfill';
import awsServerlessExpress from 'aws-serverless-express';
import cors from 'cors';
import express from 'express';
import server from './server.js';

const app = express();
app.use(cors());
app.use('/graphql', server);

if (process.env.LAMBDA_TASK_ROOT && process.env.AWS_EXECUTION_ENV) {
  const serverless = awsServerlessExpress.createServer(
    app,
    null,
    [
      'application/octet-stream',
      'font/eot',
      'font/opentype',
      'font/otf',
      'image/jpeg',
      'image/png',
      'image/svg+xml'
    ]
  );
  export const handler = (event: Object, context: Object) =>
    awsServerlessExpress.proxy(serverless, event, context);
} else {
  app.use('/', express.static('_bin/website'));
  app.listen(8080);
}
