---
description: MOTD (Message of the Day) auf Minecraft Server ändern
---

# MOTD (Message of the Day) ändern

Die MOTD (Message of the Day) eines Minecraft-Servers ist eine Nachricht, die auf dem Multiplayer-Server angezeigt wird, wenn Du versuchst, Dich zu verbinden. Sie dient dazu, den Spielern Informationen über den Server zu vermitteln, wie zum Beispiel den Servernamen, Regeln, Willkommensnachrichten oder sogar Links zu Ressourcen. Die MOTD ist eine Art Willkommensnachricht, die den Spielern hilft, den Server und seine Community besser zu verstehen. Sie kann in den Servereinstellungen angepasst werden.

## Voraussetzungen

* Zugang zum Server-Ordner (entweder über eine SFTP-Verbindung oder direkten Zugang zu den Server-Dateien)
  * Die SFTP-Zugangsdaten findest Du in der Übersicht Deines Gameservers.

## Um die MOTD zu ändern, folge diesen Schritten:

1. <b>Zugriff auf den Server</b>
    * Wenn Du über eine SFTP-Verbindung verfügst, kannst Du Dich mit Deinen SFTP-Zugangsdaten anmelden.
    * Wenn Du direkten Zugang zu den Server-Dateien hast, navigiere zu dem Verzeichnis, in dem sich der Minecraft-Server befindet.

2. <b>Finde die Servereinstellungen</b><br>
    Suche nach der Datei, die die Servereinstellungen enthält. Normalerweise ist dies die `server.properties`-Datei im Hauptverzeichnis des Servers.

3. <b>Öffne die `server.properties`-Datei</b><br>
    Du kannst diese Datei mit einem Texteditor öffnen, um die Einstellungen anzupassen.

4. <b>Suche nach motd</b><br>
    In der `server.properties`-Datei suche nach dem Eintrag `motd`. Dieser Eintrag legt die MOTD fest. Sie sieht normalerweise so aus:
    ```
    motd=Deine Nachricht hier.
    ```

5. <b>Ändere den MOTD-Text</b><br>
    Ändere den Text in Anführungszeichen nach dem Gleichheitszeichen, um Deine gewünschte Nachricht zu setzen. Zum Beispiel: 
    ```
    motd=Willkommen auf unserem Server!
    ```

6. <b>Speichere die Änderungen</b><br>
    Speichere die `server.properties`-Datei nach der Anpassung der Sichtweite.

7. <b>Starte den Server neu</b><br>
    Starte den Minecraft-Server neu, damit die Änderungen wirksam werden.

### Das war's! Mit diesen Schritten solltest Du in der Lage sein, die MOTD auf Deinem Minecraft-Server erfolgreich zu ändern.
