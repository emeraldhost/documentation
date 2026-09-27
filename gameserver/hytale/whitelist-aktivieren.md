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

Der Server speichert die Einstellung sofort in der `config.json` (`"RequireJoinPermission": true`). Die Whitelist bleibt also auch nach einem Neustart aktiv.

## So fügst du Spieler hinzu

```
whitelist add <Spielername>
```

Statt des Namens kannst du auch die UUID des Spielers angeben. Der Spieler muss dafür nicht online sein.

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

## Wo speichert Hytale die Whitelist?

Eine eigene `whitelist.json` gibt es seit Update 6 nicht mehr. Stattdessen erhält jeder Spieler auf der Whitelist die Berechtigung `hytale.server.join`, die der Server in der `permissions.json` im Hauptverzeichnis speichert. Hast du noch eine alte `whitelist.json`, übernimmt der Server sie beim Start automatisch und benennt sie in `whitelist.json.migrated` um.

:::: info Hinweis
Administratoren (OPs) können immer beitreten, auch wenn die Whitelist aktiv ist. Ihre Gruppe `hytale:Admin` hat alle Berechtigungen und damit auch `hytale.server.join`. Das gilt für jede Gruppe, die diese Berechtigung besitzt: Ihre Mitglieder kommen trotz Whitelist auf den Server, auch wenn du sie mit `whitelist remove` entfernst. Der Server weist dich in diesem Fall mit der Meldung "... can still join, because a group or a wildcard grants them the permission!" darauf hin.
::::
