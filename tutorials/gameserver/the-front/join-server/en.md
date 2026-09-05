---
slug: "join-server"
language: "en"
title: "How to Join Your The Front Server"
description: "Join a The Front server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/kick-ban-players"]
---

You join your The Front server through the in-game server browser. There you search for your server by its **name** and connect with a single click.

> [!NOTE]
> The Front does not provide an input field for a direct connection via IP address and port. Give your server a distinctive name so you can find it quickly in the server list.

## Find your server in the game

1. **Start The Front**\
   Launch The Front on your PC.

2. **Open the server list**\
   Click on **Servers** in the menu.

3. **Select Dedicated Server**\
   Switch to the **Dedicated Server** tab. All rented and self-hosted servers are listed here.

4. **Search for your server**\
   Type the name of your server into the search field in the top right corner. The list is filtered down to matching results.

   > [!TIP]
   > You can find the name of your server in the **dashboard**. If needed, search for a distinctive part of the name only – the search also matches partial terms.

5. **Mark the server as a favorite**\
   Click the star icon to the left of your server. Favorite servers appear at the top the next time you refresh the list, so you do not have to search again.

6. **Connect**\
   Click your server and confirm with **Connect** in the window that opens.

7. **Enter the password**\
   If you set a password for your server, you are prompted for it when joining. Enter it and confirm.

## Server does not appear in the list

1. **Check the server**\
   Check in the **dashboard** whether your server is actually running. A freshly started server needs a moment before it shows up in the server list.

2. **Refresh the list**\
   Refresh the server list in the game and search again.

3. **Check the name**\
   Compare the spelling: if you search for a name with a typo, the list stays empty. When in doubt, search for a short, distinctive part of the name only.

> [!NOTE]
> **Which ports does The Front use?**
>
> A The Front server occupies four ports that are usually assigned directly one after another. The actual values are assigned to your server in the **dashboard** – always rely on the numbers shown there.
>
> | Port | Purpose |
> |------|---------|
> | **Game Port** | The actual game traffic – your connection to the server runs through it |
> | Beacon port | Game Port + 1, internal queries of the game |
> | **Query Port** | Game Port + 2, your server announces itself in the server list through it |
> | Shutdown port | Game Port + 3, used to shut the server down cleanly |
>
> For your server to be found, the **Query Port** has to be reachable. You are then connected through the **Game Port**.

> [!TIP]
> If you want to use admin commands on your server, add yourself as an admin first: [Add Admin](/tutorials/gameserver/the-front/add-admin).
