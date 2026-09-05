---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem The Front Server hinzu"
description: "Admin auf einem The Front Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-front"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/the-front/add-savegame", "gameserver/the-front/create-backup", "gameserver/the-front/download-savegame", "gameserver/the-front/join-server"]
---

Admins werden auf einem The Front Server über ihre **SteamID64** eingetragen – eine 17-stellige Zahl, die mit `7656` beginnt. Du kannst sie entweder als Startparameter setzen oder in die Konfigurationsdatei Deines Servers schreiben.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

> [!IMPORTANT]
> Mehrere SteamID64 trennst Du durch ein **Semikolon** (`;`) – ohne Leerzeichen dazwischen. Ein eingetragener Admin erhält automatisch die höchste GM-Stufe (Stufe 25).

## Weg 1: Über die Verwaltung

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **Admin-IDs eintragen**\
   Trage Deine SteamID64 in das Feld für die Admin-Accounts ein. Bietet Deine Verwaltung nur ein Feld für zusätzliche Startparameter, ergänzt Du dort:

   ```text
   -ServerAdminAccounts="76561198012345678;76561198087654321"
   ```

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu. Die Admin-Liste wird nur beim Serverstart eingelesen.

## Weg 2: Über die Konfigurationsdatei

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /TheFrontManager/ServerConfig_<Konfigurationsname>.ini
   ```

   > [!NOTE]
   > **Welcher Konfigurationsname?**
   >
   > Der Name kommt vom Startparameter `-ConfigServerName=` Deines Servers – das ist nicht der Servername aus der Serverliste. Steht dort `new`, lautet die Datei `ServerConfig_new.ini`. Ist kein Name gesetzt, heißt sie schlicht `ServerConfig_.ini`.
   >
   > Ordner- und Dateiname müssen exakt so geschrieben werden – sonst lädt der Server die Konfiguration nicht.

4. **SteamID64 eintragen**\
   Trage die IDs im Abschnitt `[BaseServerConfig]` ein:

   ```text
   [BaseServerConfig]
   ServerAdminAccounts=76561198012345678;76561198087654321
   ```

   > [!NOTE]
   > Der Abschnitt `[BaseServerConfig]` muss in der Datei stehen, sonst wird kein Wert übernommen. Legst Du die Datei neu an, ist das die minimale Struktur.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Admin im Spiel nutzen

1. **Server beitreten**\
   Tritt Deinem Server bei, siehe [Server beitreten](/tutorials/gameserver/the-front/join-server).

2. **Adminmenü öffnen**\
   Drücke `Shift` + `G`. Es öffnet sich das Adminmenü, über das Du die Adminbefehle ausführst.

3. **Befehl ausführen**\
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```text
   AddGM 76561198012345678 25
   ```

> [!TIP]
> **Konsole**
>
> Alternativ öffnest Du die Konsole mit der Taste `` ` `` beziehungsweise `~` – auf einer englischen Tastatur die Taste links neben der `1`. Reagiert die Taste nicht, stelle Dein Tastaturlayout auf Englisch um.

## Admins im Spiel verwalten

Bist Du bereits Admin, kannst Du weitere Admins direkt im Spiel vergeben – ohne Serverneustart:

| Befehl | Beschreibung |
|--------|-------------|
| `AddGM <SteamID64> <GM-Stufe>` | Spieler zum Admin machen. Höchste Stufe ist `25`. |
| `RemoveGM <SteamID64>` | Adminrechte wieder entziehen |
| `ToggleGMTitleShow 0` | Admin-Kennzeichnung im Spiel ausblenden |
| `ToggleGMTitleShow 1` | Admin-Kennzeichnung im Spiel einblenden |

> [!NOTE]
> Ob Dein Admin-Titel für andere Spieler sichtbar ist, steuerst Du zusätzlich über den Wert `IsShowGmTitle=` in der Konfigurationsdatei beziehungsweise den Startparameter `-IsShowGmTitle`.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/the-front/kick-ban-players).
