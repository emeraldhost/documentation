---
description: Use Screen on a Linux VPS (Ubuntu/Debian)
---

# How to Use Screen on Your Linux VPS

With **Screen** you can run terminal sessions in the background. This way processes like a Minecraft server keep running even when you close the SSH connection.

## Install Screen

1. <b>Update system</b><br>
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. <b>Install Screen</b><br>
   Install Screen with the following command:

   ```bash
   sudo apt install screen -y
   ```

## Use Screen

### Start a new session

Start a new Screen session with a name:

```bash
screen -S my-session
```

You are now inside the Screen session and can run commands.

### Detach session

To keep the session running in the background, press:

```
Ctrl + A, then D
```

The session will continue running in the background, even if you close the SSH connection.

### List sessions

Show all running Screen sessions:

```bash
screen -ls
```

### Reattach session

Reconnect to a running session:

```bash
screen -r my-session
```

### End session

To completely end a session, type inside the session:

```bash
exit
```

## Example: Minecraft Server

1. <b>Start Screen session</b><br>
   Create a new session for the Minecraft server:

   ```bash
   screen -S minecraft
   ```

2. <b>Start server</b><br>
   Navigate to the server directory and start the server:

   ```bash
   cd /home/minecraft/server
   java -Xmx4G -Xms4G -jar server.jar nogui
   ```

3. <b>Detach session</b><br>
   Press `Ctrl + A`, then `D`. The Minecraft server will continue running in the background.

4. <b>Reconnect later</b><br>
   To open the server console again:

   ```bash
   screen -r minecraft
   ```

## All commands

| Command | Description |
|---------|-------------|
| `screen -S name` | Start a new session with name |
| `screen -ls` | List all sessions |
| `screen -r name` | Reattach to a session |
| `Ctrl + A, D` | Detach session |
| `exit` | End session |
