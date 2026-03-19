---
title: Adding Admins to Your ARK Survival Evolved Server
description: Step-by-step instructions on how to add admins to your ARK Survival Evolved server
---

# Adding an ARK Survival Evolved Server Admin

::: tip Tip
Here you will find instructions on how to find your [Steam64ID](../steamid64-find-out.md).
:::

## Method 1: Admin Password (Temporary Admin Rights)

With this method, you can log in as admin in-game by entering the admin password.

1. <strong>Open your dashboard and select your ARK Survival Evolved server.</strong>

2. <strong>Navigate to your server settings.</strong>

3. <strong>Look for the ```Admin Password``` option and set a secure password.</strong>

4. <strong>Save the changes and restart your server.</strong>

5. <strong>In-game: Open the console with the Tab key and enter the following command:</strong>
   ```
   enablecheats YourAdminPassword
   ```

::: info Info
Admin rights via password are only valid for the current session. After reconnecting, you will need to enter the password again.
:::

## Method 2: Permanent Admins (Steam64ID)

With this method, you are permanently registered as admin and do not need to enter a password.

1. <strong>Open your dashboard and select your ARK Survival Evolved server.</strong>

2. <strong>Navigate to the file browser and open the ```ShooterGame/Saved``` folder.</strong>

3. <strong>Create or open the file ```AllowedCheaterSteamIDs.txt```.</strong>

4. <strong>Add your Steam64ID on a new line.</strong>

5. <strong>Save the file and restart your server for the changes to take effect.</strong>

::: info Info
If you want to add multiple admins, simply paste **multiple Steam64IDs** - each on a **new line**.
:::

## Important Admin Commands

After activating admin rights, the following commands are available to you:

| Command | Description |
|---------|-------------|
| `cheat fly` | Enables flight mode |
| `cheat walk` | Disables flight mode |
| `cheat god` | Enables invincibility mode |
| `cheat giveresources` | Gives you 50 units of each resource |
| `cheat infinitestats` | Infinite stamina, health, etc. |
| `cheat destroywilddinos` | Removes all wild dinos |
