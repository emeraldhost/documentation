---
description: Step-by-step instructions on how to install and activate Steam Workshop and external mods on an American Truck Simulator server.
---

# Install and activate mods (Steam Workshop and external) on your American Truck Simulator server

## Add Steam Workshop mods

1. <strong>Start American Truck Simulator</strong>.

2. <strong>Select the "Mods" item in the main menu</strong>.

3. <strong>Click on "Steam Workshop" in the top right-hand corner</strong>.

4. <strong>Browse the workshop and click on "Subscribe" to download the desired mods</strong>.

5. <strong>Go back to the mod manager in the game</strong>.

6. <strong>Activate the downloaded mods and click on "Confirm changes"</strong>.

7. <strong>Start a ride and open the console with the `~` or ```` ` ```` key.</strong>

8. <strong>Enter the following command in the console:</strong>

    ```
    export_server_packages
    ```

9. <strong>Wait until the process is complete and exit the game</strong>.

10. <strong>Connect to your server via SFTP. You can find instructions on how to do this here: [Instructions](../establish-sftp-connection.md).</strong>

11. <strong>Navigate to the following directory:</strong>

    ```
    .local/share/American Truck Simulator
    ```

12. <strong>Upload the created files ```server_packages.sii``` and ```server_packages.dat```, which you will find under the following path:</strong>

    ```
    Documents/American Truck Simulator
    ```

13. <strong>Restart the server and join the server</strong>.

## Add external mods

1. <strong>Download the desired mods from platforms such as Modhub or other sources</strong>.

2. <strong>Copy the mods into your local mod directory, which you can find under the following path:</strong>

    ```
    Documents/American Truck Simulator/mod
    ```

3. <strong>American Truck Simulator</strong>.

4. <strong>Select the "Mods" item in the main menu</strong>.

5. <strong>Activate the previously added mods and click on "Confirm changes".</strong>

6. <strong>Start a ride and open the console with the `~` or ```` ` ```` key.</strong>

7. <strong>Enter the following command in the console:</strong>

    ```
    export_server_packages
    ```

8. <strong>Wait until the process is complete and exit the game</strong>.

9. <strong>Connect to your server via SFTP. You can find instructions on how to do this here: [Instructions](../establish-sftp-connection.md).</strong>

10. <strong>Navigate to the following directory:</strong>

    ```
    .local/share/American Truck Simulator
    ```

11. <strong>Upload the created files ```server_packages.sii``` and ```server_packages.dat```, which you will find under the following path:</strong>

    ```
    Documents/American Truck Simulator
    ```

12. <strong>Restart the server and join the server</strong>.
