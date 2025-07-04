---
description: Schritt-für-Schritt-Anleitung, wie du Steam Workshop- und externe Mods auf einem Euro Truck Simulator 2-Server installierst und aktivierst.
---

# Mods (Steam Workshop und externe) auf Deinem Euro Truck Simulator 2-Server installieren und aktivieren

## Steam Workshop-Mods Hinzufügen

1. <strong>Starte Euro Truck Simulator 2.</strong>

2. <strong>Wähle im Hauptmenü den Punkt „Mods“ aus.</strong>

3. <strong>Klicke oben rechts auf „Steam Workshop“.</strong>

4. <strong>Durchsuche den Workshop und klicke auf „Abonnieren“, um die gewünschten Mods herunterzuladen.</strong>

5. <strong>Gehe zurück zum Mod-Manager im Spiel.</strong>

6. <strong>Aktiviere die heruntergeladenen Mods und klicke auf „Änderungen bestätigen“.</strong>

7. <strong>Starte eine Fahrt und öffne die Konsole mit der Taste `~` oder ``` ` ```.</strong>

8. <strong>Gib den folgenden Befehl in der Konsole ein:</strong>

    ```
    export_server_packages
    ```

9. <strong>Warte, bis der Vorgang abgeschlossen ist, und beende das Spiel.</strong>

10. <strong>Verbinde Dich per SFTP mit deinem Server. Hier findest Du eine Anleitung, wie das geht: [Anleitung](../sftp-verbindung-herstellen.md).</strong>

11. <strong>Navigiere zu folgendem Verzeichnis:</strong>

    ```
    .local/share/Euro Truck Simulator 2
    ```

12. <strong>Lade die erstellten Dateien ```server_packages.sii``` und ```server_packages.dat``` hoch, die Du unter folgendem Pfad findest:</strong>

    ```
    Dokumente/Euro Truck Simulator 2
    ```

13. <strong>Starte den Server neu und trete dem Server bei.</strong>

## Externe Mods hinzufügen

1. <strong>Lade die gewünschten Mods von Plattformen wie Modhub oder anderen Quellen herunter.</strong>

2. <strong>Kopiere die Mods in Dein lokales Mod-Verzeichnis, das Du unter folgendem Pfad findest:</strong>

    ```
    Dokumente/Euro Truck Simulator 2/mod
    ```

3. <strong>Starte Euro Truck Simulator 2.</strong>

4. <strong>Wähle im Hauptmenü den Punkt „Mods“ aus.</strong>

5. <strong>Aktiviere die zuvor hinzugefügten Mods und klicke auf „Änderungen bestätigen“.</strong>

6. <strong>Starte eine Fahrt und öffne die Konsole mit der Taste `~` oder ``` ` ```.</strong>

7. <strong>Gib den folgenden Befehl in der Konsole ein:</strong>

    ```
    export_server_packages
    ```

8. <strong>Warte, bis der Vorgang abgeschlossen ist, und beende das Spiel.</strong>

9. <strong>Verbinde Dich per SFTP mit deinem Server. Hier findest Du eine Anleitung, wie das geht: [Anleitung](../sftp-verbindung-herstellen.md).</strong>

10. <strong>Navigiere zu folgendem Verzeichnis:</strong>

    ```
    .local/share/Euro Truck Simulator 2
    ```

11. <strong>Lade die erstellten Dateien ```server_packages.sii``` und ```server_packages.dat``` hoch, die Du unter folgendem Pfad findest:</strong>

    ```
    Dokumente/Euro Truck Simulator 2
    ```

12. <strong>Starte den Server neu und trete dem Server bei.</strong>
