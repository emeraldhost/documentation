---
description: "Kill-Feed auf einem Insurgency: Sandstorm Server konfigurieren"
---

# So konfigurierst du den Kill-Feed auf deinem Insurgency: Sandstorm Server

Der Kill-Feed zeigt an, wer wen ausgeschaltet hat. Du kannst ihn aktivieren, deaktivieren oder anpassen — z.B. für ein kompetitiveres Spielgefühl, indem weniger Informationen angezeigt werden.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. <b>Einstellungen eintragen</b><br>
   Füge den folgenden Abschnitt hinzu und passe die gewünschten Werte an:

   ```ini
   [/Script/Insurgency.INSGameMode]
   bKillFeed=False
   bKillFeedSpectator=True
   bKillerInfo=True
   bKillerInfoRevealDistance=False
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `bKillFeed` | `False` | Aktiviert den Kill-Feed, wenn auf `True` gesetzt |
   | `bKillFeedSpectator` | `True` | Kill-Feed nur für Zuschauer und Replays |
   | `bKillerInfo` | `True` | Zeigt dem Opfer Informationen wie Schütze und Waffe |
   | `bKillerInfoRevealDistance` | `False` | Zeigt dem Opfer zusätzlich die Entfernung des Kills |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
::::
