---
description: Admin auf einem CryoFall Server hinzufügen
---

# So fügst du einen Admin auf deinem CryoFall Server hinzu

Admins heißen in CryoFall **Operatoren**. Eingetragen wird nicht die SteamID64, sondern der **In-Game-Name** des Spielers – genau so geschrieben, wie er im Hauptmenü unten rechts angezeigt wird.

:::: danger Wichtig
Die Operator-Befehle im Spiel funktionieren nur, wenn du bereits Operator bist. Den **ersten** Operator kannst du dir deshalb nicht im Spiel selbst geben – dafür nutzt du die Konsole in der Verwaltung oder die Konfigurationsdatei deines Servers.
::::

## Deinen Namen herausfinden

1. <b>CryoFall starten</b><br>
   Starte CryoFall und bleibe im Hauptmenü.

2. <b>Namen ablesen</b><br>
   Unten rechts im Hauptmenü steht dein Accountname. Genau diese Schreibweise trägst du gleich ein – auch Groß- und Kleinschreibung.

## Operator über die Konsole hinzufügen

Das ist der schnellste Weg und funktioniert im laufenden Betrieb.

1. <b>Konsole öffnen</b><br>
   Öffne die Konsole deines Servers über die Verwaltung.

2. <b>Befehl eingeben</b><br>
   Gib den Befehl **ohne** vorangestellten Schrägstrich ein und bestätige mit Enter:

   ```
   opAdd DeinName
   ```

   :::: warning Achtung
   `opAdd` kennt nur Spieler, die deinen Server bereits einmal betreten haben. Ist dein Server ganz neu, verbinde dich zuerst einmal mit ihm – oder trage dich direkt in die Konfigurationsdatei ein.
   ::::

3. <b>Ergebnis prüfen</b><br>
   Mit dem folgenden Befehl siehst du alle eingetragenen Operatoren:

   ```
   opList
   ```

## Operator über die Konfigurationsdatei hinzufügen

Alternativ trägst du Operatoren direkt in die Serverkonfiguration ein.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Listen werden beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfiguration öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Data/SettingsServer.xml
   ```

4. <b>Namen eintragen</b><br>
   Trage die Namen im Bereich `<server>` durch Komma getrennt ein:

   ```xml
   <server_operators_list>DeinName,ZweiterName</server_operators_list>
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Weitere Operatoren im Spiel hinzufügen

Bist du selbst Operator, vergibst du weitere Rechte direkt im Spiel.

1. <b>Konsole öffnen</b><br>
   Drücke im Spiel die Taste `~`, um die Konsole zu öffnen.

2. <b>Befehl eingeben</b><br>
   Befehle beginnen im Spiel immer mit `/`:

   ```
   /opAdd Spielername
   ```

   :::: tip Tipp
   Die Konsole vervollständigt Befehle mit der Tab-Taste. Du musst dir also nicht jeden Befehl merken.
   ::::

## Moderatoren

Moderatoren dürfen Spieler verwalten – also kicken, bannen und stummschalten –, haben aber keinen vollen Operator-Zugriff.

```xml
<server_moderators_list>Name1,Name2</server_moderators_list>
```

:::: info Hinweis
Operatoren besitzen die Moderatoren-Rechte automatisch. Du musst sie also nicht zusätzlich in die Moderatoren-Liste eintragen.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/opAdd <Spielername>` | Spieler zum Operator machen |
| `/opList` | Alle Operatoren anzeigen |
| `/opRemove <Spielername>` | Operator-Rechte entziehen |
| `/moderatorAdd <Spielername>` | Spieler zum Moderator machen |
| `/moderatorList` | Alle Moderatoren anzeigen |
| `/moderatorRemove <Spielername>` | Moderator-Rechte entziehen |

:::: info Langform der Befehle
Zu jedem dieser Befehle gibt es eine ausgeschriebene Variante, zum Beispiel `/admin.operator.add` statt `/opAdd`. Beide bewirken dasselbe.
::::

## Was Operatoren zusätzlich dürfen

Als Operator kannst du im Spiel über das Menü (Taste `Esc`) und die Schaltfläche **Edit** unter anderem die Beschreibung, die Willkommensnachricht und die Spielraten deines Servers anpassen, ohne Dateien zu bearbeiten.

:::: warning Änderungen aus der Verwaltung
Servername, Beschreibung, Serverliste, maximale Spielerzahl, Speicherintervall und Anzahl der Speicherstände werden bei jedem Start aus der **Verwaltung** in die Datei `SettingsServer.xml` geschrieben. Änderst du diese Werte in der Datei oder im Spiel, gehen sie beim nächsten Start verloren – stelle sie ausschließlich in der Verwaltung ein.
::::

:::: tip Tipp
Wie du Spieler als Operator oder Moderator vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
