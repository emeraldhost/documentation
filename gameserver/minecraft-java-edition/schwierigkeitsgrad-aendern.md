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

1. <strong>Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.</strong>

2. <strong>Suche nach folgendem Eintrag:</strong>

```
difficulty=easy
```

3. <strong>Ändere den Wert auf den gewünschten Schwierigkeitsgrad.</strong>

4. <strong>Speichere die Änderungen und starte den Server neu.</strong>
