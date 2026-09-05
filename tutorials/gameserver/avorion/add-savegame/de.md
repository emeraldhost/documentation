---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Avorion Server hinzu"
description: "Savegame auf einem Avorion Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["avorion"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 5
related: ["gameserver/avorion/add-admin", "gameserver/avorion/add-mods", "gameserver/avorion/create-backup", "gameserver/avorion/download-savegame"]
---

Ein Spielstand ist in Avorion immer eine komplette **Galaxie** – also ein ganzer Ordner, keine einzelne Datei. Der Name dieses Ordners ist gleichzeitig der Galaxie-Name, den Dein Server beim Start lädt. Beides muss zusammenpassen, sonst startet Dein Server mit einer neuen, leeren Galaxie.

> [!TIP]
> Erstelle vor dem Hochladen ein [Backup](/tutorials/gameserver/avorion/create-backup) Deiner bisherigen Galaxie, falls Du später zurückwechseln möchtest.

## Was gehört zur Galaxie?

Im Galaxie-Ordner liegen neben den eigentlichen Spielstandsdaten auch die serverseitigen Einstellungen:

| Datei | Inhalt |
|-------|--------|
| `server.ini` | Servereinstellungen der Galaxie |
| `admin.xml` | Liste der Administratoren |
| `modconfig.lua` | Konfiguration der Mods |

Lade den Ordner deshalb immer **vollständig** hoch – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

## Lokale Galaxie finden

1. **Galaxie-Ordner öffnen**\
   Drücke auf Deinem PC `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %AppData%\Avorion\galaxies
   ```

   Unter Linux liegen die Galaxien im Ordner `~/.avorion/galaxies`.

2. **Galaxie auswählen**\
   Darin liegt für jede Galaxie ein eigener Ordner. Wähle den Ordner der Galaxie, die Du übertragen möchtest – Du benötigst den **kompletten Ordner** samt Inhalt.

## Galaxie hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Datenverzeichnis öffnen**\
   Wechsle in das Verzeichnis, in dem Dein Server seine Galaxien ablegt:

   ```text
   /galaxy/
   ```

   Du erkennst es daran, dass darin bereits ein Ordner mit dem Namen Deiner aktuellen Galaxie liegt – mit den Dateien `server.ini`, `admin.xml` und `modconfig.lua` darin.

   > [!NOTE]
   > Welches Verzeichnis Dein Server verwendet, gibt der Startparameter `--datapath` vor; der Galaxie-Ordner liegt darin unter seinem Namen (`<Datenverzeichnis>/<Galaxie-Name>`). Existiert noch gar kein Galaxie-Ordner, starte den Server einmal – die Ordnerstruktur und die `server.ini` werden erst beim ersten Start angelegt. Stoppe ihn anschließend wieder.

4. **Galaxie-Ordner hochladen**\
   Lade den kompletten Ordner Deiner Galaxie mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

   > [!WARNING]
   > Verwende einen Ordnernamen ohne Leerzeichen und Sonderzeichen und halte ihn kurz. Ersetze Leerzeichen am besten durch Unterstriche, zum Beispiel `Meine_Galaxie` – Leerzeichen im Ordnernamen führen sonst zu Problemen beim Start.

5. **Galaxie-Namen eintragen**\
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und trage im Feld für den Galaxie-Namen (**Galaxy Name**) exakt den Ordnernamen Deiner hochgeladenen Galaxie ein – inklusive Groß- und Kleinschreibung.

6. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Galaxie geladen.

> [!IMPORTANT]
> Ordnername und eingetragener Galaxie-Name müssen **exakt** übereinstimmen. Passen sie nicht zusammen, legt Dein Server beim Start einfach eine neue, leere Galaxie unter dem eingetragenen Namen an – Deine hochgeladene Galaxie bleibt dann unberührt liegen und wird nicht geladen.

> [!WARNING]
> Nimm Änderungen an den Servereinstellungen nur bei gestopptem Server vor. Werte, die Dein Server beim Start als Startparameter mitbekommt – etwa der Galaxie-Name –, werden beim Start in die `server.ini` geschrieben und überschreiben dort abweichende Einträge.

> [!TIP]
> Möchtest Du Deine Galaxie zuerst sichern oder auf einen anderen Server umziehen, findest Du den Weg in die andere Richtung unter [Savegame herunterladen](/tutorials/gameserver/avorion/download-savegame).
