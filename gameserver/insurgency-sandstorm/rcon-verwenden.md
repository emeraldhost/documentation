---
description: "RCON auf einem Insurgency: Sandstorm Server verwenden"
---

# So verwendest du RCON auf deinem Insurgency: Sandstorm Server

Über RCON kannst du deinen Server fernsteuern und moderieren — z.B. Spieler kicken oder bannen, die Map wechseln oder Nachrichten senden. Die Befehle lassen sich über ein RCON-Tool oder direkt über die Server-Konsole in der Verwaltung ausführen.

## Schritt 1: RCON aktivieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Die Datei `Game.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. <b>RCON-Abschnitt eintragen</b><br>
   Füge den folgenden Abschnitt hinzu und ersetze `DEIN_RCON_PASSWORT` durch ein sicheres Passwort:

   ```ini
   [Rcon]
   bEnabled=True
   Password=DEIN_RCON_PASSWORT
   ListenPort=27015
   ```

   | Einstellung | Beschreibung |
   |-------------|--------------|
   | `bEnabled` | Aktiviert RCON (`True`/`False`) |
   | `Password` | Passwort für die RCON-Verbindung |
   | `ListenPort` | Port, auf dem RCON lauscht — wähle einen freien Port aus deiner Port-Übersicht in der Verwaltung |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Behandle das RCON-Passwort wie ein Admin-Passwort und teile es nur mit vertrauenswürdigen Personen. Bearbeite die `Game.ini` nur bei gestopptem Server.
::::

## Schritt 2: Mit einem RCON-Tool verbinden

1. <b>RCON-Tool öffnen</b><br>
   Öffne ein RCON-Tool wie **mcrcon** oder einen vergleichbaren RCON-Client.

2. <b>Verbindungsdaten eingeben</b><br>
   - **Host:** die IP-Adresse deines Servers (ohne Port)
   - **Port:** der unter `ListenPort` festgelegte RCON-Port
   - **Passwort:** dein RCON-Passwort aus Schritt 1

3. <b>Befehle ausführen</b><br>
   Nach erfolgreicher Verbindung kannst du die untenstehenden Befehle ausführen.

:::: tip Tipp
Du kannst RCON-Befehle auch direkt über die **Server-Konsole** in der Verwaltung eingeben — ganz ohne externes Tool.
::::

## RCON-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `help` | Zeigt eine Liste aller Befehle an |
| `listplayers` | Listet alle verbundenen Spieler auf |
| `kick [id/netid/name] [Grund]` | Kickt einen Spieler vom Server |
| `ban [id/netid/name] [Minuten] [Grund]` | Bannt einen Spieler für die angegebene Zeit |
| `permaban [id/netid/name] [Grund]` | Bannt einen Spieler dauerhaft |
| `unban [id/netid/name]` | Hebt den Bann eines Spielers auf |
| `listban` | Zeigt die Liste gebannter Spieler an |
| `say [Nachricht]` | Sendet eine Nachricht an alle Spieler |
| `travel [Travel-URL]` | Wechselt den Server auf eine andere Map |
| `travelscenario [Szenario]` | Wechselt auf ein anderes Szenario |
| `restartround [0, 1]` | Startet die aktuelle Runde neu (`1` tauscht zusätzlich die Teams) |
| `maps [Filter]` | Listet verfügbare Maps auf |
| `scenarios [Filter]` | Listet verfügbare Szenarien auf |
| `listgamemodeproperties [Filter]` | Listet alle Eigenschaften des aktuellen Spielmodus auf |
| `gamemodeproperty [Eigenschaft] [Wert]` | Setzt oder zeigt eine Spielmodus-Eigenschaft an |
