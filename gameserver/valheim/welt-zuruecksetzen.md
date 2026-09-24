---
description: Welt auf einem Valheim Server zurücksetzen
---

# So setzt du die Welt auf deinem Valheim Server zurück

Du kannst auf deinem Server jederzeit mit einer komplett neuen Welt beginnen. Der Server erstellt die neue Welt beim Start automatisch mit einem zufälligen Seed. Die Charaktere deiner Spieler samt Inventar bleiben dabei erhalten, da Valheim sie nicht auf dem Server, sondern bei den Spielern speichert. Auch die Listen der Admins, der gebannten Spieler und die Whitelist bleiben bestehen, da der Server sie unabhängig von der Welt speichert.

:::: warning Achtung
Sichere deine aktuelle Welt, bevor du sie zurücksetzt: Erstelle über die Verwaltung ein [Backup](backup-erstellen.md) oder lade die Welt auf deinen PC herunter ([Savegame herunterladen](savegame-herunterladen.md)).
::::

## Neue Welt unter neuem Namen erstellen (empfohlen)

Bei diesem Weg bleibt deine bisherige Welt unverändert auf dem Server und du kannst jederzeit zu ihr zurückwechseln.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Neuen Welt-Namen eintragen</b><br>
   Navigiere in der Verwaltung zu den **Einstellungen**. Notiere dir den bisherigen Eintrag im Feld **Welt Name** (standardmäßig `Dedicated`) und trage dort einen neuen Namen ein, den noch keine Welt auf deinem Server trägt (z.B. `MeineWelt2`). Der Name darf höchstens 20 Zeichen lang sein. Ein Name, der sich von einer vorhandenen Welt nur in der Groß- und Kleinschreibung unterscheidet, zählt dabei nicht als neuer Name.

3. <b>Server starten</b><br>
   Speichere die Einstellungen und starte deinen Server. Findet der Server keine Welt mit dem eingetragenen Namen, erstellt er automatisch eine neue Welt.

:::: tip Tipp
Um zur alten Welt zurückzuwechseln, trägst du im Feld **Welt Name** wieder den bisherigen Namen ein und startest den Server neu. Auf diese Weise kannst du auch zwischen mehreren Welten wechseln.
::::

## Welt unter gleichem Namen neu erstellen

Bei diesem Weg benennst du die bisherige Welt um oder löschst sie. Beim nächsten Start erstellt der Server unter demselben Namen eine neue Welt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server und wechsle in folgendes Verzeichnis:

   ```
   /.config/unity3d/IronGate/Valheim/worlds_local/
   ```

   Alternativ kannst du auch den Dateimanager der Verwaltung nutzen.

3. <b>Welt-Ordner umbenennen oder löschen</b><br>
   Seit Valheim 1.0 speichert der Server jede Welt in einem eigenen Ordner, der so heißt wie der Eintrag im Feld **Welt Name** (z.B. `MeineWelt`). Benenne diesen Ordner um (z.B. in `MeineWelt_alt`), wenn die alte Welt auf dem Server bleiben soll, oder lösche ihn. Möchtest du die alte Welt zusätzlich auf deinem PC aufbewahren, lade den Ordner vor dem Löschen per SFTP herunter.

   Liegen statt des Ordners die Dateien `MeineWelt.fwl` und `MeineWelt.db` im Verzeichnis (Welt aus einer Version vor Valheim 1.0), gehst du mit diesen beiden Dateien genauso vor.

4. <b>Alte Sicherungen herunterladen oder löschen</b><br>
   Ordner und Dateien, deren Name mit `MeineWelt_backup_` beginnt (z.B. `MeineWelt_backup_auto-20260115-183000`), sind Sicherungen der alten Welt, die der Server selbst angelegt hat. Da sie denselben Welt-Namen tragen, liegen sie sonst zwischen den Sicherungen der neuen Welt. Die Sicherungen mit `auto` im Namen behandelt der Server dann wie automatische Backups der neuen Welt und löscht sie mit der Zeit, wenn er neue Backups anlegt. Möchtest du die alten Sicherungen behalten, lade sie per SFTP auf deinen PC herunter. Benötigst du sie nicht mehr, lösche sie.

5. <b>Server starten</b><br>
   Starte deinen Server. Er erstellt unter demselben Namen automatisch eine neue Welt.

:::: info Welt plötzlich neu?
Stimmt der Eintrag im Feld **Welt Name** mit keiner vorhandenen Welt überein, zum Beispiel wegen eines Tippfehlers, erstellt der Server beim Start ohne Rückfrage eine neue Welt. Deine bisherige Welt ist dann nicht verloren, sondern liegt unverändert im Verzeichnis `worlds_local`. Trage den richtigen Namen ein und starte den Server neu.
::::

:::: info Hinweis
Einen bestimmten Seed kannst du über die Verwaltung nicht festlegen, der Server wählt ihn für eine neue Welt immer zufällig. Möchtest du eine Welt mit einem bestimmten Seed spielen, erstelle sie lokal im Spiel und lade sie anschließend über [Savegame hinzufügen](savegame-hinzufuegen.md) auf deinen Server hoch.
::::
