---
description: Step-by-step instructions on how to change the world seed on your Minecraft Bedrock Edition server.
---

# Change world seed in Minecraft Bedrock Edition

:::: danger Attention
Create a backup of your server beforehand, as the current world can be lost by changing the world seed.
::::

1. <b>Open dashboard</b><br>
   Open your dashboard and select your Minecraft Bedrock Edition server.

2. <b>Open file browser</b><br>
   Go to the file browser.

3. <b>Open config</b><br>
   Open the file ```server.properties```.

4. <b>Find entry</b><br>
   Look for the following entry:

    ```
    level-seed=
    ```

5. <b>Insert seed</b><br>
   Insert the desired world seed at this point (e.g. ```level-seed=1111132940```).

6. <b>Save & restart</b><br>
   Save the file and restart the server for the new world seed to take effect.

:::: tip Tip
You can find out the current world seed of an existing world by entering the command ```/seed``` in the game.
::::
