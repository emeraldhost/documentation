# Minecraft PocketMine Edition

## Was ist Minecraft PocketMine Edition?

Minecraft PocketMine Edition steht für PocketMine-MP – eine quelloffene Serversoftware für Minecraft Bedrock Edition. Sie ist in PHP geschrieben und ersetzt den offiziellen Bedrock Dedicated Server durch eine eigene Implementierung, die von Grund auf auf Erweiterbarkeit ausgelegt ist.

Spieler verbinden sich mit einem ganz normalen Minecraft Bedrock Client, also zum Beispiel von Windows, Android oder iOS aus. Der Server wird dabei manuell über IP-Adresse und Port im Reiter "Server" eingetragen. Clients der Java Edition können einem PocketMine-Server nicht beitreten – die beiden Editionen nutzen unterschiedliche Netzwerkprotokolle.

Der größte Unterschied zum offiziellen Bedrock-Server ist das Plugin-System. Plugins sind PHP-Erweiterungen im `.phar`-Format, die ausschließlich auf dem Server laufen und dort neue Befehle, Spielmechaniken, Rechteverwaltungen oder Minigames ergänzen. Eine große Auswahl findest du auf der offiziellen Plugin-Plattform Poggit. Weil die Plugins serverseitig arbeiten, müssen deine Mitspieler dafür nichts installieren.

Klassische Mods im Sinne von Forge oder Fabric gibt es nicht – diese gehören zur Java Edition. Auch Bedrock Add-Ons mit Behaviour Packs werden von PocketMine-MP nicht unterstützt. Für die Optik lassen sich dagegen Resource Packs einbinden und bei Bedarf für alle Spieler verpflichtend machen.

Welten werden als Ordner im LevelDB-Format der Bedrock Edition verwaltet, sodass du bestehende Bedrock-Welten auf den Server übertragen kannst. Konfiguriert wird der Server über die Dateien `server.properties` und `pocketmine.yml`, in denen unter anderem Weltname, Schwierigkeitsgrad, Spielmodus, Sichtweite und die Xbox-Authentifizierung festgelegt werden.

PocketMine-MP eignet sich damit besonders für Spieler, die auf Bedrock-Geräten spielen, aber trotzdem eine erweiterbare Serverumgebung mit Plugins und feiner Rechteverwaltung möchten.
