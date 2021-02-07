Note for electron-builder:
If the app folder is existed in the project, electron-builder won't build the native dependencies, make sure to remove the app folder first before build native dependencies

Why electron-builder works:
Electron builder uses prebuilt binaries online, not all versions have the prebuilt binary, so keep track with sqlite3 and electron version make sure the binary built by the contributor e.g.
https://mapbox-node-binary.s3.amazonaws.com/sqlite3/v4.1.0/electron-v6.0-win32-x64.tar.gz might work for now
If failed to download the binary, electron-builder will attempt to build with the windows-build-tools, I never build successfully with this.

TODO
- move sqlite3 to main process
- create db file when db file not found when loaded
- restructure main process scripts put electron package.json in app folder, so that sqlite3 package will be isolated from renderer scripts

2021-02-06
Before getting started:
Make sure your machine has XQuartz

Need to run
ip=$(ifconfig en0 | grep inet | awk '$1=="inet" {print $2}')
xhost + $ip
sudo xhost +

Then can run 
docker-compose up

References:
- https://github.com/juanda/electron-docker
- https://fredrikaverpil.github.io/2016/07/31/docker-for-mac-and-gui-applications/