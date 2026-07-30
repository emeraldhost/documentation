---
description: Einem Factorio Server beitreten
---

# So trittst du deinem Factorio Server bei

Factorio hat keinen Steam-Server-Browser für Mietserver. Du verbindest dich stattdessen direkt über die IP-Adresse und den Port deines Servers.

## Verbindungsdaten finden

:::: warning Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Factorio nutzt nur einen einzigen Port über **UDP** (Standard: `34197`) – einen separaten Query Port gibt es nicht.
::::

## Über Connect to address

1. <b>Factorio starten</b><br>
   Starte Factorio auf deinem PC.

2. <b>Multiplayer öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer**.

3. <b>Connect to address wählen</b><br>
   Klicke auf **Connect to address**.

4. <b>Serveradresse eintragen</b><br>
   Gib die IP-Adresse und den Port deines Servers ein, getrennt durch einen Doppelpunkt:

   :::: tip Beispiel
   ```
   123.45.67.89:34197
   ```
   ::::

5. <b>Verbinden</b><br>
   Bestätige die Eingabe. Ist auf dem Server ein Passwort gesetzt, wirst du danach zur Eingabe aufgefordert.

## Über die öffentliche Serverliste

Ist dein Server öffentlich gelistet, kannst du ihn auch über **Multiplayer** → **Browse public games** suchen und beitreten.

:::: info Hinweis
Damit dein Server dort erscheint, benötigst du gültige factorio.com-Zugangsdaten. Trage sie in der Verwaltung unter **Einstellungen** in den Feldern **Server Benutzername** und **Server Token** ein. Der Token ist sicherer als das Passwort und lässt sich auf factorio.com in deinem Profil abrufen.

Zusätzlich muss in der Datei `data/server-settings.json` die Sichtbarkeit auf öffentlich stehen. Die Datei bearbeitest du per [SFTP](../sftp-verbindung-herstellen.md):

```json
"visibility":
{
  "public": true
}
```

Starte deinen Server anschließend neu.
::::

:::: warning Achtung
Trage `username` und `token` nicht direkt in der Datei `data/server-settings.json` ein. Beide Werte werden bei jedem Serverstart aus den Feldern **Server Benutzername** und **Server Token** der Verwaltung überschrieben.
::::

:::: danger Wichtig
Client und Server müssen **exakt dieselbe Spielversion** und **dieselben Mods** verwenden. Factorio prüft dies per Prüfsumme und verweigert die Verbindung, wenn etwas abweicht.
::::

:::: info Hinweis
Standardmäßig ist auf einem Factorio-Server die Option `require_user_verification` aktiv. Spieler benötigen dadurch einen gültigen factorio.com-Account, um beitreten zu können.
::::
