---
description: Change MOTD (Message of the Day) on Minecraft Server
---

# Change MOTD (Message of the Day)

The MOTD (Message of the Day) of a Minecraft server is a message that is displayed on the multiplayer server when you try to connect. It is used to provide players with information about the server, such as the server name, rules, welcome messages or even links to resources. The MOTD is a kind of welcome message that helps players to better understand the server and its community. It can be customized in the server settings.

## Requirements

- Access to the server folder (either via an SFTP connection or direct access to the server files)
    - The SFTP access data can be found in the overview of your game server.

## To change the MOTD, follow these steps

1. <b>Access the server</b>
    - If you have an SFTP connection, you can log in with your SFTP access data.
    - If you have direct access to the server files, navigate to the directory where the Minecraft server is located.

2. <b>Find the server settings</b><br>
    Search for the file that contains the server settings. Usually this is the `server.properties` file in the root directory of the server.

3. <b>Open the `server.properties` file</b><br>
    You can open this file with a text editor to adjust the settings.

4. <b>Search for motd</b><br>
    In the `server.properties` file, search for the entry `motd`. This entry defines the MOTD. It normally looks like this:

    ```
    motd=Your message here.
    ```

5. <b>Change the MOTD text</b><br>
    Change the text in quotation marks after the equal sign to put your desired message. For example:

    ```
    motd=Welcome to our server!
    ```

6. <b>Save the changes</b><br>
    Save the `server.properties` file after adjusting the visibility.

7. <b>Restart the server</b><br>
    Restart the Minecraft server for the changes to take effect.

### That's it! With these steps, you should be able to successfully change the MOTD on your Minecraft server

:::info
Pssst... We also have a [Community Discord](https://discord.emeraldhost.de/) 🤫 Come by!
:::
