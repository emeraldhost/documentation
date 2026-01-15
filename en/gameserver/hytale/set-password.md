---
description: Set password on a Hytale server
---

# How to Set a Password on a Hytale Server

:::: tip Note
Stop your server before making changes to configuration files, otherwise they will be overwritten by the server.
::::

## How to Set a Password

1. <b>Stop the Server</b><br>
   Stop your server via the management panel.

2. <b>Open the Configuration File</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and open the `config.json` file in the root directory.

3. <b>Set the Password</b><br>
   Find the `Password` setting and set your desired password:
   ```json
   "Password": "YourPassword123"
   ```

4. <b>Start the Server</b><br>
   Start your server for the changes to take effect.

Players will now need to enter the password to join the server.

## How to Remove the Password

To remove the password, set the value to empty:
```json
"Password": ""
```

:::: tip Note
A password is a simple alternative to the whitelist. You can share the password with friends without having to add each one to the whitelist.
::::
