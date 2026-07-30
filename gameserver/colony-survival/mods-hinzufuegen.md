---
description: Mods auf einem Colony Survival Server hinzufügen
---

# So fügst du Mods zu deinem Colony Survival Server hinzu

Mods bestehen in Colony Survival immer aus einem eigenen Ordner mit einer Datei `modInfo.json` darin. Auf deinem Server lädst du diese Ordner per SFTP hoch und aktivierst die Mods anschließend für deine Welt.

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst, änderst oder entfernst. Erstelle vorher außerdem ein [Backup](backup-erstellen.md) – nach einem Spielupdate können Mods inkompatibel werden und das Laden der Welt verhindern.
::::

## Mod herunterladen

Dein Server hat keine Workshop-Anbindung, über die er Mods selbst herunterlädt. Du lädst die Mod-Dateien deshalb auf deinem PC herunter und überträgst sie anschließend per SFTP.

1. <b>Mod im Workshop abonnieren</b><br>
   Abonniere den gewünschten Mod im Steam-Workshop von Colony Survival und starte das Spiel einmal, damit Steam die Dateien herunterlädt.

2. <b>Mod-Ordner auf dem PC öffnen</b><br>
   Die heruntergeladenen Mods liegen in deinem Steam-Verzeichnis:

   ```
   ...\Steam\steamapps\workshop\content\366090\
   ```

   Jeder Unterordner steht für einen Mod und ist nach dessen Workshop-ID benannt.

3. <b>Richtigen Ordner wählen</b><br>
   Du benötigst den Ordner, in dem die Datei `modInfo.json` liegt. Liegt sie in einem Unterordner, ist dieser Unterordner der eigentliche Mod.

:::: info Hinweis
Wird ein Mod außerhalb des Workshops angeboten, lade ihn dort herunter und entpacke das Archiv. Auch dann gilt: Der Ordner mit der `modInfo.json` ist der Mod-Ordner.
::::

## Mod auf den Server hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod-Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /gamedata/mods/
   ```

   :::: info Hinweis
   Im Auslieferungszustand liegt dort bereits das mitgelieferte Beispiel `ExampleTexturePack` – daran siehst du, wie ein Mod-Ordner aufgebaut ist. Fehlt das Verzeichnis, lege es an.
   ::::

4. <b>Mod hochladen</b><br>
   Lade jeden Mod als eigenen Unterordner hoch. Die Struktur muss anschließend so aussehen:

   ```
   /gamedata/mods/<ModName>/modInfo.json
   ```

   :::: warning Achtung
   Lade den Inhalt eines Mods niemals direkt nach `/gamedata/mods/` – die `modInfo.json` muss in einem eigenen Unterordner liegen, sonst wird der Mod nicht erkannt.
   ::::

## Mod für deine Welt aktivieren

Hochgeladene Mods sind noch nicht aktiv. Aktiviert werden sie pro Welt in der Datei `worldconfig.json`.

1. <b>Datei öffnen</b><br>
   Öffne per SFTP folgende Datei. `<Weltname>` ist der Ordnername deiner Welt – er entspricht dem Feld **World Name** in der Verwaltung:

   ```
   /gamedata/savegames/<Weltname>/worldconfig.json
   ```

2. <b>Mod eintragen</b><br>
   Ergänze den Abschnitt `ModConfigEntries` um einen Eintrag pro Mod:

   ```json
   {
     "DisplayName": "Meine Welt",
     "WorldType": 2,
     "ModConfigEntries": [
       {
         "ModName": "ExampleTexturePack",
         "ModVersionLastKnown": "---",
         "Enabled": true
       }
     ]
   }
   ```

   :::: info Hinweis
   Ändere nur den Abschnitt `ModConfigEntries` und lass die übrigen Werte der Datei unverändert. Der Wert von `ModName` muss exakt dem Feld `name` aus der `modInfo.json` des Mods entsprechen. `"ModVersionLastKnown": "---"` trägt der Server selbst ein, wenn er einen Mod zum ersten Mal sieht – schreibst du den Eintrag von Hand, übernimmst du diesen Wert. Bei Workshop-Mods kommt zusätzlich das Feld `WorkshopID` dazu – lösche es nicht.
   ::::

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start lädt er die aktivierten Mods.

4. <b>Ergebnis prüfen</b><br>
   Schau in der Konsole der Verwaltung nach, ob die Mods geladen wurden. Fehlermeldungen beim Laden weisen fast immer auf einen falschen Ordneraufbau oder einen inkompatiblen Mod hin.

:::: warning Achtung
Die in älteren Anleitungen genannte Datei `modstate.json` gibt es nicht mehr. Mods werden ausschließlich über die `worldconfig.json` der jeweiligen Welt aktiviert.
::::

## Müssen die Spieler die Mods installieren?

:::: info Hinweis
Nein – bei Mods, die Inhalte wie Blöcke, Texturen oder Rezepte hinzufügen, überträgt der Server seine Dateien beim Verbinden automatisch an den Client. Deine Mitspieler sehen beim Beitreten kurz, wie die Serverdateien geladen werden. Im Serverbrowser wird dein Server anschließend als "modded" markiert.
::::

:::: tip Tipp
Mod deaktivieren, ohne ihn zu löschen: Setze in der `worldconfig.json` den Wert `"Enabled"` des entsprechenden Eintrags auf `false` und starte deinen Server neu.
::::
