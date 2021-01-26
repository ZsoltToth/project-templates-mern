# MERN Template - Backend

Source: JavaScript - ES2015

Scripts
 - style: check the syntax of your code for coding conventions
 - style:fix: fix your coding convention violations if it is possible
 - start: start the server
 - start:dev: developer mode, restart if the code is modified
 - test: run tests
 - test:coverage: run tests with coverage report
 - qualityGate: run tests and fails if coverage of lines is less than 40% (prety low, student friendly threshold)

Pre Commit Hooks
 - [conventional commit](https://www.conventionalcommits.org/en/v1.0.0/) message checking
   - in the commit message use only lower case characters!
 - code quality check (style & test scripts)

Testing
 - Put tests next to the tested file. For example, service.js and service.test.js
 - Jest is used for testing
 - [FIRST](https://medium.com/@tasdikrahman/f-i-r-s-t-principles-of-testing-1a497acda8d6) Principles should be considered

Run from IDE (WebStorm)
 - Start MongoDB with ./docker/start-mongo-docker.sh
 - Run npm run start for starting the server with default configurations (works with docker)
 - Run npm run start:dev for development mode (restart if source is modified)
 - You can configure PORT and DB Connection via environment variables see config.js
 - dev, test and prod settings are supported, (dev is default)

Run with Docker
 - Use [DockStation](https://dockstation.io/)
 - docker-compose.yml starts the project with default settings
   - Port 3000
   - __corresponding environment and build arguments should match!__
   
Build for Production
 - Run build-frontend.sh script to generate public directory.
 - Run docker-compsoe-prod.yml to start the backend in production mode.
