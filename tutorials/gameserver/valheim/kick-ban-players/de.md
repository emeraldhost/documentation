---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Valheim Server"
description: "Spieler auf einem Valheim Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 14
related: ["gameserver/valheim/enable-crossplay", "gameserver/valheim/enable-server-list", "gameserver/valheim/join-server", "gameserver/valheim/set-server-password"]
---

Du kannst Spieler per Ingame-Konsole kicken und bannen oder die Banliste manuell per SFTP bearbeiten.

## Spieler per Konsole kicken und bannen

Öffne die Konsole mit `F5` und gib folgende Befehle ein:

### Spieler kicken

```text
kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

### Spieler bannen

```text
ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen.

### Spieler entbannen

```text
unban <Name>
```

## Banliste manuell bearbeiten

Du kannst die Banliste und die Erlaubtliste auch direkt per SFTP bearbeiten:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Dateien bearbeiten**\
   Öffne die Dateien unter `/config/`:

   - `bannedlist.txt` – Gebannte Spieler (eine SteamID64 pro Zeile)
   - `permittedlist.txt` – Erlaubte Spieler (eine SteamID64 pro Zeile)

4. **SteamID64 hinzufügen oder entfernen**\
   Füge die SteamID64 des Spielers in eine neue Zeile ein oder entferne sie.

5. **Server starten**\
   Starte Deinen Server.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `kick <Name>` | Spieler kicken |
| `ban <Name>` | Spieler bannen |
| `unban <Name>` | Spieler entbannen |
