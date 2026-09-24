---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Valheim Server"
description: "Spieler auf einem Valheim Server kicken und bannen"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-09-24"
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

Öffne die Konsole mit `F5` und gib folgende Befehle ein. Die Befehle funktionieren nur, wenn Du in der `adminlist.txt` eingetragen bist – siehe [Admin hinzufügen](/tutorials/gameserver/valheim/add-admin).

### Spieler kicken

```text
kick <Name>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

### Spieler bannen

```text
ban <Name>
```

Der Spieler wird dauerhaft vom Server ausgeschlossen. Ist er gerade online, trägt der Server seine Spieler-ID in die `bannedlist.txt` ein, sonst den eingegebenen Namen.

### Spieler entbannen

```text
unban <ID>
```

Gib den Eintrag genau so ein, wie er in der Banliste steht. Mit dem Befehl `banned` lässt Du Dir alle gebannten Einträge anzeigen.

## Banliste manuell bearbeiten

Du kannst die Banliste und die Erlaubtliste auch direkt per SFTP bearbeiten:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Dateien bearbeiten**\
   Öffne die Dateien unter `/.config/unity3d/IronGate/Valheim/`:

   - `bannedlist.txt` – Gebannte Spieler (eine Spieler-ID pro Zeile)
   - `permittedlist.txt` – Erlaubte Spieler (eine Spieler-ID pro Zeile), siehe [Whitelist aktivieren](/tutorials/gameserver/valheim/enable-whitelist)

4. **Spieler-ID hinzufügen oder entfernen**\
   Füge die Spieler-ID des Spielers in eine neue Zeile ein oder entferne sie. Willst Du einen Spieler entbannen, entferne alle Zeilen, die zu ihm gehören – ein Steam-Spieler kann in mehreren Schreibweisen eingetragen sein. Übernimm die ID genau so, wie sie in der Spielerliste (`F2`) oder im Server-Log steht, inklusive Präfix sowie Groß- und Kleinschreibung, z.B. `V_76561198012345678`. Für Steam-Spieler funktionieren auch die ältere Form `Steam_76561198012345678` und die reine SteamID64. Crossplay-Spieler (z.B. von Xbox, PlayStation 5 oder Nintendo Switch 2) haben keine SteamID64, für sie brauchst Du immer die ID aus der Spielerliste oder dem Server-Log.

5. **Server starten**\
   Starte Deinen Server.

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `kick <Name>` | Spieler kicken |
| `ban <Name>` | Spieler bannen |
| `unban <ID>` | Spieler entbannen |
| `banned` | Gebannte Spieler anzeigen |
