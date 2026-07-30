---
description: Admin auf einem Citadel Forged with Fire Server hinzufügen
---

# So fügst du einen Admin auf deinem Citadel Forged with Fire Server hinzu

Citadel Forged with Fire arbeitet **nicht mit einer Admin-Liste aus SteamIDs**, sondern mit einem **Admin-Passwort**: Wer sich im Spiel mit diesem Passwort einloggt, hat Adminrechte. Du musst also keine IDs sammeln – du gibst das Passwort einfach an die Personen weiter, die Adminrechte bekommen sollen.

:::: danger Wichtig
Ab Werk ist auf jedem Server das Standard-Passwort `citadel123` hinterlegt. Ändere es unbedingt, bevor dein Server öffentlich erreichbar ist – sonst kann sich jeder, der dieses allgemein bekannte Passwort kennt, Adminrechte verschaffen.
::::

## Admin-Passwort setzen

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>Passwort eintragen</b><br>
   Trage im Feld für das **Admin-Passwort** dein gewünschtes Passwort ein.

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu, damit das neue Passwort übernommen wird.

:::: danger Passwort in der Verwaltung setzen
Gespeichert wird das Admin-Passwort in der `Game.ini` im Abschnitt `[/script/citadel.socialmanager]` beim Wert `Password=`. Bietet deine Verwaltung ein Feld dafür an, kann dein Server diesen Wert beim Start aus der Verwaltung neu schreiben – eine Änderung direkt in der Datei oder im Spiel per `/admin_update <neues Passwort>` wäre dann nach dem nächsten Neustart wieder überschrieben. Setze das Admin-Passwort deshalb immer zuerst in der **Verwaltung** und greife nur dann zur Datei, wenn dort kein Feld dafür vorhanden ist.
::::

:::: warning Achtung
Wer das Admin-Passwort kennt, hat volle Adminrechte auf deinem Server – inklusive Befehlen zum Kicken, Bannen und Löschen von Charakteren. Gib es nur an Personen weiter, denen du vertraust, und verwende ein anderes Passwort als das Beitrittspasswort deines Servers.
::::

## Als Admin einloggen

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei. Wie du ihn findest, steht unter [Server beitreten](server-beitreten.md).

2. <b>Chat öffnen</b><br>
   Öffne im Spiel das Chatfenster.

3. <b>Einloggen</b><br>
   Gib folgenden Befehl mit deinem Admin-Passwort ein:

   ```
   /admin_login <Passwort>
   ```

   :::: info Hinweis
   Der Befehl `/iamgod <Passwort>` macht dasselbe – es ist lediglich ein alternativer Name für denselben Befehl.
   ::::

4. <b>Rechte nutzen</b><br>
   Ab sofort stehen dir die Adminbefehle zur Verfügung, zum Beispiel `/who` für eine Liste aller eingeloggten Spieler.

## Adminrechte wieder ablegen

Möchtest du deine Adminrechte für die laufende Sitzung wieder abgeben, gibst du im Chat ein:

```
/admin_logout
```

:::: info Hinweis
Die Adminrechte gelten pro Sitzung. Nach einem Verbindungsabbruch oder einem Serverneustart musst du dich mit `/admin_login` erneut anmelden.
::::

## Remote Console im Browser nutzen

Alternativ zum Ingame-Chat kannst du Adminbefehle über die eingebaute Remote Console im Browser ausführen – praktisch, wenn du gerade nicht im Spiel bist.

:::: danger Zusätzlichen Port anlegen
Die Remote Console benötigt einen **eigenen Port**. Lege dir dafür in der **Verwaltung** einen zusätzlichen Port an. Ohne freigegebenen Port ist die Oberfläche von außen nicht erreichbar.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Config/Game.ini
   ```

4. <b>Abschnitt ergänzen</b><br>
   Trage folgenden Abschnitt ein und setze bei `WebServerPort` den zusätzlichen Port aus deiner Verwaltung:

   ```ini
   [/script/citadel.remoteconsole]
   WebServerPort=<zusätzlicher Port>
   WebServerUsername=<Benutzername>
   WebServerPass=<Passwort>
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

6. <b>Oberfläche aufrufen</b><br>
   Rufe im Browser die IP-Adresse deines Servers zusammen mit dem eingetragenen Port auf:

   ```
   http://<Server-IP>:<Port>
   ```

   Melde dich mit den oben gesetzten Zugangsdaten an. Mit `list` beziehungsweise `help` bekommst du die verfügbaren Befehle angezeigt.

:::: warning Achtung
Trägst du keine Zugangsdaten ein, gelten die im Server eingebauten Standardwerte. Setze deshalb immer einen eigenen Benutzernamen und ein eigenes Passwort, bevor du den Port freigibst.
::::

:::: info Konfigurationsdatei wirkt aufgeräumt
Dein Server entfernt beim Start Abschnitte aus der `.ini`, die du nicht angepasst hast. Das ist normal und kein Fehler – deine eigenen Einträge bleiben erhalten.
::::

:::: info Wo liegt die Konfiguration?
Der Ordner `/Config/` und der Pfad `/Citadel/Saved/Config/LinuxServer/` verweisen auf dieselben Dateien. Du kannst also beide Wege nutzen.
::::

:::: tip Tipp
Welche Befehle dir als Admin zur Verfügung stehen und wie du Spieler entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
