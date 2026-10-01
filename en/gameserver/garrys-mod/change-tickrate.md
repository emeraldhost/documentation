---
description: Change the tickrate of a Garry's Mod server
---

# How to Change the Tickrate of Your Garry's Mod Server

The **tickrate** defines how often per second your server calculates and updates the game world – movement, physics and hits. A tickrate of 66, for example, means 66 updates per second. You set it in the settings of your server.

## Which tickrate makes sense?

According to the [Garry's Mod Wiki](https://wiki.facepunch.com/gmod/Command_Line_Parameters), the recommended range is between **30 and 128**, and the engine's default value is **66.6666**. On your server, the tickrate is set to **22** by default, and you can enter a maximum of **100** in the settings.

The default value of 22 is below the recommended range, so physics and hit registration feel less smooth. For most servers, **33** or **66** is the better choice. As a guideline:

| Tickrate | Suitable for |
| -------- | ------------ |
| `33` | Servers with many props and entities (e.g., DarkRP or Sandbox) |
| `66` | Gamemodes with fast-paced combat (e.g., TTT) |

:::: warning Warning
The higher the tickrate, the more often per second the server has to recalculate everything and the more CPU load each player and each entity causes. On roleplay and sandbox servers with many props, a high tickrate can therefore cause lag.
::::

## Set the tickrate

1. <b>Open the dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open the settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter the tickrate</b><br>
   Enter the desired value in the **Tickrate** field, e.g., `33`. The server then starts with the parameter:

   ```
   -tickrate 33
   ```

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

## Check the tickrate

1. <b>Open the console</b><br>
   Open the console in the dashboard of your server while the server is running.

2. <b>Enter the command</b><br>
   Enter the following command in the console:

   ```
   lua_run print(1 / engine.TickInterval())
   ```

   The console then prints the current tickrate of your server. The value can differ slightly from the one you entered and have decimal places, e.g., `66.666668` instead of `66`.
