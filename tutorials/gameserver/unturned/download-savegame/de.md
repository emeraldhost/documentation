---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Unturned Servers herunter"
description: "Savegame von einem Unturned Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["unturned"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/unturned/add-savegame", "gameserver/unturned/create-backup", "gameserver/unturned/join-server", "gameserver/unturned/kick-ban-players"]
---

Bei Unturned liegen Spielstand und Konfiguration gemeinsam in einem Ordner unter `/Servers/`. Du kannst diesen Ordner jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

> [!CAUTION]
> **Erst speichern**
>
> Unturned speichert **nicht automatisch**. Lädst Du die Dateien herunter, ohne vorher zu speichern, fehlt Dir der Fortschritt seit dem letzten Speichervorgang.

1. **Spielstand speichern**\
   Öffne die **Konsole** in der Verwaltung und gib folgenden Befehl ein:

   ```text
   save
   ```

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Servers/
   ```

   > [!NOTE]
   > **Welcher Ordner ist meiner?**
   >
   > Der Ordnername entspricht der ServerID aus dem Startparameter Deines Servers. In der Regel liegt dort genau ein Ordner – das ist Deiner.

5. **Ordner herunterladen**\
   Lade den kompletten Ordner Deines Servers mit allen Unterordnern auf Deinen PC herunter.

6. **Server starten**\
   Starte Deinen Server wieder.

## Was steckt in dem Ordner?

| Ordner / Datei | Inhalt |
|----------------|--------|
| `Level/<Kartenname>/` | Die Weltdaten: Bauten, Fahrzeuge und Objekte – je Karte ein eigener Ordner |
| `Players/` | Die Spielerstände, je Spieler ein eigener Unterordner |
| `Server/Commands.dat` | Deine Serverbefehle und -einstellungen (Karte, Passwort, Spielerzahl) |
| `Server/Adminlist.dat` · `Server/Blacklist.dat` | Admin- und Bannliste |
| `Config.txt` | Schwierigkeitsgrad und erweiterte Servereinstellungen |
| `WorkshopDownloadConfig.json` | Die Liste Deiner Workshop-Mods und -Karten |

> [!TIP]
> **Nur die Welt sichern**
>
> Möchtest Du ausschließlich den Spielfortschritt sichern, genügen die Ordner `Level/` und `Players/`. Für einen vollständigen Umzug auf einen anderen Server lade lieber den kompletten Server-Ordner herunter.

> [!WARNING]
> Lade Ordner immer vollständig herunter. Einzelne Dateien aus `Level/` oder `Players/` ergeben keinen nutzbaren Spielstand.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/unturned/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/unturned/create-backup).
