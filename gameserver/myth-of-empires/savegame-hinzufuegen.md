---
description: Savegame auf einem Myth of Empires Server hinzufügen
---

# So fügst du ein Savegame zu deinem Myth of Empires Server hinzu

Myth of Empires kennt **keinen Weltnamen**. Ein Spielstand ist immer der komplette Ordner `Saved` – keine einzelne Datei. Du lädst diesen Ordner mit allem Inhalt an die Stelle, an der dein Server seinen Spielstand erwartet.

:::: info Woher kommt der Spielstand?
Diese Anleitung beschreibt die Übertragung von Server zu Server – also einen Spielstand, den du zuvor von einem Myth of Empires Server heruntergeladen hast. Für Spielstände aus dem Einzelspieler-Modus gibt es keinen dokumentierten Weg auf einen Dedicated Server.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Spielstandsdateien.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /MOE/
   ```

   :::: info Hinweis
   Existiert der Ordner `Saved` noch nicht, starte den Server einmal, damit die Struktur angelegt wird, und stoppe ihn anschließend wieder.
   ::::

4. <b>Alten Spielstand entfernen</b><br>
   Benenne den vorhandenen Ordner `Saved` um (zum Beispiel in `Saved_alt`) oder lösche ihn.

   :::: warning Achtung
   Damit ist der bisherige Spielstand deines Servers nicht mehr aktiv. Sichere ihn vorher über [Savegame herunterladen](savegame-herunterladen.md) oder ein [Backup](backup-erstellen.md).
   ::::

5. <b>Saved hochladen</b><br>
   Lade deinen Ordner `Saved` mit allen Unterordnern und Dateien in dieses Verzeichnis hoch. Der Ordner muss exakt `Saved` heißen.

6. <b>Server-ID prüfen</b><br>
   Vergleiche die **Server-ID** deines Servers mit der des Servers, von dem der Spielstand stammt. Beide müssen übereinstimmen, sonst findet dein Server den hochgeladenen Spielstand nicht.

7. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird jetzt dein hochgeladener Spielstand geladen.

:::: danger Server-ID nicht ändern
Der Spielstand wird unter der **Server-ID** abgelegt – es gibt keinen Weltnamen, den du in einer Konfiguration eintragen könntest. Änderst du die Server-ID, sucht dein Server unter einer anderen ID und legt eine komplett neue, leere Welt an. Der alte Spielstand bleibt dabei auf der Festplatte liegen, wird aber nicht mehr geladen.
::::

:::: warning Achtung
Lade immer den kompletten Ordner `Saved` hoch. Er enthält neben der Welt auch die Spieler- und Baudaten sowie deine Servereinstellungen. Mischst du Dateien aus verschiedenen Spielständen, passen Welt und Spielerdaten nicht mehr zusammen.
::::

:::: info Hinweis
Im Ordner `Saved` liegen unter `Config/WindowsServer/` auch deine Servereinstellungen. Lädst du den Ordner komplett hoch, überschreibst du damit die bisherigen Einstellungen deines Servers. Der Ordner heißt auch auf deinem Linux-Server `WindowsServer` – Myth of Empires stellt nur ein Windows-Serverprogramm bereit, das über eine Kompatibilitätsschicht läuft.
::::

:::: tip Server zurücksetzen
Möchtest du stattdessen komplett neu anfangen, stoppe den Server, lösche den Ordner `Saved` und starte den Server erneut. Beim nächsten Start wird eine frische Welt erzeugt.
::::
