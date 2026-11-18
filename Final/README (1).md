# Mrf Meow cat cafe

**Group:** IT-2501  
**Website:** https://v01demort.github.io/Final/  
**Repository:** https://github.com/V01demort/V01demort.github.io

## About

A five-page website for a fictional cat cafe in Astana. We continued the same midterm and endterm website and added the final features to it.

## Pages

- Home - welcome page.
- About - cafe description, rules and FAQ.
- Menu - searchable and editable menu.
- Our Cats - cat photos, lightbox and cat facts API.
- Contact - contact form, registration and demo sign-in.

## Features

- Responsive HTML/CSS, Bootstrap, Flexbox and Grid layout.
- Registration form with live feedback, email RegEx, password strength and confirmation.
- Live menu search, category buttons and Create/Read/Update/Delete table.
- Photo lightbox with previous/next buttons and jQuery fade effects.
- Light/dark mode on all pages.
- Demo sign-in with validation, saved login status and sign-out (no password stored).
- Five FAQ questions with jQuery and indicators.
- Random cat fact from the public [Cat Facts API](https://catfact.ninja/fact) using JSON and error handling.

## Technologies

HTML5, CSS3, Bootstrap 5.3.8 (CDN), JavaScript, jQuery 3.7.1 (CDN), localStorage, Fetch API, JSON.

## Group members and work areas

| Member | Endterm work |
| --- | --- |
| Nikita Zuy | contact.html, gallery.html, images generation |
| Aruzhan Abdrakhmanova | about.html, script.js, index.html |
| Abbaskhan Ibraimov | style.css, menu.html |

## Screenshots

Screenshots will be added later.

### Home Page
<img width="1919" height="971" alt="image" src="https://github.com/user-attachments/assets/b5f84fbd-653e-4a05-b068-8eaea506f65a" />
### About Page
<img width="1919" height="914" alt="image" src="https://github.com/user-attachments/assets/811cb341-32c0-435e-a522-9d491e19f28a" />

### Menu Page
<img width="1919" height="910" alt="image" src="https://github.com/user-attachments/assets/fe9ace52-4c58-402c-8a5f-3e73de918a5d" />

### Our Cats
<img width="1919" height="912" alt="image" src="https://github.com/user-attachments/assets/2cb448e2-b290-44bc-a1d5-db444bfdd355" />

### Contact Page
<img width="1919" height="922" alt="image" src="https://github.com/user-attachments/assets/ec013149-2a05-4a72-88d5-491721f777a8" />
<img width="1919" height="918" alt="image" src="https://github.com/user-attachments/assets/a4ceda2f-ca04-4903-b175-b4c147573a80" />

The website can be opened directly through GitHub Pages:
https://v01demort.github.io/Final/

To run it locally:
1. Download the repository from GitHub.
2. Extract the ZIP file.
3. Open the Final folder.
4. Open index.html in a browser.

The project can also be opened in Visual Studio Code using Live Server.
An internet connection is needed for Bootstrap, jQuery and the Cat Facts API.

## How the Features Work

Most of the interactive features are implemented using JavaScript and jQuery.
The menu uses CRUD operations to add, display, edit and delete items. Users can also search for items and filter them by category.
The registration form checks user input before showing a success message. The demo sign-in uses localStorage to save the login status.
The light/dark mode also uses localStorage to remember the selected theme.
The cat facts feature sends a request to an external API using Fetch and displays the JSON response on the page.

## Project Limitations

This is a front-end project, so some features are only for demonstration.

- Registration and sign-in do not use a real authentication system.
- There is no backend database.
- Menu changes reset after refreshing the page.
- The contact form does not send real messages.
- Cat facts require an internet connection.

## Conclusion

For the Final project, we added more interactive features to our previous website.
We worked with JavaScript, jQuery, form validation, CRUD operations, localStorage and API requests.
This project helped us practice the topics we studied during the course and improve our teamwork skills.
