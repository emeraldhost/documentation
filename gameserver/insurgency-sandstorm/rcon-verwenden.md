---
description: "RCON auf einem Insurgency: Sandstorm Server verwenden"
---

# So verwendest du RCON auf deinem Insurgency: Sandstorm Server

Über RCON kannst du deinen Server fernsteuern und moderieren — z.B. Spieler kicken oder bannen, die Map wechseln oder Nachrichten senden. Die Befehle lassen sich über ein RCON-Tool oder direkt über die Server-Konsole in der Verwaltung ausführen.

## RCON-Zugangsdaten

RCON ist auf deinem Server **bereits aktiviert** — du musst nichts in der Konfiguration einrichten. Du benötigst lediglich das RCON-Passwort und den RCON-Port:

- <b>RCON-Passwort</b><br>
  Das Passwort findest und änderst du in der Verwaltung im Feld **RCON Passwort**.

- <b>RCON-Port</b><br>
  Den RCON-Port findest du in der Verwaltung in der **Port-Übersicht**.

:::: warning Achtung
Behandle das RCON-Passwort wie ein Admin-Passwort und teile es nur mit vertrauenswürdigen Personen. Ändere das Standard-Passwort vor dem ersten Einsatz.
::::

## Mit einem RCON-Tool verbinden

1. <b>RCON-Tool öffnen</b><br>
   Öffne ein RCON-Tool wie **mcrcon** oder einen vergleichbaren RCON-Client.

2. <b>Verbindungsdaten eingeben</b><br>
   - **Host:** die IP-Adresse deines Servers (ohne Port)
   - **Port:** der RCON-Port aus der Verwaltung
   - **Passwort:** dein RCON-Passwort aus der Verwaltung

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
