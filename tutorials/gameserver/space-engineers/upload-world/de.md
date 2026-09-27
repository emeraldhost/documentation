---
slug: "welt-hochladen"
language: "de"
title: "So lädst Du eine Welt auf Deinen Space Engineers Server hoch"
description: "Eine bestehende Welt auf einen Space Engineers Server hochladen"
tags: []
date: "2026-07-08"
visibility: "public"
updated: "2026-09-27"
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
> Der Weltname ist auf Deinem Server fest auf **World** eingestellt und kann nicht geändert werden (sichtbar in den **Einstellungen**). Deine Welt wird daher immer aus dem Ordner `/config/Saves/World/` geladen – Du lädst den **Inhalt** Deiner Welt in genau diesen Ordner.

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
   Wechsle auf dem Server in den Ordner `/config/Saves/World/`.

4. **Alte Weltdateien löschen**\
   Erstelle vorher ein [Backup](/tutorials/gameserver/create-backup), falls Du die aktuelle Welt behalten möchtest. Lösche dann alle Dateien, die direkt in `/config/Saves/World/` liegen, oder leere den Ordner komplett.

   > [!IMPORTANT]
   > Lade Deine Welt nicht einfach über die alten Dateien. Liegt im Ordner eine `SANDBOX_0_0_0_.sbsB5`, lädt der Server diese Datei statt der `SANDBOX_0_0_0_.sbs`. Bringt Deine Welt keine eigene `.sbsB5` mit, lädt der Server sonst die Schiffe, Stationen und weiteren Objekte aus der `.sbsB5` der alten Welt.

5. **Weltdaten hochladen**\
   Lade den **Inhalt** Deines lokalen Welt-Ordners direkt in `/config/Saves/World/` hoch – **nicht** als weiteren Unterordner.

6. **Server starten**\
   Starte Deinen Server. In der Server-Konsole sollte „Loading world …“ und anschließend „Game ready“ erscheinen.

> [!WARNING]
> Speichere keine eigenen Backups innerhalb des Ordners `/config/Saves/World/` – der Server entfernt beim Speichern unbekannte Dateien.
