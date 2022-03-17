import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import serviceAccount from './serviceAccount.json';
import admin from 'firebase-admin';

// fires up Firebase admin
const firebaseAdmin = admin.initializeApp({
  databaseURL: '<database_url>',
  credential: admin.credential.cert({
    clientEmail: serviceAccount.client_email,
    privateKey: serviceAccount.private_key,
    projectId: serviceAccount.project_id,
  }),
});

export const handler = async (
  event: APIGatewayProxyEvent,
): Promise<APIGatewayProxyResult> => {
  
  // do something with firebase database...
  const db = firebaseAdmin.database();
  
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello World'
    }),
  };
};
