---
slug: "umod-installieren"
language: "de"
title: "So installierst Du uMod auf Deinem Rust Server"
description: "uMod (ehemals Oxide) auf einem Rust Server installieren"
tags: []
date: "2026-04-15"
visibility: "public"
cta: "gameserver"
product_keys: ["rust"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "uMod installieren"
sort: 13
related: ["gameserver/rust/change-world-size", "gameserver/rust/create-backup", "gameserver/rust/join-server", "gameserver/rust/set-custom-map-url"]
---

uMod (ehemals Oxide) ist das meistverwendete Mod-Framework für Rust und bietet Zugriff auf tausende Plugins. Auf EmeraldHost kannst Du uMod direkt über die Verwaltung aktivieren.

> [!WARNING]
> uMod funktioniert nicht im `staging`-Branch. Ist uMod trotzdem aktiviert, schlagen Client-Verbindungen mit folgender Fehlermeldung fehl:
>
> ```text
> Disconnected: Connection Attempt Failed
> ```
>
> Wechsle den Branch vor der Installation wie unten beschrieben.

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **uMod aktivieren**\
   Setze das Feld **uMod** auf aktiviert.

4. **Branch wechseln**\
   Ändere das Feld **Branch** von `staging` auf `workcart` und speichere die Einstellungen.

5. **Server neu installieren**\
   Klicke oben rechts auf die drei Punkte und wähle **Neuinstallieren**. Bestätige den Vorgang, damit der Server mit dem neuen Branch und uMod neu aufgesetzt wird.

   > [!WARNING]
   > Bei der Neuinstallation werden alle Server-Dateien zurückgesetzt. Erstelle vorher ein [Backup](/tutorials/gameserver/rust/create-backup), wenn Du Deinen aktuellen Spielstand behalten möchtest.

6. **Server starten**\
   Starte Deinen Server. uMod wird automatisch geladen.

## Plugins hinzufügen

Nach der Installation von uMod kannst Du Plugins im Ordner `/oxide/plugins/` ablegen. uMod erkennt neue `.cs`-Dateien automatisch und lädt sie bei laufendem Server nach.

Plugins findest Du unter anderem hier:

- [uMod Plugin-Liste](https://umod.org/plugins)

> [!TIP]
> Prüfe nach jedem Rust-Update, ob Deine Plugins noch kompatibel sind. Viele Plugins müssen nach größeren Spielupdates aktualisiert werden.
