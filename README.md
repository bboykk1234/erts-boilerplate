Note for electron-builder:
If the app folder is existed in the project, electron-builder won't build the native dependencies, make sure to remove the app folder first before build native dependencies

Why electron-builder works:
Electron builder uses prebuilt binaries online, not all versions have the prebuilt binary, so keep track with version e.g.
https://mapbox-node-binary.s3.amazonaws.com/sqlite3/v4.1.0/electron-v6.0-win32-x64.tar.gz might work for now