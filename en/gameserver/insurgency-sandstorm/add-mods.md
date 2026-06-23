---
description: "Add mods via mod.io on an Insurgency: Sandstorm server"
---

# How to Add Mods to Your Insurgency: Sandstorm Server

Mods for Insurgency: Sandstorm are provided via **mod.io**. For your server to load mods, it logs in to mod.io with a personal **access token** and downloads the mods you specify in a mod list.

## Step 1: Create a mod.io account

Create a [mod.io](https://mod.io/) account. You can also sign in with an existing Steam, Xbox, Google or Facebook account.

## Step 2: Generate an access token

1. <b>Open your profile</b><br>
   Click your username in the top right to go to your profile.

2. <b>Open API Access</b><br>
   Select **API Access** in the left menu.

3. <b>Create a token</b><br>
   In the **OAuth 2 Management** section, enter a name under **Generate Access Token** (e.g. `Insurgency Server`) and click **Create Token**.

4. <b>Copy the token</b><br>
   Click the token's name to display it and copy it in full.

   :::: warning Warning
   Treat the access token like a password and do not share it with anyone. Each server needs its **own** access token (i.e. its own mod.io account) — do not reuse the same token across multiple servers.
   ::::

## Step 3: Add the access token to the config

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

3. <b>Open GameUserSettings.ini</b><br>
   The `GameUserSettings.ini` file is located in the `Insurgency/Saved/Config/LinuxServer/` directory. Open it.

4. <b>Add the token</b><br>
   Add the following section and replace `YOUR_TOKEN` with your access token. If the section `[/Script/ModKit.ModIOClient]` already exists, just add the two lines below it:

   ```ini
   [/Script/ModKit.ModIOClient]
   bHasUserAcceptedTerms=True
   AccessToken=YOUR_TOKEN
   ```

   :::: warning Warning
   The entire token must be on a **single line** directly after `AccessToken=`, even though it is very long. Do not insert any line breaks. When copied from mod.io the token may appear wrapped across several lines; in `GameUserSettings.ini` it must occupy exactly one line. The line `bHasUserAcceptedTerms=True` is mandatory — without it the server will not log in.
   ::::

## Step 4: Find the mod IDs

1. <b>Find mods</b><br>
   Open the [Insurgency: Sandstorm section on mod.io](https://mod.io/g/insurgencysandstorm) and select a desired mod.

2. <b>Note the mod ID</b><br>
   The numeric **mod ID** is shown in the mod page URL. In a URL like `https://mod.io/g/insurgencysandstorm/m/<name>` the mod ID is the **number**, not the name slug. Note the numeric IDs of all mods the server should load.

## Step 5: Create the mod list

1. <b>Create the folder</b><br>
   If it does not already exist, create the folder `Insurgency/Config/Server/`. In your SFTP client (e.g. FileZilla/WinSCP) you create folders via right-click → **Create directory**.

2. <b>Create Mods.txt</b><br>
   In this folder, create a file called `Mods.txt` and enter **one mod ID per line**:

   ```
   1234567
   2345678
   ```

   The easiest way is to create `Mods.txt` locally in a text editor and then upload it. Make sure the file is named exactly `Mods.txt` (not `Mods.txt.txt` — Windows hides known file extensions by default).

   :::: tip Tip
   Alternatively, you can specify the mods via the launch parameter `-CmdModList="1234567,2345678"` without creating a `Mods.txt`. With `-ModList=MyList` you load a differently-named list file from the same folder (handy for several mod sets, file name without `.txt`). Use either `Mods.txt` or `-CmdModList` — not both at the same time.
   ::::

## Step 6: Enable mods and start the server

1. <b>Check the parameters</b><br>
   Open the **Settings** in the dashboard, make sure the parameter `-Mods` is set in the **Additional Parameters** field, and save the setting. Optionally add `-ModDownloadTravelTo=MAP?Scenario=SCENARIO` so the server automatically travels to the modded map after the download. The exact `MAP` and `SCENARIO` values are listed in the map mod's description on mod.io or in the [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).

2. <b>Start the server</b><br>
   Start your server. On startup it logs in to mod.io with the access token and downloads the mods from your list.

   :::: info Note
   For some mods (e.g. custom maps) players must also subscribe to/download the mod to be able to join.
   ::::

## Verify mods and troubleshooting

:::: info Note
After starting, check the **server console** in the dashboard: you should see the mod.io login and a download line per mod ID. A modded map also appears when connecting or in the server overview.
::::

If no mods are loaded, check these common causes:

- The `AccessToken` was not copied in full or contains line breaks/spaces — paste the complete token again on a **single** line.
- The line `bHasUserAcceptedTerms=True` is missing or not exactly `True`.
- The parameter `-Mods` is not set in the **Additional Parameters** field — without it the server downloads nothing.
- Wrong or non-numeric mod IDs, or extra/blank lines in `Mods.txt`.
- `GameUserSettings.ini` was edited while the server was running and got overwritten on shutdown — always stop the server **before** editing.
- The wrong file was edited — `GameUserSettings.ini` is located under `Insurgency/Saved/Config/LinuxServer/`.

## Update or remove mods

- <b>Remove:</b> Delete the relevant mod ID from `Mods.txt` (or from `-CmdModList`) and restart the server.
- <b>Update:</b> The server pulls the current version from mod.io on start. If an old version keeps loading, you can delete the cached mod download so the server re-downloads it.

## Mutators

Some mods additionally require enabled **mutators**. To learn how to enable them, see the [Add Mutators](add-mutators.md) guide.

:::: info Note
Some mods require additional entries in `Game.ini` (`Insurgency/Saved/Config/LinuxServer/Game.ini`). If a mod loads but does nothing, check the mod's description on mod.io for required configuration keys.
::::
