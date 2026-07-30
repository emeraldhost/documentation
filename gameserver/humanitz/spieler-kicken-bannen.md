---
description: Spieler auf einem HumanitZ Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem HumanitZ Server

Kicken und Bannen läuft bei HumanitZ über **RCON**. Chat-Befehle dafür gibt es nicht – die entsprechenden Befehle sind ausschließlich RCON-Befehle. Du musst RCON also einmalig einrichten, bevor du Spieler entfernen kannst.

:::: info Projektordner
Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei dir vorhanden ist, und passe die Pfade entsprechend an.
::::

## RCON einrichten

1. <b>Port prüfen</b><br>
   RCON benötigt einen eigenen **TCP-Port**. Welcher Port dafür für deinen Server zur Verfügung steht, siehst du in der **Verwaltung** in der Port-Übersicht. Ist dort kein zusätzlicher Port hinterlegt, kannst du einen über ein Support-Ticket anfragen.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /HumanitZServer/GameServerSettings.ini
   ```

5. <b>RCON aktivieren</b><br>
   Trage im Abschnitt `[Host Settings]` folgende Werte ein:

   ```ini
   [Host Settings]
   RCONEnabled=true
   RConPort=<RCON-Port aus der Verwaltung>
   RCONPass="DeinRconPasswort"
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Behandle das RCON-Passwort wie ein Admin-Passwort: Wer es kennt, kann deinen Server fernsteuern. Verwende ein eigenes, sicheres Passwort und teile es nur mit vertrauenswürdigen Personen.
::::

:::: tip Tipp
`RCONEnabled=true` solltest du ohnehin gesetzt lassen: Nur mit aktiviertem RCON wird der Ping deines Servers im Serverbrowser angezeigt.
::::

## Mit einem RCON-Tool verbinden

HumanitZ nutzt eine zu Valve kompatible RCON-Umsetzung. Du kannst daher jeden gängigen RCON-Client verwenden.

1. <b>RCON-Tool öffnen</b><br>
   Öffne ein RCON-Tool wie **mcrcon** oder einen vergleichbaren RCON-Client.

2. <b>Verbindungsdaten eingeben</b><br>
   - **Host:** die IP-Adresse deines Servers (ohne Port)
   - **Port:** der RCON-Port aus der Verwaltung
   - **Passwort:** das Passwort aus `RCONPass`

3. <b>Befehle ausführen</b><br>
   Nach erfolgreicher Verbindung kannst du die untenstehenden Befehle ausführen.

## Spieler-ID ermitteln

Zum Kicken und Bannen benötigst du die **Steam-ID** des Spielers. Diese liefert dir der Befehl:

```
Players
```

Die Ausgabe listet alle verbundenen Spieler mit Namen und Steam-ID auf.

:::: tip Tipp
Auch die Datei `/HumanitZServer/PlayerIDMapped.txt` ordnet die IDs den Spielernamen zu. Wie du eine [SteamID64](../steamid64-herausfinden.md) selbst herausfindest, steht in dieser Anleitung.
::::

## Spieler kicken

```
kick <SteamID>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
ban <SteamID>
```

Der Spieler wird sofort vom Server geworfen, in die Bannliste eingetragen und kann sich nicht mehr verbinden.

## Bann aufheben

```
unban <SteamID>
```

Mit `fetchbanned` rufst du vorher die Liste aller gebannten Steam-IDs ab.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `Players` | Zeigt alle verbundenen Spieler mit Namen und Steam-ID |
| `kick <SteamID>` | Trennt einen Spieler vom Server |
| `ban <SteamID>` | Bannt einen Spieler und wirft ihn vom Server |
| `unban <SteamID>` | Hebt den Bann eines Spielers auf |
| `fetchbanned` | Zeigt die Liste aller gebannten Steam-IDs |
| `admin <Nachricht>` | Sendet eine Chat-Nachricht mit Admin-Tag |

## Bannliste als Datei bearbeiten

Die Banns deines Servers liegen zusätzlich in einer Textdatei im Projektordner:

```
/HumanitZServer/F_BannedPlayers.txt
```

Darin steht eine Steam-ID pro Zeile. Existiert die Datei noch nicht, kannst du sie selbst anlegen.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Datei bearbeiten</b><br>
   Öffne `F_BannedPlayers.txt` per SFTP und trage eine Steam-ID pro Zeile ein – oder entferne eine Zeile, um einen Bann aufzuheben:

   ```
   76561198012345678
   76561198087654321
   ```

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Die Datei wird beim Serverstart eingelesen. Änderungen im laufenden Betrieb greifen nicht sofort und können beim Stoppen des Servers überschrieben werden. Nutze für einen sofortigen Bann den RCON-Befehl `ban`.
::::

## Global gebannte Spieler aussperren

Im Abschnitt `[Host Settings]` kannst du zusätzlich die globale Bannliste aktivieren:

```ini
UseGlobalBanList=true
```

Dein Server weist damit Spieler ab, die auf den offiziellen Servern gebannt wurden.

## Whitelist einrichten

Möchtest du deinen Server nur für bestimmte Spieler öffnen, aktivierst du im Abschnitt `[Host Settings]`:

```ini
OnlyAllowedPlayers=1
```

Die zugelassenen Spieler trägst du anschließend mit einer Steam-ID pro Zeile in folgende Datei ein:

```
/HumanitZServer/F_MVPAccess.txt
```

:::: danger Wichtig
Sobald `OnlyAllowedPlayers=1` gesetzt ist, kommen ausschließlich Spieler auf den Server, die in `F_MVPAccess.txt` stehen. Trage dich deshalb selbst zuerst ein, bevor du den Server startest.
::::

:::: info Reservierte Slots
Mit `ReserveSlots=<Anzahl>` reservierst du Plätze auf einem vollen Server. Die dafür berechtigten Spieler trägst du mit einer Steam-ID pro Zeile in `/HumanitZServer/F_ReservedSlots.txt` ein.
::::

## Admin-Oberfläche im Spiel

:::: info Hinweis
Mit Adminrechten öffnest du im Spiel über `/adminw` eine Admin-Oberfläche, über die sich Spieler ebenfalls verwalten lassen. Der genaue Klickweg ist nicht offiziell dokumentiert und kann sich mit Spiel-Updates ändern – der zuverlässige und dokumentierte Weg zum Kicken und Bannen ist RCON. Wie du Adminrechte erhältst, steht unter [Admin hinzufügen](admin-hinzufuegen.md).
::::
