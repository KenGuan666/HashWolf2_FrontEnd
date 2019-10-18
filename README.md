# HashWolf2

## Install
Before proceeding, please make sure you have [Node 10 LTS](https://nodejs.org/en/download/) installed.

Install expo with 
```
npm install -g expo-cli
```

(For MAC only) If you encountered `Error: EACCES: permission denied, access '/usr/local/lib/node_modules'`, [here](https://stackoverflow.com/questions/48910876/error-eacces-permission-denied-access-usr-local-lib-node-modules-react) is a quick fix.

P.S. the problem is the admin of the file is not your local user.

## Run

Please first make sure the [HashWolf2-BackEnd](https://github.com/hkdragon9/HashWolf2_BackEnd) is running properly.

Config the `.env` file so the `LOCAL_IP` environment variable matches your device's private IP. Click the corresponding link to learn how to find your private IP for [Windows](https://www.whatismyip.com/how-to-get-your-local-ip-address-on-windows-10/) [MacOS](http://osxdaily.com/2010/11/21/find-ip-address-mac/) [Linux](https://opensource.com/article/18/5/how-find-ip-address-linux)

Start the project with
```
cd mobileApp
npm install
npm start
```

This will take you to a server page. Check the tunnel connection near bottom-left corner.

Download `Expo` app on your phone and scan the QR code with camera app. The app will be running on your phone within the `Expo` app.

