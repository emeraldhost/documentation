---
description: Savegame auf einem Craftopia Server hinzufügen
---

# So fügst du ein Savegame zu deinem Craftopia Server hinzu

Die Welten deines Craftopia Servers liegen im Ordner `DedicatedServerSave` im Hauptverzeichnis deines Servers – also dort, wo auch die `ServerSetting.ini` liegt. Die eigentlichen Weltdateien liegen darin im Unterordner `Worlds`.

:::: danger Wichtig
Zusätzlich zum Hochladen musst du den **Weltnamen** in der `ServerSetting.ini` eintragen. Stimmt der Name nicht mit der hochgeladenen Welt überein, legt der Server beim Start einfach eine neue, leere Welt an.
::::

## Wo liegen die Daten?

| Pfad auf dem Server | Inhalt |
|---------------------|--------|
| `/DedicatedServerSave/Worlds/` | Die Weltdateien deines Servers |
| `/ServerSetting.ini` | Servereinstellungen, unter anderem der Weltname |

:::: info Hinweis
Wo der Spielstand abgelegt wird, steuert der Wert `savePath` im Abschnitt `[Save]` der `ServerSetting.ini`. Standardmäßig steht dort `DedicatedServerSave/`. Hast du den Wert geändert, gilt der von dir eingetragene Ordner.
::::

## Lokalen Spielstand finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke auf deinem PC `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %userprofile%\AppData\LocalLow\PocketPair\Craftopia\PPSave
   ```

2. <b>Ordner Worlds öffnen</b><br>
   Öffne den Unterordner `Worlds`. Darin liegt für jede Welt eine Datenbankdatei.

   :::: info Hinweis
   `PPSave` ist das Speicherformat seit dem Seamless-Update. Der daneben liegende Ordner `Save` enthält alte Spielstände aus der Zeit davor – diese lassen sich nicht auf einen aktuellen Server übertragen.
   ::::

3. <b>Weltnamen notieren</b><br>
   Merke dir den Namen der Welt, die du übertragen möchtest – genau so, wie er im Spiel angezeigt wird. Du brauchst ihn gleich für die `ServerSetting.ini`.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst laufend in die Spielstandsdateien.

2. <b>Backup erstellen</b><br>
   Sichere deinen bisherigen Stand, falls du zurückwechseln möchtest: [Backup erstellen](backup-erstellen.md).

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /DedicatedServerSave/Worlds/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du Dateien hochlädst.
   ::::

5. <b>Weltdatei hochladen</b><br>
   Lade die Datei deiner Welt aus dem lokalen Ordner `PPSave\Worlds` in `/DedicatedServerSave/Worlds/` hoch.

   :::: info Hinweis
   Im Ordner `Worlds` können mehrere Welten nebeneinander liegen. Geladen wird die Welt, deren Name in der `ServerSetting.ini` eingetragen ist.
   ::::

6. <b>Weltnamen eintragen</b><br>
   Öffne die Datei `/ServerSetting.ini` und trage im Abschnitt `[GameWorld]` beim Wert `name` den Namen deiner Welt ein:

   ```ini
   [GameWorld]
   name=MeineWelt
   ```

7. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

:::: danger Weltname muss exakt passen
Groß- und Kleinschreibung sowie Leerzeichen müssen exakt übereinstimmen. Findet der Server unter dem eingetragenen Namen keine Welt, erzeugt er stillschweigend eine neue – deine hochgeladene Welt bleibt dann zwar auf der Platte, wird aber nicht geladen.
::::

:::: warning Änderungen immer in der ServerSetting.ini
Trage deine Änderungen ausschließlich in der `ServerSetting.ini` ein. Eine daneben liegende `DefaultServerSetting.ini` ist nur die mitgelieferte Vorlage und wird vom Server nicht als deine Konfiguration verwendet.
::::

:::: warning Übertragung aus dem Einzelspieler
Für den Umzug einer Einzelspieler-Welt auf einen Dedicated Server gibt es **kein offizielles Verfahren des Entwicklers**. Der beschriebene Weg stammt aus Hoster- und Community-Anleitungen und kann je nach Spielversion abweichen. Arbeite deshalb ausschließlich mit Kopien deiner Spielstände und lege vorher ein Backup an.
::::

:::: tip Tipp
Am zuverlässigsten funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen – zum Beispiel beim Umzug auf einen anderen Server. Lade dafür den kompletten Ordner `DedicatedServerSave` herunter und wieder hoch: [Savegame herunterladen](savegame-herunterladen.md).
::::
