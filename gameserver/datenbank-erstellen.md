---
description: Datenbank erstellen und auf phpMyAdmin zugreifen
---

# So erstellst du eine Datenbank und greifst auf phpMyAdmin zu

Du kannst für deinen Gameserver eigene MySQL-Datenbanken anlegen, zum Beispiel für Plugins, Mods oder Web-Oberflächen. Über phpMyAdmin kannst du deine Datenbank anschließend komfortabel im Browser verwalten.

## Datenbank erstellen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Datenbanken öffnen</b><br>
   Klicke in der linken Seitenleiste auf **Datenbanken**.

3. <b>Neue Datenbank anlegen</b><br>
   Klicke oben rechts auf das **Plus-Symbol**, um eine neue Datenbank zu erstellen.

4. <b>Name festlegen</b><br>
   Trage einen Namen für deine Datenbank ein (z.B. `test`) und klicke auf **Datenbank erstellen**.

   :::: info Hinweis
   Im Feld **Verbindungen von** kannst du optional einschränken, von welchen IPs Verbindungen zur Datenbank zugelassen werden. Lasse das Feld leer oder auf `%`, um Verbindungen von überall zuzulassen.
   ::::

## Verbindungsdaten anzeigen

Klicke neben deiner Datenbank auf das **Augen-Symbol**, um alle Verbindungsdaten einzusehen:

- **Datenbank Host** (z.B. `db1.cgn1.emeraldhost.de`)
- **Datenbank Port** (Standard: `3306`)
- **Datenbank Benutzername**
- **Datenbank Passwort**
- **Datenbank Name**
- **JDBC Connection String**

:::: info Hinweis
Der **JDBC Connection String** bündelt alle Verbindungsdaten in einer Zeile und wird von Java-basierten Anwendungen (z.B. vielen Minecraft-Plugins) zur direkten Verbindung genutzt.
::::

Über den Button **Neues Passwort generieren** kannst du jederzeit ein neues Passwort für die Datenbank erstellen lassen.

## phpMyAdmin öffnen

1. <b>phpMyAdmin aufrufen</b><br>
   Klicke neben deiner Datenbank auf das **External-Symbol** (Pfeil nach außen). Du wirst zur phpMyAdmin-Anmeldeseite weitergeleitet.

2. <b>Zugangsdaten eingeben</b><br>
   Trage den **Datenbank Benutzernamen** und das **Datenbank Passwort** ein und klicke auf **Anmeldung**. Die Zugangsdaten findest du über das Augen-Symbol neben deiner Datenbank.

## Datenbank löschen

Klicke neben deiner Datenbank auf das **Mülleimer-Symbol**, um die Datenbank samt Inhalt zu löschen.

:::: warning Achtung
Das Löschen der Datenbank kann nicht rückgängig gemacht werden. Alle gespeicherten Daten gehen dabei verloren. Erstelle bei Bedarf vorher ein Backup über phpMyAdmin.
::::
