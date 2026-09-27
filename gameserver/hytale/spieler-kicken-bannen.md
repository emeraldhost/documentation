---
description: Spieler auf einem Hytale Server kicken und bannen
---

# So kickst und bannst du Spieler auf einem Hytale Server

Die folgenden Befehle gibst du in die Konsole deiner Verwaltung ein. Admins können sie auch im Spiel nutzen, dort mit vorangestelltem `/`. Wie du Admin-Rechte vergibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).

## So kickst du einen Spieler

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   kick <Spielername>
   ```

Der Spieler muss dafür online sein. Er wird vom Server getrennt, kann aber sofort wieder beitreten.

## So bannst du einen Spieler

```
ban <Spielername> <Grund>
```

Den Grund kannst du auch weglassen. Statt des Namens funktioniert auch die UUID des Spielers, und der Spieler muss nicht online sein. Der Bann gilt dauerhaft. Ist der Spieler gerade online, wird er sofort vom Server getrennt.

Beispiel:
```
ban Spieler123 Griefing am Spawn
```

## So entbannst du einen Spieler

```
unban <Spielername>
```

Auch hier kannst du statt des Namens die UUID angeben.

## Alle Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `kick <Spieler>` | Spieler vom Server kicken |
| `ban <Spieler> [Grund]` | Spieler dauerhaft bannen, optional mit Grund |
| `unban <Spieler>` | Spieler entbannen |

:::: info Hinweis
Gebannte Spieler speichert der Server in der Datei `bans.json` im Hauptverzeichnis. Auch Admins (OPs) kannst du direkt bannen, ohne ihnen vorher die Rechte zu entziehen.
::::
