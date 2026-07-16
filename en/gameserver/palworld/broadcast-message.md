---
description: Send a broadcast message to all players on a Palworld server
---

# How to Send a Broadcast Message on Your Palworld Server

With the `/Broadcast` command you can send a message to all players on the server.

:::: info Note
You need admin rights to use this command. See [Add Admin](add-admin.md).
::::

## Send a broadcast

1. <b>Open chat</b><br>
   Press `Enter` to open the chat.

2. <b>Enter command</b><br>
   Enter the following command:

   ```
   /Broadcast <MessageText>
   ```

   Replace `<MessageText>` with the desired text.

:::: warning Caution
The message is cut off at the first **space** — of `Server will restart` only `Server` would be sent. Use underscores instead.
::::

:::: tip Example
```
/Broadcast Server_restart_in_10_minutes!
```
::::
