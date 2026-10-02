---
description: "Restrict access to a SCP: Secret Laboratory server without a built-in server password"
---

# How to Protect Your SCP: Secret Laboratory Server Without a Server Password

SCP: Secret Laboratory has no built-in server password. There is no entry for it in any configuration file, and you cannot set a password in the dashboard either. If you want to control who can join your server, use the whitelist instead. This guide shows you which options you have and what they do.

:::: warning Warning
The path to the configuration files contains the game port of your server: `/.config/SCP Secret Laboratory/config/<Port>/`. Replace `<Port>` with the actual game port of your server. You can find the game port in the dashboard under **Overview**.
::::

## Whitelist instead of a password

The whitelist is the real replacement for a server password: only players whose ID you add can join. Everyone else is rejected.

1. <b>Find out the game port</b><br>
   Open the dashboard of your server and note the game port shown under **Overview**.

2. <b>Stop the server</b><br>
   Stop your server via the dashboard.

3. <b>Connect via SFTP</b><br>
   Connect to your server via [SFTP](../establish-sftp-connection.md).

4. <b>Enable the whitelist</b><br>
   In the file `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`, set the `enable_whitelist` entry to `true`:

   ```
   enable_whitelist: true
   ```

5. <b>Add players</b><br>
   In the file `/.config/SCP Secret Laboratory/config/<Port>/UserIDWhitelist.txt`, add each allowed ID on its own line, e.g.:

   ```
   76561198000000001@steam
   ```

   :::: tip Tip
   Add your own ID as well, otherwise you will lock yourself out.
   ::::

6. <b>Start the server</b><br>
   Save both files and start your server via the dashboard.

   :::: info Note
   Later changes to the whitelist only take effect after restarting the server.
   ::::

You can find all details, e.g. on Discord IDs and comments in the list, in the [Set up a whitelist](set-up-whitelist.md) guide.

## Additionally filter by country

As an additional filter, you can allow or block connections by country of origin – you can find out how in the [Set up geoblocking](set-up-geoblocking.md) guide.

## Hide the server from the server list

An unverified server never appears in the public server list. Your server is only shown there after it has been [verified](get-server-verified.md).

If your server is verified and you still want to hide it from the list, enter the following command in the console of the dashboard:

```
!private
```

To show the server in the list again, enter the following command:

```
!public
```

:::: danger Important
Hiding does not protect your server. Anyone who knows the IP address and port can still join via **Direct Connect** (see [Join the server](join-server.md)). Only the whitelist actually restricts access.
::::

## Password plugins

A join password can only be added via a plugin. We recommend the whitelist instead, as it works without additional plugins.

:::: info Note
If you use your own plugin or modification that restricts access to your server (other than the whitelist), you must mark this in `config_gameplay.txt` on a verified server (see the Verified Server Rules):

```
server_access_restriction: true
```

If a plugin provides its own whitelist instead, set:

```
custom_whitelist: true
```

These entries only mark your server in the public server list. If your server is not verified, you can ignore these entries.
::::

## Not a join password: override_password

:::: warning Warning
The file `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` contains the entry `override_password`. This is **not** a password for joining, but a login for the [Remote Admin](use-remote-admin.md) that grants the rank set in `override_password_role`. Northwood itself explicitly advises against it in the file and recommends assigning ranks by ID instead (see [Assign ranks](assign-ranks.md)). So leave the entry at its default value:

```
override_password: none
```
::::
