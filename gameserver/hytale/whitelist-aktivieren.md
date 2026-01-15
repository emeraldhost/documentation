---
description: Whitelist auf einem Hytale Server aktivieren
---

# So aktivierst du die Whitelist auf einem Hytale Server

Mit der Whitelist kannst du kontrollieren, wer deinem Server beitreten darf. Nur Spieler auf der Whitelist können sich verbinden.

## So aktivierst du die Whitelist

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Whitelist aktivieren</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   whitelist enable
   ```

## So fügst du Spieler hinzu

```
whitelist add <Spielername>
```

## So entfernst du Spieler

```
whitelist remove <Spielername>
```

## Alle Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `whitelist enable` | Whitelist aktivieren |
| `whitelist disable` | Whitelist deaktivieren |
| `whitelist add <Spieler>` | Spieler zur Whitelist hinzufügen |
| `whitelist remove <Spieler>` | Spieler von der Whitelist entfernen |
| `whitelist list` | Alle Spieler auf der Whitelist anzeigen |
| `whitelist status` | Status der Whitelist anzeigen |
| `whitelist clear` | Whitelist leeren |

:::: tip Hinweis
Administratoren (OPs) können immer beitreten, auch wenn die Whitelist aktiv ist.
::::
