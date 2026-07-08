---
description: Ein Passwort auf einem Space Engineers Server setzen
---

# So setzt du ein Passwort auf deinem Space Engineers Server

Du kannst deinen Server mit einem Passwort schützen, sodass nur Spieler mit dem Passwort beitreten können. Space Engineers speichert das Passwort **nicht im Klartext**, sondern als Hash- und Salt-Wert in der Server-Konfiguration. Du erzeugst diese beiden Werte einmal und trägst sie in die Konfiguration ein.

## Hash und Salt erzeugen

Nutze dafür das offizielle Tool **Space Engineers Dedicated Server** (kostenlos in deiner Steam-Bibliothek unter **Tools**):

1. <b>Tool installieren</b><br>
   Installiere und starte das Tool „Space Engineers Dedicated Server" über Steam.

2. <b>Passwort eintragen</b><br>
   Trage im Feld **Password** dein gewünschtes Passwort ein. Das Tool erzeugt daraus automatisch die Werte `ServerPasswordHash` und `ServerPasswordSalt` in seiner eigenen `SpaceEngineers-Dedicated.cfg`.

3. <b>Werte kopieren</b><br>
   Öffne die vom Tool erzeugte `SpaceEngineers-Dedicated.cfg` und kopiere die Inhalte von `<ServerPasswordHash>` und `<ServerPasswordSalt>`.

## Werte auf den Server übertragen

:::: warning Achtung
Stoppe deinen Server, bevor du die Konfigurationsdatei bearbeitest.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser.

3. <b>Konfiguration öffnen</b><br>
   Öffne die Datei `SpaceEngineers-Dedicated.cfg`.

4. <b>Werte eintragen</b><br>
   Trage die kopierten Werte ein:

   ```xml
   <ServerPasswordHash>DeinHashWert</ServerPasswordHash>
   <ServerPasswordSalt>DeinSaltWert</ServerPasswordSalt>
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Spieler werden beim Verbinden nach dem Passwort gefragt.

:::: info Hinweis
Hash und Salt müssen ein zusammengehöriges Paar sein — erzeuge sie immer mit demselben Tool. Ein einzelnes Klartext-Feld `<ServerPassword>` gibt es in aktuellen Versionen nicht mehr.
::::

:::: tip Passwort entfernen
Um den Passwortschutz zu entfernen, leere beide Felder wieder (`<ServerPasswordHash />` und `<ServerPasswordSalt />`) und starte den Server neu.
::::
