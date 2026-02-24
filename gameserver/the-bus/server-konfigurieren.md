---
description: The Bus Server über die Verwaltung und das Admin-Menü konfigurieren
---

# So konfigurierst du deinen The Bus Server

Deinen The Bus Server kannst du über die **Verwaltung** und das **Admin-Menü im Spiel** anpassen.

## Einstellungen in der Verwaltung

Öffne die Verwaltung deines Servers und navigiere zu den **Einstellungen**. Dort kannst du folgende Optionen anpassen:

| Einstellung | Beschreibung |
|-------------|-------------|
| **Server Name** | Der angezeigte Name deines Servers |
| **Server Passwort** | Passwort, das Spieler zum Beitreten eingeben müssen |
| **Admin Passwort** | Passwort, um den Zugang zum Admin-Menü zu schützen |
| **Maximale Spieler** | Die maximale Anzahl an Spielern auf dem Server |
| **Serverliste** | Server in der öffentlichen Serverliste anzeigen |
| **Branch** | Spielversion auswählen (z.B. `beta`) |

:::: warning Wichtig
Es wird dringend empfohlen, ein Admin-Passwort zu setzen. Ohne Passwort kann jeder Spieler das Admin-Menü öffnen und Einstellungen ändern.
::::

## Admin-Menü im Spiel

Spieler mit Owner- oder Admin-Rechten können über das Pausenmenü das **Admin-Menü** öffnen.

Folgende Einstellungen sind verfügbar:

| Einstellung | Beschreibung |
|-------------|-------------|
| **Map** | Die aktive Karte auswählen |
| **Fahrplan** | Den Fahrplan (Operating Plan) für Busrouten festlegen |
| **Wetter** | Das aktuelle Wetter ändern |

## Verfügbare Befehle

Die folgenden Befehle können im Ingame-Chat eingegeben werden und erfordern Owner- oder Admin-Rechte.

| Befehl | Beschreibung |
|--------|-------------|
| `/commands` | Alle verfügbaren Befehle auflisten |
| `/list` | Alle Spieler anzeigen |
| `/owner <spieler>` | Spieler zum Owner befördern |
| `/admin <spieler>` | Spieler zum Admin befördern |
| `/mod <spieler>` | Spieler zum Moderator befördern |
| `/user <spieler>` | Spieler zum User zurückstufen |
| `/kick <spieler>` | Spieler vom Server kicken |
| `/ban <spieler>` | Spieler permanent bannen |
| `/unban <spieler>` | Spieler entbannen |
| `/tempban <spieler> <minuten>` | Spieler temporär bannen |
| `/mute <spieler>` | Spieler stummschalten |
| `/unmute <spieler>` | Stummschaltung aufheben |
| `/say <nachricht>` | Nachricht im Chat senden |
| `/send <nachricht>` | Nachricht im Chat senden |
| `/whisper <spieler> <nachricht>` | Private Nachricht an einen Spieler senden |
| `/time <zeit>` | Tageszeit ändern |
| `/date <datum>` | Datum ändern |
| `/weather <wetter>` | Wetter ändern |
| `/map <map>` | Aktive Karte ändern |
| `/mapList` | Verfügbare Maps anzeigen |
| `/operatingPlan <plan>` | Fahrplan festlegen |
| `/fleet <flotte>` | Flotte festlegen |
| `/tp <spieler> <x> <y> <z>` | Spieler zu Koordinaten teleportieren |
| `/tpd <spieler> <x> <y> <z>` | Spieler mit Blickrichtung teleportieren |
| `/fastTravel` | Schnellreise aktivieren/deaktivieren |
| `/traffic <wert>` | Verkehrsdichte ändern |
| `/tickets <0-100>` | Ticketchance ändern (Prozent) |
| `/aiBus` | KI-Busse aktivieren/deaktivieren |
| `/spawnBus` | Bus an Haltestelle spawnen |
| `/clearBusses` | Ungesteuerte Busse auf der Karte löschen |
| `/dlc` | DLC aktivieren oder deaktivieren |
| `/serverName <name>` | Servername ändern |
| `/serverDescription <text>` | Serverbeschreibung ändern |
| `/serverLink <link>` | Server-Links setzen |
| `/serverPublic` | Server öffentlich/privat schalten |
| `/serverPassword <passwort>` | Server-Passwort setzen |
| `/adminPassword <passwort>` | Admin-Passwort setzen |
| `/maxPlayers <anzahl>` | Maximale Spieleranzahl setzen |
| `/reload` | Server neu laden |
| `/exit` | Server herunterfahren |
| `/stop` | Server herunterfahren |
