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

1. <b>Create the icon</b><br>
   Create an image with exactly 64x64 pixels and save it as `server-icon.png`.

2. <b>Upload the icon</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md) and upload the `server-icon.png` file to the root directory.

3. <b>Restart the server</b><br>
   Restart the server so the icon becomes active.

:::: warning Important
The file must be named exactly `server-icon.png` and be exactly 64x64 pixels. Other formats or sizes will not be recognized.
::::
