---
description: Admin auf einem The Bus Server hinzufügen
---

# So fügst du einen Admin auf einem The Bus Server hinzu

The Bus verwendet ein Rang-System mit vier Stufen. Du kannst Spieler über die `PlayerData.json` oder über Befehle hinzufügen.

## Rang-System

| Rang | Beschreibung |
|------|-------------|
| **Owner** | Vollzugriff, höchste Berechtigungsstufe |
| **Admin** | Administrative Rechte, Zugriff auf das Admin-Menü ohne erneute Passworteingabe |
| **Moderator** | Moderationsrechte |
| **User** | Standard-Rang für alle Spieler |

## So vergibst du Ränge über die PlayerData.json

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Datei öffnen</b><br>
   Öffne die Datei `TheBus/Saved/PlayerData.json`.

3. <b>Rang ändern</b><br>
   Suche den gewünschten Spieler und ändere den Wert von `"perms"` auf `"Owner"`, `"Admin"` oder `"Moderator"`:

   ```json
   {
       "players": [
           {
               "name": "SpielerName",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Owner",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           },
           {
               "name": "AndererSpieler",
               "uniqueId": "|0002xxxxxxxxxxxxxxxxxxxxxxxxxxxx",
               "perms": "Admin",
               "banned": false,
               "unbanDate": "0001.01.01-00.00.00",
               "adminPasswordUsed": ""
           }
       ]
   }
   ```

4. <b>Server neu starten</b><br>
   Speichere die Änderungen und starte den Server neu.

:::: warning Wichtig
Der Spieler muss sich mindestens einmal mit dem Server verbunden haben, damit ein Eintrag in der `PlayerData.json` vorhanden ist.
::::

:::: tip Tipp
Tritt als Erstes deinem Server bei und vergib dir selbst den Owner-Rang, bevor andere Spieler beitreten.
::::

## So vergibst du Ränge über Befehle

Ränge können auch über Befehle vergeben werden – entweder über die Konsole in der Verwaltung oder direkt im Spiel.

| Befehl | Beschreibung |
|--------|-------------|
| `/owner <spielername>` | Spieler zum Owner befördern |
| `/admin <spielername>` | Spieler zum Admin befördern |
| `/mod <spielername>` | Spieler zum Moderator befördern |
| `/user <spielername>` | Spieler zum User zurückstufen |

:::: tip Tipp
Wenn du dir über die `PlayerData.json` den Owner-Rang vergeben hast, kannst du diese Befehle auch direkt über den Ingame-Chat eingeben.
::::

## Admin-Menü im Spiel

Spieler mit **Owner**- oder **Admin**-Rechten können über das Pausenmenü das **Admin-Menü** öffnen. Dort lassen sich folgende Einstellungen ändern:

- **Map-Auswahl**
- **Fahrplan** (Operating Plan)
- **Wetter**

:::: info Info
Es wird empfohlen, ein Admin-Passwort zu setzen, damit nicht jeder Spieler das Admin-Menü öffnen kann. Das Admin-Passwort lässt sich in der Verwaltung unter den Einstellungen festlegen.
::::
