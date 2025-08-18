---
title: Welt in Minecraft Java Edition Hochladen
description: Schritt-für-Schritt-Anleitung, wie du in Minecraft Java Edition deine eigene Welt hochlädst und den Server entsprechend konfigurierst.
---

# Welt in Minecraft Java Edition Hochladen: Datei-Browser & SFTP

::: danger Achtung
Die Welt-Dateien dürfen kein Archiv wie z. B. ```.zip``` sein. Entpacke die Welt vorher.
:::

1. <strong>Stoppe Deinen Minecraft Java Edition Server.</strong>

2. <strong>Öffne Dein Dashboard, wähle Deinen Server aus und gehe zum Datei-Browser **oder** verbinde Dich per SFTP mit Deinem Server. Eine Anleitung hierzu findest du hier: [SFTP-Verbindung herstellen](../sftp-verbindung-herstellen.md).</strong>

3. <strong>Lade im Hauptordner, in dem sich auch der Ordner ```world``` befindet, Deine neue Welt hoch.</strong>

4. <strong>öffne die Datei ```server.properties```.</strong>

5. <strong>Suche den folgenden Eintrag:</strong>

    ```
    level-name=world
    ```

6. <strong>Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. ```level-name=NeueWelt```).</strong>

7. <strong>Speichere die Datei und starte Deinen Server neu.</strong>

::: tip Tipp
Du kannst auch mehrere Welten parallel auf Deinem Server betreiben, z. B. mit Plugins wie [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
:::
