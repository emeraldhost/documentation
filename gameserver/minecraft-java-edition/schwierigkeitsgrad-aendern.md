---
description: Schwierigkeitsgrad auf einem Minecraft Java Edition Server ändern
---

# So änderst du den Schwierigkeitsgrad auf einem Minecraft Java Server

## Was ist der Schwierigkeitsgrad?

Der Schwierigkeitsgrad bestimmt, wie herausfordernd das Spiel ist. Er beeinflusst den Schaden von Mobs, den Hunger und andere Gameplay-Mechaniken.

| Wert | Schwierigkeitsgrad | Beschreibung |
|------|--------------------|--------------|
| `peaceful` | Friedlich | Keine feindlichen Mobs, Gesundheit regeneriert sich schnell |
| `easy` | Einfach | Feindliche Mobs spawnen, verursachen aber wenig Schaden |
| `normal` | Normal | Standard-Schwierigkeitsgrad |
| `hard` | Schwer | Mobs verursachen mehr Schaden, Hunger kann tödlich sein |

## Wie ändere ich den Schwierigkeitsgrad?

1. <b>SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.

2. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

    ```
    difficulty=easy
    ```

3. <b>Wert ändern</b><br>
   Ändere den Wert auf den gewünschten Schwierigkeitsgrad.

4. <b>Server neustarten</b><br>
   Speichere die Änderungen und starte den Server neu.
