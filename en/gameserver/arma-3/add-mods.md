---
description: Install mods on an Arma 3 server
---

# How to Install Mods on Your Arma 3 Server

In Arma 3, mods are folders in the main directory of your server and always start with an `@` – for example `@cba_a3`. They are loaded through two start parameters that you set through the corresponding fields in the dashboard.

| Parameter | Meaning |
|-----------|---------|
| `-mod=` | Client mods. **All players** need to have these mods installed and enabled in their launcher as well. |
| `-serverMod=` | Server mods. They run on the server only and do **not** have to be installed by players. |

In both cases you separate multiple mods with a semicolon:

```
@cba_a3;@ace;@operation_trebuchet
```

:::: danger Important
Your server runs on Linux, and Linux is case sensitive. Therefore rename every mod folder to **all lowercase** and remove spaces and special characters – underscores are allowed. So `@Operation TREBUCHET` becomes `@operation_trebuchet`. The same applies to the `.pbo` files inside the `addons` subfolders. Folder names starting with a number do not work reliably either.
::::

## Method 1: Export a mod list from the launcher

With this method your server downloads the mods from the Steam Workshop itself. It is the easiest way for Workshop mods.

1. <b>Start the Arma 3 launcher</b><br>
   Start Arma 3 via Steam so the launcher opens and switch to the **Mods** tab.

2. <b>Enable the mods</b><br>
   Enable all mods that should run on your server. Make sure required dependencies such as `@CBA_A3` are enabled too.

3. <b>Export the mod list</b><br>
   Export the active mod list as an **HTML file** to your PC using the launcher's preset function.

4. <b>Stop the server</b><br>
   Stop your server via the dashboard.

5. <b>Upload the file</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the file as `modlist.html` into the main directory:

   ```
   /modlist.html
   ```

6. <b>Enter the mod list</b><br>
   Open the **settings** in your dashboard and enter the file name in the field for the mod list file. By default it already says `modlist.html`.

7. <b>Start the server</b><br>
   Start your server. The mods from the list are downloaded on startup – depending on their size this can take a few minutes.

:::: info Steam account required
For the automatic Workshop download your server needs the credentials of a Steam account that owns Arma 3. Anonymous downloads are not possible for Workshop content. You store the credentials in the **settings** of your dashboard.
::::

## Method 2: Enter Workshop IDs directly

Instead of a mod list you can also specify mods individually by their Workshop ID.

1. <b>Copy the Workshop ID</b><br>
   Open the mod page in the Steam Workshop. The ID is the number at the end of the address, for example `450814997` in `.../filedetails/?id=450814997`.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Enter the IDs</b><br>
   Enter the IDs in the **settings** in the field for the mods – each with a leading `@` and separated by semicolons:

   ```
   @450814997;@463939057;
   ```

   Server mods go into the field for server mods instead.

4. <b>Start the server</b><br>
   Start your server. The mods are downloaded on startup.

:::: info Note
Whether your server downloads mods from the Workshop ID alone depends on its configuration. If the matching mod folders are not created on startup, use method 1 instead or upload the mods manually as described in method 3.
::::

## Method 3: Upload mods manually

You need this method for mods that do not come from the Workshop.

1. <b>Subscribe to the mod</b><br>
   Subscribe to the mod in the Steam Workshop and start Arma 3 once so it gets downloaded.

2. <b>Open the mod folder</b><br>
   You find the subscribed mods on your PC under:

   ```
   ...\Steam\steamapps\common\Arma 3\!Workshop
   ```

3. <b>Rename the folder</b><br>
   Rename the mod folder to all lowercase and replace spaces with underscores, for example `@operation_trebuchet`. Also rename the `.pbo` files in the `addons` subfolder to lowercase.

4. <b>Pack the folder</b><br>
   Pack the mod folder into a `.zip` file.

5. <b>Stop the server</b><br>
   Stop your server via the dashboard.

6. <b>Upload and extract</b><br>
   Connect via [SFTP](../establish-sftp-connection.md), upload the archive into the **main directory** of your server and extract it there. Afterwards the mod folder has to sit directly in the main directory:

   ```
   /@operation_trebuchet
   ```

   :::: warning Caution
   Arma 3 only loads mods from the main directory of the server and its subfolders. Folders outside of it are not recognized.
   ::::

7. <b>Copy the key</b><br>
   Open the `keys` (or `key`) subfolder of the mod and upload the `.bikey` file it contains into the `/keys` folder of your server.

8. <b>Enable the mod</b><br>
   Enter the folder name in the **settings** in the field for the mods – separate multiple entries with semicolons:

   ```
   @cba_a3;@operation_trebuchet
   ```

9. <b>Start the server</b><br>
   Start your server.

## Verify signatures

To make sure only players with unmodified mod files can join your server, Arma 3 verifies the signatures of the mods. For this, the `.bikey` of every mod has to be in the `/keys` folder. In Arma 3 the verification is enabled by default – when in doubt, check whether the value is set in your `server.cfg`.

1. <b>Stop the server</b><br>
   Stop your server via the dashboard.

2. <b>Open the server.cfg</b><br>
   Open the file `/server.cfg` via [SFTP](../establish-sftp-connection.md).

3. <b>Enable signature verification</b><br>
   Enter the following value:

   ```
   verifySignatures = 2;
   ```

4. <b>Start the server</b><br>
   Save the file and start your server.

:::: info Note
With signature verification enabled, server mods loaded through `-serverMod=` do not have to be installed by players. Mods without a `.bikey` file can only be loaded as server mods.
::::

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Server does not start | Check that all mod folders are named exactly as entered in the settings – including lowercase spelling |
| Mod is not loaded | Check that the folder sits directly in the main directory and starts with `@` |
| Players are rejected when joining | All client mods have to be active on the players' side in the same version |
| Signature error | Check that the matching `.bikey` file of every mod is in the `/keys` folder |
| Mods missing after startup | Check that a Steam account owning Arma 3 is stored in the settings |
