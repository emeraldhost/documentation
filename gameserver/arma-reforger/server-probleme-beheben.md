---
description: Häufige Probleme auf einem Arma Reforger Server finden und beheben – Startfehler, Server-Browser, Versionen, Mods, Crossplay, RCON und Admin-Login
---

# So behebst du häufige Probleme auf deinem Arma Reforger Server

Startet dein Arma Reforger Server nicht, taucht er nicht im Server-Browser auf oder können Spieler nicht beitreten, steckt meist eine von wenigen typischen Ursachen dahinter. Diese Anleitung zeigt dir die häufigsten Probleme, ihre Ursache und die passende Lösung.

:::: danger Wichtig
Erstelle vor jeder Änderung an deinem Server ein [Backup](../backup-erstellen.md). So kannst du jederzeit zum letzten funktionierenden Stand zurückkehren.
::::

## Zuerst die Logs prüfen

Fast jedes Problem hinterlässt Spuren in der Ausgabe des Servers. Bevor du etwas änderst, wirf deshalb einen Blick hinein:

- **Konsole**: In der Verwaltung siehst du die Ausgabe des Servers live. Die letzten Zeilen vor einem Absturz oder Abbruch sind meist die entscheidenden.
- **Log-Dateien**: Die vollständigen Logs liegen im Ordner `profile` im Hauptverzeichnis deines Servers. Wie du sie findest und liest, zeigt dir [Server-Log auslesen](server-log-auslesen.md).

:::: tip Tipp
Wenn du ein Support-Ticket erstellst, schicke die passende Log-Datei direkt mit – so kann dir das Team deutlich schneller helfen.
::::

## Server startet nach einer Änderung an der config.json nicht

**Ursache:** Die `config.json` ist kein gültiges JSON mehr – schon ein fehlendes oder überzähliges Komma, eine fehlende Klammer oder ein fehlendes Anführungszeichen reicht.

Startet der Server zwar, aber eine Einstellung wirkt nicht, liegt es oft an der Schreibweise: Der Server achtet bei den Parametern in der `config.json` auf Groß- und Kleinschreibung. Ein Schlüssel mit falscher Schreibweise, z.B. `vonDisableUI` statt `VONDisableUI`, ist für den Server ein anderer Parameter und wirkt nicht wie gewünscht.

