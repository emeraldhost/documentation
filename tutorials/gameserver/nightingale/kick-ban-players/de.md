---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Nightingale Server"
description: "Spieler auf einem Nightingale Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["nightingale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/nightingale/add-savegame", "gameserver/nightingale/create-backup", "gameserver/nightingale/download-savegame", "gameserver/nightingale/join-server"]
---

Spieler entfernst Du auf einem Nightingale Server **direkt im Spiel** über das Sozialmenü. Konsolen- oder Chat-Befehle für Kick und Bann gibt es nicht.

> [!NOTE]
> Du musst dafür im Spiel als Admin authentifiziert sein. Siehe [Admin hinzufügen](/tutorials/gameserver/nightingale/add-admin).

## Spieler kicken

1. **Admin-Modus aktivieren**\
   Drücke `Esc`, wähle **Admin Mode: OFF**, gib das Admin-Passwort ein und bestätige mit **Confirm**.

2. **Sozialmenü öffnen**\
   Drücke im Spiel die Taste `O`, um den **Social Screen** zu öffnen.

3. **Spieler auswählen**\
   Suche in der Liste den Spieler heraus, den Du entfernen möchtest.

4. **Entfernen**\
   Wähle **Remove** und bestätige mit **Confirm**.

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

1. **Sozialmenü öffnen**\
   Drücke als authentifizierter Admin die Taste `O`.

2. **Spieler auswählen**\
   Suche in der Liste den Spieler heraus, den Du aussperren möchtest.

3. **Bannen**\
   Wähle **Ban** und bestätige mit **Confirm**.

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden.

> [!NOTE]
> Nightingale kennt keine zeitlich begrenzten Banns. Ein Bann gilt so lange, bis Du ihn wieder aufhebst.

## Bann aufheben

Ein Entbannen im Spiel gibt es nicht – dafür bearbeitest Du die Datei mit dem Serverzustand.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Datei wird beim Beenden geschrieben und beim Start eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **ServerState.ini öffnen**\
   Öffne folgende Datei:

   ```text
   /NWX/Saved/Config/LinuxServer/ServerState.ini
   ```

4. **Eintrag entfernen**\
   Suche die Zeile, die mit `Bans=` beginnt. Lösche innerhalb der Klammern den Eintrag des Spielers, den Du entbannen möchtest. Alle übrigen Einträge und die Klammern selbst bleiben stehen.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Erstelle vor dem Bearbeiten ein [Backup](/tutorials/gameserver/nightingale/create-backup) oder lade Dir eine Kopie der Datei herunter. Eine beschädigte `ServerState.ini` kann dazu führen, dass der Server seinen Zustand nicht mehr laden kann. Findest Du weder die Datei noch eine Zeile `Bans=`, wurde auf Deinem Server bisher niemand gebannt – beides entsteht erst mit dem ersten Bann.

> [!NOTE]
> **Alle Banns auf einmal aufheben**
>
> Löschst Du den kompletten Ordner `/NWX/Saved/Config/`, wird der gesamte Serverzustand zurückgesetzt und damit auch jeder Bann. Der Server legt den Ordner beim nächsten Start neu an.

## Keine Konsolenbefehle

> [!WARNING]
> Nightingale bietet **kein RCON und keine Chat-Befehle** für die Serververwaltung. Die Konsole in der Verwaltung zeigt ausschließlich die Ausgaben des Servers an und nimmt keine Befehle entgegen. Kick und Bann laufen ausschließlich über den Social Screen im Spiel.

## Keine Whitelist

> [!WARNING]
> Nightingale hat **keine Whitelist-Funktion**. Möchtest Du Deinen Server nur bestimmten Spielern zugänglich machen, setze in der Verwaltung ein Server-Passwort und gib es nur an diese Spieler weiter.
