---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines DayZ Servers herunter"
description: "Savegame von einem DayZ Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["dayz"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 8
related: ["gameserver/dayz/configure-pvp", "gameserver/dayz/create-backup", "gameserver/dayz/enable-crosshair", "gameserver/dayz/enable-third-person"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen. Das Savegame befindet sich im `storage_1` Ordner.

> [!NOTE]
> DayZ-Spielstände werden ausschließlich serverseitig gespeichert. Der heruntergeladene Ordner lässt sich daher nur auf einem anderen DayZ-Server wieder einspielen, nicht in einem Singleplayer-Spiel.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /mpmissions/dayzOffline.chernarusplus/storage_1/
   ```

   > [!TIP]
   > Wenn Du die Livonia-Map verwendest, lautet der Pfad stattdessen:
   >
   > ```text
   > /mpmissions/dayzOffline.enoch/storage_1/
   > ```

4. **Ordner herunterladen**\
   Lade den kompletten `storage_1` Ordner mit allen enthaltenen Dateien auf Deinen PC herunter. Darin liegt der gesamte Weltzustand Deines Servers inklusive Bauten, Loot und Fahrzeugen.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Die richtige Mission finden**
>
> Der `storage_1` Ordner liegt immer innerhalb des Missions-Ordners der Map, die Dein Server aktuell lädt: `dayzOffline.chernarusplus` für Chernarus, `dayzOffline.enoch` für Livonia. Lädst Du eine andere Map, findest Du den Ordner entsprechend im Missions-Ordner dieser Map unter `/mpmissions/`.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/dayz/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/dayz/create-backup).
