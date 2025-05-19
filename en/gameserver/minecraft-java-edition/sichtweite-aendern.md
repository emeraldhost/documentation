---
description: Sichweite auf Minecraft Server ändern
---

# Sichweite ändern

Die Sichtweite (auch "View Distance" genannt) in einem Minecraft-Server bezieht sich darauf, wie weit Du in der Spielwelt sehen kannst, bevor der Server beginnt, Blöcke und Objekte außerhalb deines Sichtfeldes nicht mehr zu rendern oder zu aktualisieren. Eine größere Sichtweite bedeutet, dass Du weiter sehen kannst, was die Welt realistischer erscheinen lässt, aber es kann auch die Serverleistung beeinflussen. Die Wahl der Sichtweite hängt von den Servereinstellungen und den verfügbaren Ressourcen ab.

## Voraussetzungen

* Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  * Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Um die Sichtweite anzupassen, folge diesen Schritten:

1. <b>Zugriff auf den Server</b>
    * Wenn Du über eine SFTP-Verbindung verfügst, kannst Du Dich mit Deinen SFTP-Zugangsdaten anmelden.
    * Wenn Du direkten Zugang zu den Server-Dateien hast, navigiere zu dem Verzeichnis, in dem sich der Minecraft-Server befindet.

2. <b>Finde die Servereinstellungen</b><br>
    Suche nach der Datei, die die Servereinstellungen enthält. Normalerweise ist dies die `server.properties`-Datei im Hauptverzeichnis des Servers.

3. <b>Öffne die `server.properties`-Datei</b><br>
    Du kannst diese Datei mit einem Texteditor öffnen, um die Einstellungen anzupassen.

4. <b>Suche nach `view-distance`</b><br>
    In der `server.properties`-Datei suchst Du nach dem Eintrag `view-distance`. Dieser Eintrag legt die Sichtweite fest und hat normalerweise einen Wert zwischen 3 und 15.

5. <b>Ändere den Wert</b><br>
    Ändere den Wert von `view-distance` auf den gewünschten Wert. Eine niedrigere Zahl bedeutet eine kürzere Sichtweite, während eine höhere Zahl eine längere Sichtweite bedeutet.
  
6. <b>Speichere die Änderungen</b><br>
    Speichere die `server.properties`-Datei nach der Anpassung der Sichtweite.

7. <b>Starte den Server neu</b><br>
    Starte den Minecraft-Server neu, damit die Änderungen wirksam werden.

### Das war's! Mit diesen Schritten solltest Du in der Lage sein, die Sichtweite auf Deinem Minecraft-Server erfolgreich zu ändern.