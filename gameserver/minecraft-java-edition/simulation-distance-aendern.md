---
description: Simulation-Distance auf einem Minecraft Java Edition Server ändern
---

# So änderst du die Simulation-Distance auf einem Minecraft Java Server

## Was ist die Simulation-Distance?

Die `simulation-distance` bestimmt, wie viele Chunks rund um den Spieler aktiv berechnet und simuliert werden. Das bedeutet: In diesem Bereich laufen Prozesse wie z. B. Redstone-Schaltungen, Mob-Bewegung und -Spawning, Pflanzenwachstum sowie Ticks von Feuer, Wasser und Tropfstein. Außerhalb dieses Bereichs werden Chunks nur geladen, solange sie innerhalb der View-Distance liegen - sie werden jedoch nicht aktiv verarbeitet, sondern sind sozusagen „eingefroren".

## Welche Auswirkungen hat die Einstellung auf meinen Server?

- Zu niedrige Werte können dazu führen, dass Farmen, Redstone oder Mobs außerhalb des Spielers nicht funktionieren.
- Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Wie ändere ich die Simulation-Distance?

1. <strong>Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.</strong>

2. <strong>Suche nach folgendem Eintrag:</strong>

    ```
    simulation-distance=10
    ```

3. <strong>Ändere den Wert nach Wunsch (z. B. 6 oder 4).</strong>

4. <strong>Speichere die Änderungen und starte den Server neu.</strong>

::: tip Empfehlung
- 4–6 → Bei großen Spielerzahlen & geringer Serverleistung
- 10 → Standard-Einstellung
- 10+ → Nur bei starker Serverleistung
:::
