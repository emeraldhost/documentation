---
description: World-Seed auf einem Minecraft Java Edition Server ändern
---

# So änderst du den World-Seed auf einem Minecraft Java Server

::: danger Achtung
Erstelle vorher ein Backup Deines Servers, da die aktuelle Welt durch das Ändern des World-Seeds verloren gehen kann.
:::

1. **Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und öffne die Datei `server.properties`.**

2. **Suche den folgenden Eintrag:**

    ```
    level-seed=
    ```

3. **Füge an dieser Stelle den gewünschten World-Seed ein (z.B. `level-seed=5101553622029575588`).**

4. **Speichere die Änderungen und starte den Server neu.**

::: tip Tipp
Du kannst den aktuellen World-Seed einer bestehenden Welt herausfinden, indem Du den Befehl `/seed` im Spiel eingibst.
:::
