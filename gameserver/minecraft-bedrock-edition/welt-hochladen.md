---
title: Welt in Minecraft Bedrock Edition Hochladen
description: Schritt-für-Schritt-Anleitung, wie du in Minecraft Bedrock Edition deine eigene Welt hochlädst und den Server korrekt konfigurierst.
---

# Welt in Minecraft Bedrock Edition Hochladen: Datei-Browser & SFTP

::: danger Achtung
Die Welt-Dateien dürfen kein Archiv wie z. B. ```.zip``` oder ```.mcworld``` sein. Entpacke die Welt vorher. Achte darauf, dass der Ordnername unverändert bleibt.
:::

1. <strong>Stoppe Deinen Minecraft Bedrock Edition Server.</strong>

2. <strong>Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](../sftp-verbindung-herstellen.md).</strong>

3. <strong>Lade Deine neue Welt in den Ordner ```worlds``` hoch.</strong>

4. <strong>öffne die Datei ```server.properties``` im Hauptordner Deines Servers.</strong>

5. <strong>Suche den folgenden Eintrag:</strong>

    ```
    level-name=Bedrock level
    ```

6. <strong>Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. ```level-name=Neue Welt```).</strong>

7. <strong>Speichere die Datei und starte Deinen Server neu.</strong>
