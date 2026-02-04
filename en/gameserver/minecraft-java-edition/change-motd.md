---
description: Change MOTD on a Minecraft Java Edition server
---

# How to Change the MOTD on a Minecraft Java Server

The MOTD (Message of the Day) of a Minecraft server is a message that is displayed on the multiplayer server when you try to connect. It is used to provide players with information about the server, such as the server name, rules, welcome messages or even links to resources.

1. **Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.**

2. **Look for the following entry:**

    ```
    motd=Your message here.
    ```

3. **Change the value to your desired message. For example:**

    ```
    motd=Welcome to our server!
    ```

4. **Save the changes and restart the server.**
