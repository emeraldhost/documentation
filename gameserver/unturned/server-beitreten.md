---
description: Einem Unturned Server beitreten
---

# So trittst du deinem Unturned Server bei

Unturned bietet dir zwei zuverlässige Wege auf deinen Server: die **Direktverbindung** über IP-Adresse und Port oder den **Server Code**. Im öffentlichen Serverbrowser taucht dein Server nur auf, wenn ein Steam Game Server Login Token (GSLT) hinterlegt ist.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und die Ports deines Servers findest du in der **Verwaltung**. Im Spiel trägst du immer den **Query Port** ein – nicht den Game Port. Das ist der häufigste Grund, warum ein Beitritt scheitert.
::::

## Direkt über die IP verbinden

1. <b>Unturned starten</b><br>
   Starte das Spiel und warte, bis das Hauptmenü geladen ist.

2. <b>Verbindungsfenster öffnen</b><br>
   Wähle im Hauptmenü **Play** und wechsle auf **Connect**.

3. <b>Serverdaten eintragen</b><br>
   Fülle die Felder mit den Daten aus deiner Verwaltung:

   | Feld | Eintrag |
   |------|---------|
   | **Host** | IP-Adresse deines Servers |
   | **Port** | **Query Port** deines Servers |
   | **Password** | Server-Passwort, falls eines gesetzt ist |

4. <b>Verbinden</b><br>
   Klicke auf **Connect**. Dein Charakter wird auf dem Server gespeichert – beim nächsten Beitritt spielst du dort weiter.

:::: warning Achtung
Trage im Feld **Port** den Query Port ein, nicht den Game Port. Der Query Port ist bei Unturned der Port, über den dein Server abgefragt wird – und damit der Wert für die Direktverbindung.
::::

## Über den Server Code

Statt IP und Port kannst du auch den **Server Code** verwenden – eine 17-stellige Zahl, die du einfach in das Feld **Host** einträgst. Ein Port ist dann nicht nötig.

1. <b>Server Code auslesen</b><br>
   Starte deinen Server und sieh in der **Konsole** der Verwaltung nach. Dort wird der Code beim Start ausgegeben.

2. <b>Code eintragen</b><br>
   Öffne im Spiel **Play → Connect** und trage den Code in das Feld **Host** ein. Das Feld **Port** bleibt leer.

3. <b>Verbinden</b><br>
   Klicke auf **Connect**.

:::: info Hinweis
Der Server Code ändert sich bei jedem Neustart deines Servers – es sei denn, du hast ein GSLT hinterlegt. Außerdem siehst du vor dem Beitritt keine Serverinformationen, weil diese nur über die IP-Adresse abgefragt werden können. Für einen dauerhaften Link zu deinem Server ist die Direktverbindung über IP und Query Port die bessere Wahl.
::::

## Im Serverbrowser erscheinen

Server ohne GSLT gelten als "anonym" und werden in der öffentlichen Internet-Serverliste **nicht** angezeigt. Du erreichst sie weiterhin per Direktverbindung, findest sie aber nicht über die Suche im Spiel.

1. <b>Token erstellen</b><br>
   Öffne [steamcommunity.com/dev/managegameservers](https://steamcommunity.com/dev/managegameservers) und erstelle ein Token mit der **App ID 304930**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Token hinterlegen</b><br>
   Gibt es in der Verwaltung unter **Einstellungen** ein Feld für das Login Token, trage es dort ein. Andernfalls verbindest du dich per [SFTP](../sftp-verbindung-herstellen.md) und trägst das Token als Befehl in der `Commands.dat` ein:

   ```
   /Servers/<ServerID>/Server/Commands.dat
   ```

   ```
   GSLT DEIN_TOKEN
   ```

   :::: info Alternative
   Du kannst das Token auch in der Datei `/Servers/<ServerID>/Config.txt` hinterlegen. Suche dort im Abschnitt `Browser` den Eintrag `Login_Token` und trage dein Token als Wert ein. Übernimm dabei die Schreibweise, die in der Datei bereits vorgegeben ist.
   ::::

4. <b>Server starten</b><br>
   Speichere die Änderung und starte deinen Server. Er erscheint nun in der Internet-Serverliste.

:::: info Wo liegt mein Server-Ordner?
`<ServerID>` ist der Name des Ordners unter `/Servers/`. Er wird über den Startparameter deines Servers festgelegt – verbinde dich per SFTP und sieh nach, welcher Ordner dort liegt. In der Regel ist es genau einer.
::::

## Welche Ports nutzt Unturned?

:::: info Hinweis
Ein Unturned-Server belegt immer **zwei aufeinanderfolgende Ports**:

| Port | Verwendung |
|------|------------|
| **Query Port** | Serverabfragen und Serverliste – diesen Port trägst du im Spiel ein |
| **Game Port** | Der Spielverkehr selbst. Er liegt immer genau einen Port über dem Query Port |

Beide Ports sind für deinen Server bereits freigegeben. Welche Werte für dich gelten, siehst du in der **Verwaltung**.
::::

:::: warning Server wird nicht gefunden
Kommt keine Verbindung zustande, prüfe der Reihe nach:

- Läuft dein Server? Sieh in der Konsole der Verwaltung nach.
- Hast du wirklich den **Query Port** eingetragen und nicht den Game Port?
- Suchst du im Serverbrowser, obwohl kein GSLT hinterlegt ist? Dann nutze die Direktverbindung.
::::
