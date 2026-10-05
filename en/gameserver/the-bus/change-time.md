---
description: Change time and date on a The Bus server or use the real time
---

# How to Change Time and Date on a The Bus Server

You can change the time of day and the date on your server using a **command** in the in-game chat, or let the server use the current real time.

:::: info Note
These commands require Owner or Admin permissions. You can find out how to add an admin in [Add Admin](add-admin.md). On our servers, the console in the dashboard only shows the server output and does not accept commands.
::::

## How to Change the Time of Day

1. <b>Open the in-game chat</b><br>
   [Join your server](join-server.md) and open the in-game chat.

2. <b>Enter the command</b><br>
   Enter the following command and replace `<time>` with the time you want:

   ```
   /time <time>
   ```

## How to Change the Date

1. <b>Open the in-game chat</b><br>
   [Join your server](join-server.md) and open the in-game chat.

2. <b>Enter the command</b><br>
   Enter the following command and replace `<date>` with the date you want:

   ```
   /date <date>
   ```

:::: tip Tip
The format in which `/time` and `/date` expect their values is not officially documented. Use `/commands` to show all available commands.
::::

## How to Use the Current Real Time

Since Update 3.2 EA, your server can use the current real time. You enable this option with the following command in the in-game chat:

```
/useRealTime
```

:::: info Note
Whether the command expects an additional value is not officially documented. While real time is active, values you set with `/time` or `/date` may be replaced by the current time again.
::::

## Command Overview

| Command | Description |
|---------|-------------|
| `/time <time>` | Set the current time |
| `/date <date>` | Set the current date |
| `/useRealTime` | Enable the real time (UseRealTime) |

To change the weather, see [Change Weather](change-weather.md).
