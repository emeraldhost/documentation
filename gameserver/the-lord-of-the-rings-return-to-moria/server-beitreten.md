---
description: Einem The Lord of the Rings Return to Moria Server beitreten
---

# So trittst du deinem The Lord of the Rings Return to Moria Server bei

Return to Moria hat **keinen öffentlichen Serverbrowser**. Deinen Server erreichst du auf zwei Wegen: über den **Invite-Code**, den der Server beim Start ausgibt, oder über die **Direktverbindung** mit IP-Adresse und Port.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und den **Game Port** deines Servers findest du in der **Verwaltung**. Return to Moria nutzt zum Verbinden ausschließlich den Game Port – einen separaten **Query Port** gibt es bei diesem Spiel nicht.
::::

## Mit dem Invite-Code beitreten

Der Invite-Code ist der einfachste Weg, weil deine Mitspieler dafür weder IP-Adresse noch Port brauchen.

1. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung und warte, bis er vollständig hochgefahren ist.

2. <b>Invite-Code auslesen</b><br>
   Öffne in der Verwaltung die **Konsole**. Sobald die Server-Session beginnt, gibt der Server den Invite-Code dort aus.

   :::: tip Tipp
   Der Code steht außerdem im Logfile deines Servers, das du per [SFTP](../sftp-verbindung-herstellen.md) herunterladen kannst:

   ```
   /Moria/Saved/Logs/Moria.log
   ```
   ::::

3. <b>Spiel starten</b><br>
   Starte Return to Moria und warte, bis das Hauptmenü geladen ist.

4. <b>Welt beitreten</b><br>
   Wähle im Menü den Punkt zum Beitreten einer Welt (**Join World** beziehungsweise **Join Other World**).

5. <b>Code eingeben</b><br>
   Trage den Invite-Code in das Suchfeld ein und bestätige die Eingabe. Der Server wird daraufhin gefunden und du kannst beitreten.

## Direkt über die IP verbinden

Die Direktverbindung funktioniert unabhängig vom Invite-Code und ist der zuverlässigste Weg auf deinen Server.

1. <b>Spiel starten</b><br>
   Starte Return to Moria auf deinem PC beziehungsweise deiner Konsole.

2. <b>Beitrittsmenü öffnen</b><br>
   Wähle im Hauptmenü **Join Other World**.

3. <b>Erweiterte Optionen öffnen</b><br>
   Öffne dort die **Advanced Join Options** und wechsle in den Bereich **Direct Join**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse (oder die Domain) deines Servers und den **Game Port** aus der Verwaltung in die vorgesehenen Felder ein. Ist für deinen Server ein Passwort gesetzt, trägst du es im selben Fenster ein.

5. <b>Verbinden</b><br>
   Bestätige die Eingabe über **Join Server**.

## Passwortgeschützter Server

Ist für deinen Server ein Passwort gesetzt, brauchen deine Mitspieler es sowohl beim Beitritt über den Invite-Code als auch bei der Direktverbindung.

:::: warning Achtung
Das Passwort unterscheidet zwischen Groß- und Kleinschreibung. Gib es deinen Mitspielern deshalb genau so weiter, wie es in den Servereinstellungen hinterlegt ist.
::::

:::: info Hinweis
Der Eintrag `OptionalPassword` in der `MoriaServerConfig.ini` wird bei jedem Start automatisch aus den Servereinstellungen deines Servers übernommen. Eine Änderung direkt in der Datei bleibt deshalb nicht bestehen.
::::

## Crossplay und Spielerzahl

:::: info Hinweis
Spieler auf **Steam**, im **Epic Games Store**, auf **PlayStation 5** und **Xbox Series X|S** können gemeinsam auf denselben Server. Ein besonderer Zugang für Konsolen ist dafür nicht nötig. Gleichzeitig können **maximal acht Spieler** auf einem Server spielen.
::::

## Invite-Code zurücksetzen

Möchtest du einen neuen Invite-Code – zum Beispiel, weil der alte in falsche Hände geraten ist –, löschst du die Datei, aus der der Code erzeugt wird.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Seed-Datei löschen</b><br>
   Lösche folgende Datei:

   ```
   /Moria/Saved/Config/InviteSeed.cfg
   ```

4. <b>Server starten</b><br>
   Starte deinen Server. Beim nächsten Sessionstart wird ein neuer Invite-Code erzeugt und in der Konsole ausgegeben.

:::: warning Achtung
Der alte Invite-Code funktioniert danach nicht mehr. Gib den neuen Code an alle Mitspieler weiter, die weiterhin beitreten sollen.
::::

## Kein Serverbrowser

:::: warning Achtung
Return to Moria besitzt **keine öffentliche Serverliste**. Dein Server taucht also nirgends automatisch auf – ohne Invite-Code oder Direktverbindung kann niemand beitreten.
::::

:::: info Hinweis
Die Werte `ListenPort`, `AdvertiseAddress` und `AdvertisePort` in der `MoriaServerConfig.ini` werden bei jedem Start automatisch passend für deinen Server gesetzt. Ändere sie nicht von Hand – deine Änderungen werden überschrieben und dein Server ist unter Umständen nicht mehr erreichbar.
::::
