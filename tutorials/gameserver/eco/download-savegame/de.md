---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Eco Servers herunter"
description: "Savegame von einem Eco Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["eco"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/eco/add-savegame", "gameserver/eco/create-backup", "gameserver/eco/join-server", "gameserver/eco/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Eco schreibt im laufenden Betrieb regelmäßig in den Spielstand – Du würdest sonst einen unvollständigen Stand herunterladen.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Storage/
   ```

4. **Dateien herunterladen**\
   Lade beide Dateien auf Deinen PC herunter:

   ```text
   Game.db
   Game.eco
   ```

5. **Server starten**\
   Starte Deinen Server wieder.

> [!IMPORTANT]
> `Game.db` und `Game.eco` gehören zusammen und verweisen aufeinander. Sichere sie deshalb immer gemeinsam – eine einzelne Datei lässt sich nicht laden.

## Was liegt sonst noch im Storage-Ordner?

| Datei bzw. Ordner | Inhalt |
|-------------------|--------|
| `Game.db` | Datenbank mit der Welt und allen Objekten |
| `Game.eco` | Zustand der Welt, unter anderem Spieler, Wirtschaft und Gesetze |
| `Backup/` | Automatische Sicherungen, die der Server selbst anlegt und rollierend überschreibt |

> [!TIP]
> **Konfiguration mitsichern**
>
> Möchtest Du auch Deine Servereinstellungen sichern, lade zusätzlich den folgenden Ordner herunter:
>
> ```text
> /Configs/
> ```
>
> Dort liegen unter anderem `Network.eco`, `Users.eco` und `Storage.eco`.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/eco/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/eco/create-backup).
