---
description: Server Passwort auf einem Enshrouded Server ändern
---

# So änderst du das Server Passwort deines Enshrouded Servers

In Enshrouded werden die Passwörter über **Usergruppen** in der Datei `enshrouded_server.json` verwaltet. Jede Gruppe hat ein eigenes Passwort und eigene Rechte. Spieler erhalten je nach eingegebenem Passwort die Rechte der entsprechenden Gruppe.

## Passwort ändern

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>enshrouded_server.json öffnen</b><br>
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis und suche den Abschnitt `userGroups`.

4. <b>Passwort anpassen</b><br>
   Trage im Feld `password` der gewünschten Gruppe dein neues Passwort ein:

   ```json
   "userGroups": [
       {
           "name": "Admin",
           "password": "DEIN_ADMIN_PASSWORT",
           "canKickBan": true,
           "canAccessInventories": true,
           "canEditWorld": true,
           "canEditBase": true,
           "canExtendBase": true,
           "reservedSlots": 0
       },
       {
           "name": "Friend",
           "password": "DEIN_FRIEND_PASSWORT",
           "canKickBan": false,
           "canAccessInventories": true,
           "canEditWorld": true,
           "canEditBase": true,
           "canExtendBase": false,
           "reservedSlots": 0
       },
       {
           "name": "Guest",
           "password": "DEIN_GUEST_PASSWORT",
           "canKickBan": false,
           "canAccessInventories": false,
           "canEditWorld": true,
           "canEditBase": false,
           "canExtendBase": false,
           "reservedSlots": 0
       },
       {
           "name": "Visitor",
           "password": "DEIN_VISITOR_PASSWORT",
           "canKickBan": false,
           "canAccessInventories": false,
           "canEditWorld": false,
           "canEditBase": false,
           "canExtendBase": false,
           "reservedSlots": 0
       }
   ]
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Usergruppen

| Gruppe | Rechte |
|--------|--------|
| `Admin` | Volle Rechte: kicken/bannen, Inventare, Welt und Basis bearbeiten und erweitern |
| `Friend` | Inventare, Welt und Basis bearbeiten — aber keine Basis erweitern, kein Kick/Ban |
| `Guest` | Nur die Welt bearbeiten |
| `Visitor` | Keine Bearbeitungsrechte — nur beitreten und umsehen |

:::: warning Achtung
Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.
::::

:::: tip Tipp
Um eine Gruppe ohne Passwort zugänglich zu machen, lasse das `password`-Feld leer (`""`). Spieler können dieser Gruppe dann ohne Passwort beitreten.
::::
