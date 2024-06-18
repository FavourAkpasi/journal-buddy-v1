# JournalBuddy V1

JournalBuddy is a web application that integrates OpenAI's language models to provide a unique journaling experience. It uses AI to analyze your entries, provide insights, and even suggest topics to write about.

## Features

- AI-powered journaling: Get insights and suggestions from OpenAI's language models.
- Easy to use: A simple and intuitive interface for journaling.
- Secure: Your journal entries are private and secure.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine.
- An API key from OpenAI.

### Installation

1. Clone the repository to your local machine using `git clone https://github.com/FavourAkpasi/journal-buddy-v1.git`.
2. Navigate to the project directory with `cd JournalBuddy`.
3. Install the dependencies with `npm install-all`.
4. Create a `.env` file in the root directory and add your OpenAI API key like so:
    ```
    OPENAI_API_KEY = your_api_key_here
    PORT = your_port_here
    OPENAI_PROJECT_ID = your_openai_project_id_here
    OPENAI_ORG_ID = your_openai_organization_here
    MONGO_URI = your_mongo_uri_here
    SECRET_KEY = your_secret_key_here
    ```
5. Start the application with `npm start`.

The application will start running at `http://localhost:3000` or on the port provided in the .env file created in step 4.

### Live Demo

The application is hosted on `http://journalbuddy.netlify.app`.
This is provided as a means to run a demo if you can not provide all the nessesary Enviroment variables for openAI and Mongo DB. 

further details on the Application's Architecture, Domain, Use cases etc can be dound in the documentation.pdf file located in the documentation folder 

## Running the tests

Run the tests with the following command:

```bash```
npm test


###  Built With

React.js - The Frontend

Node.js - The runtime environment

Express.js - The web application framework

OpenAI - The large language AI models

### Contributing

Please read CONTRIBUTING.md for details on our code of conduct, and the process for submitting pull requests to us.

### License

This project is licensed under the MIT License - see the LICENSE.md file for details.
