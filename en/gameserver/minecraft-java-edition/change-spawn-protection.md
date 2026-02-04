---
description: Change spawn protection on a Minecraft Java Edition server
---

# How to Change the Spawn Protection on a Minecraft Java Server

## What is spawn protection?

Spawn protection prevents players without OP rights from breaking or placing blocks in the area around the world spawn point. The value specifies the radius in blocks around the spawn point.

## How do I change the spawn protection?

1. <strong>Connect to your server via [SFTP](../establish-sftp-connection.md) and open the file `server.properties`.</strong>

2. <strong>Search for the following entry:</strong>

```
spawn-protection=16
```

3. <strong>Change the value as desired.</strong>

4. <strong>Save the changes and restart the server.</strong>

| Value | Description |
|-------|-------------|
| `0` | Spawn protection disabled (all players can build at spawn) |
| `16` | Default setting (16 block radius) |

::: tip Note
A value of `0` is recommended if you use plugins like WorldGuard for area protection.
:::
