---
description: Minecraft Java Edition Simulation Distance richtig anpassen – Anleitung für Vanilla, Spigot, Bukkit, Paper, Folia, Purpur und Pufferfish Server zur Optimierung der Performance.
---

# Minecraft Java Edition - Simulation-Distance anpassen

Simulation-Distance auf deinem Minecraft Java Edition Server anpassen.

## Was ist die Simulation-Distance?

Die ```simulation-distance``` bestimmt, wie viele Chunks rund um den Spieler aktiv berechnet und simuliert werden. Das bedeutet: In diesem Bereich laufen Prozesse wie z. B. Redstone-Schaltungen, Mob-Bewegung und -Spawning, Pflanzenwachstum sowie Ticks von Feuer, Wasser und Tropfstein. Außerhalb dieses Bereichs werden Chunks nur geladen, solange sie innerhalb der View-Distance liegen - sie werden jedoch nicht aktiv verarbeitet, sondern sind sozusagen „eingefroren“.

## Welche Auswirkungen hat die Einstellung auf meinen Server?
* Zu niedrige Werte können dazu führen, dass Farmen, Redstone oder Mobs außerhalb des Spielers nicht funktionieren.<br>
* Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Wie ändere ich die Simulation-Distance?

1. <strong>Gehe im Dashboard auf deinen Minecraft Java Edition Server.</strong>

2. <strong>Öffne den Datei-Browser.</strong>

3. <strong>Öffne die Datei ```server.properties```.</strong>

4. <strong>Suche nach folgendem Eintrag:</strong>

    ```
    simulation-distance=10
    ```

5. <strong>Ändere den Wert nach Wunsch (z. B. 6 oder 4).</strong>

6. <strong>Speichere die Änderungen durch einen Klick auf „Speichern“.</strong>

7. <strong>Starte den Server neu, damit die Änderungen aktiv werden.</strong>

::: tip Empfehlung
* 4–6 → Bei großen Spielerzahlen & geringer Serverleistung<br>
* 10 → Standard-Einstellung<br>
* 10+ → Nur bei starker Serverleistung
:::