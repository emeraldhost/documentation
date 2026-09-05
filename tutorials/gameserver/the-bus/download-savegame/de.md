---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines The Bus Servers herunter"
description: "Savegame von einem The Bus Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 11
related: ["gameserver/the-bus/configure-server", "gameserver/the-bus/create-backup", "gameserver/the-bus/enable-ai-buses", "gameserver/the-bus/add-mods"]
---

Du kannst das Savegame Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung, zum Archivieren eines Spielstands oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig – Du würdest sonst einen unvollständigen oder beschädigten Spielstand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /TheBus/Saved/SaveGames/
   ```

4. **Dateien herunterladen**\
   Lade alle Save-Dateien aus diesem Verzeichnis auf Deinen PC herunter. Am einfachsten markierst Du den kompletten Inhalt des Ordners `SaveGames` und speicherst ihn gemeinsam in einem Ordner auf Deinem PC.

5. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/the-bus/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/the-bus/create-backup).
