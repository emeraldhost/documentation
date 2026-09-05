---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem HumanitZ Server hinzu"
description: "Admin auf einem HumanitZ Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["humanitz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/humanitz/add-savegame", "gameserver/humanitz/create-backup", "gameserver/humanitz/download-savegame", "gameserver/humanitz/join-server"]
---

HumanitZ arbeitet mit einem **Admin-Passwort**: Du hinterlegst es in der Konfigurationsdatei Deines Servers, und wer es im Spiel per Chat-Befehl eingibt, erhält Adminrechte. Eine funktionierende Admin-Liste mit SteamIDs gibt es derzeit nicht.

> [!WARNING]
> Jeder, der das Admin-Passwort kennt, hat volle Adminrechte auf Deinem Server. Gib es nur an Personen weiter, denen Du vertraust, und verwende ein anderes Passwort als das Server- und das RCON-Passwort.

> [!NOTE]
> **Projektordner**
>
> Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft Dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei Dir vorhanden ist, und passe die Pfade entsprechend an.

## Admin-Passwort setzen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Konfigurationsdatei wird nur beim Serverstart eingelesen.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei:

   ```text
   /HumanitZServer/GameServerSettings.ini
   ```

4. **Passwort eintragen**\
   Trage im Abschnitt `[Host Settings]` Dein gewünschtes Admin-Passwort ein:

   ```ini
   [Host Settings]
   AdminPass="DeinAdminPasswort"
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Bietet die Verwaltung Deines Servers ein eigenes Feld für das Admin-Passwort an, nutze bevorzugt dieses Feld – Werte aus der Verwaltung können beim Start in die Konfigurationsdatei zurückgeschrieben werden.

## Adminrechte im Spiel freischalten

1. **Server beitreten**\
   Tritt Deinem Server bei. Wie das geht, steht unter [Server beitreten](/tutorials/gameserver/humanitz/join-server).

2. **Chat öffnen**\
   Öffne im Spiel den Chat.

3. **Befehl eingeben**\
   Gib den folgenden Befehl mit Deinem Admin-Passwort ein:

   ```text
   /AdminAccess DeinAdminPasswort
   ```

4. **Adminbefehle nutzen**\
   Ab jetzt stehen Dir die Adminbefehle zur Verfügung.

> [!NOTE]
> Die Freischaltung gilt für die aktuelle Sitzung. Nach einem Verbindungsabbruch oder einem Serverneustart gibst Du den Befehl erneut ein.

## Adminbefehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/AdminAccess <Passwort>` | Adminrechte freischalten |
| `/admintag` | Admin-Tag im Chat ein- oder ausblenden |
| `/adminw` | Öffnet eine Admin-Oberfläche zum Spawnen von Gegenständen und Ändern einiger Spieleinstellungen |
| `/SuperAdmin` | Schaltet den freien Flugmodus ein oder aus – darin bist Du für andere Spieler unsichtbar |
| `/god` | Unverwundbarkeit ein- oder ausschalten |
| `/SaveGame` | Speichert den aktuellen Spielstand |
| `/Shutdown <Sekunden>` | Fährt den Server nach der angegebenen Zeit herunter |

> [!WARNING]
> `/Shutdown` beendet den Serverprozess. Ob Dein Server danach automatisch wieder startet, hängt von den Einstellungen in der Verwaltung ab – starte ihn im Zweifel dort manuell neu.

## AdminList.txt

Im Projektordner kann zusätzlich eine Datei `AdminList.txt` mit einer SteamID64 (NET-ID) pro Zeile angelegt werden:

```text
/HumanitZServer/AdminList.txt
```

> [!IMPORTANT]
> Laut der offiziellen Dokumentation hat diese Datei **derzeit keine Funktion** – sie ist dort ausdrücklich als nicht funktionierend gekennzeichnet. Vergib Adminrechte deshalb ausschließlich über `AdminPass` und `/AdminAccess`.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du eine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest. Die IDs der Spieler, die bereits auf Deinem Server waren, findest Du außerdem in der Datei `/HumanitZServer/PlayerIDMapped.txt`, in der die ID dem Spielernamen zugeordnet wird.

> [!TIP]
> Wie Du Spieler vom Server entfernst, erfährst Du unter [Spieler kicken & bannen](/tutorials/gameserver/humanitz/kick-ban-players).
