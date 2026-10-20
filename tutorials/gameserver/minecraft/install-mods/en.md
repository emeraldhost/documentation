---
slug: "install-mods"
language: "en"
title: "How to Install Mods on Your Minecraft Java Edition Server"
description: "Install mods on a Minecraft Java Edition server"
tags: []
date: "2026-04-12"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Install Mods"
sort: 23
related: ["gameserver/minecraft/improve-performance", "gameserver/minecraft/increase-slots", "gameserver/minecraft/install-plugins", "gameserver/minecraft/join-server"]
---

You can install mods on your server to add new content, mechanics or improvements.

> [!NOTE]
> Mods only work with mod-capable server versions such as **Forge**, **NeoForge**, **Fabric** or **Quilt**. Vanilla, Spigot or Paper servers do not support mods. If you want to use plugins instead, see: [Install Plugins](/tutorials/gameserver/minecraft/install-plugins).

## Install mods via the dashboard (recommended)

The easiest way to install mods is directly in the dashboard. On the **Plugins & Mods** page you can browse mods from Modrinth and CurseForge that match your mod loader and Minecraft version. Mods that only run in the game (client-side only) are hidden there.

1. **Open the page**\
   Open your server in the dashboard and click **Plugins & Mods** in the sidebar. On a NeoForge server, for example, the page is called **Mods**.

2. **Search for a mod**\
   Enter the name, ID or link of the mod in the **Suche** (Search) field. Use **Quelle** (Source) to choose between **Modrinth** and **CurseForge**.

3. **Filter the results**\
   Sort the results via **Sortieren nach** (Sort by) by **Beliebtheit** (Popularity), **Downloads**, **Kürzlich aktualisiert** (Recently updated) or **Name**, and narrow them down further with **Kategorien** (Categories). Each card shows the name, last update, downloads, author and description. The button with the external link opens the mod's page.

4. **Install the mod**\
   Click **Installieren** (Install) on the mod you want. The mod is installed directly on your server together with all required dependencies.

5. **Restart the server**\
   Restart your server so the mod is loaded.

> [!TIP]
> You can install complete modpacks via the **Modpacks** page in the sidebar – see [Change Modpack](/tutorials/gameserver/minecraft/change-modpack).

## Add mods manually via SFTP

If a mod is not available in the dashboard, you can also upload it yourself.

### Where can I find mods?

You can find mods on the following platforms:

- [Modrinth](https://modrinth.com/mods)
- [CurseForge](https://www.curseforge.com/minecraft/mc-mods)

> [!WARNING]
> **Important**
>
> Only download mods from trusted sources. Mods from unknown sources may contain malicious code. Make sure the mod is compatible with your Minecraft version and mod loader (Forge, Fabric, etc.).

### Upload a mod

1. **Download the mod**\
   Download the desired mod as a `.jar` file. Make sure it matches your mod loader and Minecraft version.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Upload the mod**\
   Upload the `.jar` file to the `/mods/` folder.

5. **Start the server**\
   Start your server.

> [!TIP]
> After the first start, most mods create their own folder under `/config/` with configuration files that you can customize.

## Remove a mod

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Delete the mod**\
   Delete the mod's `.jar` file from the `/mods/` folder.

3. **Start the server**\
   Start your server.

> [!NOTE]
> Most mods must be installed on both the server and every player's client. Check the mod description to see if a client-side installation is required.
