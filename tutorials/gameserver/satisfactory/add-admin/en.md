---
slug: "add-admin"
language: "en"
title: "How to Add an Admin to Your Satisfactory Server"
description: "Add an admin to a Satisfactory server"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["satisfactory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Admin"
sort: 1
related: ["gameserver/satisfactory/add-savegame", "gameserver/satisfactory/change-max-players", "gameserver/satisfactory/change-server-name", "gameserver/satisfactory/create-backup"]
---

Satisfactory does not have an **admin list**. There is no admin file and no player ID you have to enter anywhere. Anyone who knows the **admin password** of your server and logs in with it via the **Server Manager** has admin rights.

> [!NOTE]
> Admin rights apply to managing the server in the Server Manager – that is, settings, worlds and save games. In the game itself there is neither an admin role nor separate admin chat commands.

## Claim the server

If no name and no admin password have been set for your server yet, it counts as **unclaimed**. In that case the game guides you through two dialogs when you connect for the first time.

1. **Add the server**\
   Add your server in the Server Manager – the process is described in [Join Server](/tutorials/gameserver/satisfactory/join-server).

2. **Set a server name**\
   The game first asks for a name for the server. This name is shown in your server list later on.

3. **Set the admin password**\
   Then you define the admin password. After that you are the administrator of the server.

## Log in as admin

On a server that has already been claimed, log in like this:

1. **Open the Server Manager**\
   Start Satisfactory, select **Server Manager** in the main menu and choose your server.

2. **Switch tabs**\
   Select any tab other than **Status**. The game reports that you are not authenticated.

3. **Authenticate**\
   Click **Authenticate**.

4. **Enter the admin password**\
   Enter the admin password and confirm. You then have access to all tabs of the Server Manager.

## Add another admin

Since there is no admin list, you make a fellow player an admin by giving them the admin password.

1. **Share the admin password**\
   Share the admin password of your server with the person who should get admin rights.

2. **Let them add the server**\
   That person adds your server in their own Server Manager – you can find the IP address and the **Game Port** in your **dashboard**.

3. **Let them authenticate**\
   They log in with the admin password via **Authenticate** and then have the same rights as you.

> [!WARNING]
> Anyone with the admin password has full control over the server – including settings, save games and passwords. Only share it with people you trust.

## Revoke admin rights

Individual admins cannot be removed because there is no list. You revoke the rights by changing the admin password – afterwards all admins have to log in again with the new password.

You change the server name as well as the admin and server password on the **Server Settings** tab of the Server Manager. The detailed steps are described in [Set Admin Password](/tutorials/gameserver/satisfactory/set-admin-password).

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
> This also removes the server name, the server password and the certificate of the server – existing save games are kept. If the server is shown as offline in your server list afterwards, remove the entry in the Server Manager and add it again.

> [!WARNING]
> **No kick and no ban**
>
> Satisfactory does not offer a function to kick or ban players – neither in the game nor in the Server Manager. The console in the Server Manager has no player management commands either. Who is allowed on your server is controlled solely through the server password on the **Server Settings** tab under **Player password protection**.
