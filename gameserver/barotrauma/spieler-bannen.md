---
description: Spieler auf einem Barotrauma Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Barotrauma Server

Du kannst Spieler über die Ingame-Konsole kicken, bannen und entbannen. Drücke **F3** oder die **Tilde-Taste (~)**, um die Konsole zu öffnen.

:::: tip Tipp
Verwende den Befehl `clientlist`, um eine Liste aller verbundenen Spieler mit ihren IDs anzuzeigen.
::::

## Spieler kicken

1. <b>Konsole öffnen</b><br>
   Drücke **F3** oder **~**, um die Konsole zu öffnen.

2. <b>Kick-Befehl eingeben</b><br>
   Gib folgenden Befehl ein:

   ```
   kick [name]
   ```

   Ersetze `[name]` durch den Namen des Spielers.

## Spieler bannen

1. <b>Konsole öffnen</b><br>
   Drücke **F3** oder **~**, um die Konsole zu öffnen.

2. <b>Ban-Befehl eingeben</b><br>
   Verwende einen der folgenden Befehle:

   | Befehl | Beschreibung |
   |--------|-------------|
   | `ban [name]` | Bannt einen Spieler anhand des Namens |
   | `banid [client id]` | Bannt einen Spieler anhand der Client-ID |

   Die Client-ID findest du über den Befehl `clientlist`.

## Spieler entbannen

1. <b>Konsole öffnen</b><br>
   Drücke **F3** oder **~**, um die Konsole zu öffnen.

2. <b>Unban-Befehl eingeben</b><br>
   Gib folgenden Befehl ein:

   ```
   unban [name]
   ```

   Ersetze `[name]` durch den Namen des gebannten Spielers.

## Banliste bearbeiten

Du kannst die Banliste auch direkt über die Datei `banlist.txt` verwalten.

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>banlist.txt öffnen</b><br>
   Öffne die Datei `banlist.txt` unter:

   ```
   /config/banlist.txt
   ```

3. <b>Einträge bearbeiten</b><br>
   Entferne den Eintrag des Spielers, um ihn zu entbannen, oder füge manuell einen neuen Eintrag hinzu.

:::: info Hinweis
Du benötigst Admin-Rechte auf dem Server, um Spieler kicken und bannen zu können.
::::
