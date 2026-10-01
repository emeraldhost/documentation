---
description: Set the GSL Token (Steam Game Server Login Token) on a Garry's Mod server
---

# How to Set the GSL Token on Your Garry's Mod Server

The GSL Token (Steam Game Server Login Token, GSLT for short) links your server to a Steam account. Since the May 2020 update, every Garry's Mod server should have such a token – servers without one receive a severe penalty in the server list ranking and are therefore hard to find. A direct connection via IP and port ([Join Server](join-server.md)) works without a token as well.

## Steam account requirements

To create a token, your Steam account must meet the following requirements:

- The account is neither community banned nor locked.
- The account is not a limited account.
- A qualifying phone number is registered on the account.
- You own Garry's Mod on this account.

## Create the token

1. <b>Open the Steam Game Server page</b><br>
   Open [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) and sign in with your Steam account.

2. <b>Enter the App ID</b><br>
   Enter **4000** (Garry's Mod) in the field for the App ID of the base game.

   :::: warning Warning
   Always use the App ID `4000`. The App ID `4020` belongs to the dedicated server tool and is wrong here.
   ::::

3. <b>Create and copy the token</b><br>
   Create the token and copy it. It then appears in the list of your game server accounts.

   :::: tip Example
   A token looks similar to this (example value, not usable):

   ```
   EXAMPLETOKEN00000000000000000000
   ```
   ::::

:::: danger Important
Every server needs its **own** token. If the console shows the message `Connection to Steam servers lost. (Steam error code 6)` and players are disconnected, this is usually caused by using the same token on several servers.
::::

## Set the token in the dashboard

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter the token</b><br>
   Paste the token into the **Steam Account Token** field. The field expects exactly 32 characters made up of letters and digits. Your server then starts with the parameter:

   ```
   +sv_setsteamaccount EXAMPLETOKEN00000000000000000000
   ```

4. <b>Restart the server</b><br>
   Save the setting and restart your server for the token to take effect.

## Verify the token

1. <b>Open the console</b><br>
   Open the console in the dashboard of your server and watch the startup.

2. <b>Check the startup</b><br>
   An invalid or expired token prevents the server from starting. If your server does not start, check the token in the **Steam Account Token** field for typos and spaces and compare it with the token in the list at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers).

## Renew the token

If your token has fallen into the wrong hands or no longer works, simply create a new one.

1. <b>Regenerate the token</b><br>
   Open [https://steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) again and select **Regenerate token** for the affected token. This invalidates the old token.

2. <b>Enter the new token</b><br>
   Enter the new token in the **Steam Account Token** field as described above, save the setting and restart your server.

:::: info Note
If you change the password of your Steam account or it is reset, all of your existing tokens become invalid. Tokens that no server logs in with for a long time also expire. In both cases, generate a new token and enter it in the dashboard again.
::::

:::: warning Warning
Never share your token with third parties. If you have shared it, delete it at [Steam Game Server Accounts](https://steamcommunity.com/dev/managegameservers). If a game server account is banned, you may be restricted from playing Garry's Mod.
::::
