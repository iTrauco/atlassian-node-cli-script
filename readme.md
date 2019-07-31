# atlassian-node-cli-script

Node.js CLI automation script for the creation of Atlassian Suite 'snippets.'

## Instructions

**Requirements**
1. Node 
2. NPM 
3. Hihgly limited functionality without *Atlassian Suite BitBucket Account w/ Local SSH Access Configured*
*Atlassian Suite Docs:[SSH Key Setup Kb](https://confluence.atlassian.com/bitbucket/set-up-an-ssh-key-728138079.html)*

**Steps**

1. Clone this repo. 
```
git clone https://github.com/iTrauco/atlassian-node-cli-script
```
2. Change into the directory
```
cd atlassian-node-cli-script
```
3. Once inside the directory, install it globally w/ npm*
```
npm install -g
```
*Note, you will need to install the script in the 'index.js' file globally to run the 'snippet' command from your CLI. Global installation will install in your systems PATH.*

**Note** It is highly recommended to set the symlink of your system to the `index.js` in this repo by running `npm link` in your terminal after global installation is complete.

4. Test that the installation was successful with the following... 
```
snippet --help
```
5. If you have valid Atlassian Suite credentials configured locally w/ SSH use the following 'snippet' command followed by the 'name_of_my_file' as the argument; e.g... 
```
snippet test.txt
```

![Demo](https://github.com/iTrauco/atlassian-node-cli-script/blob/staging/assets/script-demo.gif)

**Preview**

The official Atlassian Suite Developer Docs for ['Snippets.'](https://developer.atlassian.com/bitbucket/api/2/reference/resource/snippets)

### PR/Branch History

This is a CLI-based script; gif 'snapshots' of the expected command line behavior has been left for personal referenc  but may be useful to others and can be viewed on the 'Summary/Overview' pages of each 'pushed' branch. 

![PR/Branch History](https://github.com/iTrauco/node-cli-script/blob/master/assets/2019-07-30%2020.27.33.gif)

1. Click on 'Branches' 

2. Locate the name of the branch you wish to preview

3. Click on the 'merge' number to the right

Any notes or visual info will be displayed here relevant to that branch. 
