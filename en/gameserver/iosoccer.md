# IOSoccer

## What is IOSoccer?

IOSoccer is a free multiplayer football game built on the Source Engine. Instead of commanding a whole team, you control exactly one outfield player in a chase camera — runs, passing options and defending all emerge from the actual teamwork of the players on the server. That is exactly why IOSoccer is a pure server game: without other players on a shared server there is no match.

Matches follow real football rules that can be enabled individually through the server settings — among them offside (`mp_offside`), penalty shootouts (`mp_penalties`), extra time (`mp_extratime`) and golden goal (`mp_goldengoal`). Team size is defined with `mp_maxplayers`; the value applies **per side** and goes up to eleven players. Missing goalkeepers can be filled by bots (`mp_botkeepers`), the match length is set with `mp_timelimit_match`, and with `sv_restart`, `sv_endmatch` or the timeout commands you steer a running match straight from the server console.

For league play, kits and team names can be set freely through `mp_teamkits` and `mp_teamnames`. On top of that your server can report the results of a match to a web server automatically (`sv_webserver_matchdata_*`) — the basis for the community's league tables and statistics pages. There is no classic savegame though: all that persists on the server are your configurations, ban lists, maps and match statistics.

On the server side IOSoccer is a classic Source game. The configuration lives in the game folder `iosoccer` under `cfg/server.cfg` and `cfg/autoexec.cfg`, the map rotation sits right next to it in `mapcycle.txt`, maps are `.bsp` files, and extensions run through Metamod:Source and SourceMod. Custom maps are delivered to your players through a FastDL download server; the well-known cosmetic community mods — balls, goal nets, gloves or boots — are client-side only and installed by each player individually. The game does not ship a built-in admin system: administration runs exclusively through the server console or RCON, and in-game admin rights are only available through SourceMod.

IOSoccer is particularly popular among players who prefer football as a team sport with fixed positions rather than a single-player simulation — leagues, clans and training servers form the core of the community. The game is available on PC via Steam free of charge.
