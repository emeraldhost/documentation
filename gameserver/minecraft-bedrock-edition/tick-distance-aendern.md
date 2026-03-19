---
description: Minecraft Bedrock Edition Tick Distance richtig anpassen - Anleitung für deinen Minecraft Server zur Optimierung der Performance.
---

# So änderst du die Tick-Distance auf deinem Minecraft Bedrock Server

Tick-Distance auf deinem Minecraft Bedrock Edition Server anpassen.

## Was ist die Tick-Distance?

Die `tick-distance` bestimmt, wie viele Chunks rund um den Spieler aktiv berechnet und getickt werden. Das bedeutet: In diesem Bereich laufen Prozesse wie z. B. Redstone-Schaltungen, Mob-Bewegung und -Spawning, Pflanzenwachstum sowie Ticks von Feuer, Wasser und Tropfstein. Außerhalb dieses Bereichs werden Chunks nur geladen, solange sie innerhalb der View-Distance liegen - sie werden jedoch nicht aktiv verarbeitet, sondern sind sozusagen „eingefroren".

## Welche Auswirkungen hat die Einstellung auf meinen Server?

- Zu niedrige Werte können dazu führen, dass Farmen, Redstone oder Mobs außerhalb des Spielers nicht funktionieren.
- Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Wie ändere ich die Tick-Distance?

1. <b>Server auswählen</b><br>
   Gehe im Dashboard auf deinen Minecraft Bedrock Edition Server.

2. <b>Datei-Browser öffnen</b><br>
   Öffne den Datei-Browser.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `server.properties`.

4. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

    ```
    tick-distance=4
    ```

5. <b>Wert ändern</b><br>
   Ändere den Wert nach Wunsch (z. B. 8 oder 6).

6. <b>Änderungen speichern</b><br>
   Speichere die Änderungen durch einen Klick auf „Speichern".

7. <b>Server neustarten</b><br>
   Starte den Server neu, damit die Änderungen aktiv werden.

:::: tip Empfehlung

- 4 → Standard-Einstellung
- 6-8 → Ausgewogen zwischen Farmen & Welterkundung
- 10-12 → Nur bei starker Serverleistung
::::
