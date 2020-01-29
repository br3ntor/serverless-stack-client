const dev = {
  STRIPE_KEY: 'pk_test_xoYD3yD6l24JZR2upcYJbIQD00kn6CITAs',
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'notes-app-2-api-dev-attachmentsbucket-ghjyrkh7uom9'
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://7hzeznn71k.execute-api.us-west-2.amazonaws.com/dev'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_5sGIxyXOn',
    APP_CLIENT_ID: '6d1tf01enapk0q4bmq0887m8u6',
    IDENTITY_POOL_ID: 'us-west-2:d9597a4a-d07b-4f41-bd13-e2262be31725'
  }
};

const prod = {
  STRIPE_KEY: 'pk_test_xoYD3yD6l24JZR2upcYJbIQD00kn6CITAs',
  s3: {
    REGION: 'us-west-2',
    BUCKET: 'notes-app-2-api-prod-attachmentsbucket-ubmnwe8bplta'
  },
  apiGateway: {
    REGION: 'us-west-2',
    URL: 'https://idw18y8z42.execute-api.us-west-2.amazonaws.com/prod'
  },
  cognito: {
    REGION: 'us-west-2',
    USER_POOL_ID: 'us-west-2_iCdibKw7g',
    APP_CLIENT_ID: '4f35q88j2p202qoo9dvg16dent',
    IDENTITY_POOL_ID: 'us-west-2:92af9349-26f4-495f-8978-72c1c9fff1e6'
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'prod' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
