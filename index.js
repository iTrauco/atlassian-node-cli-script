#!/usr/bin/env node --harmony
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
            var link = res.body.links.html.href;
            console.log('Snippet created: %s', link);
        });

    });
})

.parse(process.argv);