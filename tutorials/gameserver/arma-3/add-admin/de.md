---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Arma 3 Server hinzu"
description: "Admin auf einem Arma 3 Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["arma-3"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/arma-3/add-mods", "gameserver/arma-3/add-savegame", "gameserver/arma-3/create-backup", "gameserver/arma-3/download-savegame"]
---

Arma 3 kennt zwei Wege, Adminrechte zu vergeben: ein **Admin-Passwort**, mit dem sich jeder Spieler anmelden kann, der es kennt, und eine **feste Admin-Liste** mit SteamID64s, die ganz ohne Passwort auskommt. Beides trägst Du in der `server.cfg` Deines Servers ein.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## server.cfg bearbeiten

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die `server.cfg` wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **server.cfg öffnen**\
   Öffne im Hauptverzeichnis Deines Servers folgende Datei:

   ```text
   /server.cfg
   ```

4. **Admin-Passwort setzen**\
   Trage ein Admin-Passwort ein. Jeder Spieler, der dieses Passwort kennt, kann sich im Spiel als Admin anmelden:

   ```text
   passwordAdmin = "deinAdminPasswort";
   ```

   > [!WARNING]
   > Verwende für `passwordAdmin` niemals dasselbe Passwort wie für das Server-Passwort (`password`). Sonst hat jeder Spieler, der auf Deinen Server kommt, automatisch auch Adminrechte.

5. **Feste Admins eintragen**\
   Zusätzlich kannst Du Spieler dauerhaft als Admin hinterlegen. Trage ihre SteamID64 in die Liste `admins[]` ein – mehrere IDs trennst Du durch Komma:

   ```text
   admins[] = {"76561198012345678", "76561198087654321"};
   ```

   Diese Spieler melden sich später ohne Passwort als Admin an.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Aufbau der Einträge

```text
passwordAdmin = "deinAdminPasswort";
admins[] = {"76561198012345678", "76561198087654321"};
serverCommandPassword = "deinBefehlsPasswort";
```

| Eintrag | Bedeutung |
|---------|-----------|
| `passwordAdmin` | Passwort für die Admin-Anmeldung im Spiel |
| `admins[]` | Liste von SteamID64s, die sich ohne Passwort als Admin anmelden dürfen |
| `serverCommandPassword` | Separates Passwort für serverseitige Befehle über `serverCommand`, unabhängig vom Admin-Passwort |

> [!NOTE]
> In die Liste `admins[]` gehört ausschließlich die **SteamID64** – eine 17-stellige Zahl, die mit `7656` beginnt. Jede weitere ID wird durch ein Komma getrennt, jede ID steht in Anführungszeichen.

## Als Admin anmelden

1. **Server beitreten**\
   Verbinde Dich mit Deinem Server – siehe [Server beitreten](/tutorials/gameserver/arma-3/join-server).

2. **Chat öffnen**\
   Drücke im Spiel die Taste `/`, um die Chat-Konsole zu öffnen.

3. **Anmelden**\
   Stehst Du in der Liste `admins[]`, genügt:

   ```text
   #login
   ```

   Andernfalls meldest Du Dich mit dem Admin-Passwort an:

   ```text
   #login deinAdminPasswort
   ```

4. **Abmelden**\
   Mit folgendem Befehl beendest Du die Admin-Sitzung wieder:

   ```text
   #logout
   ```

## Adminbefehle im Überblick

Alle Befehle gibst Du in der Chat-Konsole ein.

| Befehl | Beschreibung |
|--------|--------------|
| `#login` bzw. `#login <Passwort>` | Als Admin anmelden |
| `#logout` | Admin-Sitzung beenden |
| `#missions` | Missionsauswahl öffnen |
| `#mission <Missionsname>` | Direkt zur angegebenen Mission wechseln |
| `#restart` | Aktuelle Mission neu starten |
| `#reassign` | Mission neu starten und alle Spieler zurück in die Slot-Auswahl schicken |
| `#lock` | Server sperren – niemand kann mehr beitreten |
| `#unlock` | Sperre wieder aufheben |
| `#kick <Name/ID>` | Spieler vom Server trennen |
| `#exec ban "<Name/ID>"` | Spieler bannen – bei `#exec` in Anführungszeichen |
| `#shutdown` | Server herunterfahren |

> [!WARNING]
> `#shutdown` fährt den Server herunter. Ob er danach automatisch wieder startet, hängt von Deinen Einstellungen ab – im Zweifel startest Du ihn über die Verwaltung neu.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst und dauerhaft aussperrst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/arma-3/kick-ban-players).
