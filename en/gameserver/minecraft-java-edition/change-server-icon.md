---
description: Change server icon on a Minecraft Java Edition server
---

# How to Change the Server Icon on a Minecraft Java Server

## Icon Requirements

The server icon must meet the following requirements:

| Property | Requirement |
|----------|-------------|
| Filename | `server-icon.png` |
| Format | PNG |
| Size | 64x64 pixels |

## How do I change the server icon?

1. <strong>Create an image with exactly 64x64 pixels and save it as `server-icon.png`.</strong>

2. <strong>Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the `server-icon.png` file to the root directory.</strong>

3. <strong>Restart the server so the icon becomes active.</strong>

::: warning Important
The file must be named exactly `server-icon.png` and be exactly 64x64 pixels. Other formats or sizes will not be recognized.
:::
