---
description: Disable the Locator Bar on a Minecraft Bedrock Edition server
---

# How to Disable the Locator Bar on a Minecraft Bedrock Server

The Locator Bar is a compass-like bar above the hotbar that was added in the **"Chase the Skies" update (Bedrock 1.21.90)**. It shows the direction of other nearby players. Unlike Java Edition, on Bedrock it is **not** controlled by the `locatorBar` game rule but by the `playerWaypoints` game rule — set it to `off` to turn the bar off server-wide for all players.

:::: info Note
`playerWaypoints` is a **world game rule** set via the `/gamerule` command — there is **no `server.properties` entry** for it. The game rule uses the values `everyone` (default) and `off` — **not** `true`/`false` like on Java Edition.
::::

## Requirement

You need OP rights to change game rules. See [Grant OP Rights](grant-op-rights.md).

## Disable the Locator Bar

You can run the command either directly in the in-game chat (as an operator) or via the server console in the dashboard:

```
/gamerule playerWaypoints off
```

:::: info Note
In the server console, all commands are entered **without** `/`.
::::

## Re-enable the Locator Bar

Set the game rule back to `everyone`:

```
/gamerule playerWaypoints everyone
```

:::: tip Tip
The game rule is saved with the world and persists across server restarts — so you only need to run the command once. By default player waypoints are enabled (`everyone`).
::::
