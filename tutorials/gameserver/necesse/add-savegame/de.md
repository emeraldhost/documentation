---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Necesse Server hinzu"
description: "Savegame auf einem Necesse Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["necesse"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/necesse/add-admin", "gameserver/necesse/add-mods", "gameserver/necesse/create-backup", "gameserver/necesse/download-savegame"]
---

Eine Necesse-Welt ist **eine einzige `.zip`-Datei**, die nach dem Weltnamen benannt ist – zum Beispiel `Meine_Welt.zip`. Du lädst diese Datei auf Deinen Server hoch und trägst den Namen anschließend in der Verwaltung ein.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/necesse/create-backup) Deiner bisherigen Server-Welt, falls Du später zurückwechseln möchtest.

## Lokale Welt finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %appdata%\Necesse\saves\worlds
   ```

2. **Welt-Datei auswählen**\
   In diesem Ordner liegt jede Welt als eigene `.zip`-Datei. Wähle die Datei der Welt aus, die Du übertragen möchtest.

   > [!NOTE]
   > Entpacke die Datei **nicht**. Necesse erwartet die Welt als gepacktes Archiv.

## Welt hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Welt-Datei.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /saves/worlds/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Datei hochlädst. Liegen die vorhandenen Welten Deines Servers direkt in `/saves/`, nutze diesen bereits vorhandenen Ordner statt `/saves/worlds/`.

4. **Welt-Datei hochladen**\
   Lade Deine `.zip`-Datei in dieses Verzeichnis hoch. Ist dort bereits eine Datei mit demselben Namen vorhanden, benenne Deine hochgeladene Datei um oder lade die vorhandene vorher herunter.

5. **Weltnamen in der Verwaltung eintragen**\
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Save Name** den Namen Deiner Welt-Datei ein – **ohne** die Endung `.zip` (z.B. `Meine_Welt` für `Meine_Welt.zip`).

6. **Server starten**\
   Speichere die Einstellungen und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

> [!CAUTION]
> **Groß- und Kleinschreibung beachten**
>
> Dein Server läuft unter Linux und unterscheidet zwischen Groß- und Kleinschreibung. `Meine_Welt` und `meine_welt` sind zwei verschiedene Welten. Stimmt der eingetragene Name nicht exakt mit dem Dateinamen überein, legt der Server stattdessen eine **neue, leere Welt** unter diesem Namen an.

> [!WARNING]
> Der Weltname wird beim Start als Startparameter übergeben. Trage ihn deshalb ausschließlich in der Verwaltung ein – ein abweichender Eintrag in der `/cfg/server.cfg` bleibt wirkungslos.

> [!NOTE]
> **Welt-Einstellungen anpassen**
>
> Die Einstellungen einer Welt (Datei `worldSettings.cfg`) liegen **innerhalb** der `.zip`-Datei. Möchtest Du sie ändern, lade die Datei herunter, entpacke sie, bearbeite `worldSettings.cfg` und packe den Inhalt anschließend wieder in ein `.zip`-Archiv mit demselben Namen und derselben Struktur.

> [!TIP]
> Welchen Namen Dein Server aktuell lädt, siehst Du in der Verwaltung im Feld **Save Name**. Benennst Du Deine hochgeladene Datei genau so, musst Du dort nichts umstellen – achte dann aber darauf, die bisherige Welt-Datei vorher zu sichern.
