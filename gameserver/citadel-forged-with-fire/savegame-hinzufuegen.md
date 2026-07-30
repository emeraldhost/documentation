---
description: Savegame auf einem Citadel Forged with Fire Server hinzufügen
---

# So fügst du ein Savegame zu deinem Citadel Forged with Fire Server hinzu

Ein Spielstand ist in Citadel Forged with Fire **kein einzelner Speicherstand, sondern ein kompletter Ordner**. Darin liegen die Weltdaten sowie die Daten aller Spieler – die Charakterdaten sind dabei nach der **SteamID64** des jeweiligen Spielers benannt.

:::: info Hinweis
Du musst **keinen Welt- oder Spielstandnamen** in einer Konfigurationsdatei eintragen. Dein Server lädt immer den Spielstand, der im Savegame-Ordner liegt – der Servername hat damit nichts zu tun.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Spielstands, falls du später zurückwechseln möchtest.
::::

## Lokalen Spielstand finden

Möchtest du einen Spielstand von deinem PC übertragen, findest du ihn im Installationsordner des Spiels – **nicht** im `AppData`-Verzeichnis:

1. <b>Steam-Bibliothek öffnen</b><br>
   Öffne Steam und wechsle in deine **Bibliothek**.

2. <b>Lokale Dateien öffnen</b><br>
   Klicke mit der rechten Maustaste auf **Citadel Forged with Fire**, wähle **Verwalten** und anschließend **Lokale Dateien durchsuchen**.

3. <b>Savegame-Ordner öffnen</b><br>
   Wechsle im geöffneten Fenster in folgendes Verzeichnis:

   ```
   Citadel\Saved\SaveGames
   ```

4. <b>Kompletten Inhalt kopieren</b><br>
   Du benötigst den **gesamten Inhalt** dieses Ordners. Einzelne Dateien daraus ergeben keinen nutzbaren Spielstand.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, speichert er automatisch weiter und würde deine hochgeladenen Dateien wieder überschreiben.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Citadel/Saved/SaveGames/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte deinen Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Alten Spielstand entfernen</b><br>
   Lösche den vorhandenen Inhalt des Ordners.

   :::: warning Achtung
   Damit ist der bisherige Spielstand deines Servers weg. Lade ihn vorher herunter oder erstelle ein [Backup](backup-erstellen.md), falls du zurückwechseln möchtest.
   ::::

5. <b>Neuen Spielstand hochladen</b><br>
   Lade den kompletten Inhalt deines Savegame-Ordners in dieses Verzeichnis hoch. Achte darauf, die Ordnerstruktur unverändert zu übernehmen.

6. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

## Spielstand auf deinem PC einspielen

Möchtest du umgekehrt einen Spielstand auf deinem PC nutzen, gehst du genauso vor:

1. <b>Spiel schließen</b><br>
   Beende Citadel Forged with Fire vollständig.

2. <b>Dateien austauschen</b><br>
   Kopiere den Inhalt des Spielstands in den Ordner `Citadel\Saved\SaveGames` in deinem Spielinstallationsordner.

3. <b>Spiel starten</b><br>
   Starte das Spiel neu – der Spielstand steht dir nun zur Verfügung.

:::: danger Wichtig
Die Charakterdaten sind nach der SteamID64 des jeweiligen Spielers benannt. Übernimmst du einen Spielstand von einem anderen Server oder von einem anderen PC, sind die Charaktere weiterhin an dieselben Steam-Konten gebunden. Ein Spieler mit einer anderen SteamID64 startet auf diesem Spielstand mit einem neuen Charakter.
::::

:::: warning Achtung
Übertrage immer den **kompletten Ordnerinhalt**. Welt- und Spielerdaten gehören zusammen – fehlen einzelne Dateien, kann der Spielstand unvollständig oder gar nicht geladen werden.
::::

:::: tip Tipp
Wie du den Spielstand deines Servers sicherst, erfährst du unter [Savegame herunterladen](savegame-herunterladen.md).
::::
