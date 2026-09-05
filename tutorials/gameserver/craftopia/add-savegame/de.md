---
slug: "savegame-hinzufuegen"
language: "de"
title: "So fügst Du ein Savegame zu Deinem Craftopia Server hinzu"
description: "Savegame auf einem Craftopia Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["craftopia"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Savegame hinzufügen"
sort: 3
related: ["gameserver/craftopia/create-backup", "gameserver/craftopia/download-savegame", "gameserver/craftopia/join-server", "gameserver/craftopia/kick-ban-players"]
---

Die Welten Deines Craftopia Servers liegen im Ordner `DedicatedServerSave` im Hauptverzeichnis Deines Servers – also dort, wo auch die `ServerSetting.ini` liegt. Die eigentlichen Weltdateien liegen darin im Unterordner `Worlds`.

> [!IMPORTANT]
> Zusätzlich zum Hochladen musst Du den **Weltnamen** in der `ServerSetting.ini` eintragen. Stimmt der Name nicht mit der hochgeladenen Welt überein, legt der Server beim Start einfach eine neue, leere Welt an.

## Wo liegen die Daten?

| Pfad auf dem Server | Inhalt |
|---------------------|--------|
| `/DedicatedServerSave/Worlds/` | Die Weltdateien Deines Servers |
| `/ServerSetting.ini` | Servereinstellungen, unter anderem der Weltname |

> [!NOTE]
> Wo der Spielstand abgelegt wird, steuert der Wert `savePath` im Abschnitt `[Save]` der `ServerSetting.ini`. Standardmäßig steht dort `DedicatedServerSave/`. Hast Du den Wert geändert, gilt der von Dir eingetragene Ordner.

## Lokalen Spielstand finden

1. **Savegame-Ordner öffnen**\
   Drücke auf Deinem PC `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```text
   %userprofile%\AppData\LocalLow\PocketPair\Craftopia\PPSave
   ```

2. **Ordner Worlds öffnen**\
   Öffne den Unterordner `Worlds`. Darin liegt für jede Welt eine Datenbankdatei.

   > [!NOTE]
   > `PPSave` ist das Speicherformat seit dem Seamless-Update. Der daneben liegende Ordner `Save` enthält alte Spielstände aus der Zeit davor – diese lassen sich nicht auf einen aktuellen Server übertragen.

3. **Weltnamen notieren**\
   Merke Dir den Namen der Welt, die Du übertragen möchtest – genau so, wie er im Spiel angezeigt wird. Du brauchst ihn gleich für die `ServerSetting.ini`.

## Savegame hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst laufend in die Spielstandsdateien.

2. **Backup erstellen**\
   Sichere Deinen bisherigen Stand, falls Du zurückwechseln möchtest: [Backup erstellen](/tutorials/gameserver/craftopia/create-backup).

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /DedicatedServerSave/Worlds/
   ```

   > [!NOTE]
   > Existiert der Ordner noch nicht, starte Deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor Du Dateien hochlädst.

5. **Weltdatei hochladen**\
   Lade die Datei Deiner Welt aus dem lokalen Ordner `PPSave\Worlds` in `/DedicatedServerSave/Worlds/` hoch.

   > [!NOTE]
   > Im Ordner `Worlds` können mehrere Welten nebeneinander liegen. Geladen wird die Welt, deren Name in der `ServerSetting.ini` eingetragen ist.

6. **Weltnamen eintragen**\
   Öffne die Datei `/ServerSetting.ini` und trage im Abschnitt `[GameWorld]` beim Wert `name` den Namen Deiner Welt ein:

   ```ini
   [GameWorld]
   name=MeineWelt
   ```

7. **Server starten**\
   Speichere alle Änderungen und starte Deinen Server. Beim Start wird jetzt Deine hochgeladene Welt geladen.

> [!CAUTION]
> **Weltname muss exakt passen**
>
> Groß- und Kleinschreibung sowie Leerzeichen müssen exakt übereinstimmen. Findet der Server unter dem eingetragenen Namen keine Welt, erzeugt er stillschweigend eine neue – Deine hochgeladene Welt bleibt dann zwar auf der Platte, wird aber nicht geladen.

> [!WARNING]
> **Änderungen immer in der ServerSetting.ini**
>
> Trage Deine Änderungen ausschließlich in der `ServerSetting.ini` ein. Eine daneben liegende `DefaultServerSetting.ini` ist nur die mitgelieferte Vorlage und wird vom Server nicht als Deine Konfiguration verwendet.

> [!WARNING]
> **Übertragung aus dem Einzelspieler**
>
> Für den Umzug einer Einzelspieler-Welt auf einen Dedicated Server gibt es **kein offizielles Verfahren des Entwicklers**. Der beschriebene Weg stammt aus Hoster- und Community-Anleitungen und kann je nach Spielversion abweichen. Arbeite deshalb ausschließlich mit Kopien Deiner Spielstände und lege vorher ein Backup an.

> [!TIP]
> Am zuverlässigsten funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen – zum Beispiel beim Umzug auf einen anderen Server. Lade dafür den kompletten Ordner `DedicatedServerSave` herunter und wieder hoch: [Savegame herunterladen](/tutorials/gameserver/craftopia/download-savegame).
