---
description: Savegame auf einem The Forest Server hinzufügen
---

# So fügst du ein Savegame zu deinem The Forest Server hinzu

The Forest kennt **keinen Weltnamen**, sondern fünf feste **Save-Slots** (`1` bis `5`). Ein Spielstand ist dabei immer ein kompletter Ordner mit dem Namen `Slot1` bis `Slot5` – keine einzelne Datei. Du lädst diesen Ordner mit allen enthaltenen Dateien auf deinen Server und stellst anschließend ein, welcher Slot geladen werden soll.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Lokalen Spielstand finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %userprofile%\AppData\LocalLow\SKS\TheForest
   ```

2. <b>Richtigen Unterordner wählen</b><br>
   Öffne den Ordner, dessen Name aus einer langen Zahlenfolge besteht – das ist deine SteamID64. Wechsle darin in den Ordner `Multiplayer`.

   :::: info Hinweis
   `Multiplayer` enthält die Welten, in denen du selbst Host warst, `SinglePlayer` deine Einzelspieler-Welten. Für einen Dedicated Server verwendest du einen Spielstand aus `Multiplayer`.
   ::::

3. <b>Slot-Ordner auswählen</b><br>
   Darin liegen die Ordner `Slot1` bis `Slot5`. Wähle den Ordner des Spielstands, den du übertragen möchtest – du benötigst den **kompletten Ordner** samt Inhalt.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /TheForestDedicatedServer_Data/Multiplayer/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Slot-Ordner hochladen</b><br>
   Lade den kompletten Ordner `Slot1` (bzw. `Slot2` bis `Slot5`) mit allen enthaltenen Dateien in dieses Verzeichnis hoch. Ist dort bereits ein Ordner mit demselben Namen vorhanden, lösche ihn vorher oder benenne deinen hochgeladenen Ordner auf eine freie Slot-Nummer um.

5. <b>Slot in der Konfiguration eintragen</b><br>
   Öffne folgende Datei:

   ```
   /TheForestDedicatedServer_Data/forest/config/config.cfg
   ```

   Trage dort die Nummer des Slots ein, den du hochgeladen hast:

   ```
   slot 1
   ```

6. <b>Init Type auf Continue stellen</b><br>
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und setze das Feld **Init Type** von `New` auf `Continue`.

7. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Wichtig
**Init Type** muss auf `Continue` stehen. Bleibt der Wert auf `New`, erzeugt der Server bei jedem Start eine frische Welt und dein Fortschritt wird nicht gespeichert – dein hochgeladener Spielstand wäre damit verloren.
::::

:::: warning Achtung
Einige Werte in der `config.cfg` werden beim Serverstart aus den Feldern der Verwaltung neu geschrieben – darunter `initType`, `serverName`, `serverPassword`, `serverPlayers`, `difficulty`, die Ports und `serverSteamAccount`. Ändere diese Werte deshalb ausschließlich in der Verwaltung. Der Wert `slot` ist davon nicht betroffen und bleibt in der Datei erhalten.
::::

:::: danger Steam Account Token nicht vergessen
Ohne gültiges Steam Game Server Login Token (GSLT) läuft dein Server anonym – dann kann es passieren, dass Spielerdaten und Spielstände nicht korrekt gespeichert werden. Erstelle dir unter [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) ein Token mit der **App ID 242760** und trage es in der Verwaltung unter **Einstellungen** im Feld **Steam Account Token** ein.
::::

:::: info Hinweis
Der Server speichert automatisch. Wie oft, steuert der Wert `serverAutoSaveInterval` in der `config.cfg` – die Angabe erfolgt in Minuten, kleinere Werte als `15` sind nicht möglich.
::::
