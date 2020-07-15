## Section 19.7: Setting alias for node version

If you want to set some alias name to installed node version, do:
- nvm alias <name> <version>

Similary to unalias, do:
- nvm unalias <name>

A proper usecase would be, if you want to set some other version than stable version as default alias. 
default aliased versions are loaded on console by default.

**Like**:
- nvm alias default 5.0.1

Then every time ***console/terminal*** starts 5.0.1 would be present by default.
**Note**:
- nvm alias # lists all aliases created on nvm