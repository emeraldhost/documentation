---
description: Savegame auf einem Smalland Survive the Wilds Server hinzufügen
---

# So fügst du ein Savegame zu deinem Smalland Survive the Wilds Server hinzu

Der komplette Spielstand einer Welt steckt in einer einzigen Datei mit der Endung `.wld`. Der Dateiname entspricht dabei exakt dem **Weltnamen**, den du in der Verwaltung deines Servers einträgst: Heißt deine Welt `MeineWelt`, lädt der Server die Datei `MeineWelt.wld`.

:::: info Hinweis
Charaktere liegen **nicht** auf dem Server. Sie werden lokal auf dem PC des jeweiligen Spielers gespeichert und sind an dessen Account gebunden. Auf dem Server liegen nur die Weltdaten wie Gelände, Bauwerke und gezähmte Kreaturen.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Spielstands, falls du später zurückwechseln möchtest.
::::

## Lokalen Spielstand finden

Möchtest du eine Welt von deinem PC auf den Server übertragen, findest du sie hier:

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %LOCALAPPDATA%\SMALLAND\Saved\SaveGames\Worlds\
   ```

2. <b>Welt auswählen</b><br>
   In diesem Ordner liegt für jede Welt eine Datei `<Weltname>.wld`. Wähle die Datei der Welt aus, die du übertragen möchtest.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Weltdatei und würde deinen Upload wieder überschreiben.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /SMALLAND/Saved/SaveGames/Worlds/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Datei hochlädst.
   ::::

4. <b>Weltdatei hochladen</b><br>
   Lade deine `.wld`-Datei in dieses Verzeichnis hoch. Liegt dort bereits eine Datei mit demselben Namen, lösche sie vorher oder benenne deine hochgeladene Datei um.

5. <b>Weltnamen in der Verwaltung eintragen</b><br>
   Öffne die **Verwaltung** deines Servers und trage im Feld für den Weltnamen (**World Name**) den Dateinamen **ohne die Endung** `.wld` ein.

   :::: tip Beispiel
   | Datei im Ordner `Worlds` | Eintrag beim Weltnamen |
   |--------------------------|------------------------|
   | `MeineWelt.wld` | `MeineWelt` |
   | `World.wld` | `World` |
   ::::

6. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Wichtig
Der Weltname muss exakt zum Dateinamen passen – auch bei Groß- und Kleinschreibung. Stimmt er nicht überein, legt der Server einfach eine **neue, leere Welt** unter dem eingetragenen Namen an. Deine hochgeladene Datei bleibt dabei zwar erhalten, wird aber nicht geladen.
::::

:::: warning Keine Leerzeichen im Weltnamen
Der Weltname darf **keine Leerzeichen** enthalten. Enthält deine hochgeladene Datei welche, benenne sie vorher um – zum Beispiel `Meine Welt.wld` in `MeineWelt.wld` – und trage anschließend den neuen Namen in der Verwaltung ein.
::::

## Neue Welt anlegen

Möchtest du frisch anfangen, ohne deinen bisherigen Spielstand zu löschen:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Neuen Weltnamen eintragen</b><br>
   Trage in der Verwaltung einen bisher unbenutzten Weltnamen ein.

3. <b>Server starten</b><br>
   Beim nächsten Start legt der Server eine neue Welt mit diesem Namen an. Deine alte `.wld`-Datei bleibt im Ordner `Worlds` liegen – du kannst jederzeit zurückwechseln, indem du den alten Weltnamen wieder einträgst.

## Welt zurücksetzen

:::: warning Achtung
Möchtest du eine Welt komplett zurücksetzen, stoppe den Server, lösche die zugehörige `.wld`-Datei im Ordner `Worlds` und starte den Server wieder. Der Server erzeugt die Welt dann neu. Dieser Schritt lässt sich nicht rückgängig machen – sichere die Datei vorher, falls du sie noch brauchst.
::::
