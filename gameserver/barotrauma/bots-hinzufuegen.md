---
description: Bots auf einem Barotrauma Server hinzufügen und konfigurieren
---

# So fügst du Bots auf deinem Barotrauma Server hinzu

Bots füllen automatisch leere Crew-Plätze auf deinem Server und übernehmen Aufgaben wie das Steuern des U-Boots oder das Reparieren von Schäden.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serversettings.xml öffnen</b><br>
   Öffne die Datei `serversettings.xml` unter:

   ```
   /serversettings.xml
   ```

4. <b>Bot-Anzahl einstellen</b><br>
   Suche nach den folgenden Einträgen und passe die Werte an:

   ```xml
   BotCount="2"
   MaxBotCount="4"
   ```

   | Einstellung | Beschreibung |
   |-------------|-------------|
   | `BotCount` | Standardanzahl der Bots, die beim Rundenstart hinzugefügt werden |
   | `MaxBotCount` | Maximale Anzahl an Bots, die auf dem Server erlaubt sind |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Bots werden automatisch hinzugefügt, um leere Crew-Plätze zu füllen. Treten mehr Spieler bei, werden Bots entsprechend entfernt.
::::
