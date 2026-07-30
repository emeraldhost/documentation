---
description: Einem Solace Crafting Server beitreten
---

# So trittst du deinem Solace Crafting Server bei

Solace Crafting bietet im Hauptmenü zwei Wege auf einen Dedicated Server: die **Serverliste** und die **Direktverbindung**. Für die Direktverbindung verwendest du den **Game Port** deines Servers, nicht den Query Port.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse sowie den **Game Port** und den **Query Port** deines Servers findest du in der **Verwaltung**. Verwende zum Beitreten immer die dort angezeigten Werte – feste Standardwerte gibt es nicht.
::::

## Ports in der Serverkonfiguration eintragen

Solace Crafting liest den Game Port und den Query Port aus seiner Konfigurationsdatei. Stimmen die Werte dort nicht mit den Ports überein, die deinem Server in der Verwaltung zugewiesen sind, ist dein Server für niemanden erreichbar. Prüfe die Einträge deshalb, bevor du deine Verbindungsdaten weitergibst.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /.config/unity3d/Big Kitty Games/Solace Crafting/servercfg.dat
   ```

   :::: info Hinweis
   Der Ordner `.config` beginnt mit einem Punkt und ist damit ein versteckter Ordner. Aktiviere in deinem SFTP-Programm die Anzeige versteckter Dateien, falls du ihn nicht siehst. Existiert die Datei noch nicht, starte deinen Server einmal – sie wird beim ersten Start angelegt.
   ::::

4. <b>Ports eintragen</b><br>
   Trage bei `port` den **Game Port** und bei `steamQueryPort` den **Query Port** aus deiner Verwaltung ein:

   ```json
   "port": 27015,
   "steamQueryPort": 27016,
   ```

   :::: warning Achtung
   Die hier gezeigten Zahlen sind nur ein Beispiel. Maßgeblich sind ausschließlich die Ports, die deinem Server in der Verwaltung zugewiesen wurden.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Über die Serverliste beitreten

1. <b>Solace Crafting starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Serverliste öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer: Server List**.

3. <b>Server auswählen</b><br>
   Suche deinen Server in der Liste und wähle ihn aus.

4. <b>Passwort eingeben</b><br>
   Ist für deinen Server ein Passwort gesetzt, wirst du beim Beitreten danach gefragt.

## Direkt über die IP verbinden

Die Direktverbindung funktioniert unabhängig davon, ob dein Server in der Serverliste auftaucht.

1. <b>Direktverbindung öffnen</b><br>
   Wähle im Hauptmenü **Multiplayer: Direct Connect**.

2. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den **Game Port** deines Servers ein, zum Beispiel:

   ```
   123.45.67.89:27015
   ```

   :::: danger Wichtig
   Nutze hier den **Game Port**, nicht den Query Port. IP und Port entnimmst du deiner Verwaltung.
   ::::

3. <b>Passwort eingeben</b><br>
   Trage bei einem passwortgeschützten Server zusätzlich das Serverpasswort ein.

4. <b>Verbinden</b><br>
   Bestätige die Eingabe, um dem Server beizutreten.

## Privater Server

In der `servercfg.dat` steuert der Wert `isPrivate`, ob dein Server öffentlich sichtbar ist:

| Wert | Bedeutung |
|------|-----------|
| `false` | Der Server erscheint in der öffentlichen Serverliste |
| `true` | Der Server erscheint **nicht** in der Liste – Beitritt nur per Direktverbindung |

:::: tip Tipp
Ein privater Server ist der einfachste Weg für eine geschlossene Runde: Gib IP-Adresse und Game Port nur an die Spieler weiter, die beitreten sollen.
::::

## Welche Ports nutzt Solace Crafting?

:::: info Hinweis
Ein Solace-Crafting-Server nutzt zwei Ports:

| Konfigurationswert | Protokoll | Verwendung |
|--------------------|-----------|------------|
| `port` | TCP | Game Port – hierüber verbinden sich die Spieler |
| `steamQueryPort` | UDP | Query Port – hierüber fragt Steam den Serverstatus ab |

Welche Werte für deinen Server gelten, siehst du in der **Verwaltung**.
::::

:::: warning Server wird nicht gefunden
Erscheint dein Server nicht in der Serverliste, prüfe zuerst, ob `isPrivate` auf `false` steht und die Ports in der `servercfg.dat` mit denen aus der Verwaltung übereinstimmen. Unabhängig davon erreichst du deinen Server jederzeit über die Direktverbindung mit IP-Adresse und Game Port.
::::
