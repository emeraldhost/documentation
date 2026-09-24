---
slug: "backup-einstellungen-aendern"
language: "de"
title: "So änderst Du die Backup Einstellungen auf Deinem Valheim Server"
description: "Backup Einstellungen auf einem Valheim Server ändern"
tags: []
date: "2026-04-10"
visibility: "public"
updated: "2026-09-24"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Backup Einstellungen ändern"
sort: 8
related: ["gameserver/valheim/add-savegame", "gameserver/valheim/change-branch", "gameserver/valheim/change-server-name", "gameserver/valheim/create-backup"]
---

Du kannst einstellen, wie oft und wie viele Backups der Server erstellt.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Backup-Einstellungen anpassen**\
   Passe die folgenden Felder an:

   | Feld | Beschreibung | Standard |
   |------|-------------|----------|
   | **Backup Interval** | Wie oft der Server die Welt speichert (in Sekunden). Trotz des Namens ist das nicht der Abstand zwischen den Backups. | `1800` (30 Minuten) |
   | **Backup Count** | Anzahl der aufbewahrten automatischen Backups. Das erste Backup folgt dem Abstand aus **Backup Shorttime**, alle weiteren dem Abstand aus **Backup Longtime**. | `4` |
   | **Backup Shorttime** | Abstand zwischen den ersten automatischen Backups (in Sekunden) | `7200` (2 Stunden) |
   | **Backup Longtime** | Abstand zwischen den folgenden automatischen Backups (in Sekunden) | `43200` (12 Stunden) |

4. **Server neu starten**\
   Speichere die Einstellungen und starte Deinen Server neu.

> [!NOTE]
> Die automatischen Backups legt der Server als eigene Ordner im Verzeichnis `/.config/unity3d/IronGate/Valheim/worlds_local/` direkt neben Deiner Welt ab. Wie Du eines davon zurückspielst, erfährst Du in [Automatisches Backup wiederherstellen](/tutorials/gameserver/valheim/restore-automatic-backup).
