---
description: Savegame auf einem Necesse Server hinzufügen
---

# So fügst du ein Savegame zu deinem Necesse Server hinzu

Eine Necesse-Welt ist **eine einzige `.zip`-Datei**, die nach dem Weltnamen benannt ist – zum Beispiel `Meine_Welt.zip`. Du lädst diese Datei auf deinen Server hoch und trägst den Namen anschließend in der Verwaltung ein.

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deiner bisherigen Server-Welt, falls du später zurückwechseln möchtest.
::::

## Lokale Welt finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %appdata%\Necesse\saves\worlds
   ```

2. <b>Welt-Datei auswählen</b><br>
   In diesem Ordner liegt jede Welt als eigene `.zip`-Datei. Wähle die Datei der Welt aus, die du übertragen möchtest.

   :::: info Hinweis
   Entpacke die Datei **nicht**. Necesse erwartet die Welt als gepacktes Archiv.
   ::::

## Welt hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er selbst in die Welt-Datei.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /saves/worlds/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, starte den Server einmal, damit die Ordnerstruktur angelegt wird. Stoppe ihn anschließend wieder, bevor du die Datei hochlädst. Liegen die vorhandenen Welten deines Servers direkt in `/saves/`, nutze diesen bereits vorhandenen Ordner statt `/saves/worlds/`.
   ::::

4. <b>Welt-Datei hochladen</b><br>
   Lade deine `.zip`-Datei in dieses Verzeichnis hoch. Ist dort bereits eine Datei mit demselben Namen vorhanden, benenne deine hochgeladene Datei um oder lade die vorhandene vorher herunter.

5. <b>Weltnamen in der Verwaltung eintragen</b><br>
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Save Name** den Namen deiner Welt-Datei ein – **ohne** die Endung `.zip` (z.B. `Meine_Welt` für `Meine_Welt.zip`).

6. <b>Server starten</b><br>
   Speichere die Einstellungen und starte deinen Server. Beim Start wird jetzt deine hochgeladene Welt geladen.

:::: danger Groß- und Kleinschreibung beachten
Dein Server läuft unter Linux und unterscheidet zwischen Groß- und Kleinschreibung. `Meine_Welt` und `meine_welt` sind zwei verschiedene Welten. Stimmt der eingetragene Name nicht exakt mit dem Dateinamen überein, legt der Server stattdessen eine **neue, leere Welt** unter diesem Namen an.
::::

:::: warning Achtung
Der Weltname wird beim Start als Startparameter übergeben. Trage ihn deshalb ausschließlich in der Verwaltung ein – ein abweichender Eintrag in der `/cfg/server.cfg` bleibt wirkungslos.
::::

:::: info Welt-Einstellungen anpassen
Die Einstellungen einer Welt (Datei `worldSettings.cfg`) liegen **innerhalb** der `.zip`-Datei. Möchtest du sie ändern, lade die Datei herunter, entpacke sie, bearbeite `worldSettings.cfg` und packe den Inhalt anschließend wieder in ein `.zip`-Archiv mit demselben Namen und derselben Struktur.
::::

:::: tip Tipp
Welchen Namen dein Server aktuell lädt, siehst du in der Verwaltung im Feld **Save Name**. Benennst du deine hochgeladene Datei genau so, musst du dort nichts umstellen – achte dann aber darauf, die bisherige Welt-Datei vorher zu sichern.
::::
