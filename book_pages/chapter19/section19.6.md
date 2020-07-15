## Section 19.6: Run any arbitrary command in a subshell with the desired version of node

### List all the node versions installed

- nvm ls
  - v4.5.0
  - v6.7.0

### Run command using any node installed version
- nvm run 4.5.0 --version or nvm exec 4.5.0 node --version

### Running node v4.5.0 (npm v2.15.9)
- v4.5.0
- nvm run 6.7.0 --version or nvm exec 6.7.0 node --version
- Running node v6.7.0 (npm v3.10.3)
  - v6.7.0

### using alias

- nvm run default --version or nvm exec default node --version
- Running node v6.7.0 (npm v3.10.3)
- v6.7.0

### To install node LTS version

- nvm install --lts
- Version Switching
  - nvm use v4.5.0 or nvm use stable ( alias )
  