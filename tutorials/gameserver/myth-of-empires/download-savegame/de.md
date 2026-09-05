---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Myth of Empires Servers herunter"
description: "Savegame von einem Myth of Empires Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["myth-of-empires"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 3
related: ["gameserver/myth-of-empires/add-savegame", "gameserver/myth-of-empires/create-backup", "gameserver/myth-of-empires/join-server", "gameserver/myth-of-empires/kick-ban-players"]
---

Der Spielstand eines Myth of Empires Servers ist keine einzelne Datei, sondern der komplette Ordner `Saved`. Darin liegen die Welt, alle Bauwerke, die Spielerdaten und Deine Servereinstellungen.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Dateien herunterlädst. Myth of Empires schreibt im laufenden Betrieb regelmäßig in den Spielstand – lädst Du währenddessen herunter, kann er unvollständig oder beschädigt sein.

1. **Welt speichern**\
   Führe als Admin im Spiel den Befehl `cheat SaveWorld` aus und warte rund 30 bis 45 Sekunden, damit der Spielstand vollständig auf die Festplatte geschrieben wird.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /MOE/
   ```

5. **Saved herunterladen**\
   Lade den kompletten Ordner `Saved` mit allen Unterordnern und Dateien auf Deinen PC herunter.

6. **Server starten**\
   Starte Deinen Server wieder.

> [!WARNING]
> Ein Spielstand ist immer der vollständige Ordner `Saved`. Welt- und Spielerdaten liegen dort in mehreren Dateien nebeneinander und gehören zusammen – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

> [!NOTE]
> **Was liegt im Ordner Saved?**
>
> | Eintrag | Inhalt |
> |---------|--------|
> | `Config/WindowsServer/` | Deine Servereinstellungen, unter anderem die `GameUserSettings.ini` |
> | `Logs/` | Die Protokolldateien Deines Servers |
>
> Die übrigen Dateien im Ordner enthalten die Welt und die Spielerdaten. Sichere den Ordner deshalb immer vollständig.

> [!NOTE]
> Der Konfigurationsordner heißt auch auf Deinem Linux-Server `WindowsServer`. Das ist so gewollt – Myth of Empires stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.

> [!CAUTION]
> **Spielstand hängt an der Server-ID**
>
> Der Spielstand wird unter der **Server-ID** Deines Servers abgelegt. Änderst Du diese ID, findet der Server seinen bisherigen Spielstand nicht mehr und legt eine neue, leere Welt an. Notiere Dir die Server-ID Deines Servers, bevor Du den Spielstand woanders wieder einspielst.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/myth-of-empires/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/myth-of-empires/create-backup).
