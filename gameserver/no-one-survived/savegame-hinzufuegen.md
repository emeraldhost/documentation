---
description: Savegame auf einem No One Survived Server hinzufügen
---

# So fügst du ein Savegame zu deinem No One Survived Server hinzu

Die Spielstände eines No One Survived Servers liegen als Dateien mit der Endung `.sav` in einem festen Verzeichnis. Welcher Spielstand geladen wird, entscheidet der **Savegame-Name** in der Verwaltung: Der Server sucht die passende Datei – findet er sie nicht, legt er eine neue, leere Welt an.

:::: info Hinweis
Der Konfigurationsordner heißt auch auf deinem Linux-Server `WindowsServer`. Das ist so gewollt – No One Survived stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Spielstands, falls du später zurückwechseln möchtest.
::::

## Lokalen Spielstand finden

Deine Spielstände vom eigenen PC liegen in derselben Ordnerstruktur wie auf dem Server und lassen sich deshalb direkt übertragen.

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %LOCALAPPDATA%\WRSH\Saved\SaveGames\WorldSaves
   ```

2. <b>Savegame-Namen ermitteln</b><br>
   Dort liegen deine Spielstände als `.sav`-Dateien. Die Dateinamen sind nach dem Muster `<Savegame-Name>_<Zusatz>.sav` aufgebaut. Für die Konfiguration brauchst du nur den Teil **vor dem ersten Unterstrich**.

   Heißt deine Datei zum Beispiel `MeineWelt_0.sav`, lautet der Savegame-Name:

   ```
   MeineWelt
   ```

   :::: info Hinweis
   Gehören mehrere Dateien zu demselben Spielstand, erkennst du das daran, dass sie alle mit demselben Savegame-Namen und einem Unterstrich beginnen. Übertrage in diesem Fall alle diese Dateien gemeinsam.
   ::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in die Spielstandsdateien und würde deine hochgeladenen Dateien überschreiben.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /WRSH/Saved/SaveGames/WorldSaves/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Dateien hochladen</b><br>
   Lade deine `.sav`-Dateien in dieses Verzeichnis hoch. Liegen dort bereits Dateien mit denselben Namen, lade den bisherigen Stand vorher herunter oder benenne deine Dateien um.

5. <b>Savegame-Namen eintragen</b><br>
   Öffne die **Verwaltung** deines Servers und trage im Feld für den Savegame-Namen den Teil des Dateinamens **vor dem ersten Unterstrich** ein:

   ```
   MeineWelt
   ```

   :::: info Alternativ in der Konfigurationsdatei
   Findest du in der Verwaltung kein passendes Feld, steht der Wert in folgender Datei:

   ```
   /WRSH/Saved/Config/WindowsServer/Game.ini
   ```

   Im Abschnitt `[ServerSetting]` trägst du ihn so ein:

   ```ini
   [ServerSetting]
   SaveName=MeineWelt
   ```
   ::::

6. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Wichtig
Der Savegame-Name muss exakt zum Dateinamen passen – nur der Teil vor dem ersten Unterstrich, ohne `.sav` und mit korrekter Groß- und Kleinschreibung. Stimmt er nicht überein, startet dein Server mit einer **neuen, leeren Welt**. Dein hochgeladener Spielstand ist dann nicht verloren, wird aber nicht geladen: Korrigiere den Namen und starte den Server erneut.
::::

:::: warning Keine Sonderzeichen
Verwende im Savegame-Namen keine Sonderzeichen. Erlaubt sind Buchstaben und Zahlen – Leerzeichen, Umlaute und Sonderzeichen können dazu führen, dass der Spielstand nicht gefunden wird.
::::

:::: warning Achtung
Trägst du den Savegame-Namen von Hand in die `Game.ini` ein, wird dieser Wert beim nächsten Serverstart wieder aus den Feldern der Verwaltung überschrieben. Nutze deshalb vorrangig die Verwaltung und prüfe nach einem Start, ob der gewünschte Wert noch gesetzt ist.
::::

:::: info Automatische Sicherungen des Servers
Neben `WorldSaves` legt der Server im Ordner `/WRSH/Saved/SaveGames/AutoSave/` eigene Zwischenstände ab. Möchtest du einen davon verwenden, lade ihn herunter und spiele ihn nach derselben Anleitung wieder ein.
::::

:::: warning Nach Updates prüfen
Ein Serverupdate oder eine Überprüfung der Spieldateien kann die Konfiguration auf Standardwerte zurücksetzen. Kontrolliere danach den Savegame-Namen, bevor du den Server wieder freigibst – sonst wird eine leere Welt erzeugt.
::::
