# Minecraft PocketMine Edition

## What is Minecraft PocketMine Edition?

Minecraft PocketMine Edition refers to PocketMine-MP – an open source server software for Minecraft Bedrock Edition. It is written in PHP and replaces the official Bedrock Dedicated Server with its own implementation that was built for extensibility from the ground up.

Players connect with a regular Minecraft Bedrock client, for example from Windows, Android or iOS. The server is added manually with its IP address and port in the "Servers" tab. Java Edition clients cannot join a PocketMine server – both editions use different network protocols.

The biggest difference to the official Bedrock server is the plugin system. Plugins are PHP extensions in `.phar` format that run exclusively on the server and add new commands, game mechanics, permission systems or minigames. A large selection is available on the official plugin platform Poggit. Because plugins work server-side, your fellow players do not have to install anything.

Classic mods in the sense of Forge or Fabric do not exist here – those belong to the Java Edition. Bedrock add-ons with behaviour packs are not supported by PocketMine-MP either. Resource packs, on the other hand, can be added for visuals and made mandatory for all players if you want.

Worlds are managed as folders in the Bedrock Edition LevelDB format, so you can transfer existing Bedrock worlds to your server. The server is configured through the files `server.properties` and `pocketmine.yml`, which define things like the world name, difficulty, game mode, view distance and Xbox authentication.

PocketMine-MP is therefore especially suited for players who play on Bedrock devices but still want an extensible server environment with plugins and fine-grained permission management.
