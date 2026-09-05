---
slug: "spawn-schutz-aendern"
language: "de"
title: "So änderst Du den Spawn-Schutz auf einem Minecraft Java Edition Server"
description: "Spawn-Schutz auf einem Minecraft Java Edition Server ändern"
tags: []
date: "2026-02-04"
visibility: "public"
updated: "2026-08-20"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Spawn-Schutz ändern"
sort: 18
related: ["gameserver/minecraft/change-server-icon", "gameserver/minecraft/change-simulation-distance", "gameserver/minecraft/change-difficulty", "gameserver/minecraft/change-version"]
---

## Was ist der Spawn-Schutz?

Der Spawn-Schutz (Spawn Protection) verhindert, dass Spieler ohne OP-Rechte Blöcke im Bereich des Welt-Spawnpunkts abbauen oder platzieren können. Der Wert gibt den Radius in Blöcken rund um den Spawnpunkt an.

## Wie ändere ich den Spawn-Schutz?

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und öffne die Datei `server.properties`.

2. **Eintrag suchen**\
   Suche nach folgendem Eintrag:

```text
spawn-protection=16
```

3. **Wert ändern**\
   Ändere den Wert nach Wunsch.

4. **Server neu starten**\
   Speichere die Änderungen und starte den Server neu.

| Wert | Beschreibung |
|------|--------------|
| `0` | Spawn-Schutz deaktiviert (alle Spieler können am Spawn bauen) |
| `16` | Standard-Einstellung (16 Blöcke Radius) |

> [!TIP]
> **Hinweis**
>
> Ein Wert von `0` wird empfohlen, wenn Du Plugins wie WorldGuard für den Schutz von Bereichen nutzt.
