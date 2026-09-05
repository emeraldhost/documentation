---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Palworld Server"
description: "Spieler auf einem Palworld Server kicken und bannen"
tags: []
date: "2026-02-28"
visibility: "public"
updated: "2026-07-16"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 28
related: ["gameserver/palworld/add-mods", "gameserver/palworld/join-server", "gameserver/palworld/reset-world", "gameserver/palworld/restore-automatic-backup"]
---

Du kannst als Admin Spieler per Befehl kicken oder dauerhaft bannen.

> [!NOTE]
> Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/palworld/add-admin).

## Spieler-Liste anzeigen

Gib folgenden Befehl im Chat ein, um alle verbundenen Spieler mit ihrer SteamID anzuzeigen:

```text
/ShowPlayers
```

## Spieler kicken

```text
/KickPlayer <SteamID>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```text
/BanPlayer <SteamID>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

```text
/UnBanPlayer <SteamID>
```

Die SteamID des Spielers findest Du in der `banlist.txt` oder über eine zuvor notierte `/ShowPlayers`-Ausgabe.

### Alternativ: Banliste manuell bearbeiten

Falls gerade kein Admin online ist, kannst Du die Banliste auch direkt bearbeiten:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **banlist.txt öffnen**\
   Öffne die Datei `banlist.txt` unter:

   ```text
   /Pal/Saved/SaveGames/banlist.txt
   ```

4. **Spieler entfernen**\
   Lösche die Zeile mit der SteamID des Spielers (Format: `steam_76561198000000000`).

5. **Server starten**\
   Starte Deinen Server.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `/ShowPlayers` | Spielerliste anzeigen |
| `/KickPlayer <SteamID>` | Spieler kicken |
| `/BanPlayer <SteamID>` | Spieler bannen |
| `/UnBanPlayer <SteamID>` | Spieler entbannen |
