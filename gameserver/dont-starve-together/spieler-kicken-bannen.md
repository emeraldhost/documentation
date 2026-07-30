---
description: Spieler auf einem Don’t Starve Together Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Don’t Starve Together Server

Don’t Starve Together bringt Kick- und Ban-Funktionen direkt mit. Du kannst sie bequem über die Spielerliste im Spiel nutzen, per Konsolenbefehl ausführen oder die Bannliste direkt auf dem Server bearbeiten.

:::: info Hinweis
Du benötigst Admin-Rechte, um Spieler kicken oder bannen zu können. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Über die Spielerliste im Spiel

1. <b>Server beitreten</b><br>
   Tritt deinem Server als Admin bei.

2. <b>Spielerliste öffnen</b><br>
   Halte die Taste `TAB` gedrückt, um die Spielerliste einzublenden.

3. <b>Spieler kicken</b><br>
   Klicke neben dem Spieler auf das Schuh-Symbol, um ihn vom Server zu werfen.

4. <b>Spieler bannen</b><br>
   Klicke neben dem Spieler auf das Hammer-Symbol, um ihn dauerhaft auszuschließen.

## Über die Konsole

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel `~`, um die Konsole zu öffnen.

2. <b>Spieler auflisten</b><br>
   Lasse dir alle Spieler mit ihrer Klei-User-ID anzeigen:

   ```
   c_listallplayers()
   ```

3. <b>Spieler kicken</b><br>
   Der Spieler wird vom Server entfernt, kann aber wieder beitreten:

   ```
   TheNet:Kick("KU_xxxxxxxx")
   ```

4. <b>Spieler bannen</b><br>
   Der Spieler wird dauerhaft ausgeschlossen:

   ```
   TheNet:Ban("KU_xxxxxxxx")
   ```

5. <b>Zeitlich begrenzt bannen</b><br>
   Der zweite Wert ist die Dauer in Sekunden — `120` entspricht also zwei Minuten:

   ```
   TheNet:BanForTime("KU_xxxxxxxx", 120)
   ```

## Bannliste bearbeiten

Alle Banns werden in der Datei `blocklist.txt` im Cluster-Ordner gespeichert. Bannst du einen Spieler im Spiel, wird seine Klei-User-ID automatisch dort ergänzt. Du kannst die Datei aber auch selbst bearbeiten.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>blocklist.txt öffnen</b><br>
   Wechsle in den Ordner, in dem die Datei `cluster.ini` liegt, und öffne dort die Datei:

   ```
   <Cluster-Ordner>/blocklist.txt
   ```

4. <b>Einträge anpassen</b><br>
   Trage pro Zeile genau eine Klei-User-ID ein — ohne Kommas und ohne Anführungszeichen. Zum Entbannen entfernst du die entsprechende Zeile:

   ```
   KU_xxxxxxxx
   KU_yyyyyyyy
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Erst beim Start liest der Server die `blocklist.txt` neu ein.

:::: warning Achtung
Bearbeite die `blocklist.txt` nur bei gestopptem Server. Läuft der Server, kann er die Datei überschreiben und deine Änderungen gehen verloren.
::::

:::: tip Klei-User-ID finden
Wie du die `KU_`-ID eines Spielers herausfindest, steht in der Anleitung [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Alle Befehle

| Befehl | Beschreibung |
|--------|-------------|
| `c_listallplayers()` | Alle Spieler mit User-ID auflisten |
| `TheNet:Kick("KU_xxxxxxxx")` | Spieler kicken |
| `TheNet:Ban("KU_xxxxxxxx")` | Spieler dauerhaft bannen |
| `TheNet:BanForTime("KU_xxxxxxxx", 120)` | Spieler für 120 Sekunden bannen |
| `c_announce("Text")` | Nachricht an alle Spieler senden |
| `c_save()` | Welt sofort speichern |
