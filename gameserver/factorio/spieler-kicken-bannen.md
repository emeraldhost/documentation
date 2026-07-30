---
description: Spieler auf einem Factorio Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Factorio Server

Du kannst Spieler über die Serverkonsole in der Verwaltung oder ingame per Chat-Befehl kicken und bannen. Angegeben wird dabei immer der **Factorio-Benutzername** des Spielers.

:::: info Hinweis
Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: tip Tipp
Die Befehle werden in der Serverkonsole **mit** führendem Schrägstrich eingegeben, z.B. `/kick Spielername`.
::::

## Spieler kicken

```
/kick <Benutzername> <Grund>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```
/ban <Benutzername> <Grund>
```

Der Spieler wird vom Server ausgeschlossen und in die Banliste eingetragen.

## Spieler entbannen

```
/unban <Benutzername>
```

## Banliste anzeigen und verwalten

```
/bans
```

```
/banlist <add/remove/get/clear> <Benutzername>
```

## Banliste manuell bearbeiten

Die Banliste liegt als Datei `server-banlist.json` im Hauptverzeichnis deines Servers und wird beim Bannen automatisch angelegt. Du kannst sie per [SFTP](../sftp-verbindung-herstellen.md) bearbeiten:

```json
[
  "Spieler1",
  "Spieler2"
]
```

Starte den Server nach dem Bearbeiten neu, damit die Liste neu eingelesen wird.

## Spieler stummschalten

```
/mute <Benutzername>
```

```
/unmute <Benutzername>
```

Mit `/purge <Benutzername>` entfernst du zusätzlich die Chatnachrichten eines Spielers.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/players [online/count]` | Spieler auf dem Server anzeigen |
| `/kick <Benutzername> <Grund>` | Spieler kicken |
| `/ban <Benutzername> <Grund>` | Spieler bannen |
| `/unban <Benutzername>` | Spieler entbannen |
| `/bans` | Banliste anzeigen |
| `/banlist <add/remove/get/clear> <Benutzername>` | Banliste verwalten |
| `/mute <Benutzername>` | Spieler stummschalten |
| `/unmute <Benutzername>` | Stummschaltung aufheben |
| `/purge <Benutzername>` | Chatnachrichten eines Spielers entfernen |
| `/server-save` | Spielstand sofort speichern |

:::: warning Whitelist
Der Befehl `/whitelist <add/remove/get/clear> [Benutzername]` existiert zwar, die Whitelist ist beim Standard-Startkommando aber **nicht aktiv**: Sie benötigt zusätzlich die Startparameter `--server-whitelist` und `--use-server-whitelist`. Ohne diese wird eine ingame gesetzte Whitelist außerdem nicht in die Datei geschrieben und geht beim Stoppen des Servers verloren. Verwende zum Aussperren einzelner Spieler daher die Banliste.
::::

:::: tip Tipp
Speichere nach einem Ban mit `/server-save`, damit der aktuelle Stand gesichert ist.
::::
