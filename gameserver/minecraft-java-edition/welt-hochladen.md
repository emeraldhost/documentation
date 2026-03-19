---
description: Welt auf einen Minecraft Java Edition Server hochladen
---

# So lädst du eine Welt auf einem Minecraft Java Server hoch

:::: danger Achtung
Die Welt-Dateien dürfen kein Archiv wie z. B. `.zip` sein. Entpacke die Welt vorher.
::::

1. <b>Server stoppen</b><br>
   Stoppe Deinen Minecraft Java Edition Server.

2. <b>SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Welt hochladen</b><br>
   Lade im Hauptordner, in dem sich auch der Ordner `world` befindet, Deine neue Welt hoch.

4. <b>Eintrag suchen</b><br>
   Öffne die Datei `server.properties` und suche den folgenden Eintrag:

   ```
   level-name=world
   ```

5. <b>Welt-Name ändern</b><br>
   Ändere den Wert auf den Namen Deiner hochgeladenen Welt (z. B. `level-name=NeueWelt`).

6. <b>Server neu starten</b><br>
   Speichere die Änderungen und starte den Server neu.

:::: tip Tipp
Du kannst auch mehrere Welten parallel auf Deinem Server betreiben, z. B. mit Plugins wie [Multiverse-Core](https://modrinth.com/plugin/multiverse-core).
::::
