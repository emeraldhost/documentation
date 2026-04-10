---
description: Add an admin on a Project Zomboid server
---

# How to Add an Admin on Your Project Zomboid Server

## Set admin user and password

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Enter admin details</b><br>
   Enter the desired **admin username** and **admin password** in the corresponding fields.

4. <b>Restart the server</b><br>
   Save the settings and restart your server.

## Log in as admin

1. <b>Join the server</b><br>
   Join your server.

2. <b>Log in</b><br>
   Log in with the admin username and admin password.

## Access levels

You can grant other players access via the `/setaccesslevel` command in the chat:

```
/setaccesslevel PlayerName admin
```

| Access Level | Description |
|--------------|-------------|
| `admin` | Full access to all commands and settings |
| `moderator` | Can kick, ban and manage players |
| `overseer` | Can monitor players and manage with limited permissions |
| `gm` | Game Master with limited management rights |
| `observer` | Can observe the server but cannot make changes |
