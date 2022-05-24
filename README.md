# Project informations

Name: Rodrigo Wanderley Personal Website <br />
Start date: 05/17/2022 <br />
Version: 001 <br />
Author's name: Rodrigo Wanderley <br />
E-mail: <boaventurarodrigo@yahoo.com.br> <br />
Git hub profile: <https://github.com/Rodrigowb> <br />
Linkedin profile: <https://www.linkedin.com/in/rodrigowanderleyboaventura> <br />

# Deployed project

https://app.rodwanderley.com/

# About the project

This project is a simple one page personal website, to show my specialities on the tech field and the technologies that I know. 

First I ideate the design in Figma and buit a high fidelity prototype for mobile use. Than I developed the website using ReactJs, focusing first on mobile, and than scaling for larger screens.

# About the deployment

The deployment was made using AWS S3 and GitHub actions, meaning that in every pull request to the main branch, the deployed website auto update.

## Steps for deployment:

1. Create a custom domain on Route 53 (rodwanderley.com)
2. Create a certificate to secure a HTTPS connection communication
3. Create a DNS record inside the certificate
4. Validate the DNS record in Route 53 using CNAME
5. Create a S3 Bucket to upload the dpeloyment files
6. Create a cloudfont distribution with a custom subdomain
7. Create a DNS record on Route 53 pointing to the distribution subdomain name
8. Create Actions on the GitHub repository to allow GitHub access the S3 Bucket
9. Set up the secrets on the GitHub repo
10. Set up the workflow on GitHub to allow update the deployment in every pull request to the master branch

Special thank you: https://www.youtube.com/watch?v=4mnJyUYTf8E


# Improvements idea

Create a REST API for backend with the spercialities and technologies to be used for the frontend. This will make the code less verbous and more scalable, because the frontend will iterate throught the API to buid the components.

# Technologies used

1. React
2. Node.js
3. Figma
4. Command Line
5. Git
6. AWS S3
