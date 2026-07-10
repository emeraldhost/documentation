---
description: Enable crossplay on a Minecraft Java Edition server
---

# How to Enable Bedrock Crossplay on a Minecraft Java Server

With the **GeyserMC** and **Floodgate** plugins, Minecraft Bedrock Edition players (smartphone, console, Windows) can play on your Java server — even without a Java account.

:::: warning Caution
GeyserMC requires its **own port**. Do **not** use your server's default port!
::::

## Step 1: Install the plugins

1. <b>Download the plugins</b><br>
   Download the **Spigot** version of [GeyserMC](https://geysermc.org/download?project=geyser) and [Floodgate](https://geysermc.org/download?project=floodgate).

2. <b>Upload the plugins</b><br>
   Upload both files to the `plugins` folder. If you don't see the folder, start your server once to create it.

3. <b>Restart the server</b><br>
   Restart your server so the config files are created.

:::: info Note
If your server does **not** run on the current Minecraft version, additionally install [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/) so newer Bedrock clients can join.
::::

## Step 2: Claim a port

1. <b>Open network</b><br>
   Open the "Network" section in your dashboard. There you will find an overview of all available ports.

2. <b>Choose a port</b><br>
   Choose a free port and note it down.

:::: warning Important
Do **not** use your server's default port! If you use other plugins with their own port (e.g. [Simple Voice Chat](setup-simple-voice-chat.md)), each one needs its own port.
::::

## Step 3: Configure GeyserMC

1. <b>Open the config</b><br>
   In the file browser, open the file `plugins/Geyser-Spigot/config.yml`.

2. <b>Enter the port</b><br>
   In the `bedrock:` section, find the `port:` line and enter your chosen port from step 2:

   ```yaml
   bedrock:
     port: YOUR_PORT
   ```

3. <b>Check the auth type</b><br>
   In the `java:` section, find the `auth-type:` line and make sure it is set to `floodgate`:

   ```yaml
   java:
     auth-type: floodgate
   ```

4. <b>Save the changes</b><br>
   Save the file.

:::: tip Tip
You can leave the remaining settings at their defaults — `address: 0.0.0.0` and `clone-remote-port: false` are already correct.
::::

## Step 4: Allow chat for Bedrock players

1. <b>Open the file</b><br>
   Open the file `server.properties`.

2. <b>Change the entry</b><br>
   Find `enforce-secure-profile=true` and change the value to `false` — otherwise Bedrock players cannot chat:

   ```
   enforce-secure-profile=false
   ```

3. <b>Restart the server</b><br>
   Save the file and restart your server to apply all changes.

## Step 5: Connect from Bedrock

1. <b>Add the server</b><br>
   Start Minecraft Bedrock Edition, click **Play**, switch to the **Servers** tab and select **Add Server**.

2. <b>Enter the connection details</b><br>
   Enter your server's IP address as the **server address** and replace the pre-filled port `19132` with **your chosen port** from step 2.

3. <b>Connect</b><br>
   Save the server and connect.

:::: info Note
Bedrock players appear on the server with a `.` in front of their name by default — this avoids conflicts with Java accounts.
::::

:::: tip Test the connection
In the server console you can run `geyser connectiontest <server-ip> <port>` to check whether your Bedrock port is reachable.
::::

:::: warning Note for existing setups
Older guides instructed copying the `key.pem` file from the Floodgate folder into the Geyser folder. This is **no longer necessary** — delete any existing copy there, as it can cause connection errors.
::::
