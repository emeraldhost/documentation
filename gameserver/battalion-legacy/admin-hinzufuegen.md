---
description: Admin auf einem BATTALION Legacy Server hinzufügen
---

# So fügst du einen Admin auf deinem BATTALION Legacy Server hinzu

BATTALION Legacy hat **keine Adminliste mit SteamIDs**. Stattdessen gibt es ein einziges **Admin-Passwort** für den Server: Wer es im Spiel über die Konsole eingibt, ist Admin. Du musst also keine IDs sammeln, sondern gibst das Passwort nur an die Personen weiter, die Adminrechte bekommen sollen.

:::: warning Achtung
Jeder, der das Admin-Passwort kennt, kann alle Adminbefehle auf deinem Server ausführen — zum Beispiel die Karte wechseln oder Servereinstellungen im laufenden Betrieb ändern. Gib es nur an Personen weiter, denen du vertraust.
::::

## Admin-Passwort setzen

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>Passwort eintragen</b><br>
   Trage im Feld **Admin Passwort** dein gewünschtes Passwort ein.

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu. Das Passwort wird beim Start übergeben und gilt daher erst nach einem Neustart.

:::: danger Wichtig
Ab Werk ist ein Standardpasswort hinterlegt. Ändere es unbedingt, bevor dein Server öffentlich erreichbar ist — sonst kann sich jeder, der das Standardpasswort kennt, Adminrechte verschaffen.
::::

:::: info Warum nicht in der Konfigurationsdatei?
In den mitgelieferten Serverdateien gibt es zwar einen Eintrag `AdminPassword`, dein Server bekommt das Admin-Passwort aber bei jedem Start als Startparameter übergeben. Trage es deshalb ausschließlich in der **Verwaltung** ein.
::::

## Entwicklerkonsole aktivieren

Die Adminbefehle gibst du im Spiel über die Entwicklerkonsole ein. Diese ist ab Werk deaktiviert und muss einmalig freigeschaltet werden.

:::: info Hinweis
Dieser Schritt betrifft deinen eigenen PC, nicht den Server. Jeder Admin muss ihn einmal auf seinem Rechner durchführen.
::::

1. <b>Spiel beenden</b><br>
   Schließe BATTALION Legacy, damit deine Änderung beim Beenden nicht überschrieben wird.

2. <b>Konfigurationsordner öffnen</b><br>
   Öffne auf deinem PC den folgenden Ordner. Du kannst den Pfad direkt in die Adresszeile des Explorers kopieren:

   ```
   %LOCALAPPDATA%\Battalion\Saved\Config\WindowsClient
   ```

3. <b>Input.ini öffnen</b><br>
   Öffne die Datei `Input.ini` mit einem Texteditor. Existiert sie noch nicht, lege sie an.

4. <b>Konsolentaste eintragen</b><br>
   Ergänze am Ende der Datei die folgenden beiden Zeilen:

   ```ini
   [/script/engine.inputsettings]
   ConsoleKey=Tilde
   ```

5. <b>Speichern und starten</b><br>
   Speichere die Datei und starte BATTALION Legacy neu.

## Als Admin anmelden

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei. Wie du ihn findest, steht unter [Server beitreten](server-beitreten.md).

2. <b>Konsole öffnen</b><br>
   Drücke im Spiel die Taste `^` beziehungsweise `~` links neben der `1`, um die Konsole zu öffnen.

3. <b>Anmelden</b><br>
   Gib den folgenden Befehl ein und ersetze `<Passwort>` durch dein Admin-Passwort:

   ```
   Server.Login <Passwort>
   ```

4. <b>Ergebnis</b><br>
   Ab jetzt akzeptiert der Server deine Adminbefehle. Passiert bei einem Befehl nichts, war die Anmeldung nicht erfolgreich — prüfe das Passwort und melde dich erneut an.

:::: info Hinweis
Die Anmeldung gilt nur für die aktuelle Sitzung. Nach einem Serverneustart oder einem erneuten Beitritt musst du dich mit `Server.Login` wieder anmelden.
::::

## Adminbefehle nutzen

Alle Adminbefehle beginnen mit `Server.` und werden in derselben Konsole eingegeben. Groß- und Kleinschreibung spielt dabei keine Rolle.

| Befehl | Wirkung |
|--------|---------|
| `Server.Login <Passwort>` | Meldet dich als Admin an |
| `Server.ChangeMap <Karte> <Modus>` | Wechselt auf eine andere Karte und einen anderen Spielmodus |
| `Server.Config.<Variable> <Wert>` | Ändert eine Servereinstellung im laufenden Betrieb, zum Beispiel `Server.Config.NumBots 0` |
| `Server.KillBots` | Entfernt die Bots aus der laufenden Runde |
| `Server.Announce <Nachricht>` | Blendet allen Spielern eine Nachricht ein |
| `Server.Pause` | Hält die Rundenuhr an, ohne die Spieler zu blockieren |

:::: info Woher stammen diese Befehle?
`Server.Login` ist in den mitgelieferten Serverdateien selbst dokumentiert. Die übrigen Befehle stammen aus der offiziellen Serverdokumentation von BATTALION 1944, dem Vorgänger von BATTALION Legacy. Welche davon deine Serverfassung tatsächlich noch kennt, ist nicht garantiert — prüfe es im Zweifel über die Autovervollständigung.
::::

:::: tip Tipp
Tippe in der Konsole nur `Serve` ein. Die Autovervollständigung zeigt dir daraufhin alle `Server.*`-Befehle an, die dein Spiel tatsächlich kennt. Das ist der zuverlässigste Weg, den vollen Befehlsumfang zu sehen.
::::

:::: info Kartennamen für `Server.ChangeMap`
Für den Modus **Wartide** sind in den Serverdateien diese Karten hinterlegt: `Coastal`, `Derailed`, `Docks`, `Invasion`, `Liberation`, `Manorhouse_V2`, `Savoia` und `Vanguard`. Schreibe den Kartennamen genau so — bei `Manorhouse_V2` also mit Unterstrich.

Den Modus gibt die offizielle Dokumentation von BATTALION 1944 als Kürzel an; ihr Beispiel lautet `Server.ChangeMap Liberation WRT` für Wartide.
::::

:::: info Hinweis
Nicht jede Änderung über `Server.Config.<Variable>` greift sofort — darauf weist auch die offizielle Dokumentation von BATTALION 1944 hin. Wirkt ein Wert nicht, hilft in der Regel ein Kartenwechsel über `Server.ChangeMap`.
::::

## Spieler kicken und bannen

:::: warning Achtung
In der **Verwaltung** gibt es keine Bannfunktion, und ein Adminbefehl zum dauerhaften Sperren von Spielern ist für BATTALION Legacy nicht belegt. Die offizielle Serverdokumentation von BATTALION 1944 nennt dafür nur ein separates RCon-Werkzeug, das eine Blacklist-Datei erzeugt — ob dieses Werkzeug in den Serverdateien von BATTALION Legacy noch enthalten ist, ist nicht belegt.

Zum Kicken führt die offizielle Serverdokumentation von BATTALION 1944 die Befehle `Server.KickPlayerByName <Name>`, `Server.KickPlayerBySteamID <SteamID>` und `Server.DisconnectAll` auf. Ob sie in der aktuellen Fassung von BATTALION Legacy noch vorhanden sind, ist nicht belegt — prüfe das als angemeldeter Admin über die Autovervollständigung in der Konsole.

Führt das nicht weiter, bleibt dir nur, deinen Server über die Verwaltung neu zu starten oder vorübergehend zu stoppen.
::::
