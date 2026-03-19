---
description: Spawn-Schutz auf einem Minecraft Java Edition Server ändern
---

# So änderst du den Spawn-Schutz auf einem Minecraft Java Server

## Was ist der Spawn-Schutz?

Der Spawn-Schutz (Spawn Protection) verhindert, dass Spieler ohne OP-Rechte Blöcke im Bereich des Welt-Spawnpunkts abbauen oder platzieren können. Der Wert gibt den Radius in Blöcken rund um den Spawnpunkt an.

## Wie ändere ich den Spawn-Schutz?

1. <b>Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.</b><br>

2. <b>Suche nach folgendem Eintrag:</b><br>

```
spawn-protection=16
```

3. <b>Ändere den Wert nach Wunsch.</b><br>

4. <b>Speichere die Änderungen und starte den Server neu.</b><br>

| Wert | Beschreibung |
|------|--------------|
| `0` | Spawn-Schutz deaktiviert (alle Spieler können am Spawn bauen) |
| `16` | Standard-Einstellung (16 Blöcke Radius) |

:::: tip Hinweis
Ein Wert von `0` wird empfohlen, wenn du Plugins wie WorldGuard für den Schutz von Bereichen nutzt.
::::
