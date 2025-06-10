---
description: Minecraft Java Edition View Distance richtig anpassen – Anleitung für Vanilla, Spigot, Bukkit, Paper, Folia, Purpur und Pufferfish Server zur Optimierung der Performance und Sichtweite.
---

# Minecraft Java Edition - View-Distance anpassen

View Distance auf deinem Minecraft Java Edition Server anpassen.

## Was ist die View-Distance?

Die ```view-distance``` bestimmt, wie viele Chunks ein Spieler rund um sich sehen kann. Ein Chunk ist in Minecraft ein Bereich der Welt von 16x16 Blöcken. Das bedeutet: Ist die View-Distance auf 10 gesetzt, sieht der Spieler in einem Quadrat von 21x21 Chunks - also 10 Chunks in jede Richtung. Die Sichtweite beeinflusst nur das Laden und Anzeigen der Welt, nicht die aktive Berechnung von z.B. Mobs, Redstone oder dem Wachstum der Pflanzen.

## Welche Auswirkungen hat die Einstellung auf meinen Server?
* Höhere Werte ermöglichen eine größere Weltsicht.<br>
* Je mehr Spieler gleichzeitig online sind, desto stärker wird der Server belastet.<br>
* Zu hohe Werte können zu Rucklern, Verbindungsproblemen oder hoher RAM-Auslastung führen.

## Wie ändere ich die View-Distance?

1. <strong>Gehe im Dashboard auf deinen Minecraft Java Edition Server.</strong>

2. <strong>Öffne den Datei-Browser.</strong>

3. <strong>Öffne die Datei ```server.properties```.</strong>

4. <strong>Suche nach folgendem Eintrag:</strong>

```
view-distance=10
```

5. <strong>Ändere den Wert nach Wunsch (z.B. 8 oder 6).</strong>

6. <strong>Speichere die Änderungen durch einen Klick auf „Speichern“.</strong>

7. <strong>Starte den Server neu, damit die Änderungen aktiv werden.</strong>

::: tip Empfehlung
* 6–8 → Bei großen Spielerzahlen & wenig Serverleistung<br>
* 10 → Standard-Einstellung<br>
* 10+ → Nur bei starker Serverleistung
:::