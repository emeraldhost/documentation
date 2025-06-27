---
description: Step-by-step instructions on how to change the world seed on your Minecraft Bedrock Edition server.
---

# Change world seed in Minecraft Bedrock Edition

::: danger Attention
Create a backup of your server beforehand, as the current world can be lost by changing the world seed.
:::

1. <strong>Open your dashboard and select your Minecraft Bedrock Edition server</strong>.

2. <strong>Go to the file browser</strong>.

3. <strong>Open the file ```server.properties```.</strong>

4. <strong>Look for the following entry:</strong>

    ```
    level-seed=
    ```

5. <strong>Insert the desired world seed at this point (e.g. ```level-seed=1111132940```).</strong>

6. save the file and restart the server for the new world seed to take effect.

::: tip Tip
You can find out the current world seed of an existing world by entering the command ```/seed``` in the game.
:::
