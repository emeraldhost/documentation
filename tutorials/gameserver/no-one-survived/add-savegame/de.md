---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem No One Survived Server hinzu"
description: "Savegame auf einem No One Survived Server hinzufügen"
tags: []
date: "2026-07-31"
visibility: "public"
cta: "gameserver"
product_keys: ["no-one-survived"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/no-one-survived/add-admin", "gameserver/no-one-survived/change-game-settings", "gameserver/no-one-survived/change-map", "gameserver/no-one-survived/create-backup"]
---

Die Spielstände eines No One Survived Servers liegen als Dateien mit der Endung `.sav` in einem festen Verzeichnis. Welcher Spielstand geladen wird, entscheidet der **Savegame-Name** in der Verwaltung: Der Server sucht die passende Datei – findet er sie nicht, legt er eine neue, leere Welt an.

> [!NOTE]
> Der Konfigurationsordner heißt auch auf Deinem Linux-Server `WindowsServer`. Das ist so gewollt – No One Survived stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/no-one-survived/create-backup) Deines bisherigen Spielstands, falls Du später zurückwechseln möchtest.

## Lokalen Spielstand finden

Deine Spielstände vom eigenen PC liegen in derselben Ordnerstruktur wie auf dem Server und lassen sich deshalb direkt übertragen.

1. **Savegame-Ordner öffnen**\
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %LOCALAPPDATA%\WRSH\Saved\SaveGames\WorldSaves
   ```

2. **Savegame-Namen ermitteln**\
   Dort liegen Deine Spielstände als `.sav`-Dateien. Die Dateinamen sind nach dem Muster `<Savegame-Name>_<Zusatz>.sav` aufgebaut. Für die Konfiguration brauchst Du nur den Teil **vor dem ersten Unterstrich**.

   Heißt Deine Datei zum Beispiel `MeineWelt_0.sav`, lautet der Savegame-Name:

   ```text
   MeineWelt
   ```

   > [!NOTE]
   > Gehören mehrere Dateien zu demselben Spielstand, erkennst Du das daran, dass sie alle mit demselben Savegame-Namen und einem Unterstrich beginnen. Übertrage in diesem Fall alle diese Dateien gemeinsam.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die Spielstandsdateien und würde Deine hochgeladenen Dateien überschreiben.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du die Dateien hochlädst.

4. **Dateien hochladen**\
   Lade Deine `.sav`-Dateien in dieses Verzeichnis hoch. Liegen dort bereits Dateien mit denselben Namen, lade den bisherigen Stand vorher herunter oder benenne Deine Dateien um.

5. **Savegame-Namen eintragen**\
   Öffne die **Verwaltung** Deines Servers und trage im Feld für den Savegame-Namen den Teil des Dateinamens **vor dem ersten Unterstrich** ein:

   ```text
   MeineWelt
   ```

   > [!NOTE]
   > **Alternativ in der Konfigurationsdatei**
   >
   > Findest Du in der Verwaltung kein passendes Feld, steht der Wert in folgender Datei:
   >
   > ```text
   > /WRSH/Saved/Config/WindowsServer/Game.ini
   > ```
   >
   > Im Abschnitt `[ServerSetting]` trägst Du ihn so ein:
   >
   > ```ini
   > [ServerSetting]
   > SaveName=MeineWelt
   > ```

6. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Dein hochgeladener Spielstand geladen.

> [!IMPORTANT]
> Der Savegame-Name muss exakt zum Dateinamen passen – nur der Teil vor dem ersten Unterstrich, ohne `.sav` und mit korrekter Groß- und Kleinschreibung. Stimmt er nicht überein, startet Dein Server mit einer **neuen, leeren Welt**. Dein hochgeladener Spielstand ist dann nicht verloren, wird aber nicht geladen: Korrigiere den Namen und starte den Server erneut.

> [!WARNING]
> **Keine Sonderzeichen**
>
> Verwende im Savegame-Namen keine Sonderzeichen. Erlaubt sind Buchstaben und Zahlen – Leerzeichen, Umlaute und Sonderzeichen können dazu führen, dass der Spielstand nicht gefunden wird.

> [!WARNING]
> Trägst Du den Savegame-Namen von Hand in die `Game.ini` ein, wird dieser Wert beim nächsten Serverstart wieder aus den Feldern der Verwaltung überschrieben. Nutze deshalb vorrangig die Verwaltung und prüfe nach einem Start, ob der gewünschte Wert noch gesetzt ist.

> [!NOTE]
> **Automatische Sicherungen des Servers**
>
> Neben `WorldSaves` legt der Server im Ordner `/WRSH/Saved/SaveGames/AutoSave/` eigene Zwischenstände ab. Möchtest Du einen davon verwenden, lade ihn herunter und spiele ihn nach derselben Anleitung wieder ein.

> [!WARNING]
> **Nach Updates prüfen**
>
> Ein Serverupdate oder eine Überprüfung der Spieldateien kann die Konfiguration auf Standardwerte zurücksetzen. Kontrolliere danach den Savegame-Namen, bevor Du den Server wieder freigibst – sonst wird eine leere Welt erzeugt.
