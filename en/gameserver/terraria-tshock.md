# Terraria tShock

## What is Terraria tShock?

tShock is a server-side extension for dedicated Terraria servers. It replaces the plain server program shipped by Re-Logic with a far more capable variant that builds on the Terraria Server API and gives the operator proper tools for administration, moderation and extension.

At the heart of tShock is a user and group system: players log in to an account with a user name and password, and every account belongs to a group such as `default`, `vip`, `admin` or `owner`. Permissions define which group is allowed to use which commands. On top of that come an extensive ban system with ticket numbers and time-limited bans, chat and moderation commands, and automatic world backups at fixed intervals.

A tShock server is extended through plugins – small program modules that live on the server only and add new commands, rules or gameplay mechanics there. An optional storage for character data (Server Side Characters) keeps inventories and player progress on the server itself, where they can no longer be manipulated locally.

Nothing changes for your players: they connect to your server with the completely normal, unmodified Terraria client via **Join via IP**. That also means tShock is not a mod loader – mods in the form of `.tmod` files cannot be loaded, which is what the separate Terraria tModLoader server type is for.
