---
description: Map auf einem DayZ Server ändern
---

# So änderst du die Map auf deinem DayZ Server

Du kannst zwischen den offiziellen Maps **Chernarus** und **Livonia** wechseln.

:::: warning Achtung
Für die Livonia-Map benötigst du das **Livonia DLC** in DayZ. Spieler ohne das DLC können dem Server nicht beitreten.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serverDZ.cfg öffnen</b><br>
   Öffne die Datei `serverDZ.cfg` im Hauptverzeichnis deines Servers.

4. <b>Map festlegen</b><br>
   Suche den Abschnitt `class Missions` und ändere den `template`-Wert:

   ```
   class Missions
   {
       class Mission1
       {
           template="dayzOffline.chernarusplus";
       };
   };
   ```

   | Wert | Map |
   |------|-----|
   | `dayzOffline.chernarusplus` | Chernarus (Standard) |
   | `dayzOffline.enoch` | Livonia (DLC) |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Beim ersten Start mit einer neuen Map wird automatisch eine neue Welt generiert. Dein bisheriger Spielfortschritt der alten Map bleibt erhalten.
::::
