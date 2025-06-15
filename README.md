 WAPH-Web Application Programming and Hacking

## Instructor: Dr. Phu Phung

## Student

**Name**: Ryan Sippy

**Email**: [mailto:sippyrd@mail.uc.edu](sippyrd@mail.uc.edu)

**Short-bio**: Ryan Sippy is a 4th year Computer Science Student at UC.

![Ryan's headshot](https://media.licdn.com/dms/image/v2/D5603AQFmE1cSvdm1kw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1677790864588?e=1752710400&v=beta&t=rtORhB5W9rsb4PuYINAr7blSkPiz8wnifxQUCdlTp-8)

# Individual Project 1: Front-End Web Development

## Project Overview
This project is to create a professional profile website to showcase my front-end web development skills and other experiences to potential employers. This project has a variety of general, non-technical, and technical requirements that are discussed below.

## General Requirements
### Requirement 1
The first general requirement was to create and deploy a professional profile website on GitHub cloud. To do this, I had to create a new repository on GitHub with the name "SippyR.github.io", so that the webpage would be displayed at the url https://sippyr.github.io/.
Then, I had to create the "index.html" file in that repository, which is the HTML page displayed at that link.

### Requirement 2
The second general requirement was to create a link to an HTML webpage to introduce the "Web Application Programming and Hacking" course. I created a very basic HTML page that will be updated in the future with more details about the course.
I chose to include this link as part of my professional description on the main page.

## Non-Technical Requirements
### Requirement 1
The only non-technical requirement was to use an open-source CSS template or a framework such as Bootstrap. I chose to use a Bootstrap framework for my webpage. I decided to use the Bootstrap theme "Simply Me", which I was able to implement using the tutorial
on W3Schools https://www.w3schools.com/bootstrap/bootstrap_theme_me.asp.

## Technical Requirements
### Requirement 1
The first technical requirement was to use jQuery and one more JavaScript framework to implement JavaScript code. I used jQuery, which was introduced in Lab 2, to create a digital clock, an analog clock, and a button to show/hide my email.
Then, I chose to use Vue to create a button that would download my resume when it was clicked.

### Requirement 2
The second technical requirement was to integrate two public Web APIs: one, the jokeAPI, and the other, which would display a graphic. To do this, I used the same process as we used in Lab 2, creating an async function to get the joke and then calling that function every minute.
Then, for the API to display a graphic, I created a function that gets an XKCD comic graphic and displays it on the page. I created a button that would call the function so that the comic is only displayed when the user presses the button. I also made sure to make the image a responsive image, so that if would with in the Bootstrap formatting for the rest of the page.

### Requirement 3
The third technical requirement was to use JavaScript cookies to remember the client and display an alert with their last visit or if it is their first visit. To do this, I added some JavaScript code to check if there is a last visit cookie; if there is,
 display the alert using that cookie to get the user's last visit and then update the cookie with the date/time of their current visit. If there is not a last visit cookie, display the first time visit alert and then create a last visit cookie with the current date/time data in it.

