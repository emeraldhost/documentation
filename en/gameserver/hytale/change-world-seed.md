---
description: Change World Seed on a Hytale server
---

# How to Change the World Seed on a Hytale Server

The world seed determines how the world is generated. Using the same seed will always produce the same world - identical landscapes, mountains, and structures at the same coordinates.

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Change the World Seed

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the World Configuration</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and navigate to the folder `universe/worlds/<worldname>/`. Open the `config.json` file.

3. <b>Adjust the Seed</b><br>
   Find the `Seed` setting and change the value:
   ```json
   "Seed": 123456789
   ```
   You can use any number as a seed.

4. <b>Delete World Data</b><br>
   Delete the `chunks` folder in the same directory (`universe/worlds/<worldname>/chunks`) so the world is regenerated with the new seed.

5. <b>Start the Server</b><br>
   Start your server to regenerate the world.

:::: warning Warning
Deleting the `chunks` folder will permanently remove all builds and progress in this world. Create a [backup](./create-backup.md) first!
::::
