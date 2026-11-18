const { Camunda8 } = require('@camunda8/sdk');

// Initialize the Camunda 8 client
const c8 = new Camunda8();
const zeebe = c8.getZeebeGrpcApiClient();

// 1. Worker for Product Verification (Sprint 1 Logic)
zeebe.createWorker({
  taskType: 'verify-certification',
  taskHandler: async (job) => {
    console.log(`Received job for product: ${job.variables.requestedProduct}`);
    
    // Simulate an API delay (2 seconds)
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Return the result back to Camunda
    return job.complete({
      isVerified: true 
    });
  }
});

// 2. Worker for Inventory Management (Sprint 2 Logic)
zeebe.createWorker({
  taskType: 'update-inventory',
  taskHandler: async (job) => {
    console.log(`Inventory Update: Product ${job.variables.productId} set to Qty ${job.variables.newQuantity}`);
    
    // Simulate database update delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    return job.complete();
  }
});

console.log("Workers started! Listening for 'verify-certification' and 'update-inventory' tasks...");

// Keep the node process alive
setInterval(() => {}, 1000);
