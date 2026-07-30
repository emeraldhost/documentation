---
description: Mods auf einem Avorion Server hinzufügen
---

# So fügst du Mods zu deinem Avorion Server hinzu

Avorion bringt ein eigenes Mod-System mit. Du musst die Mods nicht selbst hochladen — dein Server lädt sie beim Start eigenständig aus dem Steam Workshop herunter. Gesteuert wird das über eine einzige Datei: die `modconfig.lua` im Ordner deiner Galaxie.

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst oder entfernst. Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen. Erstelle vorher außerdem ein [Backup](backup-erstellen.md) deiner Galaxie.
::::

## Workshop-ID herausfinden

1. <b>Mod im Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für Avorion](https://steamcommunity.com/app/445220/workshop/) und suche die gewünschte Mod.

2. <b>ID aus der Adresse ablesen</b><br>
   Die Workshop-ID ist die Zahl am Ende der URL. Bei `https://steamcommunity.com/sharedfiles/filedetails/?id=1691539727` lautet die ID also `1691539727`.

## Mods eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>modconfig.lua öffnen</b><br>
   Wechsle in den Ordner deiner Galaxie – dort, wo auch `server.ini` und `admin.xml` liegen – und öffne die Datei:

   ```
   /galaxy/<Galaxie-Name>/modconfig.lua
   ```

   :::: info Hinweis
   Der Galaxie-Ordner heißt genauso wie der in der **Verwaltung** eingetragene Galaxie-Name (**Galaxy Name**). Existiert die Datei noch nicht, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn anschließend wieder.
   ::::

4. <b>Mods eintragen</b><br>
   Trage jede Mod mit ihrer Workshop-ID im Block `mods` ein:

   ```lua
   modLocation = ""
   forceEnabling = false
   mods =
   {
       {workshopid = "1691539727"},
       {workshopid = "1691591293"},
   }
   allowed =
   {
       {workshopid = "1691539727"},
   }
   ```

   Der Block `allowed` verwendet dieselbe Schreibweise wie `mods`. Brauchst du ihn nicht, lässt du ihn einfach leer.

5. <b>Speichern und starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start lädt er die eingetragenen Mods herunter und aktiviert sie – der erste Start kann dadurch etwas länger dauern.

## Die Blöcke im Überblick

| Block | Bedeutung |
|-------|-----------|
| `mods` | Die Mods, die dein Server lädt. Ein Eintrag pro Mod mit der jeweiligen Workshop-ID. |
| `allowed` | Optionale Liste clientseitiger Mods (überwiegend UI-Mods), die auf deinem Server erlaubt sind. Kann leer bleiben. |
| `forceEnabling` | Erzwingt das Aktivieren der Mods. Der Wert bleibt auf `false`. |
| `modLocation` | Alternativer Ort für den Mod-Ordner. Bleibt der Wert leer, nutzt dein Server den Standardordner `mods`. |

:::: warning forceEnabling auf false lassen
Die Entwickler von Avorion empfehlen ausdrücklich, `forceEnabling` deaktiviert zu lassen: Die Option richtet sich in erster Linie an Mod-Entwickler und kann zu beschädigten oder unbrauchbaren Spielständen führen.
::::

## Müssen Spieler etwas tun?

Beim Beitritt bekommen Spieler die Mod-Liste deines Servers angezeigt. Über die Schaltfläche **connect & download** lädt der Client die passenden Workshop-Mods automatisch herunter und installiert sie, bevor der Beitritt erfolgt.

:::: tip Tipp
Heruntergeladene Workshop-Mods legt dein Server innerhalb der Galaxie unter `workshop/content/445220/` ab. Daran kannst du prüfen, ob eine Mod tatsächlich geladen wurde.
::::

:::: danger Wichtig
Achte auf die Kommas und die geschweiften Klammern. Ist die `modconfig.lua` fehlerhaft, kann dein Server die Datei nicht einlesen und startet nicht sauber. Kommentiere Mods zum Testen lieber einzeln aus, statt mehrere auf einmal zu ändern.
::::
