---
description: Change game settings on a V Rising server
---

# How to Change the Game Settings on Your V Rising Server

You can adjust the preset game settings via the dashboard. These determine the game mode and difficulty of your server.

:::: info Note
Some settings may no longer apply after the save file has been created for the first time. Leave the field empty if you are using an uploaded singleplayer save or a custom `ServerGameSettings.json` in the `~/save-data/Settings/` directory.
::::

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Select game settings</b><br>
   Enter the desired value in the **Preset Game Settings** field:

   | Value | Description |
   |-------|-------------|
   | `StandardPvE` | Standard PvE |
   | `StandardPvE_Easy` | Standard PvE (Easy) |
   | `StandardPvE_Hard` | Standard PvE (Hard) |
   | `StandardPVP` | Standard PvP |
   | `StandardPvP_Easy` | Standard PvP (Easy) |
   | `StandardPvP_Hard` | Standard PvP (Hard) |
   | `Level30PvE` | PvE up to Level 30 |
   | `Level30PvP` | PvP up to Level 30 |
   | `Level50PvE` | PvE up to Level 50 |
   | `Level50PvP` | PvP up to Level 50 |
   | `Level70PvE` | PvE up to Level 70 |
   | `Level70PvP` | PvP up to Level 70 |
   | `SoloPvP` | Solo PvP |
   | `DuoPvP` | Duo PvP |
   | `HardcorePvP` | Hardcore PvP |
   | `Custom` | Custom settings |

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: tip Tip
Choose `Custom` if you want to use your own settings via the `ServerGameSettings.json` in the `~/save-data/Settings/` directory.
::::
