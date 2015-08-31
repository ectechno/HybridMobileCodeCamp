# hybrid-jqm-codecamp
Hybrid Mobile development using jQuery Mobile demo code

This Project includes
- Demo steps: 6 steps to build a cordova hybrid mobile application with jQuery Mobile.
- Google Play Publish: keystore file creation guide to deploy android app to GooglePlay
- hybrid-codecamp: Complete demo app sample

Welcome to the hybrid-jqm-codecamp wiki!

This is the guide to get started with Hybrid Mobile App Development using jQuery Mobile.

Demo flow as follows.

### STEP 0 - Prerequisite

1. Set up Cordova on your PC. ([Apache Cordova Documentation - Starter Guide](http://cordova.apache.org/docs/en/3.6.0/guide_cli_index.md.html#The%20Command-Line%20Interface))   
1.1 Download and install Node.js. [Download](https://nodejs.org/)  
1.2 Download and install a git client, if you don't already have one. [Download](https://git-scm.com/downloads)
1.3 Install the cordova module using npm utility of Node.js.  (npm install -g cordova)
1.4 Add the npm directory to your PATH in order to invoke globally installed npm modules.  
1.5 Success - you should be able to run cordova on the command line with no arguments and it should print help text.  

2. Set up Platform ([Apache Cordova Documentation - Platform Guide](http://cordova.apache.org/docs/en/4.0.0/guide_platforms_index.md.html#Platform%20Guides))  
2.1 For Android ([Android Platform Guide]  (http://cordova.apache.org/docs/en/4.0.0/guide_platforms_android_index.md.html#Android%20Platform%20Guide))
2.2 Cordova for Android requires the Android SDK (Need Android SDK Tools v19.1.0 or higher for Cordova 3.6.0)  
2.3 For Cordova command-line tools to work, you need to include the SDK's tools and platform-tools directories in your PATH  
2.4 Add the paths for java and ant.   


### STEP 1 - Create Project

1. Create a cordova project ([Create guide](http://cordova.apache.org/docs/en/4.0.0/guide_cli_index.md.html))  
1.1 cordova create codecamp com.codecamp.hybrid "Hybrid Codecamp"  
1.2 codecamp - specifies a directory to be generated for your project  
1.3 com.codecamp.hybrid - provides your project with a reverse domain-style identifier  
1.4 "Hybrid Codecamp" - application's display title  
  
2. Add platform: cordova platform add android (To do this you need to move into codecamp folder. i.e cd codecamp)

### STEP 2 - jQuery Mobile

This tutorial in detail can be found at [Demo Flow (with Code)](https://github.com/razmik/hybrid-jqm-codecamp/blob/master/Demo%20steps/Demo%20flow%20(with%20Code).txt)

1. Available Hybrid Mobile Frameworks ([Compare](http://mobile-frameworks-comparison-chart.com/))  
2. JQuery Mobile References  
2.1 jQuery Mobile Official Web Site [Go](http://jquerymobile.com/)  
2.2 API Documentation [Go](http://api.jquerymobile.com/)  
2.3 Demos Documentation [Go](http://jquerymobile.com/demos/)  

### STEP 3 - Test the initial project

1. Copy cordova.js from android platform folder (Just for testing purposes)  
Level 1 - Chrome/Firefox browser - Run index.html using Google Chrome Dev tools  
Level 2 - Remote debuggin with Google Chrome- https://developer.chrome.com/devtools/docs/remote-debugging  
Level 3 - Build from PhoneGap or Cordova - cordova build android  

### STEP 4 - Plugins

1. Plugin Directory [Go](http://plugins.cordova.io/#/)
2. Camera Plugin [Go](https://cordova.apache.org/docs/en/3.0.0/cordova_camera_camera.md.html)

### STEP 5 - Build

1. For android, need android SDK 19.1.0 or higher (If you are using Cordova 3.6.0)
1.1 If not installed, type android -v in cmd and install the required version
2. Remove cordova.js and cordova_plugin.js from www folder
3. Update with new icons and screens (platform/android/res)
4. Update the version details, App name, and other details for the app using config.xml file
5. Build the app using - cordova build android

### STEP 6 - Create Keystore file

Source: http://developer.android.com/tools/publishing/app-signing.html#signing-manually

Command: 
keytool -genkey -v -keystore hybridday-nsbm.keystore -alias hybridday-nsbm -keyalg RSA -keysize 2048 -validity 10000

Keystore Password: hybridday-nsbm
Key Password: hybridday-nsbm

### STEP 7 - Release

1. Create a Google Developer Account ([Go](https://play.google.com/apps/publish/signup/))  
2. Build the app - release version  
2.1. Check the ant.propertise file under - ..\mobile-cia\phonegap\InvoiceApproval\platforms\android  
2.2. Should be directed to keystore file.  
Ex: key.store=D:\\path\\to\\the\\project\\keyname.keystore  
key.alias=alias-name (Ex: nsbm_hybrid_day)  
2.3. Update the config.xml file with the version number  
2.4. Build with cordova - $ cordova build android --release  
It required​ the following passwords:  
Certificate Password: hybridday-nsbm  
Keystore Password: hybridday-nsbm  

### STEP 8 - Publish on GooglePlay  

1. Go to the Developer Console (https://play.google.com/apps/publish/?dev_acc=07134135294894721319#AppListPlace)  
2. Go to Store Listing Tab and make the neccessary changes to screen shots and descriptions.  
3. Go to APK tab and Upload the new APK to production  
4. Publish the app (Publish will go into production within 4-5 hours approximately)   

Codebase - https://github.com/razmik/nsbm-codecamp

For further information - Contact razmik89@gmail.com