---
slug: "set-admin-password"
language: "en"
title: "How to Set an Admin Password on Your Satisfactory Server"
description: "Set an admin password on a Satisfactory server"
tags: []
date: "2026-04-12"
visibility: "public"
updated: "2026-07-31"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Admin Password"
sort: 8
related: ["gameserver/satisfactory/create-backup", "gameserver/satisfactory/download-savegame", "gameserver/satisfactory/join-server", "gameserver/satisfactory/set-server-password"]
---

You need the admin password to log in as an administrator in-game. You define it in the **Server Manager** – it is not stored in any configuration file you could edit via SFTP.

> [!NOTE]
> Satisfactory stores the server name, the admin password and the server password in a file starting with `ServerSettings.` that contains the Game Port of your server in its name. This file is not a readable text file – so always set the password through the Server Manager.

## Set the admin password while claiming

If no admin password has been set for your server yet, it counts as **unclaimed**. In that case you define the password right when you add the server in the Server Manager.

1. **Add the server**\
   Add your server in the Server Manager – the process is described in [Join Server](/tutorials/gameserver/satisfactory/join-server).

2. **Set a server name**\
   The game first asks for a name for the server.

3. **Set the admin password**\
   Then you define the admin password. After that you are the administrator of the server.

## Change the admin password

1. **Open the Server Manager**\
   Start Satisfactory, select **Server Manager** in the main menu and choose your server.

2. **Authenticate**\
   Switch to any tab other than **Status**, click **Authenticate** and log in with the current admin password.

3. **Open the server settings**\
   Switch to the **Server Settings** tab.

4. **Change the password**\
   Change the entry for the admin password there and confirm your input.

5. **Log in again**\
   All admins then have to log in again with the new password via **Authenticate**.

> [!TIP]
> Only share the admin password with trusted players. Anyone who knows it has full control over your server. You can read more about this in [Add Admin](/tutorials/gameserver/satisfactory/add-admin).

> [!CAUTION]
> **Forgot the admin password**
>
> If you no longer know the admin password, you can reset the server:
>
> 1. Stop the server via the dashboard.
> 2. Connect via [SFTP](/tutorials/gameserver/establish-sftp-connection) and open the directory `/.config/Epic/FactoryGame/Saved/SaveGames/`.
> 3. Delete the file starting with `ServerSettings.` that contains the Game Port of your server in its name.
> 4. Start the server. It now counts as unclaimed again and can be claimed anew.
>
> This also removes the server name, the server password and the certificate of the server – existing save games are kept.
