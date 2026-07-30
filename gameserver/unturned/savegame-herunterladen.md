---
description: Savegame von einem Unturned Server herunterladen
---

# So lädst du das Savegame deines Unturned Servers herunter

Bei Unturned liegen Spielstand und Konfiguration gemeinsam in einem Ordner unter `/Servers/`. Du kannst diesen Ordner jederzeit auf deinen PC herunterladen – zum Beispiel als zusätzliche Sicherung oder um ihn auf einen anderen Server zu übertragen.

:::: danger Erst speichern
Unturned speichert **nicht automatisch**. Lädst du die Dateien herunter, ohne vorher zu speichern, fehlt dir der Fortschritt seit dem letzten Speichervorgang.
::::

1. <b>Spielstand speichern</b><br>
   Öffne die **Konsole** in der Verwaltung und gib folgenden Befehl ein:

   ```
   save
   ```

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Servers/
   ```

   :::: info Welcher Ordner ist meiner?
   Der Ordnername entspricht der ServerID aus dem Startparameter deines Servers. In der Regel liegt dort genau ein Ordner – das ist deiner.
   ::::

5. <b>Ordner herunterladen</b><br>
   Lade den kompletten Ordner deines Servers mit allen Unterordnern auf deinen PC herunter.

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

## Was steckt in dem Ordner?

| Ordner / Datei | Inhalt |
|----------------|--------|
| `Level/<Kartenname>/` | Die Weltdaten: Bauten, Fahrzeuge und Objekte – je Karte ein eigener Ordner |
| `Players/` | Die Spielerstände, je Spieler ein eigener Unterordner |
| `Server/Commands.dat` | Deine Serverbefehle und -einstellungen (Karte, Passwort, Spielerzahl) |
| `Server/Adminlist.dat` · `Server/Blacklist.dat` | Admin- und Bannliste |
| `Config.txt` | Schwierigkeitsgrad und erweiterte Servereinstellungen |
| `WorkshopDownloadConfig.json` | Die Liste deiner Workshop-Mods und -Karten |

:::: tip Nur die Welt sichern
Möchtest du ausschließlich den Spielfortschritt sichern, genügen die Ordner `Level/` und `Players/`. Für einen vollständigen Umzug auf einen anderen Server lade lieber den kompletten Server-Ordner herunter.
::::

:::: warning Achtung
Lade Ordner immer vollständig herunter. Einzelne Dateien aus `Level/` oder `Players/` ergeben keinen nutzbaren Spielstand.
::::

:::: tip Spielstand wieder einspielen
Möchtest du den Spielstand später wieder auf einen Server übertragen, folge der Anleitung [Savegame hinzufügen](savegame-hinzufuegen.md).
::::

:::: info Regelmäßige Sicherungen
Für automatische bzw. regelmäßige Sicherungen kannst du auch die Backup-Funktion nutzen: [Backup erstellen](backup-erstellen.md).
::::
