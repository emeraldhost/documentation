---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Operation Harsh Doorstop Server hinzu"
description: "Admin auf einem Operation Harsh Doorstop Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["operation-harsh-doorstop"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/operation-harsh-doorstop/add-mods", "gameserver/operation-harsh-doorstop/create-backup", "gameserver/operation-harsh-doorstop/join-server", "gameserver/operation-harsh-doorstop/kick-ban-players"]
---

Admins werden über die Datei `Admins.cfg` festgelegt. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

> [!NOTE]
> Die Datei `Admins.cfg` wird **nicht** mitgeliefert. Existiert sie noch nicht, legst Du sie einfach selbst an.

## Admin hinzufügen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Admin-Liste wird beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Admins.cfg öffnen**\
   Öffne folgende Datei. Existiert sie noch nicht, lege sie in diesem Ordner an:

   ```text
   /HarshDoorstop/Saved/Config/LinuxServer/Admins.cfg
   ```

4. **SteamID64 eintragen**\
   Trage pro Zeile genau eine SteamID64 ein – ohne Namen, ohne Kommentare und ohne weitere Zeichen:

   ```text
   76561198012345678
   76561198087654321
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Der Ordner `LinuxServer` wird erst angelegt, nachdem der Server einmal vollständig gestartet ist. Findest Du ihn nicht, starte den Server einmal und verbinde Dich anschließend erneut per SFTP.

## Adminbefehle im Spiel nutzen

Als eingetragener Admin steuerst Du den Server direkt aus dem Spiel heraus.

1. **Server beitreten**\
   Tritt Deinem Server bei – siehe [Server beitreten](/tutorials/gameserver/operation-harsh-doorstop/join-server).

2. **Konsole öffnen**\
   Drücke die Taste `~`, um die Ingame-Konsole zu öffnen.

3. **Befehl mit Präfix eingeben**\
   Jeder Adminbefehl beginnt im Spiel mit `admin`, zum Beispiel:

   ```text
   admin status
   ```

   ```text
   admin servertravel <Kartenname>
   ```

> [!NOTE]
> Alle RCON-Befehle funktionieren auch in der Ingame-Konsole, solange Du das Präfix `admin` voranstellst. Ohne das Präfix wird der Befehl nicht ausgeführt.

## Admins im laufenden Betrieb verwalten

Über einen RCON-Client vergibst Du Adminrechte auch im laufenden Betrieb. Diese Befehle wirken sofort, ohne dass Du den Server stoppen musst:

| Befehl | Beschreibung |
|--------|-------------|
| `admin add <Name>` | Fügt einen Spieler über seinen Namen als Admin hinzu |
| `admin addid <ID#>` | Fügt einen Spieler über seine ID-Nummer aus `status` als Admin hinzu |
| `admin remove <Name>` | Entzieht einem Spieler die Adminrechte |
| `admin removeid <ID#>` | Entzieht die Adminrechte über die ID-Nummer |

> [!TIP]
> Die ID-Nummer und die SteamID64 aller verbundenen Spieler liefert Dir der Befehl `status`.

> [!WARNING]
> Trage dauerhafte Admins immer zusätzlich in die `Admins.cfg` ein. Nur so bleiben die Rechte über Serverneustarts hinweg erhalten.

## Konfiguration neu laden

Hast Du die `Admins.cfg` bei laufendem Server bearbeitet, musst Du den Server nicht zwingend neu starten. Der folgende RCON-Befehl liest die Konfigurationsdateien neu von der Festplatte ein:

```text
RELOADSERVERCONFIG
```

Er aktualisiert unter anderem `Admins.cfg`, `Bans.cfg` und `MapCycle.cfg`.

> [!NOTE]
> **Eigener Dateiname**
>
> Standardmäßig heißt die Admin-Datei `Admins.cfg`. Über den Startparameter `-AdminList=DateiName.cfg` lässt sich ein anderer Dateiname festlegen. In der Regel brauchst Du das nicht – belasse es beim Standard.

> [!TIP]
> Wie Du als Admin Spieler vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/operation-harsh-doorstop/kick-ban-players).
