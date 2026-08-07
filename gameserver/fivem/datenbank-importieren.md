---
description: SQL-Datei über phpMyAdmin in die Datenbank deines FiveM Servers importieren
---

# So importierst du eine .sql-Datei in die Datenbank deines FiveM Servers

Viele FiveM Frameworks und Skripte bringen eine `.sql`-Datei mit, die alle benötigten Tabellen anlegt. Diese Datei spielst du über **phpMyAdmin** in deine Datenbank ein.

:::: info Hinweis
Du brauchst dafür bereits eine Datenbank. Wie du eine anlegst, die Zugangsdaten ausliest und phpMyAdmin öffnest, steht in [Datenbank erstellen](../datenbank-erstellen.md).
::::

## Bevor du startest

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. So schreibt während des Imports keine Resource in die Datenbank.

2. <b>SQL-Datei durchsehen</b><br>
   Öffne die `.sql`-Datei in einem Texteditor und prüfe, ob sie Zeilen wie `CREATE DATABASE` oder `USE` enthält.

   :::: warning Achtung
   Der Datenbank-Benutzer aus der Verwaltung hat nur Rechte für seine eigene Datenbank und darf keine weitere Datenbank anlegen. Enthält die Datei solche Zeilen, bricht der Import mit einer Rechte-Fehlermeldung ab. Entferne die Zeilen und importiere direkt in deine vorhandene Datenbank.
   ::::

3. <b>Auf überschriebene Tabellen achten</b><br>
   Prüfe die Datei außerdem auf Zeilen mit `DROP TABLE IF EXISTS`. Bereits vorhandene Tabellen gleichen Namens werden beim Import samt Inhalt gelöscht. Sichere deine Daten deshalb vorher.

## Bestehende Tabellen sichern

Wenn in deiner Datenbank schon Daten liegen, exportiere sie vor dem Import.

:::: info Hinweis
Ein [Backup](../backup-erstellen.md) aus der Verwaltung sichert die Dateien deines Servers. Deine Datenbank sicherst du separat über phpMyAdmin.
::::

1. <b>phpMyAdmin öffnen</b><br>
   Klicke in der Verwaltung unter **Datenbanken** auf das **External-Symbol** neben deiner Datenbank und melde dich an.

2. <b>Datenbank auswählen</b><br>
   Klicke in der linken Seitenleiste auf deine Datenbank.

3. <b>Reiter Exportieren öffnen</b><br>
   Klicke oben auf **Exportieren**.

4. <b>Export herunterladen</b><br>
   Lasse die **Exportmethode** auf **Schnell – nur notwendige Optionen anzeigen** und das **Format** auf **SQL**. Klicke auf **Exportieren**, um die Datei auf deinen PC herunterzuladen.

   :::: tip Tipp
   Über **Angepasst – zeige alle möglichen Optionen an** kannst du einzelne Tabellen auswählen und die Ausgabe unter **Komprimierung** direkt als ZIP oder GZIP speichern lassen.
   ::::

## SQL-Datei importieren

1. <b>Datenbank auswählen</b><br>
   Klicke in phpMyAdmin in der linken Seitenleiste auf die Datenbank, in die importiert werden soll.

   :::: warning Achtung
   Wähle die Datenbank wirklich zuerst aus. Ohne ausgewählte Datenbank weiß phpMyAdmin nicht, wohin die Tabellen gehören, und der Import schlägt fehl.
   ::::

2. <b>Reiter Importieren öffnen</b><br>
   Klicke oben auf **Importieren**.

3. <b>Datei auswählen</b><br>
   Wähle unter **Zu importierende Datei** bei **Durchsuchen Sie Ihren Computer** deine `.sql`-Datei aus. Direkt hinter der Beschriftung steht die maximale Dateigröße, die du hochladen darfst.

