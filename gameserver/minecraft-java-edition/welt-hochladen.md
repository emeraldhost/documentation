---
description: Welt auf einen Minecraft Java Edition Server hochladen
---

# So lädst du eine Welt auf einem Minecraft Java Server hoch

::: danger Achtung
Die Welt-Dateien dürfen kein Archiv wie z. B. `.zip` sein. Entpacke die Welt vorher.
:::

1. **Stoppe Deinen Minecraft Java Edition Server.**

2. **Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.**

3. **Lade im Hauptordner, in dem sich auch der Ordner `world` befindet, Deine neue Welt hoch.**

4. **Öffne die Datei `server.properties` und suche den folgenden Eintrag:**

    ```
    level-name=world
    ```

5. **Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. `level-name=NeueWelt`).**

6. **Speichere die Änderungen und starte den Server neu.**

::: tip Tipp
Du kannst auch mehrere Welten parallel auf Deinem Server betreiben, z. B. mit Plugins wie [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
:::
