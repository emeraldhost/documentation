---
description: Change the autosave interval on a FOUNDRY server
---

# How to Change the Autosave Interval on Your FOUNDRY Server

FOUNDRY saves the game state automatically at regular intervals. The interval can be adjusted directly via the dashboard.

1. <b>Open dashboard</b><br>
   Open the dashboard of your server.

2. <b>Open settings</b><br>
   Navigate to the **Settings**.

3. <b>Set the interval</b><br>
   Enter the desired value in seconds in the **Autosave Interval** field (e.g. `300` for 5 minutes).

4. <b>Restart the server</b><br>
   Save the setting and restart your server.

:::: tip Tip
A very short interval (e.g. under 60 seconds) can cause brief lag spikes on larger factories. A very long interval increases the risk of losing progress. `300` (5 minutes) is a good compromise.
::::
