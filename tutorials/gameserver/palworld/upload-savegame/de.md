---
slug: "savegame-hinzufuegen"
language: "de"
title: "So lädst Du ein Savegame auf Deinen Palworld Server hoch"
description: "Savegame auf einen Palworld Server hochladen"
tags: []
date: "2026-02-27"
visibility: "public"
updated: "2026-03-19"
cta: "gameserver"
product_keys: ["palworld"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 23
related: ["gameserver/palworld/kick-ban-players", "gameserver/palworld/reset-world", "gameserver/palworld/restore-automatic-backup", "gameserver/palworld/set-server-password"]
---

Du kannst Dein lokales Savegame auf Deinen Server übertragen und dort weiterspielen.

## So findest Du Dein Savegame

Die Palworld-Savegames findest Du auf Deinem PC unter:

```text
%localappdata%\Pal\Saved\SaveGames\
```

Innerhalb dieses Ordners befindet sich ein Unterordner mit Deiner Steam-ID und darin Dein Savegame-Ordner (eine lange Zeichenkette aus Buchstaben und Zahlen).

## So lädst Du das Savegame hoch

> [!WARNING]
> Stoppe Deinen Server bevor Du Dateien hochlädst, da diese sonst vom Server überschrieben werden.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Savegame hochladen**\
   Lade Deinen Savegame-Ordner in folgendes Verzeichnis auf dem Server hoch:

   ```text
   /Pal/Saved/SaveGames/0/
   ```

4. **Ordnername eintragen**\
   Öffne die Datei `GameUserSettings.ini` unter:

   ```text
   /Pal/Saved/Config/LinuxServer/GameUserSettings.ini
   ```

   Suche den Parameter `DedicatedServerName=` und trage dort den Namen Deines hochgeladenen Savegame-Ordners ein:

   ```ini
   DedicatedServerName=DEIN_ORDNERNAME
   ```

5. **Server starten**\
   Starte Deinen Server. Dein Savegame wird nun geladen.

> [!TIP]
> Den Namen des Savegame-Ordners findest Du im Verzeichnis `/Pal/Saved/SaveGames/0/`. Es ist die lange Zeichenkette, die als Ordnername dient.
