---
description: Minecraft Bedrock Edition Tick Distance richtig anpassen – Anleitung für deinen Minecraft Server zur Optimierung der Performance.
---

# Minecraft Bedrock Edition - Tick-Distance anpassen

Tick-Distance auf deinem Minecraft Bedrock Edition Server anpassen.

## Was ist die Tick-Distance?

Die ```tick-distance``` bestimmt, wie viele Chunks rund um den Spieler aktiv berechnet und getickt werden. Das bedeutet: In diesem Bereich laufen Prozesse wie z. B. Redstone-Schaltungen, Mob-Bewegung und -Spawning, Pflanzenwachstum sowie Ticks von Feuer, Wasser und Tropfstein. Außerhalb dieses Bereichs werden Chunks nur geladen, solange sie innerhalb der View-Distance liegen - sie werden jedoch nicht aktiv verarbeitet, sondern sind sozusagen „eingefroren“.

## Welche Auswirkungen hat die Einstellung auf meinen Server?
* Zu niedrige Werte können dazu führen, dass Farmen, Redstone oder Mobs außerhalb des Spielers nicht funktionieren.<br>
* Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Wie ändere ich die Tick-Distance?

1. <strong>Gehe im Dashboard auf deinen Minecraft Bedrock Edition Server.</strong>

2. <strong>Öffne den Datei-Browser.</strong>

3. <strong>Öffne die Datei ```server.properties```.</strong>

4. <strong>Suche nach folgendem Eintrag:</strong>

    ```
    tick-distance=4
    ```

5. <strong>Ändere den Wert nach Wunsch (z. B. 8 oder 6).</strong>

6. <strong>Speichere die Änderungen durch einen Klick auf „Speichern“.</strong>

7. <strong>Starte den Server neu, damit die Änderungen aktiv werden.</strong>

::: tip Empfehlung
* 4 → Standard-Einstellung<br>
* 6-8 → Ausgewogen zwischen Farmen & Welterkundung<br>
* 10-12 → Nur bei starker Serverleistung
:::