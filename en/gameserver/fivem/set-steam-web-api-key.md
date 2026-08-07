---
description: Set the Steam Web API key on a FiveM server
---

# How to Set the Steam Web API Key on Your FiveM Server

With a **Steam Web API key**, your FiveM server can read the Steam identifier of your players (for example `steam:110000100000000`). Many scripts rely on this identifier, for instance for whitelists, bans or player management.

The key is optional. Without it, your server runs just fine, your players simply will not receive a Steam identifier.

:::: info Note
The **Steam Web API Key** field contains `none` by default. With this value, your server skips Steam authentication entirely. Only enter a key if one of your scripts needs the Steam identifier.
::::

## Generate Steam Web API key

1. <b>Open Steam page</b><br>
   Open [steamcommunity.com/dev/apikey](https://steamcommunity.com/dev/apikey) and sign in with your Steam account.

2. <b>Enter domain</b><br>
   Steam asks for a domain name that will be associated with the key. Enter the domain of your project here.

   :::: info Note
   A limited Steam account cannot create a Steam Web API key. [Steam Support](https://help.steampowered.com/en/faqs/view/71D3-35C2-AD96-AA3A) explains how to lift this restriction.
   ::::

3. <b>Copy key</b><br>
   Accept the terms of use, register the key and copy it.

## Set Steam Web API key

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter key</b><br>
   Enter the copied key in the **Steam Web API Key** field.

   :::: info Note
   The field must not be left empty. Enter either a valid key or `none`.
   ::::

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: info Note
The value of this field is written to the `server.cfg` as `set steam_webApiKey` every time the server starts. If you edit that line via [SFTP](../establish-sftp-connection.md) instead, your change will be lost on the next start.
::::

:::: warning Warning
Treat the key like a password. It belongs to your Steam account, so never share it and never publish it in screenshots or excerpts of your `server.cfg`.
::::

:::: tip Tip
If you change your Steam password or your Steam Guard settings, the key can become invalid. The server console will then show a message that your Steam Web API key may be invalid. In that case, generate a new key and set it again.
::::
