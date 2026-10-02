---
slug: "server-probleme-beheben"
language: "de"
title: "So behebst Du häufige Probleme auf Deinem Arma Reforger Server"
description: "Häufige Probleme auf einem Arma Reforger Server finden und beheben – Startfehler, Server-Browser, Versionen, Mods, Crossplay, RCON und Admin-Login"
tags: []
date: "2026-10-02"
visibility: "public"
updated: "2026-10-02"
cta: "gameserver"
product_keys: ["arma-reforger"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Probleme beheben"
sort: 13
related: ["gameserver/arma-reforger/read-server-log", "gameserver/arma-reforger/add-mods", "gameserver/arma-reforger/enable-crossplay", "gameserver/arma-reforger/control-automatic-updates"]
---

Startet Dein Arma Reforger Server nicht, taucht er nicht im Server-Browser auf oder können Spieler nicht beitreten, steckt meist eine von wenigen typischen Ursachen dahinter. Diese Anleitung zeigt Dir die häufigsten Probleme, ihre Ursache und die passende Lösung.

> [!IMPORTANT]
> Erstelle vor jeder Änderung an Deinem Server ein [Backup](/tutorials/gameserver/create-backup). So kannst Du jederzeit zum letzten funktionierenden Stand zurückkehren.

## Zuerst die Logs prüfen

Fast jedes Problem hinterlässt Spuren in der Ausgabe des Servers. Bevor Du etwas änderst, wirf deshalb einen Blick hinein:

- **Konsole**: In der Verwaltung siehst Du die Ausgabe des Servers live. Die letzten Zeilen vor einem Absturz oder Abbruch sind meist die entscheidenden.
- **Log-Dateien**: Die vollständigen Logs liegen auf Deinem Server im Ordner `/profile/profile/logs/`. Wie Du sie findest und liest, zeigt Dir [Server-Log auslesen](/tutorials/gameserver/arma-reforger/read-server-log).

> [!TIP]
> Wenn Du ein Support-Ticket erstellst, schicke die passende Log-Datei direkt mit – so kann Dir das Team deutlich schneller helfen.

## Server startet nach einer Änderung an der config.json nicht

**Ursache:** Die `config.json` ist kein gültiges JSON mehr – schon ein fehlendes oder überzähliges Komma, eine fehlende Klammer oder ein fehlendes Anführungszeichen reicht.

Startet der Server zwar, aber eine Einstellung wirkt nicht, liegt es oft an der Schreibweise: Der Server achtet bei den Parametern in der `config.json` auf Groß- und Kleinschreibung. Ein Schlüssel mit falscher Schreibweise, z.B. `vonDisableUI` statt `VONDisableUI`, ist für den Server ein anderer Parameter und wirkt nicht wie gewünscht.

**Lösung:**

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **config.json prüfen**\
   Öffne die Datei `config.json` im Hauptverzeichnis Deines Servers und kopiere ihren Inhalt in einen JSON-Formatter wie [JSONLint](https://jsonlint.com/). Der Formatter zeigt Dir die Zeile, in der der Fehler steckt.

4. **Fehler beheben**\
   Korrigiere die gemeldete Stelle und prüfe außerdem die Schreibweise der Schlüssel, die Du geändert hast. Die richtige Schreibweise findest Du in [Server konfigurieren](/tutorials/gameserver/arma-reforger/configure-server).

5. **Server starten**\
   Speichere die Datei und starte Deinen Server. Prüfe in der Konsole, ob er jetzt ohne Fehler startet.

> [!NOTE]
> Einige Werte der `config.json` – z.B. Servername, Passwörter, Szenario ID, maximale Spieleranzahl, Sichtbarkeit, Third Person und Battle-Eye – überschreibt die Verwaltung bei jedem Serverstart mit den Werten aus den **Einstellungen**. Änderungen an diesen Werten nimmst Du deshalb immer in der Verwaltung vor, nicht in der Datei.

## Server wird im Server-Browser nicht angezeigt

**Ursache:** In den Einstellungen ist **Sichtbar im Server-Browser** auf `false` gesetzt. Prüfe außerdem in der Konsole, ob der Start bereits abgeschlossen ist, bevor Du in der Serverliste suchst.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Sichtbarkeit aktivieren**\
   Setze das Feld **Sichtbar im Server-Browser** auf `true`.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu. Warte, bis der Server in der Konsole vollständig gestartet ist, und aktualisiere dann die Serverliste im Spiel.

> [!TIP]
> Unabhängig vom Server-Browser können Deine Spieler auch direkt über IP und Port beitreten. Wie das geht, zeigt [Server beitreten](/tutorials/gameserver/arma-reforger/join-server).

## Versionskonflikt beim Beitreten

**Ursache:** Spieler erhalten beim Beitreten eine Meldung über eine nicht passende Version oder der Server bleibt auf einer alten Version, obwohl das Spiel bereits aktualisiert wurde. Meist ist in den Einstellungen **Auto Update** auf `0` gesetzt – dann wird der Server beim Start nicht aktualisiert.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Auto Update aktivieren**\
   Setze das Feld **Auto Update** auf `1`.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu. Der Server wird dabei auf die aktuelle Version gebracht.

Mehr dazu findest Du in [Automatische Updates steuern](/tutorials/gameserver/arma-reforger/control-automatic-updates).

## Mod-Download schlägt fehl und der Server startet nicht

**Ursache:** Eine `modId` ist falsch geschrieben oder eine eingetragene `version` existiert im Workshop nicht (mehr). Standardmäßig ist jeder eingetragene Mod für den Serverstart erforderlich – kann er nicht geladen werden, startet der Server nicht.

**Lösung:**

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod-Einträge prüfen**\
   Öffne die Datei `config.json` und vergleiche `modId` und `version` jedes Mods mit den Angaben im [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop). Welcher Mod betroffen ist, siehst Du in der Konsole bzw. im [Server-Log](/tutorials/gameserver/arma-reforger/read-server-log).

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

### Optionale Mods kennzeichnen

Mods, ohne die Dein Server auch laufen kann, kannst Du mit `"required": false` als optional markieren. Kann ein solcher Mod nicht aus dem Workshop geladen werden, entfernt der Server ihn automatisch aus der Liste, schreibt eine Warnung ins Log und startet trotzdem.

> [!TIP]
> **Beispiel**
>
> ```json
> "mods": [
>   {
>     "modId": "59655E11FDD04B97",
>     "name": "Raid on Saint Pierre",
>     "required": false
>   }
> ]
> ```

> [!WARNING]
> Markiere nur Mods als optional, die nicht für Dein Szenario gebraucht werden. Fehlt z.B. der Mod, der Dein Workshop-Szenario enthält, kann der Server das Szenario nicht laden.

### Mods auf die neueste Version bringen

Steht in der `config.json` bei einem Mod eine feste `"version"`, bleibt Dein Server auf genau dieser Mod-Version – auch wenn im Workshop längst eine neuere erschienen ist. Möchtest Du die neueste Version verwenden, hast Du zwei Möglichkeiten:

- **Version aktualisieren:** Trage die aktuelle Versionsnummer aus dem [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) ein – so wie es auch [Szenario ändern](/tutorials/gameserver/arma-reforger/change-scenario) für Workshop-Szenarien beschreibt.
- **Version weglassen:** Der Parameter `"version"` ist optional. Fehlt er, verwendet der Server automatisch die neueste Version des Mods.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mod-Version anpassen**\
   Öffne die Datei `config.json` und aktualisiere im Bereich `"mods"` die `"version"` des Mods oder entferne die Zeile ganz.

   > [!TIP]
   > **Beispiel**
   >
   > ```json
   > "mods": [
   >   {
   >     "modId": "596338F447D34E39",
   >     "name": "NightOps - Everon 1985"
   >   }
   > ]
   > ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – entfernst Du die letzte Zeile eines Eintrags, muss auch das Komma in der Zeile davor weg.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

Wie Du Mods einträgst, zeigt [Mods hinzufügen](/tutorials/gameserver/arma-reforger/add-mods).

## Konsolenspieler können nicht beitreten

**Ursache:** Die Verwaltung aktiviert Crossplay bei jedem Serverstart automatisch. Können Spieler auf Xbox oder PlayStation 5 trotzdem nicht beitreten, können die Mods Deines Servers die Ursache sein: Nicht jeder Mod ist auf jeder Plattform verfügbar.

**Lösung:**

- Prüfe im [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop), ob alle Mods Deines Servers auf der Plattform Deiner Spieler verfügbar sind, und entferne Mods, die das nicht sind.
- Teste im Zweifel kurz ohne Mods, ob Konsolenspieler dann beitreten können. So siehst Du, ob die Mods die Ursache sind.
- Lass **Battle-Eye** in den Einstellungen aktiviert (`true`). Ohne BattlEye wird Dein Server PlayStation-5-Spielern im Server-Browser nicht angezeigt.

Mehr dazu findest Du in [Crossplay aktivieren](/tutorials/gameserver/arma-reforger/enable-crossplay).

## RCON funktioniert nicht

**Ursache:** RCON startet nur, wenn ein gültiges Passwort gesetzt ist. Das Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten – sonst startet RCON nicht.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **RCON Passwort anpassen**\
   Trage im Feld **RCON Passwort** ein Passwort mit mindestens 3 Zeichen und ohne Leerzeichen ein, z.B. `MeinRconPasswort123`.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

Wie Du Dich anschließend mit RCON verbindest, zeigt [RCON verwenden](/tutorials/gameserver/arma-reforger/use-rcon).

## Admin-Login mit #login schlägt fehl

**Ursache:** Das Admin-Passwort unterstützt keine Leerzeichen. Enthält das Feld **Admin Passwort** ein Leerzeichen, funktioniert der Login mit `#login` nicht.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Admin Passwort anpassen**\
   Trage im Feld **Admin Passwort** ein Passwort ohne Leerzeichen ein, z.B. `MeinAdminPasswort123`.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

Wie Du Dich anschließend als Admin einloggst, zeigt [Admin werden](/tutorials/gameserver/arma-reforger/become-admin).

> [!TIP]
> Spieler, deren SteamID64 in der Liste `"admins"` der `config.json` steht, brauchen kein Admin Passwort, um sich mit `#login` einzuloggen. Wie Du sie einträgst, zeigt [Admin hinzufügen](/tutorials/gameserver/arma-reforger/add-admin).

## Server fährt herunter, wenn die Backend-Verbindung abbricht

**Ursache:** Verliert der Server die Verbindung zum Backend von Arma Reforger, fährt er standardmäßig automatisch herunter. Auslöser sind Fehler bei den sogenannten Room Requests – den Anfragen des Servers an das Backend.

**Lösung:** Mit dem Parameter `disableServerShutdown` im Bereich `"operating"` verhinderst Du, dass der Server in diesem Fall herunterfährt.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Parameter hinzufügen**\
   Öffne die Datei `config.json`. Gibt es noch keinen Bereich `"operating"`, füge ihn auf oberster Ebene hinzu – z.B. direkt nach dem Bereich `"game"`, getrennt durch ein Komma:

   ```json
   "operating": {
     "disableServerShutdown": true
   }
   ```

   Gibt es den Bereich `"operating"` bereits, ergänze dort nur die Zeile `"disableServerShutdown": true`.

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!NOTE]
> Diese Einstellung greift nur bei Verbindungsproblemen zum Backend. Bei anderen Ursachen, z.B. einer beschädigten `config.json`, fährt der Server weiterhin herunter.

## Falsche Spieleranzahl im Server-Browser

**Ursache:** Weicht die im Server-Browser angezeigte Spieleranzahl von der tatsächlichen ab, ist möglicherweise der Parameter `lobbyPlayerSynchronise` im Bereich `"operating"` auf `false` gesetzt. Ist er aktiviert, meldet der Server die Liste der verbundenen Spieler regelmäßig an das Backend – genau das behebt die Abweichung zwischen realer und angezeigter Spieleranzahl.

**Lösung:** Der Parameter ist standardmäßig aktiviert. So prüfst Du, ob er in Deiner `config.json` abgeschaltet wurde:

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **lobbyPlayerSynchronise prüfen**\
   Öffne die Datei `config.json` und prüfe, ob im Bereich `"operating"` der Wert `"lobbyPlayerSynchronise": false` steht. Falls ja, setze ihn auf `true` oder entferne die Zeile.

   > [!TIP]
   > **Beispiel**
   >
   > ```json
   > "operating": {
   >   "lobbyPlayerSynchronise": true
   > }
   > ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server nicht startet.

4. **Server starten**\
   Speichere die Datei und starte Deinen Server.

## Server ist überlastet oder ruckelt

**Ursache:** Viele Spieler, KI-Einheiten, große Sichtweiten oder umfangreiche Mods können Deinen Server stark auslasten. Die Folge sind Ruckler, Verzögerungen oder ein niedriger Server-FPS-Wert.

**Lösung:** Wie Du die Last senkst – z.B. über **Maximale FPS**, Sichtweiten oder ein KI-Limit – zeigt Dir [Performance verbessern](/tutorials/gameserver/arma-reforger/improve-performance).
