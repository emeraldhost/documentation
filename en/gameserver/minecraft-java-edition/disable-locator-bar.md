---
description: Disable the Locator Bar on a Minecraft Java Edition server
---

# How to Disable the Locator Bar on a Minecraft Java Server

The Locator Bar is a compass-like bar above the hotbar that was added in the **1.21.6 "Chase the Skies"** update. It shows the direction of other nearby players. Using the `locatorBar` game rule you can turn it off server-wide for all players.

:::: info Note
`locatorBar` is a **Vanilla game rule** and works on all Java server variants — Vanilla, Paper, Spigot, Purpur, Folia, Forge, Fabric and NeoForge (from version 1.21.6).
::::

## Requirement

You need OP rights (at least level 2) to change game rules. See [Grant OP Rights](grant-op-rights.md).

## Disable the Locator Bar

You can run the command either directly in the in-game chat or via the server console in the dashboard:

```
/gamerule locatorBar false
```

:::: info Note
In the server console, all commands are entered **without** `/`.
::::

:::: warning Caution
Pay attention to the capitalization: the game rule is `locatorBar` (camelCase), **not** `locatorbar` or `locator_bar`. With the wrong spelling the command fails silently.
::::

## Re-enable the Locator Bar

Set the game rule back to `true`:

```
/gamerule locatorBar true
```

:::: tip Tip
The game rule is saved with the world and persists across server restarts — so you only need to run the command once. By default the Locator Bar is enabled (`true`).
::::
