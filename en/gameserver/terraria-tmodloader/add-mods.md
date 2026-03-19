---
description: Step-by-step instructions on how to add mods to your Terraria tModLoader server.
---

# How to Add Mods to Your Terraria tModLoader Server

## Prerequisites

- Access to the server folder (either via an SFTP connection or direct access to the server files)
    - You can find the SFTP access data in the overview of your game server.

## Steps

1. <b>Download Mods</b><br>
   Search for and download the desired mods (`.tmod files`) from the official tModloader website or another trustworthy source.
   ::: warning
   Please make sure that the mods are compatible with your current server version. Otherwise your game server may no longer start.
   :::

2. <b>Upload and Activate</b><br>
   Establish a connection to the server via SFTP (e.g. via FileZilla or WinSCP).
   Create a folder called "**mods**" in the Terraria server directory (usually `/home/mods`).
   Upload the downloaded mods (`.tmod files`) via SFTP to the "**mods**" folder on your server.
   Create a new file named "**enabled.json**" in the "**mods**" folder on your server.
   Copy the following text and paste it into the "**enabled.json**" file:

      enabled.json Example:

      ```
      [
      "ModName",
      "ModName"
      ]
      ```

      Replace all entries with "**ModName**" with your mod file name (Example: If the mod file is called **Calamity** then enter this name under **ModName**.)<br>
      ::: warning
      Make sure you add a comma to all but the last dot if you want to add another mod to include it.
      :::

3. <b>Start Server</b><br>
   Go back to the web interface and start your Terraria server.
   Connect to your server via the Terraria game and check that the mods have been loaded correctly.

4. <b>Enable Player Mods</b><br>
   Make sure that all players who want to join your server have the same mods installed and activated so that they can play on the server without any problems.

### That's it! With these steps, you should be able to install and use mods on your Terraria: tModloader server
