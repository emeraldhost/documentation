---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Conan Exiles Servers herunter"
description: "Savegame von einem Conan Exiles Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["conan-exiles"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 8
related: ["gameserver/conan-exiles/change-server-region", "gameserver/conan-exiles/create-backup", "gameserver/conan-exiles/enable-battleye", "gameserver/conan-exiles/enable-pvp"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen. Das Savegame besteht aus der Datei `game.db`.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /ConanSandbox/Saved/
   ```

4. **Datei herunterladen**\
   Lade die Datei `game.db` auf Deinen PC herunter. Sie enthält Deine komplette Welt inklusive aller Gebäude, Charaktere und Fortschritte.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> Die vollständige Pfadangabe zur Savegame-Datei auf dem Server lautet `/ConanSandbox/Saved/game.db`. Möchtest Du das heruntergeladene Savegame lokal weiterspielen, legst Du die `game.db` auf Deinem PC im Conan Exiles Installationsverzeichnis unter `ConanSandbox/Saved/` ab.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/conan-exiles/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/conan-exiles/create-backup).
