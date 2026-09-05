---
slug: "spieler-kicken-bannen"
language: "de"
title: "So kickst und bannst Du Spieler auf Deinem Soulmask Server"
description: "Spieler auf einem Soulmask Server kicken und bannen"
tags: []
date: "2026-04-10"
visibility: "public"
cta: "gameserver"
product_keys: ["soulmask"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spieler kicken & bannen"
sort: 16
related: ["gameserver/soulmask/find-invitation-code", "gameserver/soulmask/join-server", "gameserver/soulmask/set-admin-password", "gameserver/soulmask/set-server-password"]
---

Du kannst als Admin Spieler per GM-Befehl kicken oder dauerhaft bannen.

> [!NOTE]
> Du benötigst Admin-Rechte, um diese Befehle nutzen zu können. Siehe [Admin hinzufügen](/tutorials/gameserver/soulmask/add-admin).

## Banliste aktivieren

Bevor Du Spieler bannen kannst, musst Du die Banliste aktivieren. Öffne die Konsole mit `~` und gib ein:

```text
gm EnableServerPermissionList 1 1
```

## Spieler kicken

```text
gm KickPlayer <SteamID64>
```

Der Spieler wird vom Server entfernt, kann aber erneut beitreten.

## Spieler bannen

```text
gm AddServerPermissionList 1 <SteamID64>
```

Der Spieler wird sofort gekickt und dauerhaft vom Server ausgeschlossen.

## Spieler entbannen

```text
gm RemoveServerPermissionList 1 <SteamID64>
```

> [!TIP]
> Hier findest Du eine Anleitung, wie Du Deine [SteamID64](/tutorials/gameserver/steamid64-find-out) herausfindest.

## Banliste manuell bearbeiten

Du kannst die Banliste auch direkt per [SFTP](/tutorials/gameserver/establish-sftp-connection) bearbeiten. Die Datei liegt unter:

```text
/WS/Saved/BlackAccountList.txt
```

Jede Zeile enthält eine SteamID64 eines gebannten Spielers.

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `gm EnableServerPermissionList 1 1` | Banliste aktivieren |
| `gm KickPlayer <SteamID64>` | Spieler kicken |
| `gm AddServerPermissionList 1 <SteamID64>` | Spieler bannen |
| `gm RemoveServerPermissionList 1 <SteamID64>` | Spieler entbannen |