**Lösung:**

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>config.json prüfen</b><br>
   Öffne die Datei `config.json` im Hauptverzeichnis deines Servers und kopiere ihren Inhalt in einen JSON-Formatter wie [JSONLint](https://jsonlint.com/). Der Formatter zeigt dir die Zeile, in der der Fehler steckt.

4. <b>Fehler beheben</b><br>
   Korrigiere die gemeldete Stelle und prüfe außerdem die Schreibweise der Schlüssel, die du geändert hast. Die richtige Schreibweise findest du in [Server konfigurieren](server-konfigurieren.md).

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Prüfe in der Konsole, ob er jetzt ohne Fehler startet.

:::: info Hinweis
Einige Werte der `config.json` – z.B. Servername, Passwörter, Szenario ID, maximale Spieleranzahl, Sichtbarkeit, Third Person und Battle-Eye – überschreibt die Verwaltung bei jedem Serverstart mit den Werten aus den **Einstellungen**. Änderungen an diesen Werten nimmst du deshalb immer in der Verwaltung vor, nicht in der Datei.
::::

## Server wird im Server-Browser nicht angezeigt

**Ursache:** In den Einstellungen ist **Sichtbar im Server-Browser** auf `false` gesetzt. Prüfe außerdem in der Konsole, ob der Start bereits abgeschlossen ist, bevor du in der Serverliste suchst.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Sichtbarkeit aktivieren</b><br>
   Setze das Feld **Sichtbar im Server-Browser** auf `true`.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu. Warte, bis der Server in der Konsole vollständig gestartet ist, und aktualisiere dann die Serverliste im Spiel.

:::: tip Tipp
Unabhängig vom Server-Browser können deine Spieler auch direkt über IP und Port beitreten. Wie das geht, zeigt [Server beitreten](server-beitreten.md).
::::

## Versionskonflikt beim Beitreten

**Ursache:** Spieler erhalten beim Beitreten eine Meldung über eine nicht passende Version oder der Server bleibt auf einer alten Version, obwohl das Spiel bereits aktualisiert wurde. Meist ist in den Einstellungen **Auto Update** auf `0` gesetzt – dann wird der Server beim Start nicht aktualisiert.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Auto Update aktivieren</b><br>
   Setze das Feld **Auto Update** auf `1`.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu. Der Server wird dabei auf die aktuelle Version gebracht.

Mehr dazu findest du in [Automatische Updates steuern](automatische-updates-steuern.md).

## Mod-Download schlägt fehl und der Server startet nicht

**Ursache:** Eine `modId` ist falsch geschrieben oder eine eingetragene `version` existiert im Workshop nicht (mehr). Standardmäßig ist jeder eingetragene Mod für den Serverstart erforderlich – kann er nicht geladen werden, startet der Server nicht.

**Lösung:**

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod-Einträge prüfen</b><br>
   Öffne die Datei `config.json` und vergleiche `modId` und `version` jedes Mods mit den Angaben im [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop). Welcher Mod betroffen ist, siehst du in der Konsole bzw. im [Server-Log](server-log-auslesen.md).

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

### Optionale Mods kennzeichnen

Mods, ohne die dein Server auch laufen kann, kannst du mit `"required": false` als optional markieren. Kann ein solcher Mod nicht aus dem Workshop geladen werden, entfernt der Server ihn automatisch aus der Liste, schreibt eine Warnung ins Log und startet trotzdem.

:::: tip Beispiel
```json
"mods": [
  {
    "modId": "59655E11FDD04B97",
    "name": "Raid on Saint Pierre",
    "required": false
  }
]
```
::::

:::: warning Achtung
Markiere nur Mods als optional, die nicht für dein Szenario gebraucht werden. Fehlt z.B. der Mod, der dein Workshop-Szenario enthält, kann der Server das Szenario nicht laden.
::::

### Mods auf die neueste Version bringen

Steht in der `config.json` bei einem Mod eine feste `"version"`, bleibt dein Server auf genau dieser Mod-Version – auch wenn im Workshop längst eine neuere erschienen ist. Möchtest du die neueste Version verwenden, hast du zwei Möglichkeiten:

- **Version aktualisieren:** Trage die aktuelle Versionsnummer aus dem [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) ein – so wie es auch [Szenario ändern](szenario-aendern.md) für Workshop-Szenarien beschreibt.
- **Version weglassen:** Der Parameter `"version"` ist optional. Fehlt er, verwendet der Server automatisch die neueste Version des Mods.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod-Version anpassen</b><br>
   Öffne die Datei `config.json` und aktualisiere im Bereich `"mods"` die `"version"` des Mods oder entferne die Zeile ganz.

   :::: tip Beispiel
   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985"
     }
   ]
   ```
   ::::

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – entfernst du die letzte Zeile eines Eintrags, muss auch das Komma in der Zeile davor weg.
   ::::

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

Wie du Mods einträgst, zeigt [Mods hinzufügen](mods-hinzufuegen.md).

## Konsolenspieler können nicht beitreten

**Ursache:** Die Verwaltung aktiviert Crossplay bei jedem Serverstart automatisch. Können Spieler auf Xbox oder PlayStation 5 trotzdem nicht beitreten, können die Mods deines Servers die Ursache sein: Nicht jeder Mod ist auf jeder Plattform verfügbar.

**Lösung:**

- Prüfe im [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop), ob alle Mods deines Servers auf der Plattform deiner Spieler verfügbar sind, und entferne Mods, die das nicht sind.
- Teste im Zweifel kurz ohne Mods, ob Konsolenspieler dann beitreten können. So siehst du, ob die Mods die Ursache sind.
- Lass **Battle-Eye** in den Einstellungen aktiviert (`true`). Ohne BattlEye wird dein Server PlayStation-5-Spielern im Server-Browser nicht angezeigt.

Mehr dazu findest du in [Crossplay aktivieren](crossplay-aktivieren.md).

## RCON funktioniert nicht

**Ursache:** RCON startet nur, wenn ein gültiges Passwort gesetzt ist. Das Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten – sonst startet RCON nicht.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>RCON Passwort anpassen</b><br>
   Trage im Feld **RCON Passwort** ein Passwort mit mindestens 3 Zeichen und ohne Leerzeichen ein, z.B. `MeinRconPasswort123`.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

Wie du dich anschließend mit RCON verbindest, zeigt [RCON verwenden](rcon-verwenden.md).

## Admin-Login mit #login schlägt fehl

**Ursache:** Das Admin-Passwort unterstützt keine Leerzeichen. Enthält das Feld **Admin Passwort** ein Leerzeichen, funktioniert der Login mit `#login` nicht.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Admin Passwort anpassen</b><br>
   Trage im Feld **Admin Passwort** ein Passwort ohne Leerzeichen ein, z.B. `MeinAdminPasswort123`.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

