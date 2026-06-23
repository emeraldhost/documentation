---
description: "Team-Kill-Einstellungen auf einem Insurgency: Sandstorm Server anpassen"
---

# So passt du die Team-Kill-Einstellungen auf deinem Insurgency: Sandstorm Server an

Mit den Team-Kill-Einstellungen legst du fest, wie streng das Töten von Mitspielern bestraft wird. Niedrige Strafen erlauben riskantere Spielweisen, strengere Regeln schrecken absichtliches Team-Killing ab.

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
   TeamKillLimit=3
   TeamKillGrace=0.2
   TeamKillReduceTime=90
   ```

   | Einstellung | Standard | Beschreibung |
   |-------------|----------|--------------|
   | `TeamKillLimit` | `3` | Anzahl an Team-Kills, bevor ein Spieler gekickt wird |
   | `TeamKillGrace` | `0.2` | „Gnadenzeit" in Sekunden zwischen Team-Kills — weitere Kills zählen in dieser Zeit nicht |
   | `TeamKillReduceTime` | `90` | Zeit in Sekunden, nach der der Team-Kill-Zähler eines Spielers um 1 sinkt |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bearbeite die `Game.ini` nur bei gestopptem Server. Änderungen an einer laufenden Instanz werden beim Beenden überschrieben.
::::
