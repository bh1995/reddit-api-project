# Redditor Analyzer App

## Description
The Redditor Analyzer App is a React application that presents statistics about a Reddit user's behavior based on their recent comments. It offers a unique insight into users' activity patterns and sentiment, primarily focusing on the timing, sentiment, and subreddit involvement of their comments.

## Installation Instructions
This project is designed for development using Github Codespaces. The development server starts automatically when the workspace is opened. For building and deploying the app, use the command `npm build`.

## Usage Instructions
To utilize the app, simply enter a Reddit user's name in the search bar provided. The app will then fetch and display the relevant statistics for that user.

## Features
- **Hourly Distribution**: Shows the distribution of the user's recent comments by hour, useful for identifying patterns that might suggest automated behavior (e.g., bot activity).
- **Sentiment Analysis**: Utilizes the "sentiment" JavaScript library to assign a sentiment score (ranging from 0-5, with 3 being neutral) to each comment. This analysis assumes the text is in English.
- **Word Cloud**: Creates a word cloud to visualize the subreddits most frequently associated with the user's recent comments.

## Contributing
Contributions to the Redditor Analyzer App are welcome. Please feel free to fork the repository, make changes, and submit a pull request for review. All changes are automatically pushed to the docker image on dockehub (bh1995/my-redditor-analyzer-app). 

