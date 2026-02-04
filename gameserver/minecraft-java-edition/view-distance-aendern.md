---
description: View-Distance auf einem Minecraft Java Edition Server ändern
---

# So änderst du die View-Distance auf einem Minecraft Java Server

## Was ist die View-Distance?

Die ```view-distance``` bestimmt, wie viele Chunks ein Spieler rund um sich sehen kann. Ein Chunk ist in Minecraft ein Bereich der Welt von 16x16 Blöcken. Das bedeutet: Ist die View-Distance auf 10 gesetzt, sieht der Spieler in einem Quadrat von 21x21 Chunks - also 10 Chunks in jede Richtung. Die Sichtweite beeinflusst nur das Laden und Anzeigen der Welt, nicht die aktive Berechnung von z.B. Mobs, Redstone oder dem Wachstum der Pflanzen.

## Welche Auswirkungen hat die Einstellung auf meinen Server?

- Höhere Werte ermöglichen eine größere Weltsicht.<br>
- Je mehr Spieler gleichzeitig online sind, desto stärker wird der Server belastet.<br>
- Zu hohe Werte können zu Rucklern, Verbindungsproblemen oder hoher RAM-Auslastung führen.

## Wie ändere ich die View-Distance?

1. <strong>Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.</strong>

2. <strong>Suche nach folgendem Eintrag:</strong>

```
view-distance=10
```

3. <strong>Ändere den Wert nach Wunsch (z.B. 8 oder 6).</strong>

4. <strong>Speichere die Änderungen und starte den Server neu.</strong>

::: tip Empfehlung

- 6–8 → Bei großen Spielerzahlen & wenig Serverleistung<br>
- 10 → Standard-Einstellung<br>
- 10+ → Nur bei starker Serverleistung
:::
