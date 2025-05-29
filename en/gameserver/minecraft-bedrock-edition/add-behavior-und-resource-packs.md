---
description: Use of Behavior and Resource Packs on Minecraft Bedrock Server
---

# Add Behavior and Resource Packs

## Prerequisites

* Access to the server folder (either via an SFTP connection or direct access to the server files)
* You can find the SFTP access data in the overview of your game server.
* A behavior pack in the format .mcpack or .mcaddon
* Text editor (such as Notepad, Notepad++, Windows Editor or Visual Studio Code)

## To add a Behavior Pack and Resource Packs, follow these steps:

1. <b>Download and unzip Behavior Pack</b>
    * Download a Behavior Pack of your choice and unzip the files with a suitable program (like WinRAR or 7-Zip)

2. upload <b>behavior and resource packs to the server</b>
    * Connect to your server via the FTP tool. Upload the Behavior Pack folder to /behavior\_packs and the Resource Pack folder (if available) to /resources\_packs.

3. <b>Restart server</b>

4. <b>Create new JSON files</b>
    * Create two new files with the names "`world_resource_packs.json`" and "`world_behavior_packs.json`".

5. <b>Copy resource pack information</b>
    * Open the file "manifest.json" in the Resource Pack folder. Copy the UUID and version number and paste them into the "world\_resource\_packs.json" file. Pay attention to the correct formatting.

6. copy <b>Behavior Pack information</b>
    * Repeat the same process for the "`world_behavior_packs.json`" file and the corresponding Behavior Pack folder.

7. upload <b>JSON files to the server</b>
    * Upload both `.json` files to the World subfolder on your server.

8. <b>Restart the server and check the changes</b>
  * Restart your server and make sure that the packs are installed correctly.

### Now you can get started and have fun! With these steps, you should be able to successfully use Behavior and Resource Packs on your Minecraft Bedrock server.