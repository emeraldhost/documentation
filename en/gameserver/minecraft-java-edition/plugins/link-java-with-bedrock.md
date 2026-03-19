---
description: Enable crossplay on a Minecraft Java Edition server
---

# How to Enable Bedrock Crossplay on a Minecraft Java Server

:::: tip Tip
Some Paper servers don't support Java 17 by default. In this case, add the following startup flag to bypass the check: -DPaper.IgnoreJavaVersion=true
::::

## Requirements

### General Requirements

1. A Minecraft Java Edition server version 1.16.5 or higher.

2. Java 17 or newer.

### Required Plugins

1. [GeyserMC](https://geysermc.org/download?project=geyser)

2. [Floodgate](https://geysermc.org/download?project=floodgate)

3. [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/)

4. [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/)

## Step 1: Upload Plugins

:::: info Info
If you don't see the ```plugins``` folder, start your server once to create it.
::::

1. <b>Open file browser</b><br>
   Open your Dashboard, select your server and go to the File Browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP Connection](/en/gameserver/establish-sftp-connection.md).

   <img src="/assets/gameserver/minecraft-java-edition/geysermc/1.png" />

2. <b>Upload plugins</b><br>
   Upload the plugins to the ```plugins``` folder.

3. <b>Restart server</b><br>
   Restart your server to load the plugins.

## Step 2: Configure GeyserMC

1. <b>Open folder</b><br>
   In the ```plugins``` folder, go to the ```Geyser-spigot``` folder.

2. <b>Open config</b><br>
   Open the ```config.yml``` file.

3. <b>Find entry</b><br>
   Search for the following entry:

   ```
   clone-remote-port: false
   ```

4. <b>Change value</b><br>
   Change the value to ```true```.

:::: tip Tip
To provide players with a better gaming experience, you can set the following options:

- ```command-suggestions``` to ```false```
- ```show-cooldown``` to ```actionbar```
::::

5. <b>Find auth-type</b><br>
   Search for the following entry:

   ```
   auth-type
   ```

6. <b>Change value</b><br>
   Change the value to ```floodgate```.

7. <b>Save changes</b><br>
   Save the file.

## Step 3: Configure Floodgate

1. <b>Open folder</b><br>
   In the ```plugins``` folder, go to the ```Floodgate``` folder.

2. <b>Download key</b><br>
   Download or copy the ```key.pem``` file.

3. <b>Paste key</b><br>
   Paste the ```key.pem``` file into the ```Geyser-spigot``` folder.

:::: tip Tip
To change the prefix for Bedrock players in chat, open the ```Config.yml``` in the Floodgate folder and modify the line: username-prefix: "_". Enter your desired prefix within the quotation marks. Keep a prefix to avoid issues with duplicate usernames.
::::

4. <b>Save changes</b><br>
   Save the file.

## Step 4: Allow Chat Messages from Bedrock Players

1. <b>Open file</b><br>
   Open the ```server.properties``` file.

2. <b>Find entry</b><br>
   Search for the following entry:

   ```
   enforce-secure-profile=true
   ```

3. <b>Change value</b><br>
   Change the value to ```false```.

4. <b>Save changes</b><br>
   Save the file.

## Step 5: Finalize & Test

1. <b>Restart server</b><br>
   Restart the server to apply all changes.

2. <b>Start Bedrock</b><br>
   Start Minecraft Bedrock Edition.

3. <b>Open servers tab</b><br>
   Click "Play" and go to the "Servers" tab.

4. <b>Add server</b><br>
   Click "Add Server" and enter your server details:

   ```
   Server Name      # Your desired name
   Server Address   # Your server IP
   Port             # Your server port
   ```

   <img src="/assets/gameserver/minecraft-java-edition/geysermc/2.png" />

5. <b>Connect</b><br>
   Click "Add Server" and connect.
