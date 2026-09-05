---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Necesse Server"
description: "Spieler auf einem Necesse Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 7
related: ["gameserver/necesse/add-savegame", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame", "gameserver/necesse/join-server"]
---

Spieler entfernst Du auf einem Necesse Server über Befehle – entweder in der **Konsole** Deiner Verwaltung oder im **Chat im Spiel**. Angegeben wird dabei der **Spielername**.

> [!NOTE]
> Zum Kicken benötigst Du mindestens die Stufe `moderator`, zum Bannen mindestens `admin`. Wie Du Rechte vergibst, steht unter [Admin hinzufügen](/tutorials/gameserver/necesse/add-admin). In der Konsole der Verwaltung stehen Dir alle Befehle ohne zusätzliche Rechte zur Verfügung.

## Befehle ausführen

1. **Konsole oder Chat öffnen**\
   Öffne die **Konsole** Deines Servers in der Verwaltung oder drücke im Spiel `Enter`, um den Chat zu öffnen.

2. **Befehl eingeben**\
   Alle Befehle beginnen mit `/`, zum Beispiel:

   ```text
   /kick MaxMustermann
   ```

## Spieler kicken

```text
/kick <Spielername> [Grund]
```

Der Spieler wird vom Server getrennt und kann jederzeit wieder beitreten. Der optionale Grund wird ihm beim Trennen angezeigt.

> [!TIP]
> **Beispiel**
>
> ```text
> /kick MaxMustermann Bitte halte dich an die Regeln
> ```

## Spieler bannen

```text
/ban <Spielername>
```

Der Spieler wird vom Server geworfen und kann sich nicht mehr verbinden, bis Du den Bann aufhebst.

## Bann aufheben

```text
/unban <Spielername>
```

## Banns anzeigen

```text
/bans
```

Zeigt alle gebannten Spieler an.

## Befehle im Überblick

| Befehl | Benötigte Stufe | Beschreibung |
|--------|-----------------|-------------|
| `/kick <Spielername> [Grund]` | `moderator` | Spieler vom Server trennen |
| `/ban <Spielername>` | `admin` | Spieler aussperren |
| `/unban <Spielername>` | `admin` | Bann aufheben |
| `/bans` | `admin` | Alle Banns anzeigen |

> [!WARNING]
> Schreibe den Spielernamen exakt so, wie er im Spiel angezeigt wird – Groß- und Kleinschreibung inklusive. Mit `/bans` kontrollierst Du, wie ein Eintrag gespeichert wurde.

## Banns verwalten

> [!WARNING]
> Verwalte Banns ausschließlich über die Befehle `/ban`, `/unban` und `/bans`. Wie Necesse Banns intern speichert, ist nicht dokumentiert – bearbeite dafür keine Server-Dateien per SFTP.

## Keine Whitelist

> [!NOTE]
> Necesse hat **keine Whitelist-Funktion**. Möchtest Du Deinen Server nur bestimmten Spielern zugänglich machen, schütze ihn mit einem Server-Passwort und gib dieses nur an die gewünschten Spieler weiter.
