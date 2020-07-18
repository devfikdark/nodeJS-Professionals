## Section 40.2: Getting Started

IISNode does have a few requirements before you can host your Node.js app in IIS.

**Requirements**

- Node.js must be installed on the IIS host, 32-bit or 64-bit, either are supported.
- IISNode installed x86 or x64, this should match the bitness of your IIS Host.
- The Microsoft URL-Rewrite Module for IIS installed on your IIS host.
  - This is key, otherwise requests to your Node.js app won't function as expected.
- A Web.config in the root folder of your Node.js app.
- IISNode configuration via an iisnode.yml file or an <iisnode> element within your Web.config .