---
description: Add mods on a Euro Truck Simulator 2 server
---

# Add mods

## Requirements

- Access to the server folder (either via an SFTP connection or direct access to the server files)
    - You can find the SFTP access data in the overview of your game server.

## Steps

1. <b>Open the mod manager in the game</b>
    - Start Euro Truck Simulator 2.
    - Click on the **Mod Manager** in the main menu.

2. <b>Activate the desired mods</b>
    - Select the mods you want to use on your server.

3. <b>Start the game</b>
    - Start a game and click on "**Drive**" in the truck selection to enter the game world.

4. <b>Export the server data packets</b>
    - Open the **Console** in the game (press `~` or `` ` ``).
    - Enter the command "`export_server_packages`".
    - Then close the game.

5. <b>Upload the data packages to the server</b>
    - Establish an SFTP connection to your server.
    - Navigate to the path "`.local/share/Euro Truck Simulator 2`".
    - Upload the files "`server_packages.sii`" and "`server_packages.dat`" from your local data folder to your server.

6. <b>Start the server and the game</b>
    - Stop your server via the web interface.
    - Then start it again.
    - Then start the game.

7. <b>Check the functionality of the mods</b>
    - Your mods should now work in the game.
    - Enjoy your gaming experience!

### That's it! With these steps you should be able to install and use mods on your Euro Truck Simulator 2 server
