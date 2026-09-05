---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Valheim Servers herunter"
description: "Savegame von einem Valheim Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["valheim"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 6
related: ["gameserver/valheim/add-admin", "gameserver/valheim/install-bepinex", "gameserver/valheim/add-mods", "gameserver/valheim/add-savegame"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren einer Welt oder um sie auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

4. **Dateien herunterladen**\
   Lade die beiden Dateien `<WeltName>.fwl` (Welt-Metadaten) und `<WeltName>.db` (Weltdaten) auf Deinen PC herunter. Beide Dateien gehören zusammen und müssen immer gemeinsam gesichert werden.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Welche Dateien zu Deiner Welt gehören, erkennst Du am Feld **Welt Name** in den **Einstellungen** der Verwaltung. Trägt es z.B. `MyWorld` ein, benötigst Du die Dateien `MyWorld.fwl` und `MyWorld.db`.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/valheim/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/valheim/create-backup).
