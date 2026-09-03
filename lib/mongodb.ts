import { MongoClient } from 'mongodb';

const options = {};

// In development mode, use a global variable so that the value
// is preserved across module reloads caused by HMR (Hot Module Replacement).
const globalWithMongo = global as typeof globalThis & {
  _mongoClientPromise?: Promise<MongoClient>;
};

async function getClient() {
  if (process.env.NODE_ENV === 'development') {
    if (!globalWithMongo._mongoClientPromise) {
      const uri = process.env.MONGODB_URI;
      if (!uri) {
        throw new Error('Please add your MongoDB URI to process.env.MONGODB_URI');
      }
      globalWithMongo._mongoClientPromise = new MongoClient(uri, options).connect();
    }
    return globalWithMongo._mongoClientPromise;
  } else {
    // In production, avoid top-level await.
    // Check for existence of URI only when this function is called.
    if (!globalWithMongo._mongoClientPromise) {
      const uri = process.env.MONGODB_URI;
      if (!uri) {
        throw new Error('Please add your MongoDB URI to process.env.MONGODB_URI');
      }
      globalWithMongo._mongoClientPromise = new MongoClient(uri, options).connect();
    }
    return globalWithMongo._mongoClientPromise;
  }
}

// We export the function itself instead of the result of the function call.
// This prevents the function from executing during the module evaluation phase
// of the Next.js build process.
export default getClient;
