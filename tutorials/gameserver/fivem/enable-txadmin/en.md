---
slug: "enable-txadmin"
language: "en"
title: "How to Enable txAdmin on Your FiveM Server"
description: "Enable txAdmin on a FiveM server and open it for the first time"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Enable txAdmin"
sort: 4
related: ["gameserver/fivem/add-resources", "gameserver/fivem/create-backup", "gameserver/fivem/import-database", "gameserver/fivem/join-server"]
---

**txAdmin** is the web interface for managing your FiveM server. It lets you control your server from the browser, manage players and admins, edit the `server.cfg` through the CFG Editor and watch the live console. txAdmin is already part of FXServer, you only need to switch it on.

## What you need first

- A stored [License Key](/tutorials/gameserver/fivem/set-license-key) so your server starts at all
- A **Cfx.re account** – the first txAdmin account is always linked to a Cfx.re account

## Enable txAdmin

1. **Open dashboard**\
   Open the dashboard of your server.

2. **Open settings**\
   Navigate to the **Settings**.

3. **Switch txAdmin on**\
   Enter the value `1` in the **txAdmin** field.

   > [!NOTE]
   > The value `0` switches txAdmin off again. Your server then starts directly with the `server.cfg` and without the web interface.

4. **Restart the server**\
   Save the setting and restart your server.

## Find the txAdmin Port

txAdmin runs on its own port, separate from the Game Port. This port is assigned automatically by the dashboard, you cannot set it yourself.

1. **Open the port overview**\
   Open the dashboard of your server and look at the port overview.

2. **Build the address**\
   Note the IP address of your server and the txAdmin Port. Together they form the address of the web interface:

   ```text
   http://IP-ADDRESS:TXADMIN-PORT
   ```

> [!NOTE]
> The txAdmin Port is **not** the same as the Game Port. If you are unsure which port is the right one: txAdmin also prints the full address to the server console on startup (see next section).

## Read the PIN from the server console

As long as no txAdmin account exists, txAdmin generates a four-digit PIN on startup and prints it to the server console. You use this PIN to create your first account.

1. **Open the console**\
   Open the **server console** in the dashboard.

2. **Start the server**\
   Start your server if it is not running yet and wait until the startup has finished.

3. **Look for the box with the PIN**\
   After the startup, a framed box appears in the console showing the address of the web interface and the PIN below it:

   ```text
   All ready! Please access:
   http://your-public-ip:TXADMIN-PORT/
   http://IP-ADDRESS:TXADMIN-PORT/

   Use the PIN below to register:
   1234
   ```

   > [!NOTE]
   > txAdmin prints `your-public-ip` literally as a placeholder – use the IP address from your dashboard instead. `TXADMIN-PORT` and `1234` stand for your actual port and your actual PIN.

> [!WARNING]
> A new PIN is generated on every server start, the old one becomes invalid. Always use the PIN from the most recent start. As soon as an account exists, no PIN is printed anymore.

## Create your account

1. **Open the web interface**\
   Open `http://IP-ADDRESS:TXADMIN-PORT` in your browser.

2. **Enter the PIN**\
   The page **No Cfx.re account linked** appears. Enter the four-digit PIN from the console and click **Link Account**.

3. **Sign in with Cfx.re**\
   You are redirected to the Cfx.re sign-in. Log in with the account that should become your txAdmin master admin.

4. **Finish the setup**\
   Back in txAdmin you see your linked Cfx.re account. Set a **Backup Password** and repeat it under **Confirm Password**. A **Discord ID** is optional. Then tick **I have read and agree to the Creator PLA** and click **Register**.

   > [!TIP]
   > You need the backup password whenever you have to sign in without Cfx.re. Pick a separate, secure password and not the one of your Cfx.re account.

After that txAdmin is ready to use and guides you through setting up your server.

> [!TIP]
> During the txAdmin setup, use the `server.cfg` from the main directory `/home/container`. It is already configured with the port of your game server. If your server ends up running on the wrong port, see [Set Port](/tutorials/gameserver/fivem/set-port).

## What the dashboard overwrites

Some lines of the `server.cfg` in the main directory are rewritten from your dashboard settings on **every** server start:

```text
endpoint_add_tcp
endpoint_add_udp
sv_hostname
set sv_licenseKey
set steam_webApiKey
sv_maxclients
```

> [!WARNING]
> If you edit these lines by hand or in the txAdmin CFG Editor, they are gone again after the next start. Maintain them in the **Settings** of your dashboard instead. All other lines of your `server.cfg` stay untouched.

## Lost access to txAdmin

If you can no longer sign in, you can reset the account setup. txAdmin will then show a PIN again on the next start.

1. **Stop the server**\
   Stop your server via the dashboard.

   > [!WARNING]
   > The server really has to be stopped. txAdmin only reads `admins.json` on startup and overwrites changes made to the file while it is running.

2. **Connect via SFTP**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Delete admins.json**\
   Delete the file `/home/container/txData/admins.json`.

4. **Start the server**\
   Start your server and read the new PIN from the server console. Then create a new account as described above.

> [!IMPORTANT]
> Deleting `admins.json` removes **all** admin accounts created in txAdmin. Create a [Backup](/tutorials/gameserver/fivem/create-backup) beforehand.
