---
description: Savegame auf einem Voyagers of Nera Server hinzufügen
---

# So fügst du ein Savegame zu deinem Voyagers of Nera Server hinzu

Voyagers of Nera kennt **keinen Weltnamen in der Konfiguration**. Welche Welt geladen wird, entscheidet allein der Ordner, der unter `PersistedData` liegt. Ein Spielstand ist dabei immer ein kompletter Ordner, der nach der Server-ID benannt ist – keine einzelne Datei.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Lokalen Spielstand finden

Diesen Abschnitt brauchst du nur, wenn du einen Spielstand von deinem eigenen PC übertragen möchtest. Kommt der Spielstand von einem anderen Server, hast du den Ordner bereits über [Savegame herunterladen](savegame-herunterladen.md) gesichert.

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %localappdata%\BoatGame\Saved\PersistedData\nera
   ```

2. <b>Richtigen Ordner wählen</b><br>
   Darin liegt pro Welt ein Ordner, der nach der Server-ID benannt ist. Wähle den Ordner des Spielstands, den du übertragen möchtest – du benötigst den **kompletten Ordner** samt Inhalt.

   :::: tip Welche ID gehört zu welcher Welt?
   Die Server-ID wird dir im Spiel im Auswahlbildschirm der Speicherstände rechts neben dem jeweiligen Eintrag angezeigt. So erkennst du, welcher Ordner zu welcher Welt gehört.
   ::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /BoatGame/Saved/PersistedData/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Bisherigen Spielstand entfernen</b><br>
   Lösche den vorhandenen Ordner mit der zufälligen Zeichenfolge im Namen. Das ist die Welt, die dein Server beim ersten Start selbst erzeugt hat.

   :::: danger Wichtig
   Lösche dabei **nicht** den Ordner `CustomConfig`. Darin liegen deine Servereinstellungen – ohne ihn setzt dein Server die Spieleinstellungen auf die Standardwerte zurück.
   ::::

5. <b>Spielstand hochladen</b><br>
   Lade deinen kompletten Spielstand-Ordner mit allen enthaltenen Dateien in dieses Verzeichnis hoch.

   :::: warning Achtung
   Achte darauf, dass der Ordner nicht verschachtelt landet. Richtig ist `/BoatGame/Saved/PersistedData/<Server-ID>/`, falsch wäre `/BoatGame/Saved/PersistedData/<Server-ID>/<Server-ID>/`. Entpacke Archive vorher auf deinem PC und lade den Spielstand-Ordner selbst hoch – nicht das Archiv und keinen zusätzlichen übergeordneten Ordner.
   ::::

6. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: warning Nur ein Spielstand-Ordner
Unter `PersistedData` sollte neben `CustomConfig` genau ein Spielstand-Ordner liegen. Bleiben mehrere Welten liegen, ist nicht eindeutig, welche dein Server lädt.
::::

:::: info Hinweis
Der Server speichert automatisch. In welchem Abstand das passiert, stellst du in der **Verwaltung** über den Autosave-Wert ein – die Angabe erfolgt in Sekunden.
::::
