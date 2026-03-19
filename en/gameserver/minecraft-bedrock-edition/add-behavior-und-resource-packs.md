---
description: Step-by-step instructions on how to add behavior and resource packs to your Minecraft Bedrock Edition server.
---

# How to Add Behavior and Resource Packs to Your Minecraft Bedrock Edition Server

## Prerequisites

- Access to the server folder (either via an SFTP connection or direct access to the server files)
- You can find the SFTP access data in the overview of your game server.
- A behavior pack in the format .mcpack or .mcaddon
- Text editor (such as Notepad, Notepad++, Windows Editor or Visual Studio Code)

## To add a Behavior Pack and Resource Packs, follow these steps

1. <b>Download Behavior Pack</b><br>
   Download a Behavior Pack of your choice and unzip the files with a suitable program (like WinRAR or 7-Zip).

2. <b>Upload Packs</b><br>
   Connect to your server via the FTP tool. Upload the Behavior Pack folder to /behavior\_packs and the Resource Pack folder (if available) to /resources\_packs.

3. <b>Restart Server</b><br>
   Restart the server via the web interface.

4. <b>Create JSON Files</b><br>
   Create two new files with the names "`world_resource_packs.json`" and "`world_behavior_packs.json`".

5. <b>Copy Resource Info</b><br>
   Open the file "manifest.json" in the Resource Pack folder. Copy the UUID and version number and paste them into the "world\_resource\_packs.json" file. Pay attention to the correct formatting.

6. <b>Copy Behavior Info</b><br>
   Repeat the same process for the "`world_behavior_packs.json`" file and the corresponding Behavior Pack folder.

7. <b>Upload JSON Files</b><br>
   Upload both `.json` files to the World subfolder on your server.

8. <b>Restart and Verify</b><br>
   Restart your server and make sure that the packs are installed correctly.

### Now you can get started and have fun! With these steps, you should be able to successfully use Behavior and Resource Packs on your Minecraft Bedrock server
