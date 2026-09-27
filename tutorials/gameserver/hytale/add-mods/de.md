---
slug: "mods-hinzufuegen"
language: "de"
title: "So installierst Du Mods auf einem Hytale Server"
description: "Mods auf einem Hytale Server installieren"
tags: []
date: "2026-01-15"
visibility: "public"
updated: "2026-09-27"
cta: "gameserver"
product_keys: ["hytale"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 8
related: ["gameserver/hytale/enable-whitelist", "gameserver/hytale/improve-performance", "gameserver/hytale/item-loss-on-death", "gameserver/hytale/join-server"]
---

> [!NOTE]
> Stoppe Deinen Server bevor Du Mods installierst, da diese sonst nicht korrekt geladen werden.

> [!TIP]
> Mods für Hytale kannst Du z.B. von [CurseForge](https://www.curseforge.com/hytale) herunterladen. Achte darauf, dass der Mod die Hytale-Version Deines Servers unterstützt. Auf CurseForge siehst Du das unter **Game Versions** (z.B. `0.6`). Die Version Deines Servers zeigt die Konsole beim Start an (z.B. `Version: 0.6.8`).

## So installierst Du Mods

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Mod herunterladen**\
   Lade den gewünschten Mod als `.jar` oder `.zip` Datei herunter.

3. **Mod hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die Mod-Datei in den `mods/`-Ordner hoch.

4. **Server starten**\
   Starte Deinen Server, damit der Mod geladen wird.

## So entfernst Du Mods

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Mod löschen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lösche die Mod-Datei aus dem `mods/`-Ordner.

3. **Server starten**\
   Starte Deinen Server.

## So installierst Du Early Plugins

Early Plugins sind besondere Plugins, die den Code des Servers schon beim Start verändern. Hytale unterstützt sie offiziell nicht und warnt, dass sie zu Stabilitätsproblemen führen können. Installiere ein Early Plugin nur, wenn ein Mod das ausdrücklich verlangt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Early Plugins aktivieren**\
   Navigiere in der Verwaltung zu den **Einstellungen** und setze das Feld **Aktiviere Early Plugins** auf `1`. Ohne diese Einstellung startet der Server nicht von selbst, sobald Early Plugins vorhanden sind, sondern verlangt eine zusätzliche Bestätigung.

3. **Early Plugin hochladen**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server und lade die `.jar` Datei in den Ordner `earlyplugins/` im Hauptverzeichnis hoch. Gibt es den Ordner noch nicht, lege ihn an.

4. **Server starten**\
   Starte Deinen Server. Wurde das Early Plugin geladen, zeigt die Konsole beim Start die Warnung `This is unsupported and may cause stability issues.` an.

> [!TIP]
> Um ein Early Plugin zu entfernen, lösche die Datei aus dem Ordner `earlyplugins/`. Liegen dort keine Early Plugins mehr, kannst Du **Aktiviere Early Plugins** wieder auf `0` setzen.

> [!WARNING]
> Hytale befindet sich im Early Access. Mods können Stabilitätsprobleme verursachen. Nach größeren Hytale-Updates funktionieren ältere Mods teilweise nicht mehr, bis ihr Autor sie aktualisiert hat, und können sogar verhindern, dass Dein Server startet. Erstelle vor der Installation ein [Backup](/tutorials/gameserver/hytale/create-backup) Deines Servers.
