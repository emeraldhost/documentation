---
description: Savegame auf einem Echoes of Elysium Server hinzufügen
---

# So fügst du ein Savegame zu deinem Echoes of Elysium Server hinzu

Der komplette Spielstand eines Echoes of Elysium Servers liegt in einem einzigen Verzeichnis namens `world`. Dort speichert der Server deine Welt mit allem, was ihr darin aufgebaut habt.

:::: info Hinweis
Es gibt **keinen Weltnamen**, den du irgendwo eintragen müsstest. Welche Welt geladen wird, ergibt sich ausschließlich aus dem Inhalt des Verzeichnisses `world`. Ein Weltwechsel bedeutet also immer: den Inhalt dieses Verzeichnisses austauschen.
::::

:::: tip Woher bekommst du einen Spielstand?
Diese Anleitung ist für Welten gedacht, die von einem Echoes of Elysium Server stammen — zum Beispiel beim Umzug auf einen anderen Server oder beim Zurückspielen einer eigenen Sicherung. Wie du den Spielstand von einem Server herunterlädst, liest du unter [Savegame herunterladen](savegame-herunterladen.md).
::::

## Savegame hochladen

1. <b>Backup erstellen</b><br>
   Sichere den aktuellen Stand deines Servers, bevor du etwas überschreibst: [Backup erstellen](backup-erstellen.md).

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Weltdateien und würde deine hochgeladenen Dateien überschreiben.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /world/
   ```

   :::: info Hinweis
   Das Verzeichnis `world` liegt im Hauptverzeichnis deines Servers, der vollständige Pfad lautet also `/home/container/world/`. Existiert es noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird, und stoppe ihn danach wieder.
   ::::

5. <b>Alte Weltdaten entfernen</b><br>
   Lösche den vorhandenen Inhalt des Verzeichnisses `world`. Bleiben alte Dateien liegen, können sie mit deinem hochgeladenen Stand vermischt werden.

   :::: warning Achtung
   Damit ist die bisherige Welt deines Servers weg. Hast du Schritt 1 übersprungen, hole das Backup jetzt nach.
   ::::

6. <b>Neue Weltdaten hochladen</b><br>
   Lade den **Inhalt** deines Spielstands in das Verzeichnis `/world/` hoch — also die Dateien und Unterordner selbst, nicht noch einmal einen Ordner `world` darin.

7. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Verzeichnis nicht umbenennen
Behalte den Namen `world` bei. Bei jedem Start werden die Werte aus den Feldern der **Verwaltung** in die Serverkonfiguration `config.json` geschrieben — darunter auch das Weltverzeichnis. Trägst du dort von Hand einen anderen Ordner ein, geht diese Änderung beim nächsten Start wieder verloren.
::::

:::: tip Welten parallel aufbewahren
Möchtest du zwischen mehreren Welten wechseln, lade die jeweils andere Welt vorher auf deinen PC herunter. Zusätzliche Ordner neben `world` auf dem Server werden vom Spiel nicht geladen.
::::
