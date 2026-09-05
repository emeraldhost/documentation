---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem The Cenozoic Era Server"
description: "Spieler auf einem The Cenozoic Era Server kicken und bannen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["the-cenozoic-era"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 4
related: ["gameserver/the-cenozoic-era/add-admin", "gameserver/the-cenozoic-era/create-backup", "gameserver/the-cenozoic-era/join-server"]
---

Spieler entfernst Du auf Deinem The Cenozoic Era Server direkt im Spiel per Chat-Befehl. Als Ziel gibst Du dabei entweder den Benutzernamen oder die Net ID des Spielers an.

> [!NOTE]
> Um diese Befehle nutzen zu können, musst Du in der `Game.ini` Deines Servers als Owner eingetragen sein. Siehe [Admin hinzufügen](/tutorials/gameserver/the-cenozoic-era/add-admin).

## Befehle im Spiel nutzen

1. **Chat öffnen**\
   Tritt Deinem Server bei und öffne im Spiel den Chat.

2. **Spieler identifizieren**\
   Mit dem folgenden Befehl erzwingst Du die Anzeige der Namensschilder und siehst, wer sich gerade auf dem Server bewegt:

   ```text
   /users
   ```

3. **Befehl ausführen**\
   Gib den gewünschten Befehl mit führendem `/` ein, zum Beispiel:

   ```text
   /kick Spielername
   ```

## Spieler kicken

```text
/kick <Benutzername oder Net ID>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten. Ein Kick ist das richtige Mittel für Kleinigkeiten – etwa um einen Spieler auf die Serverregeln aufmerksam zu machen.

## Spieler bannen

```text
/ban <Benutzername oder Net ID>
```

Der Spieler wird vom Server geworfen und kann sich nicht mehr verbinden, bis Du den Bann wieder aufhebst.

## Bann aufheben

```text
/unban <Benutzername oder Net ID>
```

> [!NOTE]
> Ein zeitlich begrenzter Bann ist für The Cenozoic Era nicht dokumentiert. Ein Bann gilt so lange, bis Du ihn per `/unban` wieder aufhebst.

## Weitere Befehle zur Moderation

| Befehl | Beschreibung |
|--------|-------------|
| `/users` | Erzwingt die Anzeige der Namensschilder |
| `/kick <Benutzername oder Net ID>` | Spieler vom Server trennen |
| `/ban <Benutzername oder Net ID>` | Spieler aussperren |
| `/unban <Benutzername oder Net ID>` | Bann aufheben |
| `/slay <Benutzername oder Net ID>` | Angegebenen Spieler töten |
| `/tp <Benutzername oder Net ID>` | Zum angegebenen Spieler teleportieren |
| `/bring <Benutzername oder Net ID>` | Angegebenen Spieler zu Dir holen |

> [!TIP]
> `/slay` ist die mildere Variante, wenn ein Spieler sich einen Vorteil erschlichen hat oder feststeckt: Der Spieler stirbt im Spiel, statt vom Server ausgesperrt zu werden. Eine komplette Liste der Admin-Befehle findest Du unter [Admin hinzufügen](/tutorials/gameserver/the-cenozoic-era/add-admin).

> [!WARNING]
> Für The Cenozoic Era ist **keine Ban-Datei** auf dem Server dokumentiert. Banns verwaltest Du ausschließlich über die Befehle im Spiel – ein Eintrag oder eine Korrektur per SFTP ist nicht vorgesehen.

> [!IMPORTANT]
> Notiere Dir bei einem Bann den Benutzernamen beziehungsweise die Net ID des Spielers. Ohne diese Angabe kannst Du den Bann später nicht gezielt per `/unban` wieder aufheben, da der Spieler nicht mehr auf dem Server erscheint.
