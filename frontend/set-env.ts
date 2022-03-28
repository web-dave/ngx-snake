const { writeFile } = require('fs');
const { argv } = require('yargs');

// read environment variables from .env file
require('dotenv').config();

// read the command line arguments passed with yargs
const environment =  argv.environment;
const isProduction = (JSON.parse(process.env['IS_PRODUCTION'] ?? '')) ?? environment === 'prod';

let targetPath = isProduction
    ? `./src/environments/environment.prod.ts`
    : `./src/environments/environment.ts`;

// we have access to our environment variables
// in the process.env object thanks to dotenv
const environmentFileContent =
    `export const environment = {
       production: ${Boolean(process.env['IS_PRODUCTION']) ?? isProduction},
       apiUrl: "${process.env['API_URL']}",
       DOMAIN: "${process.env['DOMAIN']}",
       CLIENT_ID: "${process.env['CLIENT_ID']}",
       audience: "${process.env['AUDIENCE']}",
};

`;// write the content to the respective file
writeFile(targetPath, environmentFileContent, function(err: any) {
    if (err) {
        // eslint-disable-next-line no-console
        console.log(err);
    }
    // eslint-disable-next-line no-console
    console.log(`Wrote variables to ${targetPath}`);
});

