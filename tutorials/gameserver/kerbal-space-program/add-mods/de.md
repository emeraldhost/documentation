---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Kerbal Space Program Server hinzu"
description: "Mods auf einem Kerbal Space Program Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
cta: "gameserver"
product_keys: ["kerbal-space-program"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/kerbal-space-program/add-admin", "gameserver/kerbal-space-program/add-savegame", "gameserver/kerbal-space-program/create-backup", "gameserver/kerbal-space-program/download-savegame"]
---

Mods laufen bei Kerbal Space Program ausschließlich im Spiel selbst – der DarkMultiPlayer-Server lädt **keine KSP-Mods**. Seine Aufgabe ist eine andere: Er legt über die Datei `mod-control.txt` fest, welche Mods die Spieler verwenden dürfen, und kann optional ein fertiges Modpack an sie verteilen.

> [!IMPORTANT]
> Alle Spieler brauchen dieselben Mods lokal in ihrem Ordner `GameData`. Fehlt einem Spieler eine Mod aus der Liste des Servers oder hat er eine zusätzliche installiert, wird die Verbindung abgelehnt.

> [!WARNING]
> Erstelle vor Änderungen an der Mod-Liste ein [Backup](/tutorials/gameserver/kerbal-space-program/create-backup). Schiffe, die mit Bauteilen einer Mod gebaut wurden, funktionieren nicht mehr, sobald diese Mod entfernt wird.

## Mod-Liste erzeugen und hochladen

Die Mod-Liste erzeugst Du nicht von Hand, sondern im Spiel: Der DMP-Client liest Deinen `GameData`-Ordner aus und schreibt daraus die fertige Datei.

1. **KSP mit den gewünschten Mods einrichten**\
   Installiere auf Deinem PC alle Mods, die auf dem Server erlaubt sein sollen, und starte Kerbal Space Program.

2. **Mod Control öffnen**\
   Klicke im DMP-Fenster im Hauptmenü auf **Options** und wechsle auf den Reiter **Advanced**. Dort findest Du den Abschnitt **Mod Control**.

3. **Datei erzeugen**\
   Klicke im Abschnitt **Mod Control** auf **Whitelist** oder **Blacklist**. Die Datei wird direkt in Deinem KSP-Ordner abgelegt:

   ```text
   [KSP-Ordner]/mod-control.txt
   ```

4. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. Die Mod-Liste wird nur beim Serverstart eingelesen.

5. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

6. **Datei hochladen**\
   Lade die Datei in folgendes Verzeichnis hoch und ersetze die vorhandene Datei:

   ```text
   /Config/mod-control.txt
   ```

7. **Server starten**\
   Starte Deinen Server. Ab jetzt prüft er beim Beitritt jedes Spielers dessen `GameData`-Ordner gegen diese Liste.

> [!NOTE]
> **Whitelist oder Blacklist?**
>
> | Variante | Bedeutung |
> |----------|-----------|
> | **Whitelist** | Nur die Mods aus Deiner Installation sind erlaubt. Der übliche Weg für einen Server mit fester Mod-Liste. |
> | **Blacklist** | Spieler dürfen beliebige Mods verwenden. Nur ausdrücklich gesperrte Dateien und Ressourcen sind verboten. |

> [!NOTE]
> Fehlt die Datei, erzeugt Dein Server beim Start automatisch eine `mod-control.txt`, die nur die Original-Bauteile des Spiels enthält. Ist dabei noch eine alte Datei vorhanden, benennt er sie vorher in `mod-control.txt.bak` um. Beim Hochladen per SFTP passiert das nicht – dort überschreibst Du die Datei selbst, sichere sie also vorher.

## Aufbau der mod-control.txt

Die Datei besteht aus Abschnitten, die jeweils mit einem `!` beginnen. Zeilen mit `#` am Anfang sind Kommentare.

| Abschnitt | Bedeutung |
|-----------|-----------|
| `!required-files` | Dateien, die jeder Spieler zwingend installiert haben muss |
| `!optional-files` | Dateien, die installiert sein dürfen, aber nicht müssen |
| `!partslist` | Alle Bauteile, die auf dem Server verwendet werden dürfen |
| `!resource-whitelist` | Nur die aufgeführten Dateien sind erlaubt (Whitelist-Variante) |
| `!resource-blacklist` | Die aufgeführten Dateien sind verboten (Blacklist-Variante) |

Einträge werden als Pfad relativ zum Ordner `GameData` geschrieben, optional gefolgt von einem Prüfwert:

```text
DarkMultiPlayer/Plugins/DarkMultiPlayer.dll=6a1c9a...
```

> [!WARNING]
> `!resource-whitelist` und `!resource-blacklist` schließen sich gegenseitig aus. Es darf immer nur einer der beiden Abschnitte Einträge enthalten.

## Mod-Kontrolle einstellen

Wie streng Dein Server prüft, steuert der Wert `modControl` in der Datei `/Config/Settings.txt`. Stoppe Deinen Server, bevor Du die Datei bearbeitest.

| Wert | Bedeutung |
|------|-----------|
| `ENABLED_STOP_INVALID_PART_SYNC` | Standard. Schiffe mit unerlaubten Bauteilen werden nicht mit den anderen Spielern synchronisiert. |
| `ENABLED_STOP_INVALID_PART_LAUNCH` | Schiffe mit unerlaubten Bauteilen lassen sich gar nicht erst starten. |
| `DISABLED` | Keine Prüfung. Jeder Spieler kann beliebige Mods verwenden. |

> [!IMPORTANT]
> Schalte die Mod-Kontrolle nur ab, wenn Du weißt, was Du tust. Ohne Prüfung landen Schiffe mit Bauteilen im Universum, die andere Spieler nicht laden können.

## Modpack an die Spieler verteilen

Optional kann Dein Server den Spielern die passenden Mods bereitstellen, damit nicht jeder sie einzeln zusammensuchen muss.

1. **Modus wählen**\
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und setze das Feld **Mod Pack Mode**:

   | Wert | Bedeutung |
   |------|-----------|
   | `NONE` | Standard. Der Server verteilt keine Mods. |
   | `CKAN` | Der Server schickt den Spielern eine CKAN-Datei mit der Mod-Liste. |
   | `GAMEDATA` | Der Server schickt den Spielern die kompletten Mod-Dateien. |

2. **Modpack hochladen**\
   Lade die Mods per [SFTP](/tutorials/gameserver/establish-sftp-connection) in das passende Verzeichnis:

   ```text
   /Config/GameData/            (bei GAMEDATA)
   /Config/DarkMultiPlayer.ckan (bei CKAN)
   ```

   > [!TIP]
   > Alternativ lädt ein Admin sein komplettes `GameData` direkt aus dem Spiel hoch: Im DMP-Chat genügt der Befehl `/upload`. Ohne Adminrechte erscheint die Meldung *„You are not an admin, unable to upload“* – siehe [Admin hinzufügen](/tutorials/gameserver/kerbal-space-program/add-admin).

3. **Dateiliste aktualisieren**\
   Hast Du die Dateien per SFTP hochgeladen, führe anschließend in der **Konsole** Deiner Verwaltung folgenden Befehl aus:

   ```text
   /reloadmods
   ```

   > [!NOTE]
   > Bleibt der Befehl aus, melden die Spieler die Meldung *„DMP Server has an out of date hash list. Tell the admin to run /reloadmods“*.

4. **Spieler informieren**\
   Zum Installieren benötigen die Spieler das Zusatzprogramm **DMP Modpack Updater** von [d-mp.org/downloads](https://d-mp.org/downloads). Kerbal Space Program muss dabei geschlossen sein – der Ordner `GameData` lässt sich im laufenden Spiel nicht verändern.

> [!WARNING]
> Die Werte **Mod Pack Mode**, **Warp Mode**, **Game Mode**, **Game Difficulty** und **Server Name** werden bei jedem Serverstart aus der Verwaltung in die `Settings.txt` geschrieben. Ändere sie deshalb ausschließlich in der **Verwaltung** – eine Änderung direkt in der Datei wird beim nächsten Start überschrieben.

> [!NOTE]
> Die Modpack-Verteilung ersetzt die `mod-control.txt` nicht. Sie sorgt nur dafür, dass die Spieler an die Dateien kommen – geprüft wird weiterhin über die Mod-Liste.
