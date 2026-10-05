---
description: The Bus Server über die Verwaltung, das Admin-Menü und die ServerSettings.cfg konfigurieren
---

# So konfigurierst du deinen The Bus Server

Deinen The Bus Server kannst du über die **Verwaltung**, das **Admin-Menü im Spiel** und die Datei `ServerSettings.cfg` anpassen.

## Einstellungen in der Verwaltung

In der Verwaltung kannst du folgende Optionen anpassen:

| Einstellung | Beschreibung |
|-------------|-------------|
| **Server Name** | Der angezeigte Name deines Servers |
| **Server Passwort** | Passwort, das Spieler zum Beitreten eingeben müssen |
| **Admin Passwort** | Passwort für das Admin-Menü. Standard ist `BitteAendereMich`, das Feld darf nicht leer sein. |
| **Maximale Spieler** | Die maximale Anzahl an Spielern auf dem Server |
| **Serverliste** | `1` = Server wird in der öffentlichen Serverliste angezeigt, `0` = Server ist dort ausgeblendet |
| **Auto Update** | `1` = Server wird beim Start automatisch aktualisiert, `0` = kein automatisches Update |

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Wert ändern</b><br>
   Passe das gewünschte Feld an.

4. <b>Speichern und neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Bei jedem Start schreibt die Verwaltung diese Werte in die Datei `/TheBus/Settings/ServerSettings.cfg` (Schlüssel `serverName`, `serverPassword`, `adminPassword`, `listServerAsPublic` und `maxPlayerCount`). Änderungen an diesen Werten, die du im Spiel oder direkt in der Datei vornimmst, werden beim nächsten Neustart wieder zurückgesetzt. Ändere diese Einstellungen deshalb immer unter **Einstellungen** in der Verwaltung.
::::

:::: warning Achtung
Ändere das Standard-Admin-Passwort `BitteAendereMich` sofort. Wer das Admin-Passwort kennt, erhält Zugriff auf das Admin-Menü und damit auf die Servereinstellungen.
::::

## Admin-Menü im Spiel

Über das Pausenmenü öffnest du das **Admin-Menü** (geschützt durch das Admin-Passwort). Darin lassen sich unter anderem Map, Fahrplan und Flotte einstellen:

| Einstellung | Beschreibung |
|-------------|-------------|
| **Map** | Die aktive Karte auswählen |
| **Fahrplan** | Den Fahrplan (Operating Plan) für Busrouten festlegen |
| **Flotte** | Die verfügbaren Busse (Fleet) festlegen |

:::: info Hinweis
Änderungen an Map, Flotte und Fahrplan im Admin-Menü werden in den Servereinstellungen gespeichert und bleiben nach einem Neustart erhalten.
::::

Wie du Map, Fahrplan und Flotte im Detail änderst, erfährst du in den Anleitungen [Map ändern](map-aendern.md), [Fahrplan ändern](fahrplan-aendern.md) und [Flotte ändern](flotte-aendern.md). Wie du eine Karte aus einem DLC verwendest, erfährst du unter [DLC-Karte hinzufügen](dlc-karte-hinzufuegen.md).

## Weitere Einstellungen in der ServerSettings.cfg

Alle übrigen Einträge der `/TheBus/Settings/ServerSettings.cfg` überschreibt die Verwaltung nicht. Diese kannst du direkt in der Datei ändern:

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei bearbeiten</b><br>
   Öffne die Datei `/TheBus/Settings/ServerSettings.cfg` (JSON-Format) und ändere den gewünschten Wert.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Einstellungen nicht mehr einlesen kann.
   ::::

4. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server wieder.

## Verfügbare Befehle

Die folgenden Befehle gibst du im Ingame-Chat mit einem vorangestellten Schrägstrich ein, z.B. `/list`. Dafür benötigst du Owner- oder Admin-Rechte, siehe [Admin hinzufügen](admin-hinzufuegen.md).

:::: info Hinweis
Befehle gibst du ausschließlich im Ingame-Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen. Mit `/commands` lässt du dir alle Befehle im Spiel anzeigen.
::::

| Befehl | Beschreibung |
|--------|-------------|
| `/list` | Spieler anzeigen |
| `/kick` | Spieler kicken |
| `/exit` | Server beenden |
| `/stop` | Server beenden |
| `/ban` | Spieler bannen |
| `/unban` | Bann eines Spielers aufheben |
| `/tempban` | Spieler für eine bestimmte Zeit bannen |
| `/send` | Nachricht in den Chat senden |
| `/say` | Nachricht in den Chat senden |
| `/clearBusses` | Ungesteuerte Busse auf der Karte löschen |
| `/mod` | Spieler zum Moderator machen |
| `/admin` | Spieler zum Admin machen |
| `/user` | Spieler zum normalen Spieler (User) machen |
| `/whisper` | Private Nachricht an einen anderen Spieler senden |
| `/operatingPlan` | Betriebsplan (Fahrplan) festlegen |
| `/fleet` | Flotte festlegen |
| `/map` | Aktuelle Karte festlegen |
| `/reload` | Server neu laden |
| `/date` | Aktuelles Datum festlegen |
| `/time` | Aktuelle Uhrzeit festlegen |
| `/useRealTime` | Echtzeit aktivieren (UseRealTime) |
| `/weather` | Wetter festlegen |
| `/mapList` | Verfügbare Karten anzeigen |
| `/tp` | Spieler zu den Koordinaten x y z teleportieren |
| `/tpd` | Spieler richtungsbezogen um x y z teleportieren |
| `/commands` | Alle Befehle anzeigen |
| `/mute` | Spieler für den gesamten Server stummschalten |
| `/unmute` | Serverweite Stummschaltung eines Spielers aufheben |
| `/spawnBus` | Bus an einer Haltestelle spawnen |
| `/dlc` | DLC aktivieren oder deaktivieren |
| `/tickets` | Ticketchance ändern (`0` bis `100`) |
| `/traffic` | Verkehrsdichte ändern |
| `/aiBus` | KI-Busse aktivieren oder deaktivieren |
| `/version` | Version ausgeben |
| `/tickrate` | Tickrate alle 10 Sekunden ins Log schreiben |

Den Owner-Rang vergibst du mit `/owner <spielername>`. Dieser Befehl stammt aus dem offiziellen [Server-Guide von TML-Studios](https://steamcommunity.com/sharedfiles/filedetails/?id=3464410642) und erscheint nicht in der Ausgabe von `/commands`. Mehr dazu unter [Admin hinzufügen](admin-hinzufuegen.md).

:::: warning Achtung
Stoppe oder starte deinen Server immer über die Verwaltung und nicht mit `/exit` oder `/stop` im Spiel.
::::

Läuft dein Server nicht wie erwartet, hilft dir die Anleitung [Server-Probleme beheben](server-probleme-beheben.md) weiter.
