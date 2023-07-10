# Air Quality Index Tracker

## Table of Contents
1. [About](#about)
2. [Deployed App](#deployed-app)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
5. [Project Management](#project-management)
6. [Testing](#testing)
7. [Contributing](#contributing)
8. [Evaluation](#evaluation)

<a name="about"></a>
## About
This web app will allow users to track the Air Quality Index (AQI) for every city. By typing in the name of the country and pressing "Submit" button, the user can select the state from the dropdown, then by pressing submit again, the user will be provided by all the cities within that state. Once each of these values have been populated, the user can press the “Check Air Quality” button to display the air quality value for the selected city. IQAir’s API service was used to collect the data used for this Web App, as they offer an open, real-time database of air quality data that is aggregated from data sources such as government, environmental agencies and individual stations. 

The design of my application was developed using software design principles, and incorporates state-of-the-art developments to ensure effectiveness, maintainability, and scalability. I adopted a modular approach to ensure maintenance was easy to implement and improve code reusability for repeated functions. I leveraged user-centered design principles to maintain the intuitive and user-friendly interface of the web app and used principles of integration and interoperability to enable seamless communication with the API I used for this solution. 

In an effort to enhance code readability during the development of my application, I implemented the practice of naming my classes with unique identifiers. This promoted clean and organized code within my project and enabled me to easily reference my CSS and JavaScript files for styling and implementing functions. Implementing practices like these follows a key principle in software development, ensuring that my code is easily understandable and manageable for both myself the developer, and any others who may contribute towards the project in future. 

This app was designed using continuous deployment and development strategies to aid with productivity and product quality:

Continuous Integration (CI): The practice of merging code changes into a single central repository once the code has been tested for errors. This allows developers to detect issues early to aid in debugging.

Continuous Deployment (CD): The practice of automatically deploying code to production once the tests have been performed. Which allows for updates to be implemented quickly and ensures that the software is always available for deployment. 

<a name="Deployed App"></a>
## Deployed App
You can find my app deployed here on my Github Pages

<a href="https://dan-b12.github.io/Summ1/" target="_blank">AQI App</a>

<a name="features"></a>
## Features
* Search for any city to get its AQI
* Instantly access AQI data for cities
* Easy to use interface

<a name="technologies-used"></a>
## Technologies Used
* JavaScript
* HTML
* CSS
* Jest for testing

<a name="Project Management"></a>
## Project Management
To manage the requirements of my project effectively, I used the project tracking functionality in GitHub Project. This allowed me to create issues in line with the requirements for the project, and set timescales for each of these issues. 
GitHub projects provides an easy-to-use interface to implement Agile methodologies into my project, where the tracking and assigning tasks will be used until completion. 

To begin, I created a Kanban board with the intial requirements for the project, to visualize tasks that were in progress, and manage the flow of each task to completion. 


<a name="testing"></a>
## Testing
This project uses Jest for testing. To run the tests, use the following command:

<a name="contributing"></a>
## Contributing
If you'd like to contribute to my project, please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/YourFeatureName`
3. Commit your changes: `git commit -m 'Add features'`
4. Push to the branch: `git push origin feature/YourFeatureName`
5. Open a pull request

<a name="evaluation"></a>
## Evaluation
The project has been evaluated based on tests performed on the code I've written. 

#Testing new change to config between vscode and branches