## Section 18.1: Completely uninstall Node.js on Mac OSX

In Terminal on your Mac operating system, enter the following **2 commands**:

- lsbom -f -l -s -pf /var/db/receipts/org.nodejs.pkg.bom | while read f; do sudo rm /usr/local/${f}; done

- sudo rm -rf /usr/local/lib/node /usr/local/lib/node_modules /var/db/receipts/org.nodejs.*
