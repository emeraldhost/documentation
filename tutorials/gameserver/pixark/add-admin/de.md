---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem PixARK Server hinzu"
description: "Admin auf einem PixARK Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/pixark/add-mods", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

Auf einem PixARK Server gibt es zwei Wege zu Adminrechten:

| Weg | Wann sinnvoll |
|-----|---------------|
| **Admin-Liste** mit SteamID64 | Für feste Admins. Die Rechte greifen automatisch, sobald der eingetragene Spieler den Server betritt – ganz ohne Passwort und ohne Befehl. |
| **Admin-Passwort** | Für die Fernwartung per RCON und für Werkzeuge, die sich mit dem Server verbinden. |

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Feste Admins über die Admin-Liste

Trage die Spieler in eine Textdatei auf dem Server ein. Sie erhalten ihre Rechte anschließend automatisch beim Verbinden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Admin-Liste wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. **SteamID64 eintragen**\
   Trage pro Zeile genau eine SteamID64 ein. Eine SteamID64 ist 17-stellig und beginnt mit `765611`:

   ```text
   76561198012345678
   76561198087654321
   ```

   > [!WARNING]
   > Trage wirklich nur die reine Zahl ein – keine Namen, keine Kommentare, keine Kommas. Ein einziger falscher Eintrag kann dazu führen, dass die Datei nicht ausgewertet wird.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Für diesen Weg ist kein Konsolenbefehl nötig: Die Rechte greifen automatisch, sobald ein eingetragener Spieler den Server betritt.

## Admin-Passwort setzen

1. **Verwaltung öffnen**\
   Öffne die **Verwaltung** Deines Servers und wechsle zu den **Einstellungen**.

2. **Passwort eintragen**\
   Trage im Feld für das **Admin-Passwort** (`ServerAdminPassword`) Dein gewünschtes Passwort ein.

3. **Server neu starten**\
   Speichere die Änderung und starte Deinen Server neu, damit das neue Passwort übernommen wird.

> [!IMPORTANT]
> Das Admin-Passwort ist gleichzeitig Dein **RCON-Passwort**. Wer es kennt, kann Deinen Server aus der Ferne steuern. Verwende deshalb ein anderes Passwort als das Server-Passwort und gib es nur an Personen weiter, denen Du vollständig vertraust.

## Adminbefehle nutzen

Adminbefehle beginnen in PixARK mit dem Präfix `cheat`, zum Beispiel:

```text
cheat giveitemnum 001 1 1 0
```

> [!NOTE]
> Trägst Du Dich über die Datei `AllowedCheaterSteamIDs.txt` ein, stehen Dir die Befehle direkt nach dem Verbinden zur Verfügung.

## Server per RCON steuern

Alternativ zum Spiel kannst Du Deinen Server über RCON verwalten. Das ist praktisch, wenn Du gerade nicht im Spiel bist.

1. **Admin-Passwort setzen**\
   Setze zuerst das Admin-Passwort wie oben beschrieben. Ohne Admin-Passwort ist keine RCON-Anmeldung möglich.

2. **Verbindungsdaten heraussuchen**\
   Du benötigst die **IP-Adresse**, den **RCON Port** aus der Verwaltung und Dein **Admin-Passwort**.

3. **RCON-Client verbinden**\
   Verbinde Dich mit einem RCON-Client. Für ARK-basierte Server hat sich **Arkon** bewährt: Trage dort IP-Adresse, RCON Port und Admin-Passwort ein und stelle die Verbindung her.

> [!WARNING]
> Welche Befehle ein PixARK Server über RCON annimmt, ist nicht offiziell dokumentiert. Nimm dauerhafte Änderungen an Deinen Servereinstellungen deshalb immer in der **Verwaltung** vor und nicht per RCON – sonst gehen sie beim nächsten Neustart wieder verloren.
