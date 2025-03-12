---
description: Erweiterung der C:-Festplatte unter Windows Server
---

# Erweiterung der C:-Festplatte unter Windows Server

Bei der Bereitstellung eines Windows Servers kann es vorkommen, dass der gesamte verfügbare Speicherplatz nicht automatisch der `C:`-Partition zugewiesen wird. Diese Anleitung beschreibt, wie Du den nicht zugewiesenen Speicherplatz mit einem bereitgestellten Skript automatisch Deiner `C:`-Festplatte hinzufügen kannst.

## Voraussetzungen
* Ein **Windows Server**, auf dem das Skript ausgeführt wird.
* **Administratorrechte** auf dem Server.

## Schritte

1. <b>Skript herunterladen</b>
    * Lade das folgende Skript **direkt** auf Deinen Windows Server herunter:
      ```
      [remove_recovery_and_extend.bat](https://cdn.emeraldhost.de/products/rootserver/windows-patch/extend-disk/remove_recovery_and_extend.bat)
      ```

2. <b>Skript als Administrator ausführen</b>
   1. Navigiere zum Speicherort der heruntergeladenen Datei.
   2. Klicke mit der rechten Maustaste auf die Datei `remove_recovery_and_extend.bat`.
   3. Wähle **Als Administrator ausführen**.

3. <b>Automatische Erweiterung der `C:`-Festplatte</b>
    * Nach der Ausführung des Skripts wird der ungenutzte Speicherplatz automatisch der `C:`-Partition hinzugefügt. Dies geschieht ohne manuelles Eingreifen.

1. <b>Fehlerbehebung</b>
    * Sollte das Skript nicht korrekt ausgeführt werden oder die Partitionserweiterung fehlschlagen:
        - Stelle sicher, dass Du über **Administratorrechte** verfügst.
        - Starte den Server nach der Skriptausführung neu und überprüfe den Speicherplatz erneut.
        - Falls weiterhin Probleme auftreten, kontaktiere gerne unseren [Support](https://emeraldhost.de/support).

### Das war's! Mit diesen Schritten solltest Du in der Lage sein, die `C:`-Festplatte Deines Windows Servers automatisch zu erweitern.