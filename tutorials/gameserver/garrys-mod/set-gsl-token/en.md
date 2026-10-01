---
slug: "set-gsl-token"
language: "en"
title: "How to Set the GSL Token on Your Garry's Mod Server"
description: "Set the GSL Token (Steam Game Server Login Token) on a Garry's Mod server"
tags: []
date: "2026-10-01"
visibility: "public"
cta: "gameserver"
product_keys: ["garrys-mod"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Set GSL Token"
sort: 11
related: ["gameserver/garrys-mod/join-server", "gameserver/garrys-mod/configure-server", "gameserver/garrys-mod/change-map", "gameserver/garrys-mod/change-gamemode"]
---
The GSL Token (Steam Game Server Login Token, GSLT for short) links your server to a Steam account. Since the May 2020 update, every Garry's Mod server should have such a token – servers without one receive a severe penalty in the server list ranking and are therefore hard to find. A direct connection via IP and port ([Join Server](/tutorials/gameserver/garrys-mod/join-server)) works without a token as well.

## Steam account requirements

To create a token, your Steam account must meet the following requirements:

- The account is neither community banned nor locked.
- The account is not a limited account.
- A qualifying phone number is registered on the account.
- You own Garry's Mod on this account.

## Create the token

1. **Open the Steam Game Server page**\
   Open [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) and sign in with your Steam account.

2. **Enter the App ID**\
   Enter **4000** (Garry's Mod) in the field for the App ID of the base game.

   > [!WARNING]
   > Always use the App ID `4000`. The App ID `4020` belongs to the dedicated server tool and is wrong here.

3. **Create and copy the token**\
   Create the token and copy it. It then appears in the list of your game server accounts.

   > [!TIP]
   > **Example**
   >
   > A token looks similar to this (example value, not usable):
   >
   > ```text
   > EXAMPLETOKEN00000000000000000000
   > ```

> [!IMPORTANT]
> Every server needs its **own** token. If the console shows the message `Connection to Steam servers lost. (Steam error code 6)` and players are disconnected, this is usually caused by using the same token on several servers.

## Set the token in the dashboard

1. **Open the dashboard**\
   Open the dashboard of your server.

2. **Open the settings**\
   Navigate to the **Settings**.

3. **Enter the token**\
   Paste the token into the **Steam Account Token** field. The field expects exactly 32 characters made up of letters and digits. Your server then starts with the parameter:

   ```text
   +sv_setsteamaccount EXAMPLETOKEN00000000000000000000
   ```

4. **Restart the server**\
   Save the setting and restart your server for the token to take effect.

## Verify the token

1. **Open the console**\
   Open the console in the dashboard of your server and watch the startup.

2. **Check the startup**\
   An invalid or expired token prevents the server from starting. If your server does not start, check the token in the **Steam Account Token** field for typos and spaces and compare it with the token in the list at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers).

## Renew the token

If your token has fallen into the wrong hands or no longer works, simply create a new one.

1. **Regenerate the token**\
   Open [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) again and select **Regenerate token** for the affected token. This invalidates the old token.

2. **Enter the new token**\
   Enter the new token in the **Steam Account Token** field as described above, save the setting and restart your server.

> [!NOTE]
> If you change the password of your Steam account or it is reset, all of your existing tokens become invalid. Tokens that no server logs in with for a long time also expire. In both cases, generate a new token and enter it in the dashboard again.

> [!WARNING]
> Never share your token with third parties. If you have shared it, delete it at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers). If a game server account is banned, you may be restricted from playing Garry's Mod.
