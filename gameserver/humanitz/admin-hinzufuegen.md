---
description: Admin auf einem HumanitZ Server hinzufügen
---

# So fügst du einen Admin auf deinem HumanitZ Server hinzu

HumanitZ arbeitet mit einem **Admin-Passwort**: Du hinterlegst es in der Konfigurationsdatei deines Servers, und wer es im Spiel per Chat-Befehl eingibt, erhält Adminrechte. Eine funktionierende Admin-Liste mit SteamIDs gibt es derzeit nicht.

:::: warning Achtung
Jeder, der das Admin-Passwort kennt, hat volle Adminrechte auf deinem Server. Gib es nur an Personen weiter, denen du vertraust, und verwende ein anderes Passwort als das Server- und das RCON-Passwort.
::::

:::: info Projektordner
Alle Pfade in dieser Anleitung beginnen mit dem Projektordner `HumanitZServer`. Läuft dein Server noch auf einer älteren Version vor HumanitZ 1.0, heißt dieser Ordner stattdessen `TSSGame`. Prüfe per SFTP, welcher der beiden Ordner bei dir vorhanden ist, und passe die Pfade entsprechend an.
::::

## Admin-Passwort setzen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Konfigurationsdatei wird nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /HumanitZServer/GameServerSettings.ini
   ```

4. <b>Passwort eintragen</b><br>
   Trage im Abschnitt `[Host Settings]` dein gewünschtes Admin-Passwort ein:

   ```ini
   [Host Settings]
   AdminPass="DeinAdminPasswort"
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Bietet die Verwaltung deines Servers ein eigenes Feld für das Admin-Passwort an, nutze bevorzugt dieses Feld – Werte aus der Verwaltung können beim Start in die Konfigurationsdatei zurückgeschrieben werden.
::::

## Adminrechte im Spiel freischalten

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei. Wie das geht, steht unter [Server beitreten](server-beitreten.md).

2. <b>Chat öffnen</b><br>
   Öffne im Spiel den Chat.

3. <b>Befehl eingeben</b><br>
   Gib den folgenden Befehl mit deinem Admin-Passwort ein:

   ```
   /AdminAccess DeinAdminPasswort
   ```

4. <b>Adminbefehle nutzen</b><br>
   Ab jetzt stehen dir die Adminbefehle zur Verfügung.

:::: info Hinweis
Die Freischaltung gilt für die aktuelle Sitzung. Nach einem Verbindungsabbruch oder einem Serverneustart gibst du den Befehl erneut ein.
::::

## Adminbefehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/AdminAccess <Passwort>` | Adminrechte freischalten |
| `/admintag` | Admin-Tag im Chat ein- oder ausblenden |
| `/adminw` | Öffnet eine Admin-Oberfläche zum Spawnen von Gegenständen und Ändern einiger Spieleinstellungen |
| `/SuperAdmin` | Schaltet den freien Flugmodus ein oder aus – darin bist du für andere Spieler unsichtbar |
| `/god` | Unverwundbarkeit ein- oder ausschalten |
| `/SaveGame` | Speichert den aktuellen Spielstand |
| `/Shutdown <Sekunden>` | Fährt den Server nach der angegebenen Zeit herunter |

:::: warning Achtung
`/Shutdown` beendet den Serverprozess. Ob dein Server danach automatisch wieder startet, hängt von den Einstellungen in der Verwaltung ab – starte ihn im Zweifel dort manuell neu.
::::

## AdminList.txt

Im Projektordner kann zusätzlich eine Datei `AdminList.txt` mit einer SteamID64 (NET-ID) pro Zeile angelegt werden:

```
/HumanitZServer/AdminList.txt
```

:::: danger Wichtig
Laut der offiziellen Dokumentation hat diese Datei **derzeit keine Funktion** – sie ist dort ausdrücklich als nicht funktionierend gekennzeichnet. Vergib Adminrechte deshalb ausschließlich über `AdminPass` und `/AdminAccess`.
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du eine [SteamID64](../steamid64-herausfinden.md) herausfindest. Die IDs der Spieler, die bereits auf deinem Server waren, findest du außerdem in der Datei `/HumanitZServer/PlayerIDMapped.txt`, in der die ID dem Spielernamen zugeordnet wird.
::::

:::: tip Tipp
Wie du Spieler vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
