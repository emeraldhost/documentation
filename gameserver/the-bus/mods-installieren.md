---
description: Mods auf einem The Bus Server installieren
---

# So installierst du Mods auf einem The Bus Server

The Bus unterstützt Mods über den **Steam Workshop**. Mods werden auf dem Server im Mods-Ordner abgelegt.

:::: tip Tipp
Mods für The Bus findest du im [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540).
::::

## So installierst du Mods

1. <b>Mod herunterladen</b><br>
   Öffne den [Steam Workshop für The Bus](https://steamcommunity.com/workshop/browse/?appid=491540) und abonniere die gewünschten Mods. Die Mods befinden sich anschließend in folgendem Ordner:
   ```
   SteamLibrary/steamapps/workshop/content/491540/
   ```

2. <b>Mod hochladen</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und lade die Mod-Dateien in den `TheBus/Mods/`-Ordner hoch.

3. <b>Server neu starten</b><br>
   Starte deinen Server, damit die Mods geladen werden.

:::: tip Tipp
Mit dem Befehl `maplist` in der Serverkonsole kannst du prüfen, ob Map-Mods korrekt erkannt wurden.
::::

## Mod-Typen

Achte auf die Kennzeichnung der Mods, da diese bestimmt, wo sie installiert werden müssen:

| Typ | Beschreibung |
|-----|-------------|
| **Client and Server** | Muss sowohl auf dem Server als auch bei allen Spielern installiert sein |
| **Client only** | Wird normalerweise nur beim Spieler benötigt – ist der Mod jedoch auf dem Server installiert, müssen ihn auch alle Spieler installieren |
| **Server only** | Wird nur auf dem Server benötigt und ist bei Spielern deaktiviert |

:::: warning Wichtig
Kompatible Mods werden auf dem Server automatisch aktiviert. Stelle sicher, dass alle Spieler die benötigten Client-Mods ebenfalls installiert haben, da sie sonst nicht beitreten können.
::::
