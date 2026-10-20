---
slug: "change-version"
language: "en"
title: "How to Change the Version on a Minecraft Java Edition Server"
description: "Change the Minecraft version, server platform and build of a Minecraft Java Edition server in the EmeraldHost dashboard"
tags: []
date: "2023-10-16"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Change Version"
sort: 8
related: ["gameserver/minecraft/create-backup", "gameserver/minecraft/install-plugins", "gameserver/minecraft/install-mods", "gameserver/minecraft/fix-server-crashes"]
---

In Minecraft, a "version" refers to a specific release of the game, e.g. `1.21.1`. Each version brings changes to the gameplay, game mechanics and features. For players to be able to connect to your server, their game version has to match the server's version.

In the EmeraldHost dashboard, you change the version with the **Change Version** wizard. There you choose not only the Minecraft version but also the server platform (e.g. Paper, Fabric or NeoForge) and the build.

> [!WARNING]
> Changing the version requires a server restart. Depending on the option you choose, all existing files are deleted. Make sure to create a backup first (see [Create a Backup](/tutorials/gameserver/create-backup)).

## Open the wizard

You can reach the **Change Version** wizard in your server's dashboard in three ways:

- via the **Change Version** icon in the header row
- via the **Actions** dropdown → **Change Version**
- in **Overview**, in the **Server Information** box, via the pencil icon next to **Version**

## Change the version

1. **Choose the server platform**\
   In the first step, **Server Platform**, select the server software, e.g. **Vanilla**, **Paper**, **Purpur**, **Spigot**, **Fabric**, **Forge**, **NeoForge**, **Quilt**, **Velocity** or **BungeeCord**. Some platforms such as **Waterfall** and **Quilt** are marked with a warning icon.

   > [!NOTE]
   > Plugins only run on plugin platforms such as Paper, Purpur or Spigot, and mods only run on mod loaders such as Fabric, Forge or NeoForge. If you switch platforms, your existing plugins or mods may no longer work.

2. **Choose the release channel**\
   In the **Release Channel** step, choose between **Stable** (recommended) and **Snapshot** (experimental). **Stable** is the right choice for a regular server. Snapshots are test versions and may contain bugs.

3. **Choose the Minecraft version**\
   In the **Minecraft Version** step, select the version you want from the dropdown.

4. **Choose the build**\
   In the **Build** step, select the build of the server software. **Latest (Recommended)** is selected by default. You can usually keep this selection.

5. **Review and choose an option**\
   In the **Review** step, you see a summary of your selection. Under **Reinstall options**, you decide what happens to your data:

   - **Change version only**: The version is changed without deleting any files. The server then restarts quickly.
   - **Change version + Delete files**: All existing files are deleted and the server is completely reinstalled.

   > [!IMPORTANT]
   > With **Change version + Delete files**, you lose all files on the server, including your worlds, plugins, mods and configurations. Back up everything you want to keep beforehand.

6. **Apply the changes**\
   Click **Apply Changes**. As the wizard indicates, this requires a server restart.

> [!TIP]
> The wizard shows the hint **Backup recommended**. A backup is especially important if you switch back to an older version: worlds that have already been loaded with a newer version often can no longer be opened correctly with an older one.

## Java version

Each Minecraft version requires a matching Java version. You can see which Java version your server uses in the **Config Editor** under **Java version**.

| Minecraft Version        | Required Java Version |
| ------------------------ | --------------------- |
| 1.20.5 and higher        | Java 21 or higher     |
| 1.18 to 1.20.4           | Java 17 or higher     |
| 1.17.x                   | Java 16 or higher     |
| 1.13 to 1.16.5           | Java 8 or higher      |
| 1.12.x and older         | Java 8                |

> [!NOTE]
> Newer Minecraft versions may require an even newer Java version. If your server does not start after changing the version, check the **Console** for an error about the wrong Java version.
