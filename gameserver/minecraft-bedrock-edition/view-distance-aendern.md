---
description: Minecraft Bedrock Edition View Distance richtig anpassen - Anleitung für deinen Minecraft Server zur Optimierung der Performance und Sichtweite.
---

# So änderst du die View-Distance auf deinem Minecraft Bedrock Server

View Distance auf deinem Minecraft Bedrock Edition Server anpassen.

## Was ist die View-Distance?

Die `view-distance` bestimmt, wie viele Chunks ein Spieler rund um sich sehen kann. Ein Chunk ist in Minecraft ein Bereich der Welt von 16x16 Blöcken. Das bedeutet: Ist die View-Distance auf 10 gesetzt, sieht der Spieler in einem Quadrat von 21x21 Chunks - also 10 Chunks in jede Richtung. Die Sichtweite beeinflusst nur das Laden und Anzeigen der Welt, nicht die aktive Berechnung von z.B. Mobs, Redstone oder dem Wachstum der Pflanzen.

## Welche Auswirkungen hat die Einstellung auf meinen Server?

- Höhere Werte ermöglichen eine größere Weltsicht.
- Je mehr Spieler gleichzeitig online sind, desto stärker wird der Server belastet.
- Zu hohe Werte können zu Rucklern, Verbindungsproblemen oder hoher RAM-Auslastung führen.

## Wie ändere ich die View-Distance?

1. <b>Server auswählen</b><br>
   Gehe im Dashboard auf deinen Minecraft Bedrock Edition Server.

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
   Ändere den Wert nach Wunsch (z.B. 12 oder 10).

6. <b>Änderungen speichern</b><br>
   Speichere die Änderungen durch einen Klick auf „Speichern".

7. <b>Server neustarten</b><br>
   Starte den Server neu, damit die Änderungen aktiv werden.

:::: tip Empfehlung

- 6–8 → Bei großen Spielerzahlen & wenig Serverleistung
- 10-12 → Ausgewogen zwischen Performance und Sichtweite
- 16-20 → Nur bei starker Serverleistung
- 32 → Standard-Einstellung
::::
