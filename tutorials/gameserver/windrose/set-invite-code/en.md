---
slug: "set-invite-code"
language: "en"
title: "How to Set the Invite Code on Your Windrose Server"
description: "Set the invite code on a Windrose server"
tags: []
date: "2026-04-14"
visibility: "public"
cta: "gameserver"
product_keys: ["windrose"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set Invite Code"
sort: 9
related: ["gameserver/windrose/enable-direct-connection", "gameserver/windrose/join-server", "gameserver/windrose/set-island-id", "gameserver/windrose/set-note"]
---

The invite code is required by players to find your server in-game. You can set it either via the dashboard or via the `ServerDescription.json` file.

> [!NOTE]
> The invite code must be at least 6 characters long and may only contain the characters `0-9`, `a-z` and `A-Z`. It is case-sensitive. If you do not set a custom code, one will be generated automatically in `ServerDescription.json` on server startup.

## Via the dashboard

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Set invite code**\
   Enter the desired code in the **Invite Code** field and save the setting.

4. **Restart the server**\
   Restart your server for the change to take effect.

## Via the config file

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Open ServerDescription.json**\
   Open the file `ServerDescription.json` at:

   ```text
   /R5/ServerDescription.json
   ```

4. **Change invite code**\
   Adjust the invite code value in the file.

5. **Start the server**\
   Save the file and start your server.
