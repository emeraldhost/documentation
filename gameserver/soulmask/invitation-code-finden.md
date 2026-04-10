---
description: Invitation Code auf einem Soulmask Server finden
---

# So findest du den Invitation Code deines Soulmask Servers

Der **Invitation Code** ist ein einzigartiger 25-stelliger Code, der beim ersten Serverstart automatisch generiert wird. Spieler benötigen diesen Code, um deinen Server in der Serverliste zu finden.

## Über die Server-Konsole

1. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung.

2. <b>Konsole öffnen</b><br>
   Öffne die **Server-Konsole** in der Verwaltung.

3. <b>Code ablesen</b><br>
   Der Invitation Code wird beim Serverstart in der Konsole angezeigt. Suche nach der Zeile:

   ```
   [SERVER UNIQUE ID:] XXXXXXXXXXXXXXXXXXXXX
   ```

   :::: tip Beispiel
   ```
   [SERVER UNIQUE ID:] 6U1WE0O933CC7H4RFBSQ8ND47
   ```
   ::::

## Über die Log-Datei

Falls du den Code in der Konsole verpasst hast, findest du ihn auch in der Log-Datei:

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Log-Datei öffnen</b><br>
   Öffne die Datei:

   ```
   /WS/Saved/Logs/WS.log
   ```

3. <b>Code suchen</b><br>
   Suche nach `SERVER UNIQUE ID` in der Datei. Der Code steht direkt dahinter.

## Spieler mit Invitation Code einladen

Teile den Invitation Code mit deinen Spielern. So können sie beitreten:

1. <b>Soulmask starten</b><br>
   Starte Soulmask und wähle im Hauptmenü **Online-Spiel**.

2. <b>Private Server wählen</b><br>
   Wähle den Tab **Private Server**.

3. <b>Code eingeben</b><br>
   Füge den Invitation Code oben rechts im Suchfeld ein und drücke `Enter`.

4. <b>Server beitreten</b><br>
   Dein Server wird in der Liste angezeigt und kann ausgewählt werden.

:::: info Hinweis
Der Invitation Code bleibt gleich, solange die Serverdaten nicht zurückgesetzt werden.
::::
