---
description: Savegame auf einem Avorion Server hinzufügen
---

# So fügst du ein Savegame zu deinem Avorion Server hinzu

Ein Spielstand ist in Avorion immer eine komplette **Galaxie** – also ein ganzer Ordner, keine einzelne Datei. Der Name dieses Ordners ist gleichzeitig der Galaxie-Name, den dein Server beim Start lädt. Beides muss zusammenpassen, sonst startet dein Server mit einer neuen, leeren Galaxie.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deiner bisherigen Galaxie, falls du später zurückwechseln möchtest.
::::

## Was gehört zur Galaxie?

Im Galaxie-Ordner liegen neben den eigentlichen Spielstandsdaten auch die serverseitigen Einstellungen:

| Datei | Inhalt |
|-------|--------|
| `server.ini` | Servereinstellungen der Galaxie |
| `admin.xml` | Liste der Administratoren |
| `modconfig.lua` | Konfiguration der Mods |

Lade den Ordner deshalb immer **vollständig** hoch – einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

## Lokale Galaxie finden

1. <b>Galaxie-Ordner öffnen</b><br>
   Drücke auf deinem PC `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %AppData%\Avorion\galaxies
   ```

   Unter Linux liegen die Galaxien im Ordner `~/.avorion/galaxies`.

2. <b>Galaxie auswählen</b><br>
   Darin liegt für jede Galaxie ein eigener Ordner. Wähle den Ordner der Galaxie, die du übertragen möchtest – du benötigst den **kompletten Ordner** samt Inhalt.

## Galaxie hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Datenverzeichnis öffnen</b><br>
   Wechsle in das Verzeichnis, in dem dein Server seine Galaxien ablegt:

   ```
   /galaxy/
   ```

   Du erkennst es daran, dass darin bereits ein Ordner mit dem Namen deiner aktuellen Galaxie liegt – mit den Dateien `server.ini`, `admin.xml` und `modconfig.lua` darin.

   :::: info Hinweis
   Welches Verzeichnis dein Server verwendet, gibt der Startparameter `--datapath` vor; der Galaxie-Ordner liegt darin unter seinem Namen (`<Datenverzeichnis>/<Galaxie-Name>`). Existiert noch gar kein Galaxie-Ordner, starte den Server einmal – die Ordnerstruktur und die `server.ini` werden erst beim ersten Start angelegt. Stoppe ihn anschließend wieder.
   ::::

4. <b>Galaxie-Ordner hochladen</b><br>
   Lade den kompletten Ordner deiner Galaxie mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

   :::: warning Achtung
   Verwende einen Ordnernamen ohne Leerzeichen und Sonderzeichen und halte ihn kurz. Ersetze Leerzeichen am besten durch Unterstriche, zum Beispiel `Meine_Galaxie` – Leerzeichen im Ordnernamen führen sonst zu Problemen beim Start.
   ::::

5. <b>Galaxie-Namen eintragen</b><br>
   Öffne die **Verwaltung**, wechsle zu den **Einstellungen** und trage im Feld für den Galaxie-Namen (**Galaxy Name**) exakt den Ordnernamen deiner hochgeladenen Galaxie ein – inklusive Groß- und Kleinschreibung.

6. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt deine hochgeladene Galaxie geladen.

:::: danger Wichtig
Ordnername und eingetragener Galaxie-Name müssen **exakt** übereinstimmen. Passen sie nicht zusammen, legt dein Server beim Start einfach eine neue, leere Galaxie unter dem eingetragenen Namen an – deine hochgeladene Galaxie bleibt dann unberührt liegen und wird nicht geladen.
::::

:::: warning Achtung
Nimm Änderungen an den Servereinstellungen nur bei gestopptem Server vor. Werte, die dein Server beim Start als Startparameter mitbekommt – etwa der Galaxie-Name –, werden beim Start in die `server.ini` geschrieben und überschreiben dort abweichende Einträge.
::::

:::: tip Tipp
Möchtest du deine Galaxie zuerst sichern oder auf einen anderen Server umziehen, findest du den Weg in die andere Richtung unter [Savegame herunterladen](savegame-herunterladen.md).
::::
