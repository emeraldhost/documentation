---
description: Island ID auf einem Windrose Server setzen
---

# So setzt du die Island ID auf deinem Windrose Server

Die Island ID legt fest, welche Welt dein Server beim Start lädt. Wenn keine Island ID gesetzt ist, lädt der Server automatisch den aktuellsten Spielstand. Möchtest du eine bestimmte ältere Welt weiterspielen, kannst du deren Island ID hier eintragen.

## Island ID herausfinden

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Welten-Verzeichnis öffnen</b><br>
   Öffne folgendes Verzeichnis. Hier liegt für jede gespeicherte Welt ein eigener Ordner:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/
   ```

   :::: info Hinweis
   `<GameVersion>` ist die Spielversion, mit der die Welt erstellt wurde — z.B. `0.10.0`. Falls du mehrere Versionen siehst, öffne den passenden Ordner.
   ::::

3. <b>Island ID identifizieren</b><br>
   Der Ordnername jeder Welt **ist** die Island ID. Beispiel:

   ```
   /R5/Saved/SaveProfiles/Default/RocksDB_v2/0.10.0/Worlds/A1b2C3d4E5
   ```

   In diesem Beispiel lautet die Island ID `A1b2C3d4E5`.

4. <b>Welt zuordnen (optional)</b><br>
   Um sicherzustellen, dass du den richtigen Ordner zur richtigen Welt zuordnest, öffne die Datei `WorldDescription.json` im Welt-Ordner. Dort findest du den Anzeigenamen unter dem Feld `WorldName`.

## Island ID in der Verwaltung setzen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Island ID setzen</b><br>
   Trage die Island ID aus dem Welt-Ordner im Feld **Island ID** ein und speichere die Einstellung.

4. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Änderung übernommen wird.

:::: tip Tipp
Wenn dein Server nach einem Update plötzlich eine neue, leere Welt lädt, ist meist die ursprüngliche Welt noch unter `/R5/Saved/SaveProfiles/Default/RocksDB_v2/<GameVersion>/Worlds/` vorhanden. Trage die Island ID dieser Welt in den Einstellungen ein, damit sie wieder korrekt geladen wird.
::::
