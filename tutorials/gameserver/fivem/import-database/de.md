---
slug: "datenbank-importieren"
language: "de"
title: "So importierst Du eine .sql-Datei in die Datenbank Deines FiveM Servers"
description: "SQL-Datei über phpMyAdmin in die Datenbank Deines FiveM Servers importieren"
tags: []
date: "2026-08-07"
visibility: "public"
cta: "gameserver"
product_keys: ["fivem"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Datenbank importieren"
sort: 4
related: ["gameserver/fivem/create-backup", "gameserver/fivem/enable-txadmin", "gameserver/fivem/join-server", "gameserver/fivem/kick-ban-players"]
---

Viele FiveM Frameworks und Skripte bringen eine `.sql`-Datei mit, die alle benötigten Tabellen anlegt. Diese Datei spielst Du über **phpMyAdmin** in Deine Datenbank ein.

> [!NOTE]
> Du brauchst dafür bereits eine Datenbank. Wie Du eine anlegst, die Zugangsdaten ausliest und phpMyAdmin öffnest, steht in [Datenbank erstellen](/tutorials/gameserver/create-database).

## Bevor Du startest

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung. So schreibt während des Imports keine Resource in die Datenbank.

2. **SQL-Datei durchsehen**\
   Öffne die `.sql`-Datei in einem Texteditor und prüfe, ob sie Zeilen wie `CREATE DATABASE` oder `USE` enthält.

   > [!WARNING]
   > Der Datenbank-Benutzer aus der Verwaltung hat nur Rechte für seine eigene Datenbank und darf keine weitere Datenbank anlegen. Enthält die Datei solche Zeilen, bricht der Import mit einer Rechte-Fehlermeldung ab. Entferne die Zeilen und importiere direkt in Deine vorhandene Datenbank.

3. **Auf überschriebene Tabellen achten**\
   Prüfe die Datei außerdem auf Zeilen mit `DROP TABLE IF EXISTS`. Bereits vorhandene Tabellen gleichen Namens werden beim Import samt Inhalt gelöscht. Sichere Deine Daten deshalb vorher.

## Bestehende Tabellen sichern

Wenn in Deiner Datenbank schon Daten liegen, exportiere sie vor dem Import.

> [!NOTE]
> Ein [Backup](/tutorials/gameserver/create-backup) aus der Verwaltung sichert die Dateien Deines Servers. Deine Datenbank sicherst Du separat über phpMyAdmin.

1. **phpMyAdmin öffnen**\
   Klicke in der Verwaltung unter **Datenbanken** auf das **External-Symbol** neben Deiner Datenbank und melde Dich an.

2. **Datenbank auswählen**\
   Klicke in der linken Seitenleiste auf Deine Datenbank.

3. **Reiter Exportieren öffnen**\
   Klicke oben auf **Exportieren**.

4. **Export herunterladen**\
   Lasse die **Exportmethode** auf **Schnell – nur notwendige Optionen anzeigen** und das **Format** auf **SQL**. Klicke auf **Exportieren**, um die Datei auf Deinen PC herunterzuladen.

   > [!TIP]
   > Über **Angepasst – zeige alle möglichen Optionen an** kannst Du einzelne Tabellen auswählen und die Ausgabe unter **Komprimierung** direkt als ZIP oder GZIP speichern lassen.

## SQL-Datei importieren

1. **Datenbank auswählen**\
   Klicke in phpMyAdmin in der linken Seitenleiste auf die Datenbank, in die importiert werden soll.

   > [!WARNING]
   > Wähle die Datenbank wirklich zuerst aus. Ohne ausgewählte Datenbank weiß phpMyAdmin nicht, wohin die Tabellen gehören, und der Import schlägt fehl.

2. **Reiter Importieren öffnen**\
   Klicke oben auf **Importieren**.

3. **Datei auswählen**\
   Wähle unter **Zu importierende Datei** bei **Durchsuchen Sie Ihren Computer** Deine `.sql`-Datei aus. Direkt hinter der Beschriftung steht die maximale Dateigröße, die Du hochladen darfst.

4. **Zeichencodierung prüfen**\
   Lasse **Zeichencodierung der Datei** auf `utf-8`, solange Deine Datei nicht ausdrücklich eine andere Codierung verwendet. Sonst landen Umlaute und Sonderzeichen falsch in der Datenbank.

5. **Format prüfen**\
   Unter **Format** muss **SQL** ausgewählt sein. phpMyAdmin erkennt das anhand der Dateiendung in der Regel automatisch.

6. **Import starten**\
   Klicke unten auf **Importieren** und warte, bis die Seite fertig geladen hat. Schließe den Browser-Tab in dieser Zeit nicht.

## Ergebnis prüfen

1. **Meldung lesen**\
   Nach einem erfolgreichen Import erscheint oben die Meldung „Der Import wurde erfolgreich abgeschlossen, X Abfragen wurden ausgeführt.“

2. **Tabellen kontrollieren**\
   Klicke links auf Deine Datenbank und anschließend auf **Struktur**. Dort müssen jetzt die Tabellen aus der `.sql`-Datei aufgelistet sein.

3. **Server starten**\
   Starte Deinen Server über die Verwaltung und sieh in der Konsole nach, ob Datenbankfehler gemeldet werden.

> [!TIP]
> Damit Dein Server die neuen Tabellen auch nutzt, muss die Verbindung zur Datenbank in der `server.cfg` hinterlegt sein. Wie das geht, steht in [Datenbank einrichten](/tutorials/gameserver/fivem/set-up-database).

## Große SQL-Dateien importieren

Das Upload-Limit auf der Import-Seite ist eine Einstellung des Webservers, auf dem phpMyAdmin läuft. Du kannst es nicht selbst ändern. Ist Deine Datei zu groß oder bricht der Import nach einiger Zeit ab, hast Du diese Möglichkeiten:

1. **Datei komprimieren**\
   phpMyAdmin liest komprimierte Dateien direkt ein. Für das Upload-Limit zählt dann nur die komprimierte Größe. Der Dateiname muss auf `.[Format].[Komprimierung]` enden, also zum Beispiel `datenbank.sql.zip`. Welche Komprimierungen unterstützt werden, steht als Hinweis oben auf der Import-Seite.

2. **Teilweisen Import erlauben**\
   Setze unter **Teilweiser Import** den Haken bei **Erlauben Sie die Unterbrechung eines Imports …**. phpMyAdmin bricht den Import dann kontrolliert ab, bevor das PHP-Zeitlimit greift, und setzt beim erneuten Absenden an der gemerkten Position fort.

   > [!WARNING]
   > phpMyAdmin weist bei dieser Option selbst darauf hin, dass ein unterbrochener Import Transaktionen zerreißen kann. Sichere Deine Tabellen vorher.

3. **Datei aufteilen**\
   Teile die `.sql`-Datei in mehrere kleinere Dateien auf und importiere sie nacheinander in der ursprünglichen Reihenfolge. Achte darauf, dass Du keine Anweisung mittendrin zerschneidest.

## Häufige Fehler

| Fehlerbild | Ursache und Lösung |
|------------|--------------------|
| Meldung über fehlende Rechte (Access denied) | Die Datei enthält `CREATE DATABASE` oder `USE`. Entferne diese Zeilen und importiere in Deine vorhandene Datenbank. |
| Fehler beim Anlegen eines Fremdschlüssels | Entferne unter **Andere Optionen** den Haken bei **Fremdschlüsselüberprüfung aktivieren** und wiederhole den Import. |
| Die Datei lässt sich nicht auswählen oder ist zu groß | Das Upload-Limit ist überschritten. Siehe **Große SQL-Dateien importieren**. |
| Der Import bricht ohne Erfolgsmeldung ab | Meist eine Zeitüberschreitung. Siehe **Große SQL-Dateien importieren**. |
| Tabelle existiert bereits | Die Tabelle wurde schon einmal importiert. Sichere sie und lösche sie, bevor Du den Import wiederholst. |
