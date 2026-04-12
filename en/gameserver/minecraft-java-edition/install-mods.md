---
description: Install mods on a Minecraft Java server
---

# How to Install Mods on Your Minecraft Java Server

You can install mods on your server to add new content, mechanics or improvements.

:::: info Note
Mods only work with mod-capable server versions such as **Forge**, **NeoForge**, **Fabric** or **Quilt**. Vanilla, Spigot or Paper servers do not support mods. If you want to use plugins instead, see: [Install Plugins](install-plugins.md).
::::

## Where can I find mods?

You can find mods on the following platforms:

- [Modrinth](https://modrinth.com/mods)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods)

:::: warning Important
Only download mods from trusted sources. Mods from unknown sources may contain malicious code. Make sure the mod is compatible with your Minecraft version and mod loader (Forge, Fabric, etc.).
::::

## Add mods

1. <b>Download the mod</b><br>
   Download the desired mod as a `.jar` file. Make sure it matches your mod loader and Minecraft version.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Upload the mod</b><br>
   Upload the `.jar` file to the `/mods/` folder.

5. <b>Start the server</b><br>
   Start your server.

:::: tip Tip
After the first start, most mods create their own folder under `/config/` with configuration files that you can customize.
::::

## Remove a mod

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Delete the mod</b><br>
   Delete the mod's `.jar` file from the `/mods/` folder.

3. <b>Start the server</b><br>
   Start your server.

:::: info Note
Most mods must be installed on both the server and every player's client. Check the mod description to see if a client-side installation is required.
::::
