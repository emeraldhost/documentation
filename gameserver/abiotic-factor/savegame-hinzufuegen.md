---
description: Savegame auf einem Abiotic Factor Server hinzufügen
---

# So fügst du ein Savegame zu deinem Abiotic Factor Server hinzu

Ein Spielstand ist in Abiotic Factor immer ein **kompletter Weltordner**, keine einzelne Datei. Du lädst diesen Ordner mit allen enthaltenen Dateien auf deinen Server und sorgst anschließend dafür, dass der Server ihn auch lädt.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

:::: info Warum sehen die Pfade wie Windows-Pfade aus?
Abiotic Factor stellt nur ein Windows-Serverprogramm bereit, das auf deinem Linux-Server über eine Kompatibilitätsschicht läuft. Deshalb heißen die Ordner auf dem Server genauso wie unter Windows – zum Beispiel `Saved/Config/WindowsServer`. Das ist so gewollt.
::::

## Lokalen Spielstand finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %LocalAppData%\AbioticFactor\Saved\SaveGames
   ```

2. <b>Richtigen Unterordner wählen</b><br>
   Öffne den Ordner, dessen Name aus einer langen Zahlenfolge besteht – das ist deine [SteamID64](../steamid64-herausfinden.md). Wechsle darin in den Ordner `Worlds`.

3. <b>Weltordner auswählen</b><br>
   Darin liegt für jede Welt ein eigener Ordner. Wähle den Ordner der Welt, die du übertragen möchtest – du benötigst den **kompletten Ordner** samt Inhalt.

:::: danger Konsolen-Spielstände lassen sich nicht übertragen
Spielstände von PlayStation 5, Xbox und aus der Windows-Gamepass-Version lassen sich **nicht** auf einen Dedicated Server übertragen. Der beschriebene Weg funktioniert nur mit Spielständen der PC-Version aus Steam.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /AbioticFactor/Saved/SaveGames/Server/Worlds/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Vorhandenen Weltordner merken</b><br>
   Schau nach, wie der Weltordner heißt, den dein Server aktuell verwendet. Standardmäßig heißt er `Cascade`.

5. <b>Weltordner hochladen</b><br>
   Lade deinen kompletten Weltordner mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

6. <b>Ordnernamen angleichen</b><br>
   Benenne den hochgeladenen Ordner exakt so, wie der Weltordner deines Servers heißt (standardmäßig `Cascade`). Den bisherigen Ordner benennst du vorher um oder löschst ihn, damit es keine Namenskollision gibt.

   :::: tip Alternative über den Weltnamen
   Statt den Ordner umzubenennen, kannst du dem Server auch sagen, welchen Ordner er laden soll. Dafür gibt es den Startparameter `-WorldSaveName=<Ordnername>`. Bietet deine Verwaltung ein Feld für den Weltnamen an, trägst du dort einfach den Namen deines hochgeladenen Ordners ein.
   ::::

7. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: warning Achtung
Der Ordnername und der eingestellte Weltname müssen exakt übereinstimmen – inklusive Groß- und Kleinschreibung. Passt beides nicht zusammen, legt der Server beim Start eine **neue, leere Welt** an, statt deinen Spielstand zu laden.
::::

:::: info Gameplay-Einstellungen
Die Schwierigkeits- und Sandbox-Einstellungen stehen in der Datei `SandboxSettings.ini`. Auf einem Dedicated Server liegt sie im Weltordner selbst:

```
/AbioticFactor/Saved/SaveGames/Server/Worlds/Cascade/SandboxSettings.ini
```

Lädst du den kompletten Weltordner hoch, wird sie also automatisch mit übertragen. Über den Startparameter `-SandboxIniPath=` lässt sich der Ort der Datei verlegen – findest du sie nicht im Weltordner, schau zusätzlich direkt unter `/AbioticFactor/Saved/` nach.
::::
