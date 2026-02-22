---
description: Become an admin on an Arma Reforger server
---

# How to Become an Admin on an Arma Reforger Server

There are two ways to get admin rights on your Arma Reforger server: via an admin password or via your Steam64 ID.

## Set Admin Password

1. **Open your dashboard and select your Arma Reforger server.**

2. **Navigate to the settings and enter your desired password under `Admin Password`.**

3. **Save the settings and restart the server.**

::: warning Important
The admin password must be at least 3 characters long and cannot contain spaces.
:::

## Permanent Admins via Steam64 ID

Alternatively, you can permanently add players as admins so they don't need to log in each time.

1. **Open the file `config.json` and find the `"admins"` entry in the `"game"` section.**

2. **Add the Steam64 IDs of the desired admins:**

    ```json
    "game": {
      "admins": [
        "76561198XXXXXXXXX",
        "76561198YYYYYYYYY"
      ]
    }
    ```

3. **Save the changes and restart the server.**

::: tip Tip
You can find your Steam64 ID using our guide [Find your SteamID64](../steamid64-find-out.md).
:::

## Log In as Admin In-Game

1. **Join your server and open the chat with the `/` key.**

2. **Enter the following command:**

    ```
    #login YourAdminPassword
    ```

3. **A confirmation message will appear upon successful login.**

::: info Info
Use `#logout` to log out from admin status. Use `#roles` to check which permissions you currently have.
:::

## Useful Admin Commands

| Command | Description |
|---------|-------------|
| `#login <password>` | Log in as admin |
| `#logout` | Log out from admin status |
| `#roles` | Show current permissions |
| `#players` | List all players with IDs |
| `#id` | Show your own player ID |
| `#restart` | Restart the running scenario |
| `#shutdown` | Shut down the server |
