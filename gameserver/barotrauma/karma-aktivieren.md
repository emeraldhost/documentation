---
description: Karma-System auf einem Barotrauma Server aktivieren
---

# So aktivierst du das Karma-System auf deinem Barotrauma Server

Das Karma-System bestraft Spieler, die Teammitglieder angreifen oder sabotieren. Spieler mit niedrigem Karma werden automatisch eingeschränkt oder vom Server gekickt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serversettings.xml öffnen</b><br>
   Öffne die Datei `serversettings.xml` unter:

   ```
   /serversettings.xml
   ```

4. <b>KarmaEnabled aktivieren</b><br>
   Suche nach dem Eintrag `KarmaEnabled` und setze den Wert auf `true`:

   ```xml
   KarmaEnabled="true"
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Das Karma-System reduziert den Karma-Wert eines Spielers bei schädlichem Verhalten wie Teamkills, Sabotage oder dem Beschädigen von Ausrüstung. Fällt der Wert unter einen bestimmten Schwellenwert, wird der Spieler automatisch gekickt.
::::
