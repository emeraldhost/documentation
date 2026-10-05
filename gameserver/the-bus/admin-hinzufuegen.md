---
description: Admin auf einem The Bus Server hinzufügen
---

# So fügst du einen Admin auf einem The Bus Server hinzu

The Bus verwendet ein Rang-System mit vier Stufen. Du kannst Ränge über die `PlayerData.json` oder über Befehle im Spiel vergeben. Zusätzlich schützt das Admin-Passwort den Zugang zum Admin-Menü.

## Rang-System

| Rang | Beschreibung |
|------|-------------|
| **Owner** | Höchste Stufe |
| **Admin** | Zugriff auf das Admin-Menü ohne erneute Passworteingabe |
| **Moderator** | Wird wie Admins im Chat hervorgehoben |
| **User** | Keine zusätzlichen Rechte |

## So vergibst du Ränge über die PlayerData.json

:::: warning Achtung
Der Spieler muss sich mindestens einmal mit dem Server verbunden haben, damit ein Eintrag in der `PlayerData.json` vorhanden ist. Um dir selbst den Owner-Rang zu geben, tritt deinem Server deshalb zuerst einmal bei und führe danach die folgenden Schritte für deinen eigenen Eintrag aus.
::::

:::: tip Tipp
Erstelle vor dem Bearbeiten ein [Backup](backup-erstellen.md).
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `/TheBus/Saved/PlayerData.json`.

4. <b>Rang ändern</b><br>
   Suche den Eintrag des gewünschten Spielers und setze bei dem Feld mit seinem Rang den Wert auf `"Owner"`, `"Admin"` oder `"Moderator"`. Alle anderen Angaben des Eintrags lässt du unverändert.

   :::: tip Tipp
   Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server die Spielerdaten nicht mehr einlesen kann.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server wieder.

## So öffnest du das Admin-Menü mit dem Admin-Passwort

:::: warning Achtung
Das Standard-Admin-Passwort lautet `BitteAendereMich`. Ändere es in der Verwaltung unter **Einstellungen** im Feld **Admin Passwort**, denn jeder, der das Passwort kennt, kann das Admin-Menü öffnen. Mehr dazu findest du unter [Server konfigurieren](server-konfigurieren.md).
::::

1. <b>Admin-Menü öffnen</b><br>
   Öffne im Spiel das Pausenmenü und wähle das Admin-Menü.

2. <b>Admin-Passwort eingeben</b><br>
   Gib das Admin-Passwort deines Servers ein. Damit erhältst du Zugriff auf das Admin-Menü. Einen Rang bekommst du dadurch nicht – Ränge vergibst du über die `PlayerData.json` oder per Befehl.

:::: info Hinweis
Spieler mit dem Rang Admin werden beim Öffnen des Admin-Menüs nicht nach dem Passwort gefragt.
::::

## So vergibst du Ränge über Befehle

Als Owner kannst du anderen Spielern im Ingame-Chat über folgende Befehle Ränge zuweisen:

| Befehl | Beschreibung |
|--------|-------------|
| `/owner <spielername>` | Spieler zum Owner machen |
| `/admin <spielername>` | Spieler zum Admin machen |
| `/mod <spielername>` | Spieler zum Moderator machen |
| `/user <spielername>` | Spieler zum normalen Spieler (User) zurückstufen |

Ersetze `<spielername>` durch den Steam-Namen des Spielers, zum Beispiel:

```
/admin Spieler123
```

Die Namen aller Spieler auf dem Server zeigt dir `/list` an. Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen.

:::: info Hinweis
Der Befehl `/owner` stammt aus dem offiziellen [Server-Guide von TML-Studios](https://steamcommunity.com/sharedfiles/filedetails/?id=3464410642) und wird von `/commands` nicht mit aufgelistet. Gib die Befehle im Spiel über den Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
::::

## Admin-Menü im Spiel

Als Owner siehst du im Admin-Menü (Pausenmenü) zusätzliche Optionen, z.B. für:

- den Servernamen (siehe [Server konfigurieren](server-konfigurieren.md))
- die Karte (siehe [Map ändern](map-aendern.md))
- den Fahrplan (siehe [Fahrplan ändern](fahrplan-aendern.md))
- die Flotte (siehe [Flotte ändern](flotte-aendern.md))

:::: info Hinweis
Servername, Server-Passwort, Admin-Passwort, maximale Spieleranzahl und die Sichtbarkeit in der Serverliste setzt die Verwaltung bei jedem Start auf die Werte unter **Einstellungen** zurück. Ändere diese Werte deshalb in der Verwaltung.
::::