4. <b>Zeichencodierung prüfen</b><br>
   Lasse **Zeichencodierung der Datei** auf `utf-8`, solange deine Datei nicht ausdrücklich eine andere Codierung verwendet. Sonst landen Umlaute und Sonderzeichen falsch in der Datenbank.

5. <b>Format prüfen</b><br>
   Unter **Format** muss **SQL** ausgewählt sein. phpMyAdmin erkennt das anhand der Dateiendung in der Regel automatisch.

6. <b>Import starten</b><br>
   Klicke unten auf **Importieren** und warte, bis die Seite fertig geladen hat. Schließe den Browser-Tab in dieser Zeit nicht.

## Ergebnis prüfen

1. <b>Meldung lesen</b><br>
   Nach einem erfolgreichen Import erscheint oben die Meldung "Der Import wurde erfolgreich abgeschlossen, X Abfragen wurden ausgeführt."

2. <b>Tabellen kontrollieren</b><br>
   Klicke links auf deine Datenbank und anschließend auf **Struktur**. Dort müssen jetzt die Tabellen aus der `.sql`-Datei aufgelistet sein.

3. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung und sieh in der Konsole nach, ob Datenbankfehler gemeldet werden.

:::: tip Tipp
Damit dein Server die neuen Tabellen auch nutzt, muss die Verbindung zur Datenbank in der `server.cfg` hinterlegt sein. Wie das geht, steht in [Datenbank einrichten](datenbank-einrichten.md).
::::

## Große SQL-Dateien importieren

Das Upload-Limit auf der Import-Seite ist eine Einstellung des Webservers, auf dem phpMyAdmin läuft. Du kannst es nicht selbst ändern. Ist deine Datei zu groß oder bricht der Import nach einiger Zeit ab, hast du diese Möglichkeiten:

1. <b>Datei komprimieren</b><br>
   phpMyAdmin liest komprimierte Dateien direkt ein. Für das Upload-Limit zählt dann nur die komprimierte Größe. Der Dateiname muss auf `.[Format].[Komprimierung]` enden, also zum Beispiel `datenbank.sql.zip`. Welche Komprimierungen unterstützt werden, steht als Hinweis oben auf der Import-Seite.

2. <b>Teilweisen Import erlauben</b><br>
   Setze unter **Teilweiser Import** den Haken bei **Erlauben Sie die Unterbrechung eines Imports …**. phpMyAdmin bricht den Import dann kontrolliert ab, bevor das PHP-Zeitlimit greift, und setzt beim erneuten Absenden an der gemerkten Position fort.

   :::: warning Achtung
   phpMyAdmin weist bei dieser Option selbst darauf hin, dass ein unterbrochener Import Transaktionen zerreißen kann. Sichere deine Tabellen vorher.
   ::::

3. <b>Datei aufteilen</b><br>
   Teile die `.sql`-Datei in mehrere kleinere Dateien auf und importiere sie nacheinander in der ursprünglichen Reihenfolge. Achte darauf, dass du keine Anweisung mittendrin zerschneidest.

## Häufige Fehler

| Fehlerbild | Ursache und Lösung |
|------------|--------------------|
| Meldung über fehlende Rechte (Access denied) | Die Datei enthält `CREATE DATABASE` oder `USE`. Entferne diese Zeilen und importiere in deine vorhandene Datenbank. |
| Fehler beim Anlegen eines Fremdschlüssels | Entferne unter **Andere Optionen** den Haken bei **Fremdschlüsselüberprüfung aktivieren** und wiederhole den Import. |
| Die Datei lässt sich nicht auswählen oder ist zu groß | Das Upload-Limit ist überschritten. Siehe **Große SQL-Dateien importieren**. |
| Der Import bricht ohne Erfolgsmeldung ab | Meist eine Zeitüberschreitung. Siehe **Große SQL-Dateien importieren**. |
| Tabelle existiert bereits | Die Tabelle wurde schon einmal importiert. Sichere sie und lösche sie, bevor du den Import wiederholst. |
