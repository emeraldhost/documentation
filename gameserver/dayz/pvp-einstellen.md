---
description: PvP und PvE auf einem DayZ Server einstellen
---

# So stellst du PvP und PvE auf deinem DayZ Server ein

Du kannst Friendly Fire und den Schaden zwischen Spielern über die `serverDZ.cfg` anpassen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serverDZ.cfg öffnen</b><br>
   Öffne die Datei `serverDZ.cfg` im Hauptverzeichnis deines Servers.

4. <b>Einstellungen anpassen</b><br>
   Suche und passe die folgenden Werte an:

   ```
   enableCfgGameplayFile = 1;
   disableDamageSystem = 0;
   ```

   | Einstellung | Beschreibung | Werte |
   |-------------|-------------|-------|
   | `disableDamageSystem` | Schadenssystem (PvP) | `0` = aktiviert, `1` = deaktiviert |
   | `enableCfgGameplayFile` | Erweiterte Gameplay-Konfiguration | `0` = aus, `1` = an |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Für einen reinen **PvE-Server** setze `disableDamageSystem = 1`. Spieler können sich dann nicht gegenseitig verletzen.
::::

:::: info Hinweis
Erweiterte Gameplay-Einstellungen wie Mechaniken, Bewegung und mehr kannst du in der `cfggameplay.json` konfigurieren, sobald `enableCfgGameplayFile = 1` gesetzt ist.
::::
