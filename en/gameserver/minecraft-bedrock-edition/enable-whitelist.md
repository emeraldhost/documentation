---
description: Use of the Allowlist in the Minecraft Bedrock Edition
---

# Enable whitelist

## Prerequisites
* Access to the server console or the Bedrock Edition GUI

## To activate the whitelist, follow these steps:

1. <b>Open the server console or the Bedrock Edition GUI</b>
    * Open the server console if you have direct access.
    * Open the Bedrock Edition GUI if you are connected via the game.

2. <b>Open the server settings</b>
    * In the server console, enter the command `/whitelist`.
    * In the Bedrock Edition GUI, select "Settings" from the main menu and then "Server Settings".

3. <b>Enable the Allowlist</b>
    * Make sure that "`Whitelist`" is set to "`true`".

4. <b>Add players to the allowlist</b>
    * In the server console, enter the command `/whitelist add <name>`, replacing \<name> with the name of the player you want to add to the allowlist.
    * In the Bedrock Edition GUI, click on "Edit whitelist" and add the name of the player.
    ::: info Info
    Please note that the use of slashes "/" in the commands in the web interface is not required.
    :::

5. <b>Check the functionality of the Allowlist</b>
    * Make sure that only the players who have been added to the allowlist have access to the server.
    * Check the activation of the Allowlist by trying to connect to the server with a player account that is not on the Allowlist.

::: warning Attention!
Please note that only players who have been added to the Allowlist have access to the server.
:::


### That's it! With these steps you should be able to use the Allowlist on your Minecraft Bedrock Edition server.