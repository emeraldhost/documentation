---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem The Lord of the Rings Return to Moria Server hinzu"
description: "Savegame auf einem The Lord of the Rings Return to Moria Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["the-lord-of-the-rings-return-to-moria"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/the-lord-of-the-rings-return-to-moria/create-backup", "gameserver/the-lord-of-the-rings-return-to-moria/download-savegame", "gameserver/the-lord-of-the-rings-return-to-moria/join-server", "gameserver/the-lord-of-the-rings-return-to-moria/kick-ban-players"]
---

Eine Welt in Return to Moria ist eine einzelne Datei mit dem Präfix `MW_` und der Endung `.sav`, zum Beispiel `MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav`. Du lädst diese Datei auf Deinen Server hoch und trägst anschließend in der Konfiguration ein, welche Welt geladen werden soll.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/the-lord-of-the-rings-return-to-moria/create-backup) Deines bisherigen Server-Spielstands, falls Du später zurückwechseln möchtest.

## Lokalen Spielstand finden

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %localappdata%\Moria\Saved
   ```

2. **Ordner Deiner Plattform wählen**\
   Öffne den Ordner Deiner Plattform: `SaveGamesSteam` bei Steam, `SaveGamesEpic` beim Epic Games Store.

3. **Weltdatei auswählen**\
   Darin liegen Deine Welten als einzelne `MW_*.sav`-Dateien. Wähle die Datei der Welt aus, die Du auf den Server übertragen möchtest.

> [!NOTE]
> Übertragen lassen sich nur Welten vom PC (Steam oder Epic Games Store). Für Spielstände von PlayStation 5 oder Xbox gibt es keinen dokumentierten Weg, sie auf einen Server zu bringen.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Der Server speichert beim Stoppen und beendet sich sauber – solange er läuft, schreibt er laufend in die Weltdatei.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /Moria/Saved/SaveGamesDedicated/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal vollständig, damit die Ordnerstruktur und die Konfigurationsdateien angelegt werden. Stoppe ihn anschließend wieder, bevor Du die Datei hochlädst.

4. **Weltdatei hochladen**\
   Lade Deine `MW_*.sav`-Datei in dieses Verzeichnis hoch. Behalte den Dateinamen unverändert bei – liegt dort bereits eine Datei mit demselben Namen, benenne eine der beiden vorher um.

5. **Welt in der Konfiguration eintragen**\
   Öffne im Hauptverzeichnis Deines Servers die Datei `MoriaServerConfig.ini` und trage im Abschnitt `[World]` ein, welche Welt geladen werden soll:

   ```text
   [World]
   OptionalWorldFilename=MW_BAD1ED294904FE2C24A8ED8BC98145AB.sav
   ```

   Damit lädt der Server gezielt genau diese Datei – inklusive der Endung `.sav`.

   > [!NOTE]
   > Fehlt die Zeile `OptionalWorldFilename` in Deiner Konfiguration, ergänze sie einfach unterhalb von `[World]`.

6. **Server starten**\
   Speichere die Änderung und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

## Warum Du den Weltnamen nicht verwenden solltest

Im Abschnitt `[World]` steht zusätzlich der Eintrag `Name`. Darüber lässt sich eine Welt zwar ebenfalls auswählen, für Deinen Server ist das aber nicht der richtige Weg.

> [!WARNING]
> Der Eintrag `Name` wird bei jedem Start automatisch aus den Servereinstellungen Deines Servers übernommen. Eine Änderung direkt in der `MoriaServerConfig.ini` bleibt deshalb nicht bestehen. Nutze zum Laden eines hochgeladenen Spielstands immer `OptionalWorldFilename`.

> [!IMPORTANT]
> Findet der Server unter dem eingetragenen Weltnamen keine Welt, legt er automatisch eine **neue** Welt mit den Werten aus dem Abschnitt `[World.Create]` an – also mit dem dort eingetragenen Spielmodus, Seed und Schwierigkeitsgrad. Dein hochgeladener Spielstand bleibt dann zwar auf der Platte liegen, wird aber nicht geladen.

> [!TIP]
> `OptionalWorldFilename` ist auch dann die richtige Wahl, wenn Du mehrere Welten mit demselben Namen im Ordner liegen hast. Trage dort immer den exakten Dateinamen inklusive `.sav` ein.

## Wichtige Hinweise

> [!WARNING]
> Änderungen an der `MoriaServerConfig.ini` werden erst beim nächsten Start eingelesen. Bearbeite die Datei deshalb immer bei gestopptem Server und starte ihn anschließend neu.

> [!WARNING]
> Stoppe Deinen Server ausschließlich über die Verwaltung. Nur so wird der aktuelle Stand gespeichert und der Server sauber beendet. Ein erzwungener Abbruch kann Fortschritt kosten und die Online-Session hängen lassen, sodass der nächste Start mehrere Minuten dauert.

> [!NOTE]
> Zwischen der Welt auf Deinem PC und der Welt auf dem Server gibt es keine automatische Synchronisation. Änderungen auf dem Server landen also nicht in Deinem lokalen Spielstand und umgekehrt – für einen erneuten Abgleich musst Du die Datei jedes Mal manuell übertragen.
