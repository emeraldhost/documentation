---
description: MOTD auf einem Minecraft Java Edition Server ändern
---

# So änderst du die MOTD auf einem Minecraft Java Server

Die MOTD (Message of the Day) eines Minecraft-Servers ist eine Nachricht, die auf dem Multiplayer-Server angezeigt wird, wenn Du versuchst, Dich zu verbinden. Sie dient dazu, den Spielern Informationen über den Server zu vermitteln, wie zum Beispiel den Servernamen, Regeln, Willkommensnachrichten oder sogar Links zu Ressourcen.

1. **Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.**

2. **Suche den folgenden Eintrag:**

    ```
    motd=Deine Nachricht hier.
    ```

3. **Ändere den Wert auf die gewünschte Nachricht. Zum Beispiel:**

    ```
    motd=Willkommen auf unserem Server!
    ```

4. **Speichere die Änderungen und starte den Server neu.**
