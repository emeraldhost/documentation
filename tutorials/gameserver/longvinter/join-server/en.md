---
slug: "join-server"
language: "en"
title: "How to Join Your Longvinter Server"
description: "Join a Longvinter server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["longvinter"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Join Server"
sort: 5
related: ["gameserver/longvinter/add-savegame", "gameserver/longvinter/create-backup", "gameserver/longvinter/download-savegame", "gameserver/longvinter/kick-ban-players"]
---

Longvinter offers a server browser in the main menu. It contains a **Connect by IP** function that lets you connect directly to your own server. To connect you use the **Game Port**, not the Query Port.

## Find connection details

> [!IMPORTANT]
> You can find the IP address and the ports of your server in the **dashboard**. To join you need the IP address and the **Game Port**. The Query Port is only used so your server shows up in the public server list – you do not connect through it.

## Connect via Connect by IP

A direct connection is the most reliable way onto your server.

1. **Start Longvinter**\
   Launch Longvinter and wait until the main menu has loaded.

2. **Open the server browser**\
   Select **Server Browser** in the main menu.

3. **Open Connect by IP**\
   Click on **Connect by IP** at the top right above the server list.

4. **Enter the server address**\
   Enter the IP address and the Game Port of your server, separated by a colon:

   ```text
   <IP address>:<Game Port>
   ```

   > [!WARNING]
   > Enter the **Game Port** from the dashboard here. The connection will fail with the Query Port.

5. **Connect**\
   Confirm your input with Enter or via the connect button.

## Join via the server list

Your server also appears in the server list inside the **Server Browser**. Search for your server name there and join it with a click.

> [!NOTE]
> For your server to show up in the list, the **Query Port** has to be reachable. If it is not listed, use **Connect by IP** instead – that method works regardless of whether your server is listed.

## Password protected server

If your server has a password, you will be asked for it when joining.

> [!WARNING]
> The server password in Longvinter may only consist of letters and numbers. Special characters are not supported and can make it impossible for anyone to join.

## Server is shown in the wrong region

> [!NOTE]
> Longvinter sorts servers in the server list by region. If your server is shown in the wrong region, you can correct this with the `ServerRegion` key in the configuration file of your server:
>
> ```text
> /Longvinter/Saved/Config/LinuxServer/Game.ini
> ```
>
> Possible values are `EU`, `NA`, `SA`, `AS` and `AU`. First check whether your **dashboard** already offers a dedicated field for this. Stop your server before editing the file – see [Add Admin](/tutorials/gameserver/longvinter/add-admin).

## "Continue" takes you to the wrong server

> [!NOTE]
> **Continue** in the main menu reconnects you to the server you played on last. The developers list a known issue for it: the button does not always work reliably and can put you onto the wrong server. This is not caused by your server – your progress stays intact. Simply reconnect via **Connect by IP** or through the server list in that case.

## Which ports does Longvinter use?

> [!NOTE]
> A Longvinter server uses two ports:
>
> | Port | Protocol | Purpose |
> |------|----------|---------|
> | Game Port | UDP | Game data – players connect to your server through this one |
> | Query Port | TCP and UDP | Server query – makes your server appear in the server list |
>
> You can see which values apply to your server in the **dashboard**.

> [!WARNING]
> Longvinter is based on the Unreal Engine and transmits game data exclusively over **UDP**. An additional TCP port for the Game Port is not required – guides claiming otherwise are wrong.
