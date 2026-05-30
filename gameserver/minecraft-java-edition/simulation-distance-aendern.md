---
description: Simulation-Distance auf einem Minecraft Java Edition Server ändern
---

# So änderst du die Simulation-Distance auf einem Minecraft Java Server

## Was ist die Simulation-Distance?

Die `simulation-distance` bestimmt, **in welchem Radius rund um den Spieler Entities und Spielmechaniken aktiv getickt werden**. Das umfasst:

- **Andere Spieler und Mobs** — sie werden nur in diesem Bereich bewegt und angezeigt
- **Redstone-Schaltungen**
- **Mob-Spawning**
- **Pflanzenwachstum** und Ticks von Feuer, Wasser, Tropfstein etc.

Chunks außerhalb der Simulation-Distance werden zwar noch geladen (solange sie in der [`view-distance`](view-distance-aendern.md) liegen), sind aber sozusagen "eingefroren".

:::: warning Spieler werden erst aus der Nähe sichtbar?
Das ist der häufigste Fall: Steht die Simulation-Distance zu niedrig (z.B. auf `5`), erscheinen andere Spieler und Entities erst, wenn sie sich sehr nah befinden. Setze den Wert testweise auf `8`–`16` und starte den Server neu.
::::

## Auswirkungen auf den Server

- Zu niedrige Werte führen dazu, dass Farmen, Redstone, Mobs oder Spieler außerhalb des Spielers nicht aktiv sind.
- Höhere Werte bedeuten mehr Serverlast, besonders bei vielen Spielern oder umfangreichen Systemen.

## Simulation-Distance ändern

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.

2. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   simulation-distance=16
   ```

3. <b>Wert ändern</b><br>
   Ändere den Wert nach Wunsch (z.B. `8` oder `12`).

4. <b>Server neu starten</b><br>
   Speichere die Änderungen und starte den Server neu.

:::: tip Empfehlung
- `4`–`6` → Bei großen Spielerzahlen & geringer Serverleistung
- `16` → Standard-Einstellung, ausreichend für die meisten Server
- `16`+ → Nur bei starker Serverleistung
::::

## Hinweis zur Client-Seite

Damit Spieler tatsächlich die volle Sichtweite haben, sollten sie auch in ihren **Video-Einstellungen** die **Render-Distanz** hoch genug setzen. Sonst sehen sie nur einen Ausschnitt der vom Server gesendeten Welt — unabhängig davon, was du serverseitig einstellst.
