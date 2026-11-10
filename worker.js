const { Camunda8 } = require('@camunda8/sdk');

const c8 = new Camunda8();
const zeebe = c8.getZeebeGrpcApiClient();

zeebe.createWorker({
  taskType: 'verify-certification',
  taskHandler: async (job) => {
    console.log(`Received job for product: ${job.variables.requestedProduct}`);
    
    // Simulate an API delay (2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return job.complete({
      isVerified: true
    });
  }
});

console.log("Worker started! Listening for 'verify-certification' tasks...");