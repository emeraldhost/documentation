---
slug: "become-admin"
language: "en"
title: "How to Become an Admin on Your Squad 44 Server"
description: "Become an admin on a Squad 44 server"
tags: []
date: "2026-04-28"
visibility: "public"
cta: "gameserver"
product_keys: ["squad-44"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Become Admin"
sort: 2
related: ["gameserver/squad-44/allow-team-change", "gameserver/squad-44/change-max-players", "gameserver/squad-44/change-server-name", "gameserver/squad-44/create-backup"]
---

Using the `Admins.cfg` file you can assign admin or moderator rights to players. In Squad 44, admins are always assigned to a **group** that defines which permissions they have.

## Add an admin

1. **Find SteamID64**\
   Note down the [SteamID64](/tutorials/gameserver/steamid64-find-out) of the player you want to give admin rights to.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

4. **Open Admins.cfg**\
   Navigate to and open the following file:

   ```text
   /PostScriptum/ServerConfig/Admins.cfg
   ```

5. **Add admin entry**\
   Add a new line at the end of the file in the following format:

   ```text
   Admin=SteamID64:Group
   ```

   Example:

   ```text
   Admin=76561198000000000:Admin
   ```

6. **Start the server**\
   Save the file and start your server via the dashboard.

## Default groups

Squad 44 ships with predefined groups in `Admins.cfg` that you can use right away:

| Group | Description |
|-------|-------------|
| `Admin` | Full access to all admin functions |
| `Moderator` | Limited moderation rights (e.g. kick, ban, chat) |
| `Whitelist` | Reserved slot without admin rights |

## Create your own group

You can also create your own groups with custom permissions. Add a line in the following format:

```text
Group=GroupName:Right1,Right2,Right3
```

Example:

```text
Group=Helper:kick,ban,chat
```

You can then assign this group to players:

```text
Admin=76561198000000000:Helper
```

> [!WARNING]
> Pay attention to the exact spelling of group and permission names. Typos will cause the server to fail to load the file correctly.

> [!NOTE]
> Changes to `Admins.cfg` only take effect after restarting the server.
