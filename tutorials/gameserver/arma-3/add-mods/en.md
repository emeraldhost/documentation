---
slug: "add-mods"
language: "en"
title: "How to Install Mods on Your Arma 3 Server"
description: "Install mods on an Arma 3 server"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Add Mods"
sort: 2
related: ["gameserver/arma-3/add-admin", "gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame"]
---

In Arma 3, mods are folders in the main directory of your server and always start with an `@` – for example `@cba_a3`. They are loaded through two start parameters that you set through the corresponding fields in the dashboard.

| Parameter | Meaning |
|-----------|---------|
| `-mod=` | Client mods. **All players** need to have these mods installed and enabled in their launcher as well. |
| `-serverMod=` | Server mods. They run on the server only and do **not** have to be installed by players. |

In both cases you separate multiple mods with a semicolon:

```text
@cba_a3;@ace;@operation_trebuchet
```

> [!IMPORTANT]
> Your server runs on Linux, and Linux is case sensitive. Therefore rename every mod folder to **all lowercase** and remove spaces and special characters – underscores are allowed. So `@Operation TREBUCHET` becomes `@operation_trebuchet`. The same applies to the `.pbo` files inside the `addons` subfolders. Folder names starting with a number do not work reliably either.

## Method 1: Export a mod list from the launcher

With this method your server downloads the mods from the Steam Workshop itself. It is the easiest way for Workshop mods.

1. **Start the Arma 3 launcher**\
   Start Arma 3 via Steam so the launcher opens and switch to the **Mods** tab.

2. **Enable the mods**\
   Enable all mods that should run on your server. Make sure required dependencies such as `@CBA_A3` are enabled too.

3. **Export the mod list**\
   Export the active mod list as an **HTML file** to your PC using the launcher's preset function.

4. **Stop the server**\
   Stop your server via the dashboard.

5. **Upload the file**\
   Connect to your server via [SFTP](/tutorials/gameserver/establish-sftp-connection) and upload the file as `modlist.html` into the main directory:

   ```text
   /modlist.html
   ```

6. **Enter the mod list**\
   Open the **settings** in your dashboard and enter the file name in the field for the mod list file. By default it already says `modlist.html`.

7. **Start the server**\
   Start your server. The mods from the list are downloaded on startup – depending on their size this can take a few minutes.

> [!NOTE]
> **Steam account required**
>
> For the automatic Workshop download your server needs the credentials of a Steam account that owns Arma 3. Anonymous downloads are not possible for Workshop content. You store the credentials in the **settings** of your dashboard.

## Method 2: Enter Workshop IDs directly

Instead of a mod list you can also specify mods individually by their Workshop ID.

1. **Copy the Workshop ID**\
   Open the mod page in the Steam Workshop. The ID is the number at the end of the address, for example `450814997` in `.../filedetails/?id=450814997`.

2. **Stop the server**\
   Stop your server via the dashboard.

3. **Enter the IDs**\
   Enter the IDs in the **settings** in the field for the mods – each with a leading `@` and separated by semicolons:

   ```text
   @450814997;@463939057;
   ```

   Server mods go into the field for server mods instead.

4. **Start the server**\
   Start your server. The mods are downloaded on startup.

> [!NOTE]
> Whether your server downloads mods from the Workshop ID alone depends on its configuration. If the matching mod folders are not created on startup, use method 1 instead or upload the mods manually as described in method 3.

## Method 3: Upload mods manually

You need this method for mods that do not come from the Workshop.

1. **Subscribe to the mod**\
   Subscribe to the mod in the Steam Workshop and start Arma 3 once so it gets downloaded.

2. **Open the mod folder**\
   You find the subscribed mods on your PC under:

   ```text
   ...\Steam\steamapps\common\Arma 3\!Workshop
   ```

3. **Rename the folder**\
   Rename the mod folder to all lowercase and replace spaces with underscores, for example `@operation_trebuchet`. Also rename the `.pbo` files in the `addons` subfolder to lowercase.

4. **Pack the folder**\
   Pack the mod folder into a `.zip` file.

5. **Stop the server**\
   Stop your server via the dashboard.

6. **Upload and extract**\
   Connect via [SFTP](/tutorials/gameserver/establish-sftp-connection), upload the archive into the **main directory** of your server and extract it there. Afterwards the mod folder has to sit directly in the main directory:

   ```text
   /@operation_trebuchet
   ```

   > [!WARNING]
   > **Caution**
   >
   > Arma 3 only loads mods from the main directory of the server and its subfolders. Folders outside of it are not recognized.

7. **Copy the key**\
   Open the `keys` (or `key`) subfolder of the mod and upload the `.bikey` file it contains into the `/keys` folder of your server.

8. **Enable the mod**\
   Enter the folder name in the **settings** in the field for the mods – separate multiple entries with semicolons:

   ```text
   @cba_a3;@operation_trebuchet
   ```

9. **Start the server**\
   Start your server.

## Verify signatures

To make sure only players with unmodified mod files can join your server, Arma 3 verifies the signatures of the mods. For this, the `.bikey` of every mod has to be in the `/keys` folder. In Arma 3 the verification is enabled by default – when in doubt, check whether the value is set in your `server.cfg`.

1. **Stop the server**\
   Stop your server via the dashboard.

2. **Open the server.cfg**\
   Open the file `/server.cfg` via [SFTP](/tutorials/gameserver/establish-sftp-connection).

3. **Enable signature verification**\
   Enter the following value:

   ```text
   verifySignatures = 2;
   ```

4. **Start the server**\
   Save the file and start your server.

> [!NOTE]
> With signature verification enabled, server mods loaded through `-serverMod=` do not have to be installed by players. Mods without a `.bikey` file can only be loaded as server mods.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Server does not start | Check that all mod folders are named exactly as entered in the settings – including lowercase spelling |
| Mod is not loaded | Check that the folder sits directly in the main directory and starts with `@` |
| Players are rejected when joining | All client mods have to be active on the players' side in the same version |
| Signature error | Check that the matching `.bikey` file of every mod is in the `/keys` folder |
| Mods missing after startup | Check that a Steam account owning Arma 3 is stored in the settings |
