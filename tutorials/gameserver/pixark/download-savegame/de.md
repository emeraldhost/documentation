---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines PixARK Servers herunter"
description: "Savegame von einem PixARK Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["pixark"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/pixark/add-mods", "gameserver/pixark/add-savegame", "gameserver/pixark/create-backup", "gameserver/pixark/join-server"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

Bei PixARK liegen sämtliche veränderlichen Daten in einem einzigen Ordner: `Saved`. Darin stecken die Voxel-Welt, die Spieler- und Stammesdaten, Deine Konfigurationsdateien und die Logs.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Im laufenden Betrieb schreibt der Server ständig in den Spielstand – Du würdest sonst einen unvollständigen oder beschädigten Stand herunterladen.

## Savegame herunterladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /ShooterGame/
   ```

4. **Ordner herunterladen**\
   Lade den kompletten Ordner `Saved` auf Deinen PC herunter:

   ```text
   /ShooterGame/Saved/
   ```

   > [!NOTE]
   > Lade immer den gesamten Ordner herunter und picke Dir keine einzelnen Unterordner heraus. Welt-, Spieler- und Stammesdaten liegen in getrennten Unterordnern und gehören zusammen – fehlt einer davon, ist der Spielstand unbrauchbar.

5. **Server starten**\
   Starte Deinen Server wieder.

## Was liegt im Saved-Ordner?

| Inhalt | Beschreibung |
|--------|--------------|
| Weltdaten | Die gesamte Voxel-Welt mit allen Bauwerken und Veränderungen am Terrain |
| Spieler- und Stammesdaten | Charaktere, Fortschritt, Inventare und Stämme |
| `Config/WindowsServer/` | Konfigurationsdateien, unter anderem die `GameUserSettings.ini` |
| `Logs/` | Die Serverlogs |

> [!NOTE]
> Der Konfigurationsordner heißt auch auf Deinem Linux-Server `WindowsServer`. Das ist so gewollt – PixARK stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/pixark/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/pixark/create-backup).
