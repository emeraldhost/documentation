---
description: Minecraft Bedrock Edition View Distance richtig anpassen - Anleitung für deinen Minecraft Server zur Optimierung der Performance und Sichtweite.
---

# So änderst du die View-Distance auf deinem Minecraft Bedrock Server

## Was ist die View-Distance?

Die `view-distance` bestimmt, **wie viele Chunks der Server lädt und an die Clients sendet**. Ein Chunk ist in Minecraft ein Bereich von 16x16 Blöcken. Bei einer View-Distance von 10 sieht der Spieler in jede Richtung 10 Chunks (also ein Quadrat von 21x21 Chunks).

Die View-Distance beeinflusst nur das **Anzeigen** der Welt — also wie weit die Landschaft sichtbar ist. Sie hat **nichts** mit der aktiven Berechnung von Mobs, Redstone oder Spielern zu tun.

:::: info Spieler oder Mobs werden erst aus der Nähe sichtbar?
Dann ist nicht die `view-distance`, sondern die [`tick-distance`](tick-distance-aendern.md) zuständig. Entities werden nur in dem Bereich getickt und angezeigt, der von der Tick-Distance abgedeckt wird.
::::

## Auswirkungen auf den Server

- Höhere Werte ermöglichen eine größere Weltsicht.
- Je mehr Spieler gleichzeitig online sind, desto stärker wird der Server belastet.
- Zu hohe Werte können zu Rucklern, Verbindungsproblemen oder hoher RAM-Auslastung führen.

## View-Distance ändern

1. <b>Server auswählen</b><br>
   Gehe in der Verwaltung auf deinen Minecraft Bedrock Edition Server.

2. <b>Datei-Browser öffnen</b><br>
   Öffne den Datei-Browser.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `server.properties`.

4. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   view-distance=32
   ```

5. <b>Wert ändern</b><br>
   Ändere den Wert nach Wunsch (z.B. `12` oder `10`).

6. <b>Änderungen speichern</b><br>
   Speichere die Änderungen durch einen Klick auf "Speichern".

7. <b>Server neustarten</b><br>
   Starte den Server neu, damit die Änderungen aktiv werden.

:::: tip Empfehlung
- `6`–`8` → Bei großen Spielerzahlen & wenig Serverleistung
- `10`–`12` → Ausgewogen zwischen Performance und Sichtweite
- `16`–`20` → Nur bei starker Serverleistung
- `32` → Standard-Einstellung
::::

## Hinweis zur Client-Seite

Die View-Distance des Servers ist die **Obergrenze** — der Client kann nicht weiter sehen als der Server an ihn sendet. Spieler müssen zusätzlich in ihren **Video-Einstellungen** die **Render-Distanz** entsprechend hoch setzen, damit sie die ganze gesendete Sichtweite auch tatsächlich angezeigt bekommen.
