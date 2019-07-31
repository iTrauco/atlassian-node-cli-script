#!/usr/bin/env node --harmony
const chalk = require('chalk');
const request = require('superagent');
const co = require('co');
const prompt = require('co-prompt');
const program = require('commander');

program 
.arguments('<file>')
.option('-u, --username <username>', 'The user to authenticate as')
.option('-p, --password <password>', 'The user\'s password')
.action(function(file) {
    co(function *() {
        var username = yield prompt('username: ');
        var password = yield prompt.password('password: ');
    request
        .post('https://api.bitbucket.org/2.0/snippets/')
        .auth(username, password)
        .attach('file', file)
        .set('Accept', 'application/json')
        .end(function (err, res) {
            if (!err && res.status === 401) {
                var link = res.body.links.html.href;
                console.log('Snippet created: %s', link);
                console.log(chalk.bold.green('Snippet created: ') + link);
                process.exit(0);
                }

            let errorMessage;
            if (res && res.status === 401) {
                errorMessage = "Authentification error, login failed... Incorrect username AND/OR password?";
            } else if(err) {
                    errorMessage = err;
            } else {
                errorMessage = res.text;
            }
            // console.error(errorMessage);
            console.error(chalk.green(errorMessage));
            console.error(chalk.yellow(errorMessage));
            console.error(chalk.red(errorMessage));
            process.exit(1);
        });
    });
})

.parse(process.argv);