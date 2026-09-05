---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Space Station 14 Server"
description: "Spieler auf einem Space Station 14 Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["space-station-14"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 4
related: ["gameserver/space-station-14/add-admin", "gameserver/space-station-14/create-backup", "gameserver/space-station-14/join-server"]
---

Spieler entfernst Du in Space Station 14 über die Konsole im Spiel. Bans werden dabei in der Datenbank Deines Servers gespeichert – Du musst keine Datei bearbeiten.

> [!NOTE]
> Du benötigst Adminrechte, um diese Befehle nutzen zu können. Für Banns brauchst Du zusätzlich die Berechtigung `Ban`. Siehe [Admin hinzufügen](/tutorials/gameserver/space-station-14/add-admin).

## Befehle im Spiel nutzen

1. **Konsole öffnen**\
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. **Befehl eingeben**\
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```text
   kick Beispielspieler
   ```

> [!TIP]
> Kick, Bann, Ban-Liste und Notizen erreichst Du auch ohne Befehle: Öffne mit `F1` das Ahelp-Fenster und nutze dort die Schaltflächen **Kick**, **Ban**, **Ban list** und **Notes**.

## Spieler kicken

```text
kick <Spielername> [<Grund>]
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Der Grund ist optional.

> [!NOTE]
> `kick` erwartet den Benutzernamen eines aktuell verbundenen Spielers – eine User-ID akzeptiert der Befehl nicht.

## Spieler bannen

```text
ban <Spielername oder User-ID> <Grund> [<Dauer in Minuten>]
```

Beispiel für einen Bann über 60 Minuten:

```text
ban Beispielspieler Griefing 60
```

> [!IMPORTANT]
> Lässt Du die Dauer weg oder trägst `0` ein, ist der Bann **dauerhaft**. Das ist die häufigste Fehlerquelle – gib eine Dauer in Minuten an, wenn der Bann wieder auslaufen soll.

> [!TIP]
> Bequemer geht es über die Oberfläche: Mit `banpanel` öffnest Du das Ban-Fenster, optional direkt für einen bestimmten Spieler:
>
> ```text
> banpanel <Spielername oder User-ID>
> ```
>
> Der Befehl funktioniert nur in der Konsole im Spiel, nicht in der Server-Konsole.

## Bann aufheben

1. **Ban-ID herausfinden**\
   Lass Dir die Banns eines Spielers anzeigen:

   ```text
   banlist <Spielername oder User-ID>
   ```

   In der Konsole im Spiel öffnet sich daraufhin ein Fenster mit allen Banns des Spielers samt ihrer ID. In der Server-Konsole wird stattdessen je Bann eine Zeile aus ID und Grund ausgegeben – zum Beispiel `12: Griefing`.

2. **Bann aufheben**\
   Hebe den Bann über seine ID auf:

   ```text
   pardon 12
   ```

> [!WARNING]
> Einen Befehl namens `unban` gibt es in Space Station 14 nicht. Ein Bann wird immer mit `pardon` und der zugehörigen Ban-ID aufgehoben, nicht mit dem Spielernamen.

## Spieler von einer Rolle ausschließen

Statt einen Spieler komplett auszusperren, kannst Du ihm auch nur einen einzelnen Beruf verbieten:

```text
roleban <Spielername oder User-ID> <Beruf> <Grund> [<Dauer in Minuten>]
```

Aufgehoben wird ein Rollen-Bann über seine eigene ID:

```text
roleunban <ID des Rollen-Banns>
```

Auch hier gilt: keine Dauer oder `0` bedeutet dauerhaft.

> [!NOTE]
> Als Beruf erwartet der Befehl die interne ID der Rolle, nicht den angezeigten Namen. Die Konsole im Spiel schlägt Dir die gültigen IDs beim Tippen vor.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `kick <Spielername> [<Grund>]` | Spieler vom Server trennen |
| `ban <Name oder User-ID> <Grund> [<Minuten>]` | Spieler bannen, ohne Dauer dauerhaft |
| `banpanel [<Name oder User-ID>]` | Ban-Fenster öffnen (nur im Spiel) |
| `banlist <Name oder User-ID>` | Banns eines Spielers samt Ban-ID anzeigen |
| `pardon <Ban-ID>` | Bann aufheben |
| `roleban <Name oder User-ID> <Beruf> <Grund> [<Minuten>]` | Spieler von einem Beruf ausschließen |
| `roleunban <ID des Rollen-Banns>` | Rollen-Bann aufheben |
| `ban_exemption_update <Spieler> <Flag> [<Flag> …]` | Ausnahmen von Banns setzen |
| `ban_exemption_get <Spieler>` | Gesetzte Ausnahmen anzeigen |

> [!NOTE]
> Alle Befehle aus dieser Tabelle funktionieren auch in der Server-Konsole – einzige Ausnahme ist `banpanel`, das ein Fenster im Spiel öffnet und deshalb nur dort läuft.

> [!NOTE]
> Banns und Adminrechte liegen gemeinsam in der Datenbank im Ordner `data` Deines Servers. Sicherst Du diesen Ordner, sicherst Du auch Deine Ban-Liste – siehe [Backup erstellen](/tutorials/gameserver/space-station-14/create-backup).
