## Movie Discovery Web Application
MovieBox

This is a Movie Discovery Web Application that allows users to search for movies, view details about them, and save their favorite movies. The application consumes data from the TMDB API and is built using Vite and React.

## Table of Contents
## Demo
## Features
## Getting Started
## Usage
## API Integration
## Error Handling
## Deployment
## Contributing
## License
## Demo
You can access the live demo of the Movie Discovery Web Application here("https://hngtask2-movie-app.netlify.app/").

## Features
### User Interface:

The application provides a responsive and visually appealing user interface based on the provided design.
The top 10 movies are listed on the homepage in a grid layout with their movie posters.
Each movie card displays the movie title and release date.

### Movie Details:

When navigating to the users can view the movie details page.
The movie details page displays:
Movie title
Release date (in UTC)
Runtime (in minutes)
Overview

### API Integration:

The application consumes the TMDB API to fetch movie data.
It uses the following API endpoint to fetch movie details by ID: https://api.themoviedb.org/3/movie/{movie_id}
Error Handling:

The application implements error handling to display meaningful error messages to users in case of API failures or other issues.

### Getting Started
Follow these steps to set up the project locally on your machine.

### Clone the repository:

git clone https://github.com/your-username/movie-discovery-app.git

### Navigate to the project directory:

cd movie-discovery-app

### Install dependencies:

npm install
Usage

After completing the setup, you can run the application locally:

npm run dev
The application will be available at http://localhost:3000 in your web browser.

### API Integration
The Movie Discovery Web Application uses the TMDB API to fetch movie data. You will need to obtain an API key from TMDB and configure it in your project to enable API integration.

### Error Handling
The application handles errors gracefully and displays meaningful error messages to users in case of API failures or other issues. Error messages are displayed on the user interface to provide feedback.

### Deployment
You can deploy the Movie Discovery Web Application on a platform of your choice. Here are some common deployment options:

GitHub Pages
Netlify
Vercel
Heroku
Make sure to configure the deployment settings according to the platform you choose.
