---
description: Savegame auf einen 7 Days to Die Server hochladen
---

# So fügst du ein Savegame zu deinem 7 Days to Die Server hinzu

Du kannst eine bestehende Singleplayer-Welt auf deinen Server hochladen.

## Savegame finden

Dein lokales Savegame findest du auf deinem PC unter:

```
%AppData%/7DaysToDie/
```

Dort befinden sich zwei wichtige Ordner:
- `GeneratedWorlds/` — enthält die Weltdaten (Terrain, Gebäude)
- `Saves/` — enthält die Spielstände (Spielerfortschritt, Platzierungen)

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Weltdaten hochladen</b><br>
   Lade den Ordner deiner Welt aus `GeneratedWorlds/` in folgendes Verzeichnis auf dem Server hoch:

   ```
   /.local/share/7DaysToDie/GeneratedWorlds/
   ```

4. <b>Spielstand hochladen</b><br>
   Lade den Ordner deines Spielstands aus `Saves/` in folgendes Verzeichnis auf dem Server hoch:

   ```
   /Saves/
   ```

5. <b>serverconfig.xml anpassen</b><br>
   Öffne die Datei `serverconfig.xml` und passe die folgenden Werte an:

   ```xml
   <property name="GameWorld" value="DeinWeltName"/>
   <property name="GameName" value="DeinSpielstandName"/>
   ```

   Ersetze `DeinWeltName` mit dem Namen deines Welt-Ordners und `DeinSpielstandName` mit dem Namen deines Spielstand-Ordners.

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Die Ordnernamen müssen exakt mit den Werten in der `serverconfig.xml` übereinstimmen.
::::
