---
slug: "get-server-verified"
language: "en"
title: "How to Get Your SCP: Secret Laboratory Server Verified"
description: "Get a SCP: Secret Laboratory server verified by Northwood"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Get Server Verified"
sort: 6
related: ["gameserver/scp-secret-laboratory/create-backup", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/install-exiled-plugins", "gameserver/scp-secret-laboratory/install-labapi-plugins"]
---

For your server to appear on the public server list of SCP: Secret Laboratory, it has to be verified by Northwood. Without verification, players can only reach your server via direct connect – see [Join server](/tutorials/gameserver/scp-secret-laboratory/join-server). This guide shows you the requirements and the two official ways to get verified.

## Requirements

Before you start the verification, the following points must be fulfilled. The keys mentioned here are located in the file `config_gameplay.txt` – see [Edit config files](/tutorials/gameserver/scp-secret-laboratory/edit-config-files) for where it is stored and how to edit it:

- **Community Server Guidelines read**: Your server must comply with the official [Community Server Guidelines](https://scpslgame.com/CSG.pdf) by Northwood.
- **`server_name` set**: Your server needs a server name.
- **`contact_email` set**: A valid email address you have access to. Emails to the verification team must be sent from exactly this address.
- **Server info set up**: A server info must be set up via `serverinfo_pastebin_id` that contains at least one way for players to contact your server team, for example an email address or a Discord invite. Server rules are recommended in addition. See [Set up server info](/tutorials/gameserver/scp-secret-laboratory/set-up-server-info) for how to do this.
- **`max_players` at most 60**: Verified servers are allowed a maximum of 60 slots – servers using more than 60 slots are removed from the list.
- **Stable operation**: Northwood expects verified servers to be available as continuously as possible. A verified server that stays offline for more than 14 consecutive days loses its verification again.

> [!WARNING]
> Your server must stay online during the entire verification process. The process can take up to a week.

## Option 1: Verification via the console

1. **Check the requirements**\
   Make sure all points from the requirements are fulfilled and start your server via the dashboard.

2. **Open the console**\
   Open the console in the dashboard of your server.

3. **Start the verification**\
   Enter the following command into the console:

   ```text
   !verify static
   ```

   The command is entered without a leading `/` – only remote admin commands need that. The variant `!verify dynamic` is meant for dynamic IP addresses; the IP address of your EmeraldHost server is static.

4. **Wait for the connection check**\
   The command makes Northwood's central servers check whether your server is reachable. If the check fails or you cannot get any further at this point, use the email option instead.

## Option 2: Verification via email

Alternatively, you can request verification via email from Northwood's Safety & Compliance team.

1. **Note down the connection details**\
   Note down the IP address and the game port of your server from the **Overview** of the dashboard.

2. **Compose the email**\
   Compose the email from exactly the address you entered in `contact_email`. The email must contain:

   - the public IPv4 address of your server
   - whether the IP address is static or dynamic (for EmeraldHost: static)
   - the game port of your server

   Write the email cleanly in proper English, give it an appropriate subject, and do not include any attachments.

3. **Send the email**\
   Send the email to the following address:

   ```text
   safety.compliance@scpslgame.com
   ```

   You will receive an automatic confirmation of receipt within about an hour.

4. **Wait for the reply**\
   The team usually replies within 3 to 7 business days.

> [!WARNING]
> Do not send another email asking about the status of your verification – such follow-ups send your request to the back of the queue.

## Finalizing the verification

As soon as you receive the notification that your server has been verified, a link appears in the console of your server that lets you formally sign the Community Server Guidelines. After that, your server appears on the public server list.

> [!NOTE]
> If no link appears in the console despite the notification, restart your server via the dashboard. If the link still does not appear, open a technical support ticket on the official SCP:SL Discord.

## After the verification

The requirements apply permanently: if your server exceeds 60 slots, violates the Community Server Guidelines, or stays offline for more than 14 consecutive days, the verification is revoked again.
