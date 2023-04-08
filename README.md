# MongoDB Setup Instructions

To use MongoDB in your project, you'll need to set up a MongoDB cluster and obtain your MongoDB credentials. Here are the steps to follow:

# Step 1: Create a MongoDB Cluster

To create a MongoDB cluster, follow these steps:

Go to the MongoDB Atlas website and create an account or sign in.
Click on the "Build a Cluster" button.
Follow the prompts to configure your cluster. You can choose a free tier cluster or select a paid option, depending on your needs.
Once your cluster is set up, click on the "Connect" button to view your cluster details.


# Step 2: Obtain Your MongoDB Credentials

To obtain your MongoDB credentials, follow these steps:

In your cluster details, click on the "Connect" button.
Select the "Connect Your Application" option.
Select your programming language and driver version.
Copy the connection string provided.


# Step 3: Create a .env File

To use your MongoDB credentials in your project, you'll need to create a .env file with the following format:

MONGODB_URI=mongodb://username:password@ac-n0zql8i-shard-00-00.59c8qoy.mongodb.net:27017,ac-n0zql8i-shard-00-01.59c8qoy.mongodb.net:27017,ac-n0zql8i-shard-00-02.59c8qoy.mongodb.net:27017/?ssl=true&replicaSet=atlas-2zmq4e-shard-0&authSource=admin&retryWrites=true&w=majority

# Step 4: Run npm start in terminal 

Run npm start to start th server

Browse the url "http://localhost:3000" to use th API

# API instructions --

## GET 
http://localhost:3000/    get all tasks
http://localhost:3000/:id  get single task

## POST
http://localhost:3000/   post a task

req.body syntax  {name:"task title" completed:true}

## PATCH
http://localhost:3000/:id  update single task

## DELETE
http://localhost:3000/:id  delete single task
