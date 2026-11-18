Final Project Report
Mrf Meow Cat Cafe
Group: IT-2501

Group Members:
•	Nikita Zuy
•	Aruzhan Abdrakhmanova
•	Abbaskhan Ibraimov
Website: https://v01demort.github.io/Final/
GitHub Repository: https://github.com/V01demort/V01demort.github.io

1. Introduction
Our final project is called Mrf Meow Cat Cafe. It is a website for a fictional cat cafe located in Astana, Kazakhstan.
We started working on this website during the Midterm project and continued developing it during the Endterm. For the Final project, we added more interactive features using JavaScript, jQuery, localStorage, and an external API.
The main goal of our project was to create a responsive website where visitors can learn about the cafe, see the menu, explore pictures of cats, and interact with different elements.

2. Website Structure
Our website consists of five pages.
Home Page
The Home page introduces our cat cafe. It contains information about the cafe and helps visitors navigate to other pages.

About Page
The About page describes our cafe and its rules. We also added a FAQ section containing five questions.
Users can click on the questions to show or hide the answers.
Menu Page
The Menu page displays the food and drinks available in the cafe.
We added a search function, category filters, and CRUD operations. Users can add new items, edit existing items, and remove items from the menu.
Our Cats Page
This page contains a gallery of cat photos.
Users can open images in a lightbox and switch between them using navigation buttons.
We also connected the Cat Facts API to display random facts about cats.
Contact Page
The Contact page includes a contact form, registration form, and demo sign-in functionality.
The registration form checks user input, including email format, password strength, and password confirmation.

4. Technologies Used
We used the following technologies in our project.
Technology	Purpose
HTML	Creating the structure of the website
CSS	Styling the pages
Bootstrap 	Responsive layouts and components
JavaScript	Interactive features and form validation
jQuery 	Animations and DOM manipulation
localStorage	Saving theme settings and login status
Fetch API	Getting data from an external API
JSON	Processing API responses
RegEx	Checking email format
We used Bootstrap, Flexbox, and Grid to make the website responsive on different screen sizes.
JavaScript and jQuery were used to add interactive elements and improve the user experience.
5. Implemented Features
4.1 Light and Dark Mode
We implemented light and dark themes on all pages.
The selected theme is saved in localStorage. When a user refreshes the page or opens another page, the previously selected theme remains active.
4.2 Registration and Sign-in
The registration form validates the information entered by the user.
It checks required fields, email format, password strength, and password confirmation.
We also created a demo sign-in system. It saves the login status in localStorage and keeps the user signed in after refreshing the page.
Users can sign out, which clears the saved login status.
This is a demonstration feature and does not use a real authentication server.
4.3 Menu CRUD Operations
We implemented CRUD functionality on the Menu page.
CRUD includes four operations:
•	Create - adding a new menu item.
•	Read - displaying existing menu items.
•	Update - editing an item.
•	Delete - removing an item.
We also added live search and category filters to make it easier to find menu items.
These operations are implemented using JavaScript and jQuery.
Menu changes are temporary and reset when the page is refreshed.
4.4 FAQ with jQuery
We created five frequently asked questions on the About page.
We used the jQuery  .slideToggle() method to show and hide answers with a sliding animation.
We also added indicators that change when questions are opened or closed.
4.5 Cat Gallery
The gallery allows users to view pictures of cats.
When an image is clicked, it opens in a lightbox. Users can navigate between images using Previous and Next buttons.
We used jQuery fade effects to make the transitions smoother.
4.6 API Integration
We used the public Cat Facts API:
https://catfact.ninja/fact
JavaScript sends requests using fetch() and receives data in JSON format.
The received cat fact is displayed dynamically on the website.
We also implemented error handling in case the API request fails.
6. Development Process
We developed our website in several stages.
During the Midterm project, we started building the basic website structure and design.
During the Endterm, we continued working on the pages and improved the website functionality.
For the Final project, we focused on adding the required interactive features, such as:
•	Light and dark mode
•	Form validation
•	Sign-in using localStorage
•	CRUD operations
•	FAQ using jQuery
•	Cat Facts API integration
We worked on different parts of the website and combined them into one project.
We used GitHub to store our code, track changes, and collaborate.
After completing the main features, we reviewed the website pages and prepared the project for publication using GitHub Pages.
7. Team Contributions
Our group consists of three members.
1.	Nikita Zuy
Nikita worked on the Contact page (contact.html) and the cat gallery (gallery.html).
His work included the contact-related interface, gallery functionality, and image generation.
2.	Aruzhan Abdrakhmanova
Aruzhan worked on the Home page (index.html), About page (about.html), and JavaScript file (script.js).
Her work included page content and JavaScript functionality.
3.	Abbaskhan Ibraimov
Abbaskhan worked on the main CSS file (style.css) and the Menu page (menu.html).
His work included styling the website, creating the menu interface, and working on its interactive features.
We combined our work into one website and used GitHub to manage project updates.

7. Screenshots
The following screenshots demonstrate the main pages and features of our website.
Figure 1. Home Page
 <img width="1919" height="971" alt="Снимок экрана 2026-11-18 134941" src="https://github.com/user-attachments/assets/4df16306-8cbe-431f-9100-60ecc0a10950" />

Figure 2. Menu Page
 <img width="1919" height="910" alt="Снимок экрана 2026-11-18 135011" src="https://github.com/user-attachments/assets/12e232a7-7b4c-4cd8-ac1c-2a2e6ad221e6" />

Figure 3. About Page
<img width="1919" height="914" alt="Снимок экрана 2026-11-18 135149" src="https://github.com/user-attachments/assets/8ce9f6f8-3a14-4537-b01a-47e3d7fcec7a" />
<img width="1919" height="918" alt="Снимок экрана 2026-11-18 135117" src="https://github.com/user-attachments/assets/3daadfa7-bc03-4867-8092-51d9eb53d4e9" />

Figure 4. Cat Gallery and API
 <img width="1919" height="912" alt="Снимок экрана 2026-11-18 135034" src="https://github.com/user-attachments/assets/f106b878-878d-4b8b-a467-8900b46eaf96" />

Figure 5. Contact Page  
<img width="1919" height="918" alt="Снимок экрана 2026-11-18 135117" src="https://github.com/user-attachments/assets/3daadfa7-bc03-4867-8092-51d9eb53d4e9" />
<img width="1919" height="922" alt="Снимок экрана 2026-11-18 135103" src="https://github.com/user-attachments/assets/82fe44e8-08ff-41d7-b59a-e7eaec5b9d83" />
Figure 6. Dark Mode
 <img width="952" height="575" alt="Снимок экрана 2026-11-18 145751" src="https://github.com/user-attachments/assets/c0799100-8bf8-4a65-bfc3-05e0a0a07f2c" />

8. AI Usage
We used AI tools to generate cat images for our website. These images were used in the gallery and other sections of the website.

9. Conclusion
During this project, we practiced HTML, CSS, Bootstrap, JavaScript, and jQuery.
We learned how to build responsive pages, validate forms, implement CRUD operations, use localStorage, and work with an external API.
We also gained experience collaborating on a group project using GitHub.
Compared to our Midterm and Endterm versions, the Final website contains more interactive features and improved functionality.
Overall, this project helped us understand how different web development technologies can be used together to create a functional website.

