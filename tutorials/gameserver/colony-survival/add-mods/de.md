---
slug: "mods-hinzufuegen"
language: "de"
title: "So fügst Du Mods zu Deinem Colony Survival Server hinzu"
description: "Mods auf einem Colony Survival Server hinzufügen"
tags: []
date: "2026-07-30"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["colony-survival"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Mods hinzufügen"
sort: 3
related: ["gameserver/colony-survival/add-admin", "gameserver/colony-survival/add-savegame", "gameserver/colony-survival/create-backup", "gameserver/colony-survival/download-savegame"]
---

Mods bestehen in Colony Survival immer aus einem eigenen Ordner mit einer Datei `modInfo.json` darin. Auf Deinem Server lädst Du diese Ordner per SFTP hoch und aktivierst die Mods anschließend für Deine Welt.

> [!WARNING]
> Stoppe Deinen Server, bevor Du Mods hinzufügst, änderst oder entfernst. Erstelle vorher außerdem ein [Backup](/tutorials/gameserver/colony-survival/create-backup) – nach einem Spielupdate können Mods inkompatibel werden und das Laden der Welt verhindern.

## Mod herunterladen

Dein Server hat keine Workshop-Anbindung, über die er Mods selbst herunterlädt. Du lädst die Mod-Dateien deshalb auf Deinem PC herunter und überträgst sie anschließend per SFTP.

1. **Mod im Workshop abonnieren**\
   Abonniere den gewünschten Mod im Steam-Workshop von Colony Survival und starte das Spiel einmal, damit Steam die Dateien herunterlädt.

2. **Mod-Ordner auf dem PC öffnen**\
   Die heruntergeladenen Mods liegen in Deinem Steam-Verzeichnis:

   ```text
   ...\Steam\steamapps\workshop\content\366090\
   ```

   Jeder Unterordner steht für einen Mod und ist nach dessen Workshop-ID benannt.

3. **Richtigen Ordner wählen**\
   Du benötigst den Ordner, in dem die Datei `modInfo.json` liegt. Liegt sie in einem Unterordner, ist dieser Unterordner der eigentliche Mod.

> [!NOTE]
> Wird ein Mod außerhalb des Workshops angeboten, lade ihn dort herunter und entpacke das Archiv. Auch dann gilt: Der Ordner mit der `modInfo.json` ist der Mod-Ordner.

## Mod auf den Server hochladen

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod-Verzeichnis öffnen**\
   Wechsle in folgendes Verzeichnis:

   ```text
   /gamedata/mods/
   ```

   > [!NOTE]
   > Im Auslieferungszustand liegt dort bereits das mitgelieferte Beispiel `ExampleTexturePack` – daran siehst Du, wie ein Mod-Ordner aufgebaut ist. Fehlt das Verzeichnis, lege es an.

4. **Mod hochladen**\
   Lade jeden Mod als eigenen Unterordner hoch. Die Struktur muss anschließend so aussehen:

   ```text
   /gamedata/mods/<ModName>/modInfo.json
   ```

   > [!WARNING]
   > Lade den Inhalt eines Mods niemals direkt nach `/gamedata/mods/` – die `modInfo.json` muss in einem eigenen Unterordner liegen, sonst wird der Mod nicht erkannt.

## Mod für Deine Welt aktivieren

Hochgeladene Mods sind noch nicht aktiv. Aktiviert werden sie pro Welt in der Datei `worldconfig.json`.

1. **Datei öffnen**\
   Öffne per SFTP folgende Datei. `<Weltname>` ist der Ordnername Deiner Welt – er entspricht dem Feld **World Name** in der Verwaltung:

   ```text
   /gamedata/savegames/<Weltname>/worldconfig.json
   ```

2. **Mod eintragen**\
   Ergänze den Abschnitt `ModConfigEntries` um einen Eintrag pro Mod. Das Beispiel zeigt, wie zwei Mods in der Liste stehen – die Einträge werden mit einem Komma getrennt:

   ```json
   {
     "DisplayName": "Meine Welt",
     "WorldType": 2,
     "ModConfigEntries": [
       {
         "ModName": "ExampleTexturePack",
         "ModVersionLastKnown": "---",
         "Enabled": true
       },
       {
         "ModName": "WeitererModName",
         "ModVersionLastKnown": "---",
         "Enabled": true
       }
     ]
   }
   ```

   Nutzt Du nur einen Mod, entfällt der zweite Eintrag samt Komma.

   > [!NOTE]
   > Ändere nur den Abschnitt `ModConfigEntries` und lass die übrigen Werte der Datei unverändert. Der Wert von `ModName` muss exakt dem Feld `name` aus der `modInfo.json` des Mods entsprechen. `"ModVersionLastKnown": "---"` trägt der Server selbst ein, wenn er einen Mod zum ersten Mal sieht – schreibst Du den Eintrag von Hand, übernimmst Du diesen Wert. Bei Workshop-Mods kommt zusätzlich das Feld `WorkshopID` dazu – lösche es nicht.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server Deine Mods nicht lädt.

3. **Server starten**\
   Speichere die Datei und starte Deinen Server. Beim Start lädt er die aktivierten Mods.

4. **Ergebnis prüfen**\
   Schau in der Konsole der Verwaltung nach, ob die Mods geladen wurden. Fehlermeldungen beim Laden weisen fast immer auf einen falschen Ordneraufbau oder einen inkompatiblen Mod hin.

> [!WARNING]
> Die in älteren Anleitungen genannte Datei `modstate.json` gibt es nicht mehr. Mods werden ausschließlich über die `worldconfig.json` der jeweiligen Welt aktiviert.

## Müssen die Spieler die Mods installieren?

> [!NOTE]
> Nein – bei Mods, die Inhalte wie Blöcke, Texturen oder Rezepte hinzufügen, überträgt der Server seine Dateien beim Verbinden automatisch an den Client. Deine Mitspieler sehen beim Beitreten kurz, wie die Serverdateien geladen werden. Im Serverbrowser wird Dein Server anschließend als „modded“ markiert.

> [!TIP]
> Mod deaktivieren, ohne ihn zu löschen: Setze in der `worldconfig.json` den Wert `"Enabled"` des entsprechenden Eintrags auf `false` und starte Deinen Server neu.
