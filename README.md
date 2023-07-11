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
In the project management phase of my project, I employed thorough planning and organization techniques to develop a structure for the workflow and timeline. I did this by breaking down sections of my project into smaller objectives, enabling me to set deadlines for each task and manage my time effectively. 

I also implemented agile methodologies, including iterative development and frequent testing of code and functions, to enable adaptability and responsiveness of changes to my code. Using these agile methodologies allowed me to quickly identify any issues within the code to then develop resolutions to the problems. 

To manage the requirements of my project effectively, I used the project tracking functionality in GitHub Project. This allowed me to create issues in line with the requirements for the project, and set timescales for each of these issues. 
GitHub projects provides an easy-to-use interface to implement Agile methodologies into my project, where the tracking and assigning tasks will be used until completion. 

To begin, I created a Kanban board with the intial requirements for the project, to visualize tasks that were in progress, and manage the flow of each task to completion. 

![image](https://github.com/Dan-B12/Summ1/assets/137525458/2d72f83f-146e-43fe-8999-911125e4ca0d)


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

Overall, I am extremely happy with the final result of my application, it fits the intended purpose of allowing users to search for the Air Quality Score for their selected city and provides a user-friendly front-end to search from. 

The web app allows users to search for a country, select the state in which the city is located, then select the city to retrieve the AQI score for this city. The returned results allow for easy interpretation of the Air Quality in a city, and are colour coded to represent the quality of the air, in line with other online sources. I designed the web pages for the app with user experience in mind, making elements on the page bold and clear with appealing and contrasting colour schemes that are easy to comprehend. 

I also considered many design principles during the development, ensuring the creation of a user-friendly and efficient web application. 

For starters, I utilized the principle of modularity in the development of my app, by creating each feature as a separate, independent module. An example is the multiple fetch functions created, which were added sequentially during development. This design enabled easier debugging and testing and allowed me to make code changes to one module without affecting others. 

Following this, the DRY (Don't Repeat Yourself) principle was used, ensuring that all classes and references in my code had an unambiguous representation. Allowing me to easily reference parameters and values when writing the CSS. 

Finally, I implemented responsive design principles in my HTML and CSS to make the application accessible across all devices, which I confirmed when testing on mobile devices and other browsers. This improves the user experience and makes the application more flexible.

In evaluating my approach, it's clear that the principles used made great contributions towards developing a robust and effective application. The use of modularity helped me to keep the codebase organized and manageable and understand my code to add further features. 

Although there were many strengths to my design, some improvements could be made to build on the user experience and functionality of the project. For example, I could implement some changes to aid site optimization and user experience if I were to share the website publicly. I could also make some changes to the complexity of my JavaScript code to ensure contributors can easily understand how the app functions. 

An feature improvement I would aim to implement in future would be a gauge chart to the results page, that moves depending on the AQI score for the city, this was in the initial plans for the project. Unfortunately, this was too complex a feature to implement within the timescale of the project. 
