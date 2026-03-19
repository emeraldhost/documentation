---
description: Step-by-step instructions on how to add mods to your American Truck Simulator server.
---

# How to Add Mods to Your American Truck Simulator Server

## Add Steam Workshop mods

1. <b>Start game</b><br>
   Start American Truck Simulator.

2. <b>Open mod menu</b><br>
   Select the "Mods" item in the main menu.

3. <b>Open workshop</b><br>
   Click on "Steam Workshop" in the top right-hand corner.

4. <b>Subscribe to mods</b><br>
   Browse the workshop and click on "Subscribe" to download the desired mods.

5. <b>Open mod manager</b><br>
   Go back to the mod manager in the game.

6. <b>Activate mods</b><br>
   Activate the downloaded mods and click on "Confirm changes".

7. <b>Open console</b><br>
   Start a ride and open the console with the `~` or `` ` `` key.

8. <b>Export packages</b><br>
   Enter the following command in the console:

    ```
    export_server_packages
    ```

9. <b>Exit game</b><br>
   Wait until the process is complete and exit the game.

10. <b>Connect via SFTP</b><br>
    Connect to your server via SFTP. You can find instructions on how to do this here: [Instructions](../establish-sftp-connection.md).

11. <b>Open directory</b><br>
    Navigate to the following directory:

    ```
    .local/share/American Truck Simulator
    ```

12. <b>Upload files</b><br>
    Upload the created files `server_packages.sii` and `server_packages.dat`, which you will find under the following path:

    ```
    Documents/American Truck Simulator
    ```

13. <b>Restart server</b><br>
    Restart the server and join the server.

## Add external mods

1. <b>Download mods</b><br>
   Download the desired mods from platforms such as Modhub or other sources.

2. <b>Copy mods</b><br>
   Copy the mods into your local mod directory, which you can find under the following path:

    ```
    Documents/American Truck Simulator/mod
    ```

3. <b>Start game</b><br>
   Start American Truck Simulator.

4. <b>Open mod menu</b><br>
   Select the "Mods" item in the main menu.

5. <b>Activate mods</b><br>
   Activate the previously added mods and click on "Confirm changes".

6. <b>Open console</b><br>
   Start a ride and open the console with the `~` or `` ` `` key.

7. <b>Export packages</b><br>
   Enter the following command in the console:

    ```
    export_server_packages
    ```

8. <b>Exit game</b><br>
   Wait until the process is complete and exit the game.

9. <b>Connect via SFTP</b><br>
   Connect to your server via SFTP. You can find instructions on how to do this here: [Instructions](../establish-sftp-connection.md).

10. <b>Open directory</b><br>
    Navigate to the following directory:

    ```
    .local/share/American Truck Simulator
    ```

11. <b>Upload files</b><br>
    Upload the created files `server_packages.sii` and `server_packages.dat`, which you will find under the following path:

    ```
    Documents/American Truck Simulator
    ```

12. <b>Restart server</b><br>
    Restart the server and join the server.
