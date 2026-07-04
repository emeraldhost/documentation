---
description: Allowlist auf einem Minecraft Bedrock Edition Server aktivieren
---

# So aktivierst du die Allowlist auf einem Minecraft Bedrock Server

Eine Allowlist ist eine Funktion in Minecraft, die es Serveradministratoren ermöglicht, eine Liste von Spielern zu erstellen, die den Server betreten dürfen, während andere Spieler abgewiesen werden. So hältst du unerwünschte Spieler fern und lässt nur diejenigen zu, die du freigegeben hast.

:::: info Hinweis
Auf Bedrock heißt die frühere „Whitelist" seit Version **1.18.10** **Allowlist**. Der alte Befehl `/whitelist` funktioniert weiterhin als Alias, die aktuelle Bezeichnung ist aber `allowlist` (Datei: `allowlist.json`, `server.properties`-Eintrag: `allow-list`).
::::

## Voraussetzungen

- Zugriff auf die Verwaltung und die Server-Konsole
- Name des Spielers, den Du zur Allowlist hinzufügen möchtest

## Allowlist aktivieren

1. <b>Server auswählen</b><br>
   Gehe in der Verwaltung auf deinen Minecraft Bedrock Edition Server.

2. <b>Datei-Browser öffnen</b><br>
   Öffne den Datei-Browser.

3. <b>Datei öffnen</b><br>
   Öffne die Datei `server.properties`.

4. <b>Eintrag suchen</b><br>
   Suche nach folgendem Eintrag:

   ```
   allow-list=false
   ```

5. <b>Wert ändern</b><br>
   Ändere den Wert auf `true`:

   ```
   allow-list=true
   ```

6. <b>Änderungen speichern</b><br>
   Speichere die Änderungen und starte den Server neu.

## Spieler zur Allowlist hinzufügen

:::: warning Achtung
In der Konsole müssen alle Befehle ohne `/` eingegeben werden!
::::

1. <b>Konsole öffnen</b><br>
   Navigiere in der Verwaltung zur Server-Konsole unter dem Menüpunkt „Übersicht".

2. <b>Spieler hinzufügen</b><br>
   Gib folgenden Befehl ein und ersetze `<Name>` durch den Namen des Spielers:

   ```
   allowlist add <Name>
   ```

3. <b>Allowlist überprüfen</b><br>
   Ab jetzt haben nur Spieler auf der Allowlist Zugang zum Server. Verbinde dich testweise mit einem Account, der nicht auf der Allowlist steht — die Verbindung sollte abgewiesen werden.

:::: tip Tipp
Mit `allowlist remove <Name>` entfernst du einen Spieler wieder, und `allowlist list` zeigt alle Einträge an. Die Allowlist wird in der Datei `allowlist.json` gespeichert.
::::
