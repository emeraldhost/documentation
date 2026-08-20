# Minecraft Endstone Edition

## Was ist Minecraft Endstone Edition?

Minecraft Endstone Edition steht für Endstone – eine Plugin-Plattform für Minecraft Bedrock Edition. Endstone ist kein eigenes Spiel und auch keine eigenständige Serversoftware: Es startet den offiziellen Bedrock Dedicated Server von Mojang und erweitert ihn im laufenden Betrieb um eine Plugin-Schnittstelle. Die Entwickler beschreiben das Projekt deshalb selbst als "Paper für Bedrock".

Weil im Kern weiterhin der offizielle Bedrock-Server arbeitet, funktionieren bestehende Bedrock-Welten und -Konfigurationen unverändert weiter. Konfiguriert wird der Server wie gewohnt über die Datei `server.properties`, die Welten liegen im Ordner `worlds`, und Behavior- sowie Resource Packs lassen sich genauso einbinden wie auf einem normalen Bedrock-Server.

Der eigentliche Mehrwert liegt im Plugin-System. Endstone-Plugins werden entweder in Python (als `.whl`-Paket) oder in C++ (auf Linux-Servern als `.so`-Datei) geschrieben und laufen ausschließlich auf dem Server. Deine Mitspieler müssen dafür nichts installieren und verbinden sich mit einem völlig unveränderten Minecraft Bedrock Client – egal ob von Windows, Android oder iOS aus. Klassische Mods für Forge oder Fabric gehören zur Minecraft Java Edition und funktionieren hier nicht.

Zusätzlich bringt Endstone Serverbefehle mit, die dem offiziellen Bedrock-Server fehlen. Dazu gehören ein vollwertiges Bann-System mit `/ban`, `/ban-ip`, `/banlist` und `/pardon` sowie Befehle wie `/plugins`, `/status` und `/reload`. Ein Bann lässt sich damit direkt per Befehl wieder aufheben, ohne den Server zu stoppen oder Dateien von Hand zu bearbeiten. Die Rechteverwaltung baut auf den bekannten Bedrock-Operator-Stufen auf, sodass `/op` und die Datei `permissions.json` wie gewohnt funktionieren.

Endstone eignet sich damit besonders für Spieler, die auf Bedrock-Geräten spielen, aber trotzdem eine erweiterbare Serverumgebung mit Plugins und komfortabler Spielerverwaltung möchten – ohne auf die Kompatibilität des offiziellen Bedrock-Servers zu verzichten.
