---
description: View-Distance auf einem Minecraft Java Edition Server ändern
---

# So änderst du die View-Distance auf einem Minecraft Java Server

## Was ist die View-Distance?

Die `view-distance` bestimmt, **wie viele Chunks der Server lädt und an die Clients sendet**. Ein Chunk ist in Minecraft ein Bereich von 16x16 Blöcken. Bei einer View-Distance von 10 sieht der Spieler in jede Richtung 10 Chunks (also ein Quadrat von 21x21 Chunks).

Die View-Distance beeinflusst nur das **Anzeigen** der Welt — also wie weit die Landschaft sichtbar ist. Sie hat **nichts** mit der aktiven Berechnung von Mobs, Redstone oder Spielern zu tun.

:::: info Spieler oder Mobs werden erst aus der Nähe sichtbar?
Dann ist nicht die `view-distance`, sondern die [`simulation-distance`](simulation-distance-aendern.md) zuständig. Entities werden nur in dem Bereich getickt und angezeigt, der von der Simulation-Distance abgedeckt wird.
::::

## Auswirkungen auf den Server

- Höhere Werte ermöglichen eine größere Weltsicht.
- Je mehr Spieler gleichzeitig online sind, desto stärker wird der Server belastet.
- Zu hohe Werte können zu Rucklern, Verbindungsproblemen oder hoher RAM-Auslastung führen.

## View-Distance ändern

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.

2. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   view-distance=16
   ```

3. <b>Wert ändern</b><br>
   Ändere den Wert nach Wunsch (z.B. `8` oder `12`).

4. <b>Server neu starten</b><br>
   Speichere die Änderungen und starte den Server neu.

:::: tip Empfehlung
- `6`–`8` → Bei großen Spielerzahlen & wenig Serverleistung
- `16` → Standard-Einstellung
- `16`+ → Nur bei starker Serverleistung
::::

## Hinweis zur Client-Seite

Die View-Distance des Servers ist die **Obergrenze** — der Client kann nicht weiter sehen als der Server an ihn sendet. Spieler müssen zusätzlich in ihren **Video-Einstellungen** die **Render-Distanz** entsprechend hoch setzen, damit sie die ganze gesendete Sichtweite auch tatsächlich angezeigt bekommen.
