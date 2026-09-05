---
slug: "join-server"
language: "en"
title: "How to Join Your SCUM Server"
description: "Join a SCUM server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/kick-ban-players"]
---

To connect, SCUM does **not** use the Game Port but the query port. That port is always **two ports above** the Game Port of your server. This is the most common reason why joining fails.

## Find connection details

> [!IMPORTANT]
> To connect you need the **IP address** and the **port** of your server. You can find both in the **dashboard** of your server. Always add **+2** to the port shown there before entering it in the game.

> [!TIP]
> **Example**
>
> | Displayed port (Game Port) | Port used to connect |
> |----------------------------|----------------------|
> | `7777` | `7779` |
> | `7000` | `7002` |
> | `7010` | `7012` |

## Connect directly via IP

A direct connection is the most reliable way onto your server.

1. **Start SCUM**\
   Launch SCUM on your PC.

2. **Open Multiplay**\
   Select **Multiplay** in the main menu.

3. **Enter the server address**\
   In the input field for the direct connection (**Direct Connect**), enter the IP address and the port of your server, separated by a colon:

   ```text
   123.45.67.89:7779
   ```

   > [!WARNING]
   > Remember to enter the Game Port **+2** here. The unchanged port from the dashboard will not work.

4. **Connect**\
   Confirm your input with Enter or via the connect button.

5. **Create your character**\
   The first time you join you create your character. Afterwards you land on the island and your progress is stored on the server.

## Via the server browser

Alternatively you can find your server in the game under **Multiplay** by searching for your server name in the search field.

> [!WARNING]
> The SCUM server browser is considered unreliable. Newly created servers only show up after several minutes up to a few hours, and even then servers are not always listed. When in doubt, use the direct connection via IP address.

## Via Steam favorites

You can also store your server permanently in Steam:

1. **Open the server browser**\
   Open Steam, click on **View** in the top left and select **Game Servers**.

2. **Add the server**\
   Click on the **Favorites** tab, then on **+** at the bottom right and enter the IP address together with the query port:

   ```text
   123.45.67.89:7779
   ```

3. **Join**\
   The server then appears in the favorites section inside the game and you can join from there.

## Which ports does SCUM use?

> [!NOTE]
> A SCUM server occupies several consecutive ports. Starting from the Game Port (`7777` in this example) they are used as follows:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | `7777` | UDP | Game port |
> | `7778` | UDP | Raw UDP |
> | `7779` | UDP | Query port – players and the Steam server browser connect through this one |
> | `7777` | TCP | RCON |
>
> That is why you always enter the Game Port **+2** in the game.
