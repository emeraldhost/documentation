---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines RuneScape: Dragonwilds Servers herunter"
description: "Savegame von einem RuneScape Dragonwilds Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["runescape-dragonwilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 5
related: ["gameserver/runescape-dragonwilds/create-backup", "gameserver/runescape-dragonwilds/create-custom-world", "gameserver/runescape-dragonwilds/set-admin-password", "gameserver/runescape-dragonwilds/join-server"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um es auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /RSDragonwilds/Saved/SaveGames/
   ```

4. **Datei herunterladen**\
   Lade die `.sav`-Datei Deiner Welt aus diesem Verzeichnis auf Deinen PC herunter. Diese eine Datei enthält den kompletten Spielstand.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Die richtige Datei finden**
>
> Liegen mehrere `.sav`-Dateien im Verzeichnis, findest Du den Namen der aktiven Welt in den **Einstellungen** in der Verwaltung im Feld **SaveGame** – die passende Datei heißt genauso, ergänzt um die Endung `.sav`.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/runescape-dragonwilds/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/runescape-dragonwilds/create-backup).
