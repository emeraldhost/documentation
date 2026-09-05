---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Smalland Survive the Wilds Server hinzu"
description: "Savegame auf einem Smalland Survive the Wilds Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["smalland-survive-the-wilds"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/smalland-survive-the-wilds/create-backup", "gameserver/smalland-survive-the-wilds/download-savegame", "gameserver/smalland-survive-the-wilds/join-server"]
---

Der komplette Spielstand einer Welt steckt in einer einzigen Datei mit der Endung `.wld`. Der Dateiname entspricht dabei exakt dem **Weltnamen**, den Du in der Verwaltung Deines Servers einträgst: Heißt Deine Welt `MeineWelt`, lädt der Server die Datei `MeineWelt.wld`.

> [!NOTE]
> Charaktere liegen **nicht** auf dem Server. Sie werden lokal auf dem PC des jeweiligen Spielers gespeichert und sind an dessen Account gebunden. Auf dem Server liegen nur die Weltdaten wie Gelände, Bauwerke und gezähmte Kreaturen.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/smalland-survive-the-wilds/create-backup) Deines bisherigen Spielstands, falls Du später zurückwechseln möchtest.

## Lokalen Spielstand finden

Möchtest Du eine Welt von Deinem PC auf den Server übertragen, findest Du sie hier:

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %LOCALAPPDATA%\SMALLAND\Saved\SaveGames\Worlds\
   ```

2. **Welt auswählen**\
   In diesem Ordner liegt für jede Welt eine Datei `<Weltname>.wld`. Wähle die Datei der Welt aus, die Du übertragen möchtest.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Weltdatei und würde Deinen Upload wieder überschreiben.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Datei hochlädst.

4. **Weltdatei hochladen**\
   Lade Deine `.wld`-Datei in dieses Verzeichnis hoch. Liegt dort bereits eine Datei mit demselben Namen, lösche sie vorher oder benenne Deine hochgeladene Datei um.

5. **Weltnamen in der Verwaltung eintragen**\
   Öffne die **Verwaltung** Deines Servers und trage im Feld für den Weltnamen (**World Name**) den Dateinamen **ohne die Endung** `.wld` ein.

   > [!TIP]
   > **Beispiel**
   >
   > | Datei im Ordner `Worlds` | Eintrag beim Weltnamen |
   > |--------------------------|------------------------|
   > | `MeineWelt.wld` | `MeineWelt` |
   > | `World.wld` | `World` |

6. **Server starten**\
   Starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!IMPORTANT]
> Der Weltname muss exakt zum Dateinamen passen – auch bei Groß- und Kleinschreibung. Stimmt er nicht überein, legt der Server einfach eine **neue, leere Welt** unter dem eingetragenen Namen an. Deine hochgeladene Datei bleibt dabei zwar erhalten, wird aber nicht geladen.

> [!WARNING]
> **Keine Leerzeichen im Weltnamen**
>
> Der Weltname darf **keine Leerzeichen** enthalten. Enthält Deine hochgeladene Datei welche, benenne sie vorher um – zum Beispiel `Meine Welt.wld` in `MeineWelt.wld` – und trage anschließend den neuen Namen in der Verwaltung ein.

## Neue Welt anlegen

Möchtest Du frisch anfangen, ohne Deinen bisherigen Spielstand zu löschen:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Neuen Weltnamen eintragen**\
   Trage in der Verwaltung einen bisher unbenutzten Weltnamen ein.

3. **Server starten**\
   Beim nächsten Start legt der Server eine neue Welt mit diesem Namen an. Deine alte `.wld`-Datei bleibt im Ordner `Worlds` liegen – Du kannst jederzeit zurückwechseln, indem Du den alten Weltnamen wieder einträgst.

## Welt zurücksetzen

> [!WARNING]
> Möchtest Du eine Welt komplett zurücksetzen, stoppe den Server, lösche die zugehörige `.wld`-Datei im Ordner `Worlds` und starte den Server wieder. Der Server erzeugt die Welt dann neu. Dieser Schritt lässt sich nicht rückgängig machen – sichere die Datei vorher, falls Du sie noch brauchst.
