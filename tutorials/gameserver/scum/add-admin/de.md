---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem SCUM Server hinzu"
description: "Admin auf einem SCUM Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["scum"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/scum/add-savegame", "gameserver/scum/create-backup", "gameserver/scum/download-savegame", "gameserver/scum/join-server"]
---

Admins werden auf einem SCUM Server ausschließlich über Konfigurationsdateien festgelegt. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

> [!NOTE]
> Der Konfigurationsordner heißt auch auf Deinem Linux-Server `WindowsServer`. Das ist so gewollt – SCUM stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.

## Admin hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Admin-Listen werden nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **AdminUsers.ini öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```text
   /SCUM/Saved/Config/WindowsServer/AdminUsers.ini
   ```

4. **SteamID64 eintragen**\
   Trage pro Zeile genau eine SteamID64 ein:

   ```text
   76561198012345678
   76561198087654321
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Zusätzliche Rechte vergeben

Einzelne Befehle sind nicht automatisch freigeschaltet. Du erlaubst sie, indem Du direkt hinter die SteamID64 – ohne Leerzeichen – ein Rechte-Suffix in eckigen Klammern setzt:

```text
76561198012345678[SetGodMode]
76561198087654321[SetGodMode, RestartServer]
76561198011223344[RestartServer]
```

| Suffix | Bedeutung |
|--------|-----------|
| `[SetGodMode]` | Erlaubt den Befehl `#SetGodMode True` bzw. `#SetGodMode False`. In SCUM bedeutet das sofortiges Bauen – keine klassische Unverwundbarkeit, sterben kannst Du weiterhin. |
| `[RestartServer]` | Erlaubt den Neustart des Servers über den Befehl `#RestartServer pretty please` |

> [!NOTE]
> Ohne Suffix erhält der Admin die normalen Adminbefehle. Mehrere Suffixe schreibst Du durch Komma getrennt in dieselben eckigen Klammern.

## Zugriff auf die Servereinstellungen im Spiel

Damit ein Admin zusätzlich die Servereinstellungen direkt im Spiel bearbeiten darf, trägst Du ihn in eine zweite Datei ein:

```text
/SCUM/Saved/Config/WindowsServer/ServerSettingsAdminUsers.ini
```

Hier gehört **nur die reine SteamID64** hinein – ohne eckige Klammern und ohne Suffixe:

```text
76561198012345678
```

Auch diese Datei wird erst beim Serverstart eingelesen.

## Adminbefehle nutzen

1. **Chat öffnen**\
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. **Befehl eingeben**\
   Alle Adminbefehle beginnen mit `#`, zum Beispiel:

   ```text
   #ListPlayers
   ```

3. **Befehle anzeigen**\
   Gibst Du nur ein einzelnes `#` ein, listet Dir der Server alle verfügbaren Befehle auf.

> [!WARNING]
> Adminrechte lassen sich ausschließlich über die Datei `AdminUsers.ini` vergeben. Häufig kursierende Befehle wie `#SetAdmin` oder `#God` existieren in SCUM nicht.

> [!TIP]
> Wie Du Spieler als Admin vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/scum/kick-ban-players).
