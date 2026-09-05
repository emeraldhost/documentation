---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Abiotic Factor Server"
description: "Spieler auf einem Abiotic Factor Server kicken und bannen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["abiotic-factor"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 6
related: ["gameserver/abiotic-factor/add-savegame", "gameserver/abiotic-factor/create-backup", "gameserver/abiotic-factor/download-savegame", "gameserver/abiotic-factor/join-server"]
---

Spieler entfernst Du auf einem Abiotic Factor Server über das **Admin-Menü im Spiel**. Chat- oder Konsolenbefehle sind dafür nicht dokumentiert.

> [!NOTE]
> Die Funktionen stehen nur Spielern zur Verfügung, die als Admin eingetragen sind. Siehe [Admin hinzufügen](/tutorials/gameserver/abiotic-factor/add-admin).

## Spieler kicken oder bannen

1. **Als Admin beitreten**\
   Tritt Deinem Server mit einem Account bei, der als Admin hinterlegt ist.

2. **Menü öffnen**\
   Drücke `Esc`, um das Spielmenü zu öffnen.

3. **Admin-Bereich öffnen**\
   Wähle den Tab **Admin**. Dort siehst Du die Liste aller verbundenen Spieler.

4. **Spieler auswählen**\
   Klicke den Spieler an, den Du entfernen möchtest.

5. **Aktion wählen**\
   Wähle **Kick** oder **Ban**:

   - **Kick** trennt den Spieler vom Server. Er kann jederzeit wieder beitreten.
   - **Ban** trennt den Spieler und sperrt ihn dauerhaft aus.

## Bann aufheben

Gebannte Spieler verwaltest Du ebenfalls über den Admin-Bereich: Öffne dort die Liste der gebannten Spieler (**Banned Players**), wähle den Spieler aus und klicke auf **Unban**. Danach kann er Deinem Server sofort wieder beitreten.

> [!NOTE]
> Die genaue Bezeichnung der Liste und der Schaltflächen kann sich mit Spiel-Updates ändern. Such im Admin-Bereich des `Esc`-Menüs nach der Übersicht der gebannten Spieler.

## Bann über die Konfigurationsdatei

Banns werden in derselben Datei gespeichert, in der auch Deine Admins stehen – in einem eigenen Abschnitt:

```text
/AbioticFactor/Saved/SaveGames/Server/Admin.ini
```

```ini
[BannedPlayers]
BannedPlayer=76561198012345678
```

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Admin.ini bearbeiten**\
   Füge unter `[BannedPlayers]` pro Spieler eine Zeile mit dessen [SteamID64](/tutorials/gameserver/steamid64-find-out) hinzu, oder entferne eine Zeile, um einen Bann aufzuheben.

4. **Server starten**\
   Starte Deinen Server. Die Banns werden beim Serverstart eingelesen.

> [!WARNING]
> Dieser Weg über die Datei ist **nicht offiziell dokumentiert**. Er wird nur beim Serverstart ausgewertet – einen bereits verbundenen Spieler wirft ein Eintrag in der Datei also nicht sofort vom Server. Nutze zum sofortigen Entfernen das Admin-Menü im Spiel und prüfe nach einem Spiel-Update, ob der Eintrag noch greift.

## Keine Befehle und kein RCON

> [!IMPORTANT]
> Für Abiotic Factor sind **keine Serverkonsole, keine Chat-Befehle und kein RCON** dokumentiert. Alles, was Kicken und Bannen betrifft, läuft über das Admin-Menü im Spiel oder über die `Admin.ini`. Befehle wie `/kick` oder `/ban` tauchen in der offiziellen Dokumentation nicht auf – verlasse Dich nicht auf kursierende Befehlslisten.

> [!TIP]
> Möchtest Du Deinen Server generell nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Personen weiter.
