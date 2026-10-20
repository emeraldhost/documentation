---
slug: "datenbank-erstellen"
language: "de"
title: "So erstellst Du eine Datenbank und greifst auf phpMyAdmin zu"
description: "MySQL-Datenbank für Deinen Gameserver erstellen und mit phpMyAdmin verwalten"
tags: []
date: "2026-04-14"
visibility: "public"
updated: "2026-10-20"
cta: "gameserver"
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Datenbank erstellen"
sort: 2
related: ["gameserver/establish-sftp-connection", "gameserver/create-backup", "gameserver/set-up-scheduled-tasks", "gameserver/change-resources"]
---

Du kannst für Deinen Gameserver eigene MySQL-Datenbanken anlegen, zum Beispiel für Plugins, Mods oder Web-Oberflächen. Die Zugangsdaten wie Host, Port und Benutzer kopierst Du direkt aus der Verwaltung, und über phpMyAdmin verwaltest Du Deine Datenbank bequem im Browser.

## Datenbank erstellen

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Datenbanken öffnen**\
   Klicke in der linken Seitenleiste auf **Datenbanken**.

3. **Neue Datenbank anlegen**\
   Klicke auf **Datenbank erstellen**. Es öffnet sich der Dialog **Datenbank erstellen**.

4. **Datenbankname eintragen**\
   Trage im Pflichtfeld **Datenbankname** einen Namen für Deine Datenbank ein, z.B. `plugins`. Der Name darf höchstens 48 Zeichen lang sein.

5. **Fernzugriff festlegen**\
   Im Feld **Fernzugriff** legst Du fest, von welchen IP-Adressen aus Verbindungen zur Datenbank erlaubt sind. Standardmäßig steht hier `%` – damit sind Verbindungen von jeder IP-Adresse erlaubt.

6. **Erstellen**\
   Klicke auf **Datenbank erstellen**. Die neue Datenbank erscheint anschließend in der Tabelle.

Vor den Namen Deiner Datenbank wird automatisch ein Präfix der Form `s<Nummer>_` gesetzt. Aus `Test` wird so z.B. `s51018_Test`.

> [!NOTE]
> Wie viele Datenbanken Du noch anlegen kannst, zeigt Dir das Badge oben auf der Seite, z.B. „noch 3 von 3 Datenbanken möglich“. Brauchst Du mehr, kannst Du weitere Plätze hinzubuchen – wie das geht, liest Du weiter unten unter „Datenbank-Plätze erweitern“.

## Zugangsdaten verwenden

In der Tabelle auf der Seite **Datenbanken** siehst Du zu jeder Datenbank diese Spalten:

| Spalte | Bedeutung |
| --- | --- |
| **Datenbankname** | Name der Datenbank mit Präfix `s<Nummer>_` (z.B. `s51018_Test`), darunter die ID der Datenbank |
| **Benutzername** | Benutzer für die Anmeldung an der Datenbank (z.B. `u51018_…`) |
| **Passwort** | Passwort des Datenbank-Benutzers – verdeckt, über das Augen-Symbol blendest Du es ein |
| **Datenbank-Host** | Adresse des Datenbankservers inklusive Port, z.B. `db1.cgn1.emeraldhost.de:3306` |
| **Fernzugriff** | Erlaubte IP-Adressen (z.B. `%`) |
| **phpMyAdmin** | Button **phpMyAdmin**, öffnet phpMyAdmin im Browser |

Die Zugangsdaten trägst Du in die Konfiguration Deines Plugins oder Deiner Mod ein. Der **Datenbank-Host** enthält Host und Port, getrennt durch einen Doppelpunkt. Verlangt Deine Konfiguration beides in getrennten Feldern, trägst Du z.B. `db1.cgn1.emeraldhost.de` als Host und `3306` als Port ein.

> [!NOTE]
> Viele Java-basierte Anwendungen, zum Beispiel Minecraft-Plugins, erwarten die Verbindungsdaten als JDBC-URL. Diese setzt sich aus Host, Port und Datenbankname zusammen, z.B. `jdbc:mysql://db1.cgn1.emeraldhost.de:3306/s51018_Test`. Benutzername und Passwort trägst Du in der Regel in eigene Felder ein.

## Datenbank verwalten

Über das Menü (**…**) am Ende einer Tabellenzeile stehen Dir diese Aktionen zur Verfügung:

- **Verbindung kopieren** – kopiert die Verbindungsdaten der Datenbank, damit Du sie direkt in Deine Konfiguration einfügen kannst.
- **Passwort ändern** – generiert ein neues Passwort für die Datenbank.
- **Löschen** – entfernt die Datenbank.

> [!WARNING]
> Mit **Löschen** entfernst Du die Datenbank samt Inhalt. Exportiere wichtige Daten vorher über phpMyAdmin.

### Passwort ändern

1. **Menü öffnen**\
   Klicke in der Zeile Deiner Datenbank auf das Menü (**…**) und wähle **Passwort ändern**.

2. **Bestätigen**\
   Im Dialog **Passwort ändern** steht der Hinweis „Dies generiert ein neues Passwort. Das alte Passwort funktioniert nicht mehr.“ Klicke auf **Passwort ändern**, um das neue Passwort zu erzeugen, oder auf **Abbrechen**, um nichts zu ändern.

3. **Neues Passwort übernehmen**\
   Blende das neue Passwort in der Spalte **Passwort** über das Augen-Symbol ein und trage es überall ein, wo die Datenbank verwendet wird.

> [!WARNING]
> Nach dem Ändern funktioniert das alte Passwort nicht mehr. Aktualisiere es deshalb in allen Plugins, Mods und Tools, die auf die Datenbank zugreifen – sonst können sie sich nicht mehr verbinden.

## Datenbank-Plätze erweitern

Standardmäßig sind 3 Datenbanken inklusive. Reichen sie nicht aus, buchst Du weitere Plätze hinzu:

1. **Erweitern starten**\
   Klicke auf der Seite **Datenbanken** auf **Datenbank-Plätze erweitern**. Es öffnet sich der Dialog **Ressourcen ändern**.

2. **Anzahl wählen**\
   Stelle im Schritt **Konfiguration** mit dem Regler **Datenbanken** die gewünschte Anzahl ein. Zur Auswahl stehen die Stufen 3, 4, 5, 10, 15 und 20 – 3 sind inklusive, weitere Stufen sind kostenpflichtig. Unten im Dialog siehst Du die Preisänderung und unter **Monatlicher Preis** den neuen Monatspreis.

3. **Prüfen und abschließen**\
   Wechsle zum Schritt **Übersicht**, prüfe Deine Auswahl und schließe die Änderung ab.

Mehr zum Dialog **Ressourcen ändern** findest Du unter [Ressourcen ändern](/tutorials/gameserver/change-resources).

## phpMyAdmin öffnen

1. **phpMyAdmin aufrufen**\
   Klicke in der Zeile Deiner Datenbank auf den Button **phpMyAdmin**. phpMyAdmin öffnet sich direkt im Browser.

2. **Datenbank verwalten**\
   In phpMyAdmin kannst Du Tabellen ansehen und bearbeiten, SQL-Befehle ausführen sowie Daten importieren und exportieren. Falls phpMyAdmin nach Zugangsdaten fragt, verwende den **Benutzernamen** und das **Passwort** aus der Tabelle.

> [!TIP]
> Möchtest Du den Inhalt Deiner Datenbank separat sichern, exportiere ihn über phpMyAdmin als SQL-Datei.
