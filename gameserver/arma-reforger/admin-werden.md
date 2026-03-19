---
description: Admin auf einem Arma Reforger Server werden
---

# So wirst du Admin auf einem Arma Reforger Server

Es gibt zwei Möglichkeiten, Admin-Rechte auf deinem Arma Reforger Server zu erhalten: über ein Admin-Passwort oder über deine Steam64-ID.

## Admin-Passwort festlegen

1. <b>Dashboard öffnen</b><br>
   Öffne dein Dashboard und wähle deinen Arma Reforger Server aus.

2. <b>Passwort setzen</b><br>
   Navigiere zu den Einstellungen und trage unter `Admin Passwort` dein gewünschtes Passwort ein.

3. <b>Server neustarten</b><br>
   Speichere die Einstellungen und starte den Server neu.

:::: warning Wichtig
Das Admin-Passwort muss mindestens 3 Zeichen lang sein und darf keine Leerzeichen enthalten.
::::

## Permanente Admins über Steam64-ID

Alternativ kannst du Spieler dauerhaft als Admin eintragen, sodass sie sich nicht jedes Mal einloggen müssen.

1. <b>Config öffnen</b><br>
   Öffne die Datei `config.json` und suche den Eintrag `"admins"` im Bereich `"game"`.

2. <b>Steam64-IDs eintragen</b><br>
   Trage die Steam64-IDs der gewünschten Admins ein:

    ```json
    "game": {
      "admins": [
        "76561198XXXXXXXXX",
        "76561198YYYYYYYYY"
      ]
    }
    ```

3. <b>Server neustarten</b><br>
   Speichere die Änderungen und starte den Server neu.

:::: tip Tipp
Deine Steam64-ID findest du z.B. über unsere Anleitung [SteamID64 herausfinden](../steamid64-herausfinden.md).
::::

## Ingame als Admin einloggen

1. <b>Chat öffnen</b><br>
   Trete deinem Server bei und öffne den Chat mit der Taste `/`.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl ein:

    ```
    #login DeinAdminPasswort
    ```

3. <b>Login bestätigen</b><br>
   Nach erfolgreichem Login erscheint eine Bestätigung.

:::: info Info
Mit `#logout` kannst du dich wieder vom Admin-Status abmelden. Mit `#roles` kannst du prüfen, welche Rechte du aktuell besitzt.
::::

## Nützliche Admin-Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `#login <passwort>` | Als Admin einloggen |
| `#logout` | Admin-Status abmelden |
| `#roles` | Aktuelle Rechte anzeigen |
| `#players` | Alle Spieler mit IDs auflisten |
| `#id` | Eigene Spieler-ID anzeigen |
| `#restart` | Laufendes Szenario neustarten |
| `#shutdown` | Server herunterfahren |
