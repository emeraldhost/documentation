---
description: Savegame auf einem Nightingale Server hinzufügen
---

# So fügst du ein Savegame zu deinem Nightingale Server hinzu

Nightingale kennt **keinen Welt- oder Spielstandnamen**. Der Server lädt immer das, was im Ordner `Offline` liegt. Darin stecken deine Realms und deine Charaktere:

| Verzeichnis | Inhalt |
|-------------|--------|
| `/NWX/Saved/Offline/DedicatedServer/Deploy/` | Die Realms, also alle Welten samt Bauten |
| `/NWX/Saved/Offline/<PlatformID>/Profiles/` | Die Charakterdaten eines Spielers. `<PlatformID>` ist die Steam- bzw. Epic-ID des Spielers. |

:::: tip Tipp
Erstelle vor dem Übertragen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Weg 1: Übertragung direkt aus dem Spiel

Das ist der offizielle und einfachste Weg. Beim allerersten Beitritt auf einen noch leeren Server lädt dein Client deinen Charakter **und alle zu ihm gehörenden Realms** automatisch hoch.

1. <b>Server vorbereiten</b><br>
   Der Server muss leer sein, also noch keinen Spielstand enthalten. Ist bereits ein Spielstand vorhanden, setze ihn vorher wie weiter unten beschrieben zurück.

2. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung und warte, bis er vollständig hochgefahren ist.

3. <b>Mit dem gewünschten Charakter beitreten</b><br>
   Verbinde dich als Erster mit genau dem Charakter, dessen Fortschritt du übertragen möchtest. Wie du deinem Server beitrittst, steht unter [Server beitreten](server-beitreten.md).

4. <b>Übertragung abwarten</b><br>
   Charakter und Realms werden beim Beitritt hochgeladen. Je nach Umfang deiner Welten kann das einen Moment dauern.

:::: danger Wichtig
Der erste Charakter, der sich verbindet, bestimmt damit den Inhalt des Servers. Möchtest du **nicht**, dass ein Spielstand hochgeladen wird, verbinde dich zuerst mit einem **neu erstellten Charakter**.
::::

## Weg 2: Spielstand per SFTP hochladen

Diesen Weg nutzt du für einen Spielstand, der bereits von einem Nightingale Server stammt – etwa aus einem [Backup](backup-erstellen.md) oder von einem anderen Server.

:::: warning Achtung
Für einen Spielstand von deinem eigenen PC nutzt du **Weg 1**. Ein Server legt seine Realms im Unterordner `DedicatedServer/Deploy` ab – ein lokaler Spielstand deines Clients ist anders aufgebaut und lässt sich nicht einfach in dieses Verzeichnis kopieren.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /NWX/Saved/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Dateien hochlädst.
   ::::

4. <b>Bisherigen Spielstand entfernen</b><br>
   Lösche den vorhandenen Ordner `Offline` auf dem Server, damit sich alter und neuer Spielstand nicht vermischen.

5. <b>Ordner hochladen</b><br>
   Lade den kompletten Ordner `Offline` mit allen Unterordnern in das Verzeichnis `/NWX/Saved/` hoch.

6. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: warning Achtung
Lade Realms und Charaktere immer gemeinsam hoch. Fehlt der Ordner `Profiles` des passenden Spielers, fehlt auch der Charakter, der zu den Welten gehört.
::::

## Spielstand zurücksetzen

Möchtest du auf deinem Server neu anfangen, löschst du den gespeicherten Zustand komplett:

1. <b>Backup erstellen</b><br>
   Erstelle vorher ein [Backup](backup-erstellen.md). Dieser Schritt lässt sich nicht rückgängig machen.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Ordner löschen</b><br>
   Lösche folgende beiden Ordner vollständig:

   ```
   /NWX/Saved/Offline/
   /NWX/Saved/Config/
   ```

5. <b>Server starten</b><br>
   Starte deinen Server. Er legt die Ordner beim Start neu an und ist wieder leer.

:::: warning Achtung
Mit `/NWX/Saved/Config/` löschst du auch den Serverzustand – darunter die Liste der gebannten Spieler. Nach dem Zurücksetzen sind alle Banns aufgehoben.
::::

## Schwierigkeit der ersten Welt

:::: info Hinweis
Die Startschwierigkeit setzt du in der **Verwaltung** über die Variable **Difficulty** (`easy`, `medium`, `hard` oder `extreme`). Sie wirkt nur auf die **allererste Welt**, die der Server selbst erzeugt – also nur dann, wenn kein Charakter mit eigenen Realms importiert wird. Bereits vorhandene Realms bleiben unverändert.
::::
