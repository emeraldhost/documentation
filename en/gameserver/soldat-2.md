# Soldat 2

## What is Soldat 2?

Soldat 2 is the successor to the 2D multiplayer shooter Soldat and comes from the same developer, Michał Marcinkowski. The game keeps the side view and the very direct, fast-paced feel of the original, but rebuilds it technically: you run, jump, use a jetpack and a parachute and fight with a broad weapon arsenal in short, hectic rounds.

Soldat 2 has been in Early Access on Steam since 22 September 2020. The game is built around customization from the ground up – almost everything that defines the gameplay exists as a plain file and can be swapped out on your own server.

That makes Soldat 2 remarkably open on the server side. Maps, game modes, modifiers and map cycles are JSON files inside the server directory, and custom game logic is added through C# scripts. Modifiers change weapon values, objects and gameplay parameters, rule files control round length and score limit, and a cycle file lets you build your own map rotation – optionally depending on the current player count.

The server is managed through an in-game console. One player can be stored permanently as an admin via their PlayFab ID, while all further admins log in with an RCON password. From there you run commands such as changing maps, adding bots, kicking and banning players or reloading scripts while the server is running.

Soldat 2 has no savegame – it is a pure match shooter without a persistent world. What gets backed up on a server is therefore only the configuration and your own custom content.

:::: info Note
Soldat 2 only ships a Linux dedicated server. That is exactly what your server runs on with us, so you do not have to worry about the platform.
::::

Soldat 2 is especially popular among players looking for short, action-packed rounds in the style of the original while running their own maps, game modes and rules on the server. The game is available for PC via Steam.
