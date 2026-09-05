---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Factorio Server"
description: "Spieler auf einem Factorio Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["factorio"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/factorio/add-savegame", "gameserver/factorio/create-backup", "gameserver/factorio/download-savegame", "gameserver/factorio/join-server"]
---

Du kannst Spieler über die Serverkonsole in der Verwaltung oder ingame per Chat-Befehl kicken und bannen. Angegeben wird dabei immer der **Factorio-Benutzername** des Spielers.

> [!NOTE]
> Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/factorio/add-admin).

> [!TIP]
> Die Befehle werden in der Serverkonsole **mit** führendem Schrägstrich eingegeben, z.B. `/kick Spielername`.

## Spieler kicken

```text
/kick <Benutzername> <Grund>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```text
/ban <Benutzername> <Grund>
```

Der Spieler wird vom Server ausgeschlossen und in die Banliste eingetragen.

## Spieler entbannen

```text
/unban <Benutzername>
```

## Banliste anzeigen und verwalten

```text
/bans
```

```text
/banlist <add/remove/get/clear> <Benutzername>
```

## Banliste manuell bearbeiten

Die Banliste liegt als Datei `server-banlist.json` im Hauptverzeichnis Deines Servers und wird beim Bannen automatisch angelegt. Du kannst sie per [SFTP](/tutorials/gameserver/establish-sftp-connection) bearbeiten:

```json
[
  "Spieler1",
  "Spieler2"
]
```

Starte den Server nach dem Bearbeiten neu, damit die Liste neu eingelesen wird.

> [!TIP]
> Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Banliste nicht lädt.

## Spieler stummschalten

```text
/mute <Benutzername>
```

```text
/unmute <Benutzername>
```

Mit `/purge <Benutzername>` entfernst Du zusätzlich die Chatnachrichten eines Spielers.

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

> [!WARNING]
> **Whitelist**
>
> Der Befehl `/whitelist <add/remove/get/clear> [Benutzername]` existiert zwar, die Whitelist ist beim Standard-Startkommando aber **nicht aktiv**: Sie benötigt zusätzlich die Startparameter `--server-whitelist` und `--use-server-whitelist`. Ohne diese wird eine ingame gesetzte Whitelist außerdem nicht in die Datei geschrieben und geht beim Stoppen des Servers verloren. Verwende zum Aussperren einzelner Spieler daher die Banliste.

> [!TIP]
> Speichere nach einem Ban mit `/server-save`, damit der aktuelle Stand gesichert ist.
