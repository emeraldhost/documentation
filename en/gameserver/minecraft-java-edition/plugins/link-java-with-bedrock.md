---
description: Enable crossplay on a Minecraft Java Edition server
---

# How to Enable Bedrock Crossplay on a Minecraft Java Server

:::: tip Tip
Some Paper servers don't support Java 17 by default. In this case, add the following startup flag to bypass the check: -DPaper.IgnoreJavaVersion=true
::::

## Requirements

### General Requirements

1. <b>A Minecraft Java Edition server version 1.16.5 or higher.</b><br>

2. <b>Java 17 or newer.</b><br>

### Required Plugins

1. [GeyserMC](https://geysermc.org/download?project=geyser)

2. [Floodgate](https://geysermc.org/download?project=floodgate)

3. [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/)

4. [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/)

## Step 1: Upload Plugins

:::: info Info
If you don't see the ```plugins``` folder, start your server once to create it.
::::

  1. <b>Open your Dashboard, select your server and go to the File Browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP Connection](/en/gameserver/establish-sftp-connection.md).</b><br>

  <img src="/assets/gameserver/minecraft-java-edition/geysermc/1.png" />

  2. <b>Upload the plugins to the ```plugins``` folder.</b><br>

  3. <b>Restart your server to load the plugins.</b><br>

## Step 2: Configure GeyserMC

  1. <b>In the ```plugins``` folder, go to the ```Geyser-spigot``` folder.</b><br>

  2. <b>Open the ```config.yml``` file.</b><br>

  3. <b>Search for the following entry:</b><br>

```
clone-remote-port: false
```

  4. <b>Change the value to ```true```.</b><br>

:::: tip Tip
To provide players with a better gaming experience, you can set the following options:

- ```command-suggestions``` to ```false```
- ```show-cooldown``` to ```actionbar```
::::

  5. <b>Search for the following entry:</b><br>

```
auth-type
```

  6. <b>Change the value to ```floodgate```.</b><br>

  7. <b>Save the changes.</b><br>

## Step 3: Configure Floodgate

  1. <b>In the ```plugins``` folder, go to the ```Floodgate``` folder.</b><br>

  2. <b>Download or copy the ```key.pem``` file.</b><br>

  3. <b>Paste the ```key.pem``` file into the ```Geyser-spigot``` folder.</b><br>

:::: tip Tip
To change the prefix for Bedrock players in chat, open the ```Config.yml``` in the Floodgate folder and modify the line: username-prefix: "_". Enter your desired prefix within the quotation marks. Keep a prefix to avoid issues with duplicate usernames.
::::

  4. <b>Save the changes.</b><br>

## Step 4: Allow Chat Messages from Bedrock Players

  1. <b>Open the ```server.properties``` file.</b><br>

  2. <b>Search for the following entry:</b><br>

```
enforce-secure-profile=true
```

  3. <b>Change the value to ```false```.</b><br>

  4. <b>Save the changes.</b><br>

## Step 5: Finalize & Test

  1. <b>Restart the server to apply all changes.</b><br>

  2. <b>Start Minecraft Bedrock Edition.</b><br>

  3. <b>Click "Play" and go to the "Servers" tab.</b><br>

  4. <b>Click "Add Server" and enter your server details:</b><br>

```
Server Name      # Your desired name
Server Address   # Your server IP
Port             # Your server port
```

<img src="/assets/gameserver/minecraft-java-edition/geysermc/2.png" />

  5. <b>Click "Add Server" and connect.</b><br>