Wie du dich anschließend als Admin einloggst, zeigt [Admin werden](admin-werden.md).

:::: tip Tipp
Spieler, deren SteamID64 in der Liste `"admins"` der `config.json` steht, brauchen kein Admin Passwort, um sich mit `#login` einzuloggen. Wie du sie einträgst, zeigt [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Server fährt herunter, wenn die Backend-Verbindung abbricht

**Ursache:** Verliert der Server die Verbindung zum Backend von Arma Reforger, fährt er standardmäßig automatisch herunter. Auslöser sind Fehler bei den sogenannten Room Requests – den Anfragen des Servers an das Backend.

**Lösung:** Mit dem Parameter `disableServerShutdown` im Bereich `"operating"` verhinderst du, dass der Server in diesem Fall herunterfährt.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Parameter hinzufügen</b><br>
   Öffne die Datei `config.json`. Gibt es noch keinen Bereich `"operating"`, füge ihn auf oberster Ebene hinzu – z.B. direkt nach dem Bereich `"game"`, getrennt durch ein Komma:

   ```json
   "operating": {
     "disableServerShutdown": true
   }
   ```

   Gibt es den Bereich `"operating"` bereits, ergänze dort nur die Zeile `"disableServerShutdown": true`.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Diese Einstellung greift nur bei Verbindungsproblemen zum Backend. Bei anderen Ursachen, z.B. einer beschädigten `config.json`, fährt der Server weiterhin herunter.
::::

## Falsche Spieleranzahl im Server-Browser

**Ursache:** Weicht die im Server-Browser angezeigte Spieleranzahl von der tatsächlichen ab, ist möglicherweise der Parameter `lobbyPlayerSynchronise` im Bereich `"operating"` auf `false` gesetzt. Ist er aktiviert, meldet der Server die Liste der verbundenen Spieler regelmäßig an das Backend – genau das behebt die Abweichung zwischen realer und angezeigter Spieleranzahl.

**Lösung:** Der Parameter ist standardmäßig aktiviert. So prüfst du, ob er in deiner `config.json` abgeschaltet wurde:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>lobbyPlayerSynchronise prüfen</b><br>
   Öffne die Datei `config.json` und prüfe, ob im Bereich `"operating"` der Wert `"lobbyPlayerSynchronise": false` steht. Falls ja, setze ihn auf `true` oder entferne die Zeile.

   :::: tip Beispiel
   ```json
   "operating": {
     "lobbyPlayerSynchronise": true
   }
   ```
   ::::

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.
   ::::

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Server ist überlastet oder ruckelt

**Ursache:** Viele Spieler, KI-Einheiten, große Sichtweiten oder umfangreiche Mods können deinen Server stark auslasten. Die Folge sind Ruckler, Verzögerungen oder ein niedriger Server-FPS-Wert.

**Lösung:** Wie du die Last senkst – z.B. über **Maximale FPS**, Sichtweiten oder ein KI-Limit – zeigt dir [Performance verbessern](performance-verbessern.md).
