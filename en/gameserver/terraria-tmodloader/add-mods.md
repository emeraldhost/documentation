---
description: 'Installing mods on a Terraria: tModloader server'
---

# Add mods

## Prerequisites

* Access to the server folder (either via an SFTP connection or direct access to the server files)
  * You can find the SFTP access data in the overview of your game server.

## Steps

1. <b>Download the desired mods</b>
* Search for and download the desired mods (`.tmod files`) from the official tModloader website or another trustworthy source.
    ::: warning
    Please make sure that the mods are compatible with your current server version. Otherwise your game server may no longer start.
    :::

2. upload <b>mods to the server and activate</b>
    * Establish a connection to the server via SFTP (e.g. via FileZilla or WinSCP).
    * Create a folder called "**mods**" in the Terraria server directory (usually `/home/mods`).
    * Upload the downloaded mods (`.tmod files`) via SFTP to the "**mods**" folder on your server.
    * Create a new file named "**enabled.json**" in the "**mods**" folder on your server.
    * Copy the following text and paste it into the "**enabled.json**" file:

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

3. <b>Start server</b>
    * Go back to the web interface and start your Terraria server.
    * Connect to your server via the Terraria game and check that the mods have been loaded correctly.

4. <b>Enable mods for players</b>
    * Make sure that all players who want to join your server have the same mods installed and activated so that they can play on the server without any problems.

### That's it! With these steps, you should be able to install and use mods on your Terraria: tModloader server.