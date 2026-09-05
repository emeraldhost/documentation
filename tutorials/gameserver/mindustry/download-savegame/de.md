---
slug: "savegame-herunterladen"
language: "de"
title: "So lädst Du das Savegame Deines Mindustry Servers herunter"
description: "Savegame von einem Mindustry Server herunterladen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["mindustry"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame herunterladen"
sort: 4
related: ["gameserver/mindustry/add-savegame", "gameserver/mindustry/create-backup", "gameserver/mindustry/join-server", "gameserver/mindustry/kick-ban-players"]
---

Du kannst den Spielstand Deines Servers jederzeit auf Deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen. Ein Spielstand ist dabei immer genau eine Datei mit der Endung `.msav`.

## Aktuellen Stand speichern

Der Server schreibt die laufende Partie nicht dauerhaft auf die Festplatte. Sichere sie deshalb zuerst über die **Konsole** Deiner Verwaltung:

1. **Konsole öffnen**\
   Öffne in der Verwaltung die **Konsole** Deines Servers.

2. **Spielstand speichern**\
   Gib den folgenden Befehl ein und wähle einen kurzen Namen ohne Leerzeichen:

   ```text
   save meinewelt
   ```

   Der Server bestätigt die Sicherung und legt die Datei unter `/config/saves/meinewelt.msav` ab.

## Datei herunterladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung, damit während des Downloads nicht in die Datei geschrieben wird.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /config/saves/
   ```

4. **Spielstand herunterladen**\
   Lade die gewünschte `.msav`-Datei auf Deinen PC herunter:

   ```text
   meinewelt.msav
   ```

5. **Server starten**\
   Starte Deinen Server wieder.

> [!NOTE]
> Welche Spielstände auf Deinem Server liegen, zeigt Dir in der Konsole der Befehl `saves`. Er listet alle Slots ohne die Endung `.msav` auf.

> [!TIP]
> **Auto-Saves**
>
> Hast Du automatische Speicherungen aktiviert, findest Du im selben Ordner zusätzlich Dateien mit dem Präfix `auto_`, zum Beispiel `auto_Ground_Zero_....msav`. Auch diese kannst Du herunterladen und später wieder laden.

> [!TIP]
> **Einstellungen und Karten mitsichern**
>
> Möchtest Du mehr als nur den Spielstand sichern, lade zusätzlich folgende Dateien herunter:
>
> | Pfad | Inhalt |
> |------|--------|
> | `/config/settings.bin` | Alle Servereinstellungen sowie Admin- und Bannliste |
> | `/config/maps/` | Deine eigenen Karten |
> | `/config/mods/` | Installierte Mods und Plugins |

> [!WARNING]
> `settings.bin` ist eine Binärdatei. Sichere sie, aber bearbeite sie nicht mit einem Texteditor – dabei gehen Admins, Banns und Einstellungen verloren.

> [!TIP]
> **Spielstand wieder einspielen**
>
> Möchtest Du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](/tutorials/gameserver/mindustry/add-savegame).

> [!NOTE]
> **Regelmäßige Sicherungen**
>
> Für automatische bzw. regelmäßige Sicherungen kannst Du auch die Backup-Funktion nutzen: [Backup erstellen](/tutorials/gameserver/mindustry/create-backup).
