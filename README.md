<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Command Practice Tool w/ Leaderboard</h3>

  <p align="center">
    A simple frontend for a 'flash-card' esque command practice tool used to memorize Azure, Linux, Powershell, and various other commands.
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#improvements">Improvements</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project

This practice tool was made using Angular, TailWindCSS, and features to aid learning (show answer, command randomization, etc.). Users who visit the website are able to upload a maximum streak from a session (streak being number of commands completed without a single typing mistake).

Features:

- Dynamic user input validation
- A <a href="https://github.com/downsd16/Command-Practice-API">leaderboard</a> that supports caching
- Observables for asynchronous leaderboard loading indicators 
- Custom JSON files for command prompts and answers
- Intuitive indicator for users when command is incorrect (even if partially typed)
- Simplified use interface designed after an Apple terminal
- Multiple categories of commands (Linux, Azure PS, Azure CLI, Ubuntu, Networking, etc.) 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps. 


### Local Installation

1. Clone the repo
   ```sh
   git clone https://github.com/downsd16/command-practice.git
   ```
3. Install Packages
   ```sh
   cd <PATH_TO_PROJECT_ROOT_DIR>
   npm install
   ```
4. ng serve

### Deployment (GH Pages)

- Follow this helpful guide <a href="https://www.makeuseof.com/angular-app-github-deploy-using-angular-cli/">here</a>. 
    - May require additional packages or additional configuration of the build files

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

This tool is meant as a study aid for the AZ-204 exam, and for learning Azure. While memorization is important, understanding the concepts behind the commands is also important. Consider this a supplement for testing preparation and not an alternative to good ol' fashioned labs and projects! Feel free to fork this repository and customize your own practice tool.

All styles are implemented using TailWindCSS, Bootstrap, and the Angular Material Library. If you experience webpack issues, consider alternatives to Angular Material.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- IMPROVEMENTS -->
## Improvements

Some improvements I would make:

- Mobile accessibility/general performance improvements
- Command scrolling/history UI component
- User B2C authentication to allow users to sign in with third party
- Authenticate new user streaks/high scores using B2C token
    - Instead of prompting users for username/ID, we use email/B2C token field

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

- [LinkedIn](https://www.linkedin.com/in/devindowns5/)
- [Personal Website](https://hire-downs.dev)
- [Project Link](https://github.com/downsd16/hire-downs.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>