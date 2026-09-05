---
slug: "join-server"
language: "en"
title: "How to Join Your The Lord of the Rings Return to Moria Server"
description: "Join a The Lord of the Rings Return to Moria server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 4
related: ["gameserver/the-lord-of-the-rings-return-to-moria/add-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

Return to Moria has **no public server browser**. You can reach your server in two ways: with the **invite code** the server prints on startup, or through a **direct connection** using the IP address and port.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the **Game Port** of your server in the **dashboard**. Return to Moria only uses the Game Port for connecting – this game does not have a separate **Query Port**.

## Join with the invite code

The invite code is the easiest way, because your friends need neither the IP address nor the port.

1. **Start the server**\
   Start your server via the dashboard and wait until it has fully booted.

2. **Read the invite code**\
   Open the **console** in the dashboard. As soon as the server session begins, the server prints the invite code there.

   > [!TIP]
   > The code is also written to your server's log file, which you can download via [SFTP](/tutorials/gameserver/establish-sftp-connection):
   >
   > ```text
   > /Moria/Saved/Logs/Moria.log
   > ```

3. **Start the game**\
   Launch Return to Moria and wait for the main menu to load.

4. **Open the join menu**\
   Select the option for joining a world (**Join World** or **Join Other World**).

5. **Enter the code**\
   Type the invite code into the search field and confirm. The server is found and you can join.

## Connect directly via IP

The direct connection works independently of the invite code and is the most reliable way onto your server.

1. **Start the game**\
   Launch Return to Moria on your PC or console.

2. **Open the join menu**\
   Select **Join Other World** in the main menu.

3. **Open the advanced options**\
   Open the **Advanced Join Options** there and switch to the **Direct Join** section.

4. **Enter the server address**\
   Enter the IP address (or the domain) of your server and the **Game Port** from the dashboard into the corresponding fields. If a password is set for your server, enter it in the same window.

5. **Connect**\
   Confirm your input with **Join Server**.

## Password protected server

If a password is set for your server, your friends need it both when joining with the invite code and when connecting directly.

> [!WARNING]
> **Caution**
>
> The password is case-sensitive. Pass it on to your friends exactly as it is stored in your server settings.

> [!NOTE]
> The `OptionalPassword` entry in `MoriaServerConfig.ini` is applied automatically from your server settings on every start. Changing it directly in the file therefore does not persist.

## Crossplay and player count

> [!NOTE]
> Players on **Steam**, the **Epic Games Store**, **PlayStation 5** and **Xbox Series X|S** can all join the same server. No special access is required for consoles. A maximum of **eight players** can play on a server at the same time.

## Reset the invite code

If you want a new invite code – for example because the old one ended up in the wrong hands – delete the file the code is generated from.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Delete the seed file**\
   Delete the following file:

   ```text
   /Moria/Saved/Config/InviteSeed.cfg
   ```

4. **Start the server**\
   Start your server. On the next session start a new invite code is generated and printed to the console.

> [!WARNING]
> **Caution**
>
> The old invite code stops working afterwards. Share the new code with everyone who should still be able to join.

## No server browser

> [!WARNING]
> **Caution**
>
> Return to Moria has **no public server list**. Your server never shows up anywhere automatically – without the invite code or a direct connection nobody can join.

> [!NOTE]
> The values `ListenPort`, `AdvertiseAddress` and `AdvertisePort` in `MoriaServerConfig.ini` are set automatically for your server on every start. Do not change them manually – your changes are overwritten and your server may become unreachable.
