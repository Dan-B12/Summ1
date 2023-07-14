# Air Quality Index Tracker

## Table of Contents
1. [About](#about)
2. [Deployed App](#deployed-app)
3. [Features](#features)
4. [Technologies Used](#technologies-used)
5. [UX Design](#ux-design)
6. [Project Management](#project-management)
7. [Testing](#testing)
8. [Contributing](#contributing)
9. [Evaluation](#evaluation)

<a name="about"></a>
## About
This web app will allow users to track the Air Quality Index (AQI) for every city. By typing in the name of the country and pressing the "Submit" button, the user can select the state from the dropdown, and then by pressing Submit again, the user will be provided with all the cities within that state. Once each of these values has been populated, the user can press the “Check Air Quality” button to display the air quality value for the selected city. IQAir’s API service was used to collect the data used for this Web App, as they offer an open, real-time database of air quality data that is aggregated from data sources such as government, environmental agencies and individual stations. 

The design of my application was developed using software design principles and incorporates state-of-the-art developments to ensure effectiveness, maintainability, and scalability. I adopted a modular approach to ensure maintenance was easy to implement and improve code reusability for repeated functions. I leveraged user-centred design principles to maintain the intuitive and user-friendly interface of the web app and used principles of integration and interoperability to enable seamless communication with the API I used for this solution. 

To enhance code readability during the development of my application, I implemented the practice of naming my classes with unique identifiers. This promoted clean and organized code within my project and enabled me to easily reference my CSS and JavaScript files for styling and implementing functions. Implementing practices like these follows a key principle in software development, ensuring that my code is easily understandable and manageable for both myself the developer, and any others who may contribute towards the project in future. 

This app was designed using continuous deployment and development strategies to aid with productivity and product quality.

* Continuous Integration (CI): The practice of merging code changes into a single central repository once the code has been tested for errors. This allows developers to detect issues early to aid in debugging.

* Continuous Deployment (CD): The practice of automatically deploying code to production once the tests have been performed. Which allows for updates to be implemented quickly and ensures that the software is always available for deployment.


<a name="Deployed App"></a>
## Deployed App
You can find my app deployed here on my GitHub Pages

<a href="https://dan-b12.github.io/Summ1/" target="_blank">AQI App</a>

<a name="features"></a>
## Features
* Search for a country, state and city to get a city-specific AQI score.
* Instantly access AQI data for cities
* Easy-to-use interface

<a name="technologies-used"></a>
## Technologies Used
* JavaScript
* HTML
* CSS
* Jest for testing

<a name="ux-design"></a>
During the planning phase of my web application, I developed an initial UX design to create a high-quality user experience. The design was created using Figma, a web-based design tool used to design many interfaces such as websites, applications and logos. 

My design was based on providing a simple, easy-to-use web application for users to search for and display air quality data in a chosen city. This meant applying fundamental design principles to my application throughout the development of the project. Design principles used during development included consistency and simplicity and allowed me to create a visually appealing interface with a simple function to query the API data. 

The web application was originally designed to be used on desktop browsers, as shown in the design plans on the Figma project,  but through the process of building the application, I decided to optimize the display for mobile devices too. This will allow users to access my web application with ease across all their devices and opens up a larger user base from the mobile traffic. 

![image](https://github.com/Dan-B12/Summ1/assets/137525458/0b5c63af-c4aa-414a-9263-c01d6cf2773e)

As seen in the figure above, some changes had to be made to the UI during development to enable the functionality of the web application. Additional input boxes had to be made to the landing page so that cities could be queried for their air quality, and the gauge chart shown on the score page was difficult to meet in the timescale of this project. This is something I will look to implement in future as I believe it’s an important UX feature to improve the look and usability of the application.  

Access the link to my Figma project below:
<a href="https://www.figma.com/file/raxxlRou3CiFom3SYrnPxL/Desktop-Design?type=design&t=vHYSNATJy6q6jvth-6" target=”_blank”> Figma Project</a>

<a name="Project Management"></a>
## Project Management
In the project management phase of my project, I employed thorough planning and organization techniques to develop a structure for the workflow and timeline. I did this by breaking down sections of my project into smaller objectives, enabling me to set deadlines for each task and manage my time effectively. 

I also implemented agile methodologies, including iterative development and frequent testing of code and functions, to enable adaptability and responsiveness of changes to my code. Using these agile methodologies allowed me to quickly identify any issues within the code to then develop resolutions to the problems. 

To manage the requirements of my project effectively, I used the project tracking functionality in GitHub Project. This allowed me to create issues in line with the requirements for the project and set timescales for each of these issues. GitHub projects provide an easy-to-use interface to implement Agile methodologies into my project, where the tracking and assigning tasks will be used until completion.

To begin, I created a Kanban board with the initial requirements for the project, to visualize tasks that were in progress, and manage the flow of each task to completion. Among these tests were unit tests, integration tests and functional testing, where I mock-tested the performance of the API calls and returned values via my functions. 

![image](https://github.com/Dan-B12/Summ1/assets/137525458/f7228a8f-f890-4e48-a549-6bfc88a27d3d)

I then added the initial issues created for the project into a Project timeline, where I set deadlines to complete initial tasks for each issue, e.g. creating the initial HTML/CSS structure and website UX design in Figma.

![image](https://github.com/Dan-B12/Summ1/assets/137525458/ba78fb98-6bd7-4c4f-baae-0f1cbea128c4)

<a name="testing"></a>
## Testing
This project uses Jest for testing. To run the tests, use the following command in PowerShell on the app.test.js file after cloning the repository: 

"Npm test"

The use of verification and validation of code are vital steps in the software development process and were an important factor in the success of my web app. The use of verification in software engineering refers to the evaluation of artefacts (such as code, design and requirements) to ensure that they meet the design and implementations set at the beginning of the project. Validation is the practice of evaluating the software being developed against the user’s needs and the intended use of the project. 

Using these verification and validation techniques above, I was able to ensure that the quality and functionality of my developed application met the intended purpose and allowed me to resolve bugs and inconsistencies in my code. 

For this project I used the Jest testing framework, this fit my project perfectly as its designed to test both front-end and back-end web applications and provides a multitude of tools that assisted in writing the tests for my code. 

![image](https://github.com/Dan-B12/Summ1/assets/137525458/00151371-4948-4a24-9bf5-2bddd0ac8fff)

Another method of testing I used for this web application was Lighthouse, an open-source tool developed by Google. Lighthouse allows developers to audit their web applications to improve the quality and performance, and scores based on factors such as page load time, rendering performance and responsive design. Using Lighthouse, I was able to assess my application when displayed as a web page and make improvements based on the feedback I received. 

For the user input page, I could make some improvements to the Accessibility of the website, but I am happy with the current score. The improvements suggested for this page included the contrast ratio of the input buttons to the page background. However, I preferred to stick to the original design of the website as I believe it looks clean and professional. 

![image](https://github.com/Dan-B12/Summ1/assets/137525458/23c0667e-cfa6-40e7-8e0b-258d80fe3959)

And for the AQI score result page, Lighthouse analyzed this as a perfect score. Showing that the only issue according to the Lighthouse analysis is the contrast in colours, which can easily be fixed in future changes should it be needed. 

![image](https://github.com/Dan-B12/Summ1/assets/137525458/6cb23caf-5e8a-45c1-b819-057834f9f8d8)

Evaluating my project throughout the design of the application using Jest and Lighthouse allowed me to verify the performance and accessibility of my design from the onset. Enabling me to identify and resolve issues promptly during the creation of the codebase. 

As a result of this, following this test-driven method of development, I was able to develop a robust and reliable application that met the requirements specified in the planning stage of this project and provide a positive user experience for anyone accessing my site. 


<a name="contributing"></a>
## Contributing
If you'd like to contribute to my project, please follow these steps:

1. Fork the repository
2. Create your feature branch: `git checkout -b origin/main`
3. Commit your changes: `git commit -m 'fileName'`
4. Push to the branch: `git push origin main`
5. Open a pull request

<a name="evaluation"></a>
## Evaluation

Overall, I am extremely happy with the final result of my application, it fits the intended purpose of allowing users to search for the Air Quality Score for their selected city and provides a user-friendly front-end to search from. 

The web app allows users to search for a country, select the state in which the city is located, and then select the city to retrieve the AQI score for this city. The returned results allow for easy interpretation of the Air Quality in a city and are colour coded to represent the quality of the air, in line with other online sources. I designed the web pages for the app with user experience in mind, making elements on the page bold and clear with appealing and contrasting colour schemes that are easy to comprehend. 

I also considered many design principles during the development, ensuring the creation of a user-friendly and efficient web application. 

For starters, I utilized the principle of modularity in the development of my app, by creating each feature as a separate, independent module. An example is the multiple fetch functions created, which were added sequentially during development. This design enabled easier debugging and testing and allowed me to make code changes to one module without affecting others. 

Following this, the DRY (Don't Repeat Yourself) principle was used, ensuring that all classes and references in my code had an unambiguous representation. Allowing me to easily reference parameters and values when writing the CSS. 

Finally, I implemented responsive design principles in my HTML and CSS to make the application accessible across all devices, which I confirmed when testing on mobile devices and other browsers. This improves the user experience and makes the application more flexible.

In evaluating my approach, it's clear that the principles used made great contributions towards developing a robust and effective application. The use of modularity helped me to keep the codebase organized and manageable and understand my code to add further features. 

Although there were many strengths to my design, some improvements could be made to build on the user experience and functionality of the project. For example, I could implement some changes to aid site optimization and user experience if I were to share the website publicly. I could also make some changes to my JavaScript code including more comments for each line to ensure contributors can easily understand how the app functions.  

One improvement I would aim to implement in future would be a gauge chart to the results page, that moves depending on the AQI score for the city, this was in the initial plans for the project. Unfortunately, this was too complex a feature to implement within the timescale of the project. 

Another big improvement I could make to my web application would be to configure a build system for my application using Babel or Webpack, this would enable me to transpile my Javascript into a version that has a higher compatibility with older browsers and avoid displaying the functions/API in the web browser when the page is loaded. Following on from this, for future implementation of this web application, something I need to build is a back-end server to store the API key and configuration files, so they are not accessible on the front-end website, this could also be implemented in the Webpack as an environment variable. This is an extremely important security improvement I can make to the website so that potential malicious users cannot access the API key from the GitHub repository or the front-end website. Both of these changes are something I would have implemented into the project with additional time, are planned as future improvements for this project and have since been added to the Kanban board. 


