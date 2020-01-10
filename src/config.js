export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: 'us-west-1',
    BUCKET: 'notes-app-uploads-a'
  },
  apiGateway: {
    REGION: 'us-west-1',
    URL: 'https://0lrmef1cj2.execute-api.us-west-1.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_eQaUIgEge',
    APP_CLIENT_ID: 'r8rmbrsmcg8qg0lguacv0upir',
    IDENTITY_POOL_ID: 'us-west-2:8e965f62-390c-4631-b900-7479a6803aec'
  },
  STRIPE_KEY: 'pk_test_xoYD3yD6l24JZR2upcYJbIQD00kn6CITAs'
};
