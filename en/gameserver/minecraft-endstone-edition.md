# Minecraft Endstone Edition

## What is Minecraft Endstone Edition?

Minecraft Endstone Edition refers to Endstone – a plugin platform for Minecraft Bedrock Edition. Endstone is neither a game of its own nor a standalone server software: it launches Mojang's official Bedrock Dedicated Server and extends it at runtime with a plugin interface. That is why the developers describe the project as "Paper for Bedrock".

Because the official Bedrock server still does the actual work under the hood, existing Bedrock worlds and configurations keep working unchanged. The server is configured through the familiar `server.properties` file, worlds live in the `worlds` folder, and behavior as well as resource packs can be added exactly like on a regular Bedrock server.

The real benefit is the plugin system. Endstone plugins are written either in Python (as a `.whl` package) or in C++ (as a `.so` file on Linux servers) and run exclusively on the server. Your fellow players do not have to install anything and connect with a completely unmodified Minecraft Bedrock client – whether from Windows, Android or iOS. Classic mods for Forge or Fabric belong to the Java Edition and do not work here.

On top of that, Endstone adds server commands the official Bedrock server is missing. These include a full ban system with `/ban`, `/ban-ip`, `/banlist` and `/pardon` as well as commands such as `/plugins`, `/status` and `/reload`. A ban can therefore be lifted with a single command, without stopping the server or editing files by hand. Permission management builds on the familiar Bedrock operator levels, so `/op` and the `permissions.json` file work just as you know them.

Endstone is therefore especially suited for players who play on Bedrock devices but still want an extensible server environment with plugins and convenient player management – without giving up the compatibility of the official Bedrock server.
