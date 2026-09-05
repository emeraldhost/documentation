---
slug: "fix-eos-notready-error"
language: "en"
title: "How to Fix the \"EOS session is in the NotReady state\" Error"
description: "Fix the EOS NotReady error on a V Rising server"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["v-rising"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Fix EOS NotReady Error"
sort: 12
related: ["gameserver/v-rising/create-backup", "gameserver/v-rising/enable-server-list", "gameserver/v-rising/join-server", "gameserver/v-rising/kick-ban-players"]
---

The following entry may appear in your V Rising server logs:

```text
EOS session is in the NotReady state. Waiting to modify until it's in the Joined state!
```

## What does it mean?

Your V Rising server is waiting for the connection to the **Epic Online Services (EOS)** to be established. As long as the EOS session is in the `NotReady` state, the server cannot modify the session – for example it cannot register itself in the public listing or let players join.

Usually this is only a momentary state during server startup. However, if the error persists, your server will not appear in the public server list.

## Possible causes and solutions

### 1. EOS listing not enabled

Check in the [server list configuration](/tutorials/gameserver/v-rising/enable-server-list) whether both **Steam Server List** and **Epic Games Server List** are set to `true`. Both options are required for the server to register correctly.

### 2. Server not fully started yet

EOS may take a few seconds to minutes after startup to build the session. Wait at least 2–3 minutes after a restart before taking further action.

### 3. Firewall or network blocking EOS

The server must be able to establish outbound connections to Epic Online Services. Make sure no firewall rule is blocking these connections. On EmeraldHost servers this is allowed by default.

### 4. Session blocked by a previous connection

Sometimes an old session remains stuck on Epic's side. A clean restart usually fixes this:

1. **Stop the server fully**\
   Stop your server in the dashboard and wait around 30 seconds.

2. **Restart the server**\
   Start the server again and give it 2–3 minutes to rebuild the EOS session.

### 5. EOS services have an outage

In rare cases the problem is on Epic's side. Check the status of the Epic Online Services at [status.epicgames.com](https://status.epicgames.com).

> [!TIP]
> If the error persists after a restart and after checking the server list settings, open a [support ticket](https://emeraldhost.de/en/support). We will then look into the server logs in detail.
