---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Stormforge Servers herunter"
description: "Lade die Welt Deines Stormforge Servers per SFTP auf Deinen PC herunter, als Sicherung oder für einen Umzug."
tags: []
date: "2026-11-11"
visibility: "public"
cta: "gameserver"
product_keys: ["stormforge"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/stormforge/add-savegame", "gameserver/stormforge/create-backup", "gameserver/stormforge/reset-world"]
---

Du kannst die Welt Deines Servers jederzeit auf Deinen PC herunterladen, zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

Stormforge speichert jede Welt in einem eigenen Ordner unter `/saves/Worlds/`. Der Ordner trägt die ID der Welt als Namen, z.B. `3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30`.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Im laufenden Betrieb kann der heruntergeladene Spielstand unvollständig sein.

## Savegame herunterladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **ID der aktiven Welt nachsehen**\
   Öffne die Datei `/settings.json` im Hauptverzeichnis Deines Servers, per SFTP oder im [Datei-Browser](/tutorials/gameserver/use-file-browser). Der Wert von `worldPrefabID` ist die ID der Welt, die Dein Server gerade lädt:

   ```json
   "worldPrefabID": "3f2b8c1e-5a47-4d09-9e6b-7c1d2a4f8b30",
   ```

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /saves/Worlds/
   ```

   > [!NOTE]
   > Das Verzeichnis `saves` liegt im Hauptverzeichnis Deines Servers, der vollständige Pfad lautet also `/home/container/saves/Worlds/`.

5. **Welt-Ordner herunterladen**\
   Lade den kompletten Ordner, der so heißt wie die ID aus Schritt 3, auf Deinen PC herunter. Übertrage immer den ganzen Ordner und benenne weder ihn noch die Datei `World_<World-ID>.bytes` darin um.

6. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> **Mehrere Ordner vorhanden?**\
> In `/saves/Worlds/` können mehrere Welt-Ordner nebeneinander liegen. Geladen wird nur die Welt, deren ID in `worldPrefabID` steht.

> [!TIP]
> **Welteinstellungen mit sichern**\
> Deine Welteinstellungen stehen in der Datei `/settings.json`. Lade sie zusätzlich herunter, wenn Du sie mit aufbewahren möchtest.

> [!TIP]
> **Spielstand wieder einspielen**\
> Möchtest Du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/stormforge/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**\
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/stormforge/create-backup).
