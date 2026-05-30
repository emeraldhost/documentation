---
description: Minecraft Bedrock Edition Tick Distance richtig anpassen - Anleitung für deinen Minecraft Server zur Optimierung der Performance.
---

# So änderst du die Tick-Distance auf deinem Minecraft Bedrock Server

## Was ist die Tick-Distance?

Die `tick-distance` bestimmt, **in welchem Radius rund um den Spieler Entities und Spielmechaniken aktiv getickt werden**. Das umfasst:

- **Andere Spieler und Mobs** — sie werden nur in diesem Bereich bewegt und angezeigt
- **Redstone-Schaltungen**
- **Mob-Spawning**
- **Pflanzenwachstum** und Ticks von Feuer, Wasser, Tropfstein etc.

Chunks außerhalb der Tick-Distance werden zwar noch geladen (solange sie in der [`view-distance`](view-distance-aendern.md) liegen), sind aber sozusagen "eingefroren".

:::: warning Spieler werden erst aus der Nähe sichtbar?
Das ist der häufigste Fall: Steht die Tick-Distance zu niedrig (z.B. auf `4`), erscheinen andere Spieler und Entities erst, wenn sie sich sehr nah befinden. Setze den Wert testweise auf `8`–`10` und starte den Server neu.
::::

## Auswirkungen auf den Server

- Zu niedrige Werte führen dazu, dass Farmen, Redstone, Mobs oder Spieler außerhalb des Spielers nicht aktiv sind.
- Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Tick-Distance ändern

1. <b>Server auswählen</b><br>
   Gehe in der Verwaltung auf deinen Minecraft Bedrock Edition Server.

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
   Ändere den Wert nach Wunsch (z.B. `8` oder `6`).

6. <b>Änderungen speichern</b><br>
   Speichere die Änderungen durch einen Klick auf "Speichern".

7. <b>Server neustarten</b><br>
   Starte den Server neu, damit die Änderungen aktiv werden.

:::: tip Empfehlung
- `4` → Standard-Einstellung
- `6`–`8` → Ausgewogen zwischen Farmen & Welterkundung
- `10`–`12` → Nur bei starker Serverleistung
::::

## Hinweis zur Client-Seite

Damit Spieler tatsächlich die volle Sichtweite haben, sollten sie auch in ihren **Video-Einstellungen** die **Render-Distanz** hoch genug setzen. Sonst sehen sie nur einen Ausschnitt der vom Server gesendeten Welt — unabhängig davon, was du serverseitig einstellst.
