---
description: Install mods on a DayZ server
---

# How to Install Mods on a DayZ Server

There are two methods to install mods on your DayZ server: via modlist file (easier) or manually (for more control).

## Method 1: Modlist File

This method is the easiest and recommended for most users.

1. **Launch DayZ and select Mods**<br>
   Start DayZ and click on **Mods**.

2. **Enable desired mods**<br>
   Enable all mods you want on your server.

3. **Export modlist**<br>
   Click on **More** and select **Export list of mods to a file**.

4. **Export only loaded mods**<br>
   Choose **Only loaded mods** and save the `.html` file.

5. **Stop the server**<br>
   Stop your server via the web interface.

6. **Upload modlist**<br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the `.html` file as `modlist.html`.

7. **Configure modlist**<br>
   Go to **Settings** in your management panel and enter the filename under **Modlist File (Exported from DayZ Launcher)**. By default, `modlist.html` is already set.

8. **Start the server**<br>
   Start your server.

## Method 2: Manual Installation

This method offers more control and is required for server-side only mods.

1. **Subscribe to the mod in Steam Workshop**<br>
   Open Steam, select DayZ from your library and go to the **Workshop** tab. Subscribe to your desired mod.

::: warning Note
Some mods have dependencies that must be installed first.
:::

2. **Launch DayZ**<br>
   Start DayZ so the mods are downloaded.

3. **Open mod folder**<br>
   Go to **Mods**, select a mod and click on the three dots. Choose **Open folder**.

4. **Compress mods**<br>
   Compress the desired mod folders (starting with `@`) into a `.zip` file.

5. **Stop the server**<br>
   Stop your server via the web interface.

6. **Upload mod archive**<br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the `.zip` file.

7. **Extract archive**<br>
   Extract the `.zip` file on the server.

8. **Copy bikey files**<br>
   Open the mod folder and navigate to the `Keys` subfolder. Download all `.bikey` files and upload them to the `/keys` folder on your server.

9. **Activate mods**<br>
   Go to **Settings** in your management panel and enter the mod names under **Additional Mods**, separated by semicolons:
   ```
   @CF;@ModName1;@ModName2
   ```

::: tip Note
Mods under **Additional Mods** will require players to install the mods, while mods under **Mods** are server-side only and will not.
:::

10. **Start the server**<br>
    Start your server.

## Troubleshooting

| Problem | Solution |
|---------|----------|
| Server won't start | Check if all mod names are entered correctly |
| Mod Mismatch | Players must have the same mods installed |
| Signature error | Check if all `.bikey` files are in the `/keys` folder |
