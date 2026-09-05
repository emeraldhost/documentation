---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem PixARK Server hinzu"
description: "Savegame auf einem PixARK Server hinzufügen"
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
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/pixark/add-admin", "gameserver/pixark/add-mods", "gameserver/pixark/create-backup", "gameserver/pixark/download-savegame"]
---

Der komplette Spielstand eines PixARK Servers steckt im Ordner `Saved`. Um einen Spielstand zu übertragen, lädst Du diesen Ordner von einem Server herunter und auf Deinen Server wieder hoch.

> [!IMPORTANT]
> Diese Anleitung überträgt einen Spielstand **von einem Server auf einen anderen Server**. Für PixARK ist kein Weg dokumentiert, einen Einzelspieler-Spielstand vom eigenen PC auf einen Dedicated Server zu übertragen. Versuche das nicht auf gut Glück – arbeite ausschließlich mit Spielständen, die von einem Server stammen.

## Vorher prüfen

Ein fremder Spielstand lädt nur, wenn er zur Konfiguration Deines Servers passt:

| Voraussetzung | Erklärung |
|---------------|-----------|
| Gleiche Karte | Der Spielstand muss von derselben Karte stammen, die Dein Server startet. Startet Dein Server eine andere Karte, wird der Spielstand nicht geladen. |
| Gleicher Weltname | PixARK legt die Welt unter dem Weltnamen ab, der beim Serverstart vorgegeben wird. Stammt der Spielstand von einem Anbieter, der einen anderen Weltnamen verwendet hat, findet Dein Server ihn nicht und erzeugt stattdessen eine neue Welt. |

> [!WARNING]
> Startet Dein Server nach dem Hochladen mit einer frisch erzeugten Welt statt mit Deinem Spielstand, ist eine dieser beiden Voraussetzungen nicht erfüllt. Spiele in diesem Fall nicht weiter, sondern stoppe den Server sofort – sonst überschreibst Du den hochgeladenen Stand.

## Savegame hochladen

1. **Backup erstellen**\
   Erstelle ein [Backup](/tutorials/gameserver/pixark/create-backup) Deines Servers oder lade den bisherigen Stand herunter: [Savegame herunterladen](/tutorials/gameserver/pixark/download-savegame). Damit kannst Du jederzeit zurück.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in den Spielstand und überschreibt Deine Dateien.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /ShooterGame/
   ```

5. **Alten Spielstand beiseiteräumen**\
   Benenne den vorhandenen Ordner `Saved` um, zum Beispiel in `Saved_alt`. So bleiben keine Reste des alten Stands liegen, die sich mit dem neuen vermischen könnten – und Du kommst notfalls zurück.

6. **Spielstand hochladen**\
   Lade den Ordner `Saved` des anderen Servers hoch, sodass er wieder unter folgendem Pfad liegt:

   ```text
   /ShooterGame/Saved/
   ```

7. **Server starten**\
   Starte Deinen Server. Der neue Spielstand wird nun geladen.

> [!TIP]
> **Eigene Einstellungen behalten**
>
> Im Ordner `Saved` steckt auch der Unterordner `Config/WindowsServer/` mit den Konfigurationsdateien. Möchtest Du nur Welt und Spieler übernehmen, aber Deine eigenen Servereinstellungen behalten, kopiere nach dem Hochladen den Ordner `Config` aus Deinem alten `Saved`-Ordner zurück.

> [!NOTE]
> Läuft der Server erst einmal mit dem neuen Spielstand und funktioniert alles, kannst Du den umbenannten Ordner `Saved_alt` löschen. Lade ihn vorher auf Deinen PC herunter, wenn Du ihn behalten möchtest.
