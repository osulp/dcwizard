# Data Sharing Wizard
Data Sharing Wizard is an online tool to help OSU researchers and graduate students make appropriate and real time copyright decisions relating to data sharing and reuse. It is an application built with React and NodeJS.

## File structure
1. application/build: your final, production-ready build, this directory won’t exist until you run npm build.
2. application/node_modules: packages installed by NPM.
3. application/public: static files, files in the public directory will maintain the same file name in production such as index.html, manifest.json, or robots.txt.
4. application/src: the directory of Wizard, App.js and App.css.

## How to run local host
1. Clone the Repo (git clone)
2. cd to dcwizard/application
3. npm start

## How to build the app
1. Clone the Repo (git clone)
2. cd to dcwizard/application
3. npm run build
4. troubleshoot: install missing npm modules (npm-install-missing)

## How to deploy the app to production
1. cd to dcwizard/application/build
2. scp * deploy-php@dcwizard.library.oregonstate.edu:/var/www/dcwizard.library.oregonstate.edu/current
3. DocumentRoot on prod: set in /etc/httpd/conf/dcwizard_library_oregonstate_edu.conf
4. log directory: /etc/httpd/logs/dcwizard.library.oregonstate.edu/
5. Production url: https://dcwizard.library.oregonstate.edu/

## How to reuse and customize the Wizard
1. The first step of reuse will be preparing your data by customizing the JSON template file called database.json. There are three data types in the JSON template:
* Title type: There is only one title type instance and its value will be used across the Wizard.
* Question type: This data type is what will hold your questions, where it will lead to, and where it originated from.
* Finished Type: This data type is for the last step of a question path.

This guide provides a detailed instruction on how to customize the JSON data: https://docs.google.com/document/d/16wi463cTQMSnkNnVxauIiXO5Zs0R6trixd0OInLSjYM/edit?usp=sharing
2. The second step of reuse will be customizing the Wizard application for your needs. The Wizard application includes two major files: 
* App.css: The style sheet used to define the web site.
* App.js: The main program written in the React JavaScript library.
3. The last step of the reuse will be deploying the customized Wizard to production. You need to contact the system administrator to allocate server space for running the Wizard.

