---
description: Enable crossplay on a Minecraft Java Edition server
---

# How to Enable Bedrock Crossplay on a Minecraft Java Server

::: tip Tip
Some Paper servers don't support Java 17 by default. In this case, add the following startup flag to bypass the check: -DPaper.IgnoreJavaVersion=true
:::

## Requirements

### General Requirements

1. <strong>A Minecraft Java Edition server version 1.16.5 or higher.</strong>

2. <strong>Java 17 or newer.</strong>

### Required Plugins

1. [GeyserMC](https://geysermc.org/download?project=geyser)

2. [Floodgate](https://geysermc.org/download?project=floodgate)

3. [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/)

4. [ViaBackwards](https://www.spigotmc.org/resources/viabackwards.27448/)

## Step 1: Upload Plugins

::: info Info
If you don't see the ```plugins``` folder, start your server once to create it.
:::

  1. <strong>Open your Dashboard, select your server and go to the File Browser **or** connect to your server via SFTP. You can find instructions here: [Establish SFTP Connection](/en/gameserver/establish-sftp-connection.md).</strong>

  <img src="/assets/gameserver/minecraft-java-edition/geysermc/1.png" />

  2. <strong>Upload the plugins to the ```plugins``` folder.</strong>

  3. <strong>Restart your server to load the plugins.</strong>

## Step 2: Configure GeyserMC

  1. <strong>In the ```plugins``` folder, go to the ```Geyser-spigot``` folder.</strong>

  2. <strong>Open the ```config.yml``` file.</strong>

  3. <strong>Search for the following entry:</strong>

```
clone-remote-port: false
```

  4. <strong>Change the value to ```true```.</strong>

::: tip Tip
To provide players with a better gaming experience, you can set the following options:

- ```command-suggestions``` to ```false```
- ```show-cooldown``` to ```actionbar```
:::

  5. <strong>Search for the following entry:</strong>

```
auth-type
```

  6. <strong>Change the value to ```floodgate```.</strong>

  7. <strong>Save the changes.</strong>

## Step 3: Configure Floodgate

  1. <strong>In the ```plugins``` folder, go to the ```Floodgate``` folder.</strong>

  2. <strong>Download or copy the ```key.pem``` file.</strong>

  3. <strong>Paste the ```key.pem``` file into the ```Geyser-spigot``` folder.</strong>

::: tip Tip
To change the prefix for Bedrock players in chat, open the ```Config.yml``` in the Floodgate folder and modify the line: username-prefix: "_". Enter your desired prefix within the quotation marks. Keep a prefix to avoid issues with duplicate usernames.
:::

  4. <strong>Save the changes.</strong>

## Step 4: Allow Chat Messages from Bedrock Players

  1. <strong>Open the ```server.properties``` file.</strong>

  2. <strong>Search for the following entry:</strong>

```
enforce-secure-profile=true
```

  3. <strong>Change the value to ```false```.</strong>

  4. <strong>Save the changes.</strong>

## Step 5: Finalize & Test

  1. <strong>Restart the server to apply all changes.</strong>

  2. <strong>Start Minecraft Bedrock Edition.</strong>

  3. <strong>Click "Play" and go to the "Servers" tab.</strong>

  4. <strong>Click "Add Server" and enter your server details:</strong>

```
Server Name      # Your desired name
Server Address   # Your server IP
Port             # Your server port
```

<img src="/assets/gameserver/minecraft-java-edition/geysermc/2.png" />

  5. <strong>Click "Add Server" and connect.</strong>
