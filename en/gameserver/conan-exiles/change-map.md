---
title: Change Map on Your Conan Exiles Server
description: Step-by-step instructions on how to change the map on your Conan Exiles server
---

# Change Conan Exiles Server Map

::: tip Tip
You can also edit the files using an FTP program. Here you will find instructions on how to [establish an SFTP connection](../establish-sftp-connection.md).
:::

::: warning Warning
When changing the map, all save data and buildings will be lost! Create a backup beforehand if you want to return to the old map later.
:::

## Available Maps

| Map | Value |
|-----|-------|
| **Exiled Lands** | `/Game/Maps/ConanSandbox/ConanSandbox` |
| **Isle of Siptah** | `/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah` |

::: info Info
The "Isle of Siptah" map requires the DLC of the same name.
:::

## Steps

1. <strong>Stop your server in the dashboard.</strong>

2. <strong>Navigate to the file ```Engine.ini``` in the file browser.</strong>
   - Path: `ConanSandbox/Saved/Config/WindowsServer/Engine.ini`

3. <strong>Add the following entry:</strong>

   ```ini
   [/Script/EngineSettings.GameMapsSettings]
   ServerDefaultMap=/Game/DLC_EXT/DLC_Siptah/Maps/DLC_Isle_of_Siptah
   ```

4. <strong>Save the file and restart your server.</strong>
