---
slug: "link-java-with-bedrock"
language: "en"
title: "How to Enable Bedrock Crossplay on a Minecraft Java Edition Server"
description: "Enable crossplay on a Minecraft Java Edition server"
tags: []
date: "2025-08-09"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Link Java with Bedrock"
sort: 29
related: ["gameserver/minecraft/upload-world", "gameserver/minecraft/use-tp-command", "gameserver/minecraft/setup-bluemap", "gameserver/minecraft/setup-dynmap"]
---

With the **GeyserMC** and **Floodgate** plugins, Minecraft Bedrock Edition players (smartphone, console, Windows) can play on your Java server – even without a Java account.

> [!WARNING]
> **Caution**
>
> GeyserMC requires its **own port**. Do **not** use your server's default port!

## Step 1: Install the plugins

1. **Download the plugins**\
   Download the **Spigot** version of [GeyserMC](https://geysermc.org/download?project=geyser) and [Floodgate](https://geysermc.org/download?project=floodgate).

2. **Upload the plugins**\
   Upload both files to the `plugins` folder. If you don't see the folder, start your server once to create it.

3. **Restart the server**\
   Restart your server so the config files are created.

> [!NOTE]
> If your server does **not** run on the current Minecraft version, additionally install [ViaVersion](https://www.spigotmc.org/resources/viaversion.19254/) so newer Bedrock clients can join.

## Step 2: Claim a port

1. **Open network**\
   Open the "Network" section in your dashboard. There you will find an overview of all available ports.

2. **Choose a port**\
   Choose a free port and note it down.

> [!WARNING]
> **Important**
>
> Do **not** use your server's default port! If you use other plugins with their own port (e.g. [Simple Voice Chat](/tutorials/gameserver/minecraft/setup-simple-voice-chat)), each one needs its own port.

## Step 3: Configure GeyserMC

1. **Open the config**\
   In the file browser, open the file `plugins/Geyser-Spigot/config.yml`.

2. **Enter the port**\
   In the `bedrock:` section, find the `port:` line and enter your chosen port from step 2:

   ```yaml
   bedrock:
     port: YOUR_PORT
   ```

3. **Check the auth type**\
   In the `java:` section, find the `auth-type:` line and make sure it is set to `floodgate`:

   ```yaml
   java:
     auth-type: floodgate
   ```

4. **Save the changes**\
   Save the file.

> [!TIP]
> You can leave the remaining settings at their defaults – `address: 0.0.0.0` and `clone-remote-port: false` are already correct.

## Step 4: Allow chat for Bedrock players

1. **Open the file**\
   Open the file `server.properties`.

2. **Change the entry**\
   Find `enforce-secure-profile=true` and change the value to `false` – otherwise Bedrock players cannot chat:

   ```text
   enforce-secure-profile=false
   ```

3. **Restart the server**\
   Save the file and restart your server to apply all changes.

## Step 5: Connect from Bedrock

1. **Add the server**\
   Start Minecraft Bedrock Edition, click **Play**, switch to the **Servers** tab and select **Add Server**.

2. **Enter the connection details**\
   Enter your server's IP address as the **server address** and replace the pre-filled port `19132` with **your chosen port** from step 2.

3. **Connect**\
   Save the server and connect.

> [!NOTE]
> Bedrock players appear on the server with a `.` in front of their name by default – this avoids conflicts with Java accounts.

> [!TIP]
> **Test the connection**
>
> In the server console you can run `geyser connectiontest <server-ip> <port>` to check whether your Bedrock port is reachable.

> [!WARNING]
> **Note for existing setups**
>
> Older guides instructed copying the `key.pem` file from the Floodgate folder into the Geyser folder. This is **no longer necessary** – delete any existing copy there, as it can cause connection errors.
