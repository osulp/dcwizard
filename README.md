# dcwizard
Data Sharing Wizard is an online tool to help OSU researchers and graduate students make appropriate and real time copyright decisions relating to data sharing and reuse. It is an application built with React and NodeJS.

## File structure
1. application/build: your final, production-ready build, this directory won’t exist until you run npm build.
2. application/node_modules: packages installed by NPM.
3. application/public: static files, files in the public directory will maintain the same file name in production such as index.html, manifest.json, or robots.txt.
4. application/src: the directory of Wizard, App.js and App.css.

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
