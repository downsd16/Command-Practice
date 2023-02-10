<a name="readme-top"></a>

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Hire-Downs.dev Personal Website</h3>

  <p align="center">
    A simple frontend to act as my <a href="https://hire-downs.dev"><strong>personal portfolio</strong></a> displaying my experience, education, and projects.
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

This portfolio was made with Angular, Bootstrap and Tailwindcss. 

Features:
- Asynchronous API calls for content loading
    - See <a href="https://github.com/downsd16/hire-downs-api/tree/main"><strong>hire-downs-api</strong></a> for details on API
- Dynamic content loading (supports 1-N project/education/experience elements)
- Dynamic skill/category filtering for projects
    - Automatically reads filter array from API
- GitHub Pages CI/CD to automatically deploy changes
- Custom SSL/TLS domain w/ certificate

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.


### Local Installation

1. Clone the repo
   ```sh
   git clone https://github.com/downsd16/hire-downs.dev.git
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

Feel free to fork this repository and create your own portfolio! For a low-code solution to the content API, see <a href="https://sanity.io">Sanity.io</a>. However, if you are looking a challenge/learn Azure microservices, the Azure Function API repository is linked at the top of this README, please feel free to implement that solution as well.

All styles are implemented using TailWindCSS, Bootstrap, and the Angular Material Library. If you experience webpack issues, consider alternatives to Angular Material.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- IMPROVEMENTS -->
## Improvements

Some improvements I would make:

- Mobile accessibility/general performance improvements
- Routing/AA for session specific experiences
- Azure Static Web App deployment
    - Use with hire-downs-api to disable anonymous calls
    - Enable application insights for traffic/scaling
    - App Configuration for environment variables/API key

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

- Devin Downs Email - downsd16@gmail.com
- [LinkedIn](https://www.linkedin.com/in/devindowns5/)
- [Personal Website](https://hire-downs.dev)
- [Project Link](https://github.com/downsd16/hire-downs.dev)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
