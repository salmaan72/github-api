# github-api
Api to get github user repositories
## Installation
- Clone the repository and navigate into the directory.
- Create a .env file by issuing command `cp example.env .env`
- Create a development config file by issuing following command `cp config/production.js config/development.js`
- open `development.js` file, change it's environment to development.
- command `npm install` or `npm i` to install dependencies.

### API
##### `localhost:3000/api/github/repos`  
query-params: access_token  
- Here access_token is the personal access token that can be generated at `github -> settings -> developer settings -> personal access token`
- access_token can be passed through query parameters like `localhost:3000/api/github/repos?access_token=****` or add it to the `.env` file.
- While creating token, make sure to tick mark the repos section for permissions.
- To get the paginated response, use the same API with **`limit`** and **`offset`** query parameters; example: `localhost:3000/api/github/repos?access_token=****&limit=2&offset=4`  
- offset can be omitted.
