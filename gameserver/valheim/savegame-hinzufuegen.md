---
description: Savegame auf einem Valheim Server hinzufügen
---

# So fügst du ein Savegame zu deinem Valheim Server hinzu

Du kannst einen lokalen Spielstand auf deinen Server übertragen, um mit einer bestehenden Welt weiterzuspielen.

## Lokales Savegame finden

1. <b>Savegame-Ordner öffnen</b><br>
   Drücke `Windows-Taste + R`, gib folgenden Pfad ein und bestätige mit Enter:

   ```
   %userprofile%\AppData\LocalLow\IronGate\Valheim\worlds_local
   ```

2. <b>Weltordner identifizieren</b><br>
   Seit Valheim 1.0 ist jede Welt ein eigener Ordner, der so heißt wie die Welt, zum Beispiel `MeineWelt`. Die Dateien darin gehören als Satz zusammen, deshalb überträgst du immer den kompletten Ordner. Ordner mit `_backup_` im Namen sind Sicherungen deiner Welt und nicht der aktuelle Stand.

:::: info Hinweis
Findest du statt eines Ordners nur die zwei Dateien `<WeltName>.fwl` und `<WeltName>.db`, liegt die Welt noch im Format von vor Valheim 1.0 vor. Auch solche Welten kannst du hochladen, siehe [Welten im alten Format hochladen](#welten-im-alten-format-hochladen).
::::

## Savegame hochladen und anwenden

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und wechsle in folgendes Verzeichnis:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

3. <b>Gleichnamige Welt umbenennen</b><br>
   Liegt dort bereits ein Ordner mit demselben Namen wie deine Welt, benenne ihn um (zum Beispiel von `MeineWelt` in `MeineWelt_alt`) oder lade ihn zuerst auf deinen PC herunter und lösche ihn erst dann. Lade deine Welt nie in einen bestehenden Weltordner hinein, sonst vermischen sich die Dateien zweier Spielstände.

4. <b>Weltordner hochladen</b><br>
   Lade den kompletten Ordner deiner Welt mit unverändertem Namen in das Verzeichnis `worlds_local` hoch. Anschließend liegt deine Welt zum Beispiel unter:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/MeineWelt/
   ```

   :::: danger Wichtig
   Lade den Ordner direkt in `worlds_local` hoch und nicht in einen weiteren Unterordner, denn der Server sucht Welten nur eine Ordnerebene tief. Benenne keine Dateien im Ordner um und mische keine Dateien aus verschiedenen Ständen. Findet der Server keinen vollständigen Satz an Dateien, kann er die Welt nicht laden und löscht die unvollständigen Dateien beim Start.
   ::::

5. <b>Welt-Namen setzen</b><br>
   Öffne die Verwaltung, navigiere zu den **Einstellungen** und trage im Feld **Welt Name** exakt den Namen deines Weltordners ein, im Beispiel also `MeineWelt`. Das Feld erlaubt höchstens 20 Zeichen.

6. <b>Server starten</b><br>
   Speichere die Einstellungen und starte deinen Server.

:::: warning Achtung
Falls der Ordner `worlds_local` nicht existiert, starte den Server einmal, damit die Ordnerstruktur automatisch erstellt wird. Stoppe den Server anschließend wieder, bevor du die Dateien hochlädst.
::::

:::: tip Tipp
Lädt der Server statt deiner Welt eine neue, leere Welt, hat er deine Welt nicht gefunden, zum Beispiel wegen eines Tippfehlers im Feld **Welt Name** oder weil der Ordner nicht direkt in `worlds_local` liegt. Der Server hat dann unter dem eingetragenen Namen eine neue Welt angelegt. Stoppe den Server, lösche den neu angelegten Ordner und behebe den Fehler.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Savegames, falls du später zurückwechseln möchtest.
::::

## Welten im alten Format hochladen

Welten, die seit Valheim 1.0 noch nicht geöffnet wurden, sowie Sicherungen aus der Zeit davor bestehen aus den zwei Dateien `<WeltName>.fwl` und `<WeltName>.db`. Auch solche Welten kannst du auf deinen Server übertragen. Gehe dabei wie oben beschrieben vor, mit folgenden Unterschieden:

- Lade statt eines Ordners die beiden Dateien `<WeltName>.fwl` und `<WeltName>.db` direkt in das Verzeichnis `worlds_local` hoch. Beide Dateien müssen aus demselben Stand stammen.
- Trage im Feld **Welt Name** den Namen der Dateien ohne Dateiendung ein, zum Beispiel `MeineWelt` für `MeineWelt.fwl` und `MeineWelt.db`.

Sobald der Server die Welt zum ersten Mal speichert, wandelt er sie automatisch in einen Weltordner im neuen Format um. Die ursprünglichen Dateien benennt er dabei in `<WeltName>_backup_<Zeitstempel>.fwl` und `.db` um, damit dir der alte Stand als Sicherung erhalten bleibt.

:::: warning Achtung
Benenne einen bestehenden Weltordner mit demselben Namen auch hier vorher um oder entferne ihn, wie in Schritt 3 beschrieben. Liegen ein Weltordner und ein Dateipaar mit demselben Namen nebeneinander, lädt der Server nur den neueren Stand und legt den älteren automatisch als Backup ab. Das kann auch deine gerade hochgeladene Welt sein.
::::
