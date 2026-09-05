---
slug: "use-screen"
language: "en"
title: "How to Use Screen on Your Linux VPS"
description: "Use Screen on a Linux VPS (Ubuntu/Debian)"
tags: []
date: "2026-04-01"
visibility: "public"
cta: "rootserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "The EmeraldHost team shares its knowledge so you get the most out of your server."
available_languages: ["de", "en"]
short_title: "Use Screen"
sort: 4
related: ["rootserver/services-tools/install-docker", "rootserver/services-tools/install-minecraft-server", "rootserver/services-tools/install-phpmyadmin-apache2-und-mysql", "rootserver/services-tools/install-teamspeak-3-server"]
---

With **Screen** you can run terminal sessions in the background. This way processes like a Minecraft server keep running even when you close the SSH connection.

## Install Screen

1. **Update system**\
   First, update the package lists:

   ```bash
   sudo apt update
   ```

2. **Install Screen**\
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

```text
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

1. **Start Screen session**\
   Create a new session for the Minecraft server:

   ```bash
   screen -S minecraft
   ```

2. **Start server**\
   Navigate to the server directory and start the server:

   ```bash
   cd /home/minecraft/server
   java -Xmx4G -Xms4G -jar server.jar nogui
   ```

3. **Detach session**\
   Press `Ctrl + A`, then `D`. The Minecraft server will continue running in the background.

4. **Reconnect later**\
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
