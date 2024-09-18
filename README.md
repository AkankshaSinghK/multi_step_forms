# Project Overview

This project is a responsive multi-step form built with React. It allows users to fill in personal and address information through a series of steps and submit the form. The form includes client-side validation and uses local storage to save user input for persistence. The project is styled using Bootstrap for a clean and modern look, and additional custom styles and transitions are applied to enhance the user experience.

# Features

1. Multi-Step Form: Three-step form that collects personal and address information.
2. Form Validation: Each step of the form includes validation to ensure required fields are completed before moving to the next step.
3. Local Storage Integration: Data is saved to local storage, so users can resume where they left off if they leave the page.
4. Tab Navigation: Users can navigate between the form steps using buttons.
5. Responsive Design: The form is fully responsive, working well on mobile, tablet, laptop, and desktop screen sizes.
6. CSS Transitions: Subtle transitions and animations are added for a smoother and more interactive experience.

# Assumptions and Decisions Made

1. Bootstrap: The project uses Bootstrap for styling the form, layout, buttons, and navigation elements.

2. Local Storage: It is assumed that local storage is sufficient for storing temporary form data for this project, and no back-end server integration is required.

3. Responsive Design: Media queries and flexbox utilities are used to ensure responsiveness across small, medium, and large screen sizes.

4. Form Submission: The form submission is simulated, meaning no actual data is sent to a server. A "Thank You" message is displayed upon completion.

# Setup Instructions

# Prerequisites
1. Node.js and npm installed on your machine.
2. A code editor (like VSCode) for making changes to the codebase.

# Getting Started

1. Clone the Repository:

    git clone <repository-url>
    cd multi-step-forms

2. Install Dependencies: Navigate to the project folder and install dependencies by running:

    npm install

3. Start the Development Server: Run the following command to start the React development server:

    npm start

4. Open in Browser: Open your browser and navigate to:

    http://localhost:3000
    


# How to Use the Application

1. Step 1: Enter your personal information (name, email, phone).
2. Step 2: Enter your address details (address lines, city, state, zip code).
3. Step 3: Review the information you've provided and submit the form.
4. Upon submission, a "Thank You" screen will be displayed, indicating that the form has been successfully submitted.

