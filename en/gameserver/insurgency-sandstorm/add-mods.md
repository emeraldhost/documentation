---
description: "Add mods via mod.io on an Insurgency: Sandstorm server"
---

# How to Add Mods to Your Insurgency: Sandstorm Server

Mods for Insurgency: Sandstorm are provided via **mod.io**. The server logs in with its own mod.io account and downloads the mods that this account has **subscribed to** in the **mod.io web portal**. The login is done once via a **security code**.

:::: info Changed with update 1.20
With update **1.20 (Operation: Clear Sight)**, mod.io changed the mod process. Mods are now loaded via a **dedicated server account** and a one-time **security code**. The previous methods (access token in `GameUserSettings.ini`, `Mods.txt` / `-ModList`) **no longer work**.
::::

:::: warning Warning
The server needs its **own separate mod.io account** with its own email address — **not** the same account you use as a player in-game. With a shared account the server will not download any mods.
::::

## Step 1: Create a mod.io account

Create a new [mod.io](https://mod.io/) account exclusively for your server and remember the email address you used. mod.io does not use passwords but logs you in via an email code.

## Step 2: Subscribe to mods

1. <b>Sign in to the web portal</b><br>
   Sign in with the **server account** on [mod.io](https://mod.io/).

2. <b>Subscribe to mods</b><br>
   Open the [Insurgency: Sandstorm section](https://mod.io/g/insurgencysandstorm) and subscribe to every mod the server should load.

   :::: info Note
   Mods are controlled exclusively via the **subscriptions** of the server account. Adding and removing mods is only possible through the mod.io web portal.
   ::::

## Step 3: Request the security code

On the first launch, the server has to authorize itself with mod.io once using a **security code**.

1. <b>Open PowerShell</b><br>
   Open **PowerShell** on your PC.

2. <b>Request the code</b><br>
   Run the following command and replace `YOUR_EMAIL` with the email address of your **server account**:

   ```powershell
   curl.exe -s -L -X POST "https://g-254.modapi.io/v1/oauth/emailrequest?api_key=bbf3af200848aef28418c032a601e7a2" -H "Content-Type: application/x-www-form-urlencoded" -H "Accept: application/json" -d "email=YOUR_EMAIL"
   ```

3. <b>Get the code from the email</b><br>
   You will then receive a **5-digit security code** by email.

## Step 4: Authorize the server once

1. <b>Open dashboard</b><br>
   Open the dashboard and navigate to the **Settings**.

2. <b>Enter the security code</b><br>
   Enter the code you received by email in the **Security Code** field (replacing the default value `none`) and save the setting.

3. <b>Start the server</b><br>
   Start your server. It authorizes itself once with the code and downloads the subscribed mods.

## Step 5: Reset the security code

The security code is **one-time** and is used up after the first launch. Set the **Security Code** field back to `none` afterwards and restart the server.

:::: tip Tip
The **Security Code** field defaults to `none`, and `-Mods` is already active in the **Additional Parameters** field. You only enter the code for the **one-time** first launch and set the field back to `none` afterwards.
::::

## Load a modded map

To make the server travel directly to a modded map after the download, add the following in the **Additional Parameters** field:

```
-ModDownloadTravelTo=MAP?Scenario=SCENARIO
```

The exact `MAP` and `SCENARIO` values are listed in the map mod's description on mod.io.

:::: warning Warning
The **Map**/**Scenario** set as the boot map must be a **vanilla** map — a modded map cannot be used as the start map because it has not been downloaded yet at startup. The server boots on the vanilla map, downloads the mods and only then travels to the modded map via `-ModDownloadTravelTo`.
::::

## Troubleshooting

If the server does not download any mods, check the following:

- The server account is its **own** account (not your player account).
- The server account has **subscribed** to the desired mods in the web portal.
- `-Mods` is set in the **Additional Parameters** field.
- Message "Security code has already been redeemed": the code has already been used — set the **Security Code** field to `none` (the server is already authorized then).
- Persistent download problems: delete the mod.io cache (folder `mod.io/254/`) via [SFTP](../establish-sftp-connection.md) and re-authorize the server with a new code.

:::: info Note
Players must also subscribe to the mods (e.g. custom maps) with their own mod.io account to be able to join the server. The download starts in the background when connecting and is not always shown with a progress bar.
::::

:::: info Migrating from the old method
If you previously set up the server with an **access token** in `GameUserSettings.ini`: remove the `[/Script/ModKit.ModIOClient]` section from that file. The current method uses the security code exclusively.
::::

## Mutators

Some mods additionally require enabled **mutators**. To learn how to enable them, see the [Add Mutators](add-mutators.md) guide. Some mods also require entries in `Game.ini` — check the mod's description on mod.io for this.
