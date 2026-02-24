---
description: Spieler auf einem The Bus Server kicken und bannen
---

# So kickst und bannst du Spieler auf einem The Bus Server

## Spielerliste anzeigen

Um alle Spieler auf dem Server anzuzeigen, gib folgenden Befehl ein:

```
/list
```

## So kickst du einen Spieler

```
/kick <spielername>
```

Der Spieler wird sofort vom Server entfernt.

## So bannst du einen Spieler

```
/ban <spielername>
```

Der Spieler wird permanent gebannt und automatisch vom Server gekickt.

## So bannst du einen Spieler temporär

```
/tempban <spielername> <minuten>
```

**Beispiele:**

```
/tempban SpielerName 60
/tempban SpielerName 1440
```

| Dauer | Minuten |
|-------|---------|
| 1 Stunde | `60` |
| 24 Stunden | `1440` |
| 7 Tage | `10080` |

## So entbannst du einen Spieler

```
/unban <spielername>
```

Alternativ kannst du die Datei `TheBus/Saved/PlayerData.json` per [SFTP](../sftp-verbindung-herstellen.md) öffnen und den Wert `"banned"` auf `false` setzen:

```json
{
    "name": "SpielerName",
    "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
    "perms": "User",
    "banned": false,
    "unbanDate": "0001.01.01-00.00.00",
    "adminPasswordUsed": ""
}
```

Starte den Server anschließend neu.

## So mutest du einen Spieler

```
/mute <spielername>
```

Der Spieler kann keine Nachrichten mehr im Chat senden.

## So entmutest du einen Spieler

```
/unmute <spielername>
```

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/list` | Alle Spieler anzeigen |
| `/kick <spieler>` | Spieler vom Server kicken |
| `/ban <spieler>` | Spieler permanent bannen |
| `/tempban <spieler> <minuten>` | Spieler temporär bannen |
| `/unban <spieler>` | Spieler entbannen |
| `/mute <spieler>` | Spieler stummschalten |
| `/unmute <spieler>` | Stummschaltung aufheben |

:::: tip Tipp
Diese Befehle erfordern Owner- oder Admin-Rechte.
::::
