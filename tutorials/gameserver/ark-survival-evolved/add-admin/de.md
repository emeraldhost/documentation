---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem ARK Survival Evolved Server hinzu"
description: "Admin auf einem ARK Survival Evolved Server hinzufügen"
tags: []
date: "2025-12-24"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["ark-survival-evolved"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/ark-survival-evolved/add-mods", "gameserver/ark-survival-evolved/add-savegame", "gameserver/ark-survival-evolved/create-backup", "gameserver/ark-survival-evolved/download-savegame"]
---

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Methode 1: Admin Passwort (temporäre Admin-Rechte)

Mit dieser Methode kannst Du Dich im Spiel als Admin anmelden, indem Du das Admin Passwort eingibst.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Admin Passwort setzen**\
   Trage ein sicheres Passwort im Feld **Admin Passwort** ein und speichere die Änderung.

4. **Server neu starten**\
   Starte Deinen Server neu, damit die Änderung übernommen wird.

5. **Als Admin anmelden**\
   Öffne im Spiel die Konsole mit der `Tab`-Taste und gib folgenden Befehl ein:

   ```text
   enablecheats DeinAdminPasswort
   ```

> [!NOTE]
> Die Admin-Rechte über das Passwort sind nur für die aktuelle Sitzung gültig. Nach einem Neuverbinden musst Du den Befehl erneut eingeben.

## Methode 2: Permanente Admins (SteamID64)

Mit dieser Methode wirst Du dauerhaft als Admin hinterlegt und musst kein Passwort eingeben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Datei öffnen**\
   Erstelle oder öffne die Datei `AllowedCheaterSteamIDs.txt` im Verzeichnis:

   ```text
   /ShooterGame/Saved/AllowedCheaterSteamIDs.txt
   ```

4. **SteamID64 eintragen**\
   Füge Deine SteamID64 in einer neuen Zeile ein.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Wenn Du mehrere Admins hinzufügen möchtest, füge einfach mehrere SteamID64s ein – jede in einer neuen Zeile.

## Wichtige Admin-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `cheat fly` | Flugmodus aktivieren |
| `cheat walk` | Flugmodus deaktivieren |
| `cheat god` | Unsterblichkeit aktivieren |
| `cheat giveresources` | 50 Einheiten jeder Ressource erhalten |
| `cheat infinitestats` | Unendlich Ausdauer, Gesundheit, etc. |
| `cheat destroywilddinos` | Alle wilden Dinos entfernen |
