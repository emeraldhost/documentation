---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Sons Of The Forest Servers herunter"
description: "Savegame von einem Sons Of The Forest Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["sons-of-the-forest"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/sons-of-the-forest/add-savegame", "gameserver/sons-of-the-forest/create-backup", "gameserver/sons-of-the-forest/join-server", "gameserver/sons-of-the-forest/kick-ban-players"]
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
   /serverconfig/Saves/DedicatedServer/Multiplayer/
   ```

4. **Richtigen Ordner wählen**\
   Jeder Spielstand liegt in einem eigenen Ordner, dessen Name der zehnstelligen Slot-Nummer entspricht (z.B. `0000000001` für Save-Slot `1`).

5. **Ordner herunterladen**\
   Lade den kompletten Ordner mit allen enthaltenen Dateien auf Deinen PC herunter – dazu gehören mehrere `.json`-Dateien und eine `SaveData.zip`. Die Dateien gehören zusammen und müssen immer gemeinsam gesichert werden.

6. **Server starten**\
   Starte Deinen Server wieder.

> [!TIP]
> **Welcher Ordner ist der richtige?**
>
> Welchen Spielstand Dein Server aktuell verwendet, erkennst Du am Wert `SaveSlot` in der Datei `/serverconfig/dedicatedserver.cfg`. Steht dort z.B. `"SaveSlot": 1`, benötigst Du den Ordner `0000000001`.

> [!NOTE]
> Spielerdaten wie Inventar, Position und Kleidung sind nicht Teil des Welt-Savegames. Gesichert werden ausschließlich der Weltzustand und Deine Bauwerke.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/sons-of-the-forest/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/sons-of-the-forest/create-backup).
