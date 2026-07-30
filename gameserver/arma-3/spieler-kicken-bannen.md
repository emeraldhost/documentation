---
description: Spieler auf einem Arma 3 Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Arma 3 Server

Spieler kannst du auf zwei Wegen entfernen: direkt im Spiel über die Chat-Konsole oder von außerhalb über BattlEye RCON – auch dann, wenn du selbst gerade nicht auf dem Server bist.

:::: info Hinweis
Für die Befehle im Spiel benötigst du Adminrechte. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Befehle im Spiel nutzen

1. <b>Als Admin anmelden</b><br>
   Öffne im Spiel mit der Taste `/` die Chat-Konsole und melde dich als Admin an:

   ```
   #login deinAdminPasswort
   ```

2. <b>Spieler kicken</b><br>
   Trenne einen Spieler vom Server. Du kannst den Spielernamen, die ID oder die Spielernummer angeben:

   ```
   #kick Spielername
   ```

   Der Spieler wird sofort getrennt, kann aber jederzeit wieder beitreten.

3. <b>Spieler bannen</b><br>
   Sperre einen Spieler dauerhaft aus. Bei `#exec` müssen Name beziehungsweise ID in Anführungszeichen stehen:

   ```
   #exec ban "Spielername"
   ```

   Die ID des Spielers wird dabei in die Ban-Liste `ban.txt` im Hauptverzeichnis deines Servers eingetragen.

4. <b>Bann aufheben</b><br>
   Hebe einen Bann wieder auf. Hier funktioniert ausschließlich die UID des Spielers, nicht sein Name:

   ```
   #exec unban "76561198012345678"
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|--------------|
| `#kick <Name/ID>` | Spieler vom Server trennen |
| `#exec ban "<Name/ID>"` | Spieler dauerhaft aussperren |
| `#exec unban "<UID>"` | Bann wieder aufheben – nur über die UID möglich |
| `#lock` | Server sperren – niemand kann mehr beitreten |
| `#unlock` | Sperre wieder aufheben |

:::: warning Achtung
Bearbeite die Ban-Dateien deines Servers nicht von Hand. Nutze zum Entbannen `#exec unban` beziehungsweise die RCON-Befehle – so bleibt die Liste in einem gültigen Zustand.
::::

## BattlEye RCON einrichten

Über RCON verwaltest du Spieler von deinem PC aus, ohne selbst im Spiel zu sein. RCON läuft bei Arma 3 ausschließlich über BattlEye.

:::: danger Wichtig
RCON funktioniert nur, wenn BattlEye auf deinem Server aktiv ist. Steht in der `server.cfg` `BattlEye = 0;`, lässt sich RCON nicht verwenden.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>BattlEye aktivieren</b><br>
   Öffne per [SFTP](../sftp-verbindung-herstellen.md) die Datei `/server.cfg` und stelle sicher, dass dort folgender Wert steht:

   ```
   BattlEye = 1;
   ```

3. <b>Port festlegen</b><br>
   RCON läuft über den BattlEye-Port deines Servers – das ist der **Game Port + 4**. Welche Ports deinem Server zugewiesen sind, siehst du in der **Verwaltung**. Steht dieser Port bei dir nicht zur Verfügung, weise deinem Server dort einen zusätzlichen Port zu und verwende diesen.

4. <b>BattlEye-Konfiguration anlegen</b><br>
   Wechsle per SFTP in den `battleye`-Ordner deines Servers und lege dort die Datei `beserver_x64.cfg` an – oder öffne sie, falls sie bereits existiert. Trage folgende zwei Zeilen ein:

   ```
   RConPassword deinRconPasswort
   RConPort deinRconPort
   ```

   :::: info Hinweis
   BattlEye legt den Ordner beim ersten Start mit aktivem BattlEye automatisch an, standardmäßig im Serverprofil-Verzeichnis – also unter `/serverprofile/battleye`. Findest du ihn nicht, starte deinen Server einmal mit `BattlEye = 1;` und stoppe ihn anschließend wieder. Startet dein Server mit der 32-Bit-Binary, heißt die Datei `beserver.cfg` statt `beserver_x64.cfg`.
   ::::

5. <b>Server starten</b><br>
   Speichere die Änderungen und starte deinen Server.

6. <b>Mit RCON verbinden</b><br>
   Verbinde dich mit einem RCON-Tool wie [BattleWarden](https://battlewarden.net/) und trage die IP-Adresse deines Servers, den RCON-Port sowie das RCON-Passwort ein.

## RCON-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `players` | Zeigt alle verbundenen Spieler mit Spielernummer, GUID und Ping |
| `kick [Spielernummer] [Grund]` | Trennt einen Spieler vom Server |
| `ban [Spielernummer] [Dauer] [Grund]` | Bannt einen verbundenen Spieler über seine GUID, `0` bedeutet dauerhaft |
| `addBan [GUID oder IP] [Dauer] [Grund]` | Bannt einen Spieler, der gerade nicht verbunden ist |
| `bans` | Listet alle aktiven Banns mit ihrer Ban-Nummer auf |
| `removeBan [Ban-Nummer]` | Hebt einen einzelnen Bann auf |
| `loadBans` | Lädt die Ban-Liste neu ein |
| `writeBans` | Entfernt abgelaufene Banns aus der Liste |
| `say [Spielernummer] [Nachricht]` | Sendet eine Nachricht, `-1` schickt sie an alle |

:::: tip Bann über RCON aufheben
Führe zuerst `bans` aus und notiere dir die Nummer des Eintrags. Anschließend hebst du den Bann mit `removeBan <Ban-Nummer>` auf.
::::

:::: info Hinweis
Die Spielernummern aus `players` gelten nur für die aktuelle Sitzung. Prüfe sie deshalb direkt vor jedem `kick` oder `ban` erneut.
::::
