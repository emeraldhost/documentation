---
slug: "welt-hochladen"
language: "de"
title: "So lädst Du eine Welt auf Deinen Space Engineers Server hoch"
description: "Eine bestehende Welt auf einen Space Engineers Server hochladen"
tags: []
date: "2026-07-08"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Welt hochladen"
sort: 15
related: ["gameserver/space-engineers/enable-remote-api", "gameserver/space-engineers/join-server", "gameserver/space-engineers/kick-ban-players", "gameserver/space-engineers/set-server-password"]
---

Du kannst eine lokal erstellte oder bestehende Welt auf Deinen Server übertragen und dort weiterspielen. Eine Space-Engineers-Welt ist ein **Ordner**, der unter anderem die Dateien `Sandbox.sbc` und `Sandbox_config.sbc` enthält.

> [!NOTE]
> Der Weltname ist auf Deinem Server fest auf **World** eingestellt und kann nicht geändert werden (sichtbar in den **Einstellungen**). Deine Welt wird daher immer aus dem Ordner `Saves/World/` geladen – Du lädst den **Inhalt** Deiner Welt in genau diesen Ordner.

## Welt-Ordner finden

Deine lokalen Welten findest Du auf Deinem PC unter:

```text
%APPDATA%\SpaceEngineers\Saves\<SteamID>\
```

Jede Welt ist ein eigener Ordner (benannt nach dem Weltnamen). Du benötigst den **Inhalt** dieses Ordners – unter anderem `Sandbox.sbc`, `Sandbox_config.sbc` und die `.sbs`-Dateien.

## Welt hochladen

> [!WARNING]
> Stoppe Deinen Server, bevor Du Dateien hochlädst. Ein laufender Server speichert automatisch und kann die hochgeladene Welt beschädigen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser.

3. **Welt-Ordner öffnen**\
   Wechsle auf dem Server in den Ordner `Saves/World/`.

4. **Weltdaten hochladen**\
   Lade den **Inhalt** Deines lokalen Welt-Ordners direkt in `Saves/World/` hoch und überschreibe die vorhandenen Dateien. Lade die Dateien direkt in den Ordner – **nicht** als weiteren Unterordner.

5. **Server starten**\
   Starte Deinen Server. In der Server-Konsole sollte „Loading world …“ und anschließend „Game ready“ erscheinen.

> [!WARNING]
> Bestehende Dateien im Ordner `Saves/World/` werden überschrieben. Erstelle vorher ein [Backup](/tutorials/gameserver/create-backup), falls Du die aktuelle Welt behalten möchtest. Speichere außerdem keine eigenen Backups innerhalb des Ordners – der Server entfernt beim Speichern unbekannte Dateien.
