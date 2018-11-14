# React Chatbot with Dialogflow

This chat bot was built using [Dialogflow](https://dialogflow.com/). In its current state, it simply responds to user input based on custom intents set in Dialogflow. Here is a [DEMO]() bot that answers questions about my education, work, and portfolio. The demo is configured with a Dialogflow API set to include answers that I have determined as well as general "Small Talk" answers set by default. 

## API Configuration

1. Setup Dialogflow project. Use this [article](https://tutorials.botsfloor.com/building-your-own-chatbot-using-dialogflow-1b6ca92b3d3f) for guidance. 
2. Set up Pusher app. Use this [article](https://pusher.com/tutorials/weather-chatbot-react-dialogflow) for guidance.

## Installation/Starting the app

Clone this repo locally 

```bash
git clone 
```

Download the dependencies

```bash
npm install
```

Complete .env.example with information from API configuration

```
PUSHER_APP_ID=<your pusher id>
PUSHER_APP_KEY=<your key>
PUSHER_APP_SECRET=<your secret>
PUSHER_APP_CLUSTER=<your cluster>
DIALOGFLOW_CLIENT_EMAIL=<your client email>
DIALOGFLOW_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n<your private key>\n-----END PRIVATE KEY-----\n"
```

Replace the Pusher App Key in App.js file with your own

```
const pusher = new Pusher('<your pusher key>', {
    cluster: 'us2',
    encrypted: true,
});
```

Start the React development server

```bash
npm run start
```

Start the backend server 

```bash
node server.js
```

Finally, go to localhost:3000 in the browser and initiate the chat

## Usage

An example of input would be something like this:

> **user:** What is your name? 
> **bot:**  My name is Tiffani. 
> **user:** What are your hobbies?
> **bot:** In my spare time, I enjoy painting, volunteering, and writing short stories.

## Acknowledgments

Many thanks to Srini Janarthanam and Ayooluwa Isaiah for writing great articles about building a chatbot app!

## License
[MIT](https://choosealicense.com/licenses/mit/)