---
description: Schritt-für-Schritt-Anleitung, wie du Steam Workshop- und externe Mods auf einem Euro Truck Simulator 2-Server installierst und aktivierst.
---

# Mods (Steam Workshop und externe) auf Deinem Euro Truck Simulator 2-Server installieren und aktivieren

## Steam Workshop-Mods Hinzufügen

1. <b>Spiel starten</b><br>
   Starte Euro Truck Simulator 2.

2. <b>Mods öffnen</b><br>
   Wähle im Hauptmenü den Punkt „Mods" aus.

3. <b>Workshop öffnen</b><br>
   Klicke oben rechts auf „Steam Workshop".

4. <b>Mods abonnieren</b><br>
   Durchsuche den Workshop und klicke auf „Abonnieren", um die gewünschten Mods herunterzuladen.

5. <b>Mod-Manager öffnen</b><br>
   Gehe zurück zum Mod-Manager im Spiel.

6. <b>Mods aktivieren</b><br>
   Aktiviere die heruntergeladenen Mods und klicke auf „Änderungen bestätigen".

7. <b>Konsole öffnen</b><br>
   Starte eine Fahrt und öffne die Konsole mit der Taste `~` oder ``` ` ```.

8. <b>Befehl eingeben</b><br>
   Gib den folgenden Befehl in der Konsole ein:

   ```
   export_server_packages
   ```

9. <b>Spiel beenden</b><br>
   Warte, bis der Vorgang abgeschlossen ist, und beende das Spiel.

10. <b>SFTP verbinden</b><br>
    Verbinde Dich per SFTP mit deinem Server. Hier findest Du eine Anleitung, wie das geht: [Anleitung](../sftp-verbindung-herstellen.md).

11. <b>Verzeichnis öffnen</b><br>
    Navigiere zu folgendem Verzeichnis:

    ```
    .local/share/Euro Truck Simulator 2
    ```

12. <b>Dateien hochladen</b><br>
    Lade die erstellten Dateien `server_packages.sii` und `server_packages.dat` hoch, die Du unter folgendem Pfad findest:

    ```
    Dokumente/Euro Truck Simulator 2
    ```

13. <b>Server neustarten</b><br>
    Starte den Server neu und trete dem Server bei.

## Externe Mods hinzufügen

1. <b>Mods herunterladen</b><br>
   Lade die gewünschten Mods von Plattformen wie Modhub oder anderen Quellen herunter.

2. <b>Mods kopieren</b><br>
   Kopiere die Mods in Dein lokales Mod-Verzeichnis, das Du unter folgendem Pfad findest:

   ```
   Dokumente/Euro Truck Simulator 2/mod
   ```

3. <b>Spiel starten</b><br>
   Starte Euro Truck Simulator 2.

4. <b>Mods öffnen</b><br>
   Wähle im Hauptmenü den Punkt „Mods" aus.

5. <b>Mods aktivieren</b><br>
   Aktiviere die zuvor hinzugefügten Mods und klicke auf „Änderungen bestätigen".

6. <b>Konsole öffnen</b><br>
   Starte eine Fahrt und öffne die Konsole mit der Taste `~` oder ``` ` ```.

7. <b>Befehl eingeben</b><br>
   Gib den folgenden Befehl in der Konsole ein:

   ```
   export_server_packages
   ```

8. <b>Spiel beenden</b><br>
   Warte, bis der Vorgang abgeschlossen ist, und beende das Spiel.

9. <b>SFTP verbinden</b><br>
   Verbinde Dich per SFTP mit deinem Server. Hier findest Du eine Anleitung, wie das geht: [Anleitung](../sftp-verbindung-herstellen.md).

10. <b>Verzeichnis öffnen</b><br>
    Navigiere zu folgendem Verzeichnis:

    ```
    .local/share/Euro Truck Simulator 2
    ```

11. <b>Dateien hochladen</b><br>
    Lade die erstellten Dateien `server_packages.sii` und `server_packages.dat` hoch, die Du unter folgendem Pfad findest:

    ```
    Dokumente/Euro Truck Simulator 2
    ```

12. <b>Server neustarten</b><br>
    Starte den Server neu und trete dem Server bei.
