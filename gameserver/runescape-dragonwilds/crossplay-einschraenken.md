---
description: Crossplay auf einem RuneScape Dragonwilds Server einschränken
---

# So schränkst du Crossplay auf deinem RuneScape: Dragonwilds Server ein

Seit dem 1.0-Update ist dein Server automatisch ein Crossplay-Server. Spieler auf PC, PlayStation 5, Xbox Series X|S und Nintendo Switch 2 können gemeinsam [beitreten](server-beitreten.md), ohne dass du in der Verwaltung etwas einstellen musst. Möchtest du deinen Server auf eine einzelne Plattform beschränken, kannst du das optional per SFTP in der Konfigurationsdatei festlegen.

:::: info Hinweis
Für Crossplay gibt es kein Feld in den Einstellungen der Verwaltung. Die Einschränkung erfolgt ausschließlich über die Datei `DedicatedServer.ini`. Soll nur ein bestimmter Spielerkreis beitreten dürfen, kannst du zusätzlich ein [Server Passwort](server-passwort-setzen.md) setzen.
::::

## Mögliche Werte

Die Einstellung `PlatformPolicy` legt fest, welche Plattform deinem Server beitreten darf:

| Wert | Bedeutung |
| ---- | --------- |
| `Crossplay` | Alle Plattformen dürfen beitreten (Standard) |
| `PC` | Nur PC-Spieler dürfen beitreten |
| `PlayStation` | Nur PlayStation-Spieler dürfen beitreten |
| `Xbox` | Nur Xbox-Spieler dürfen beitreten |
| `Nintendo` | Nur Nintendo-Switch-Spieler dürfen beitreten |

## Crossplay einschränken

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /RSDragonwilds/Saved/Config/LinuxServer/DedicatedServer.ini
   ```

4. <b>PlatformPolicy eintragen</b><br>
   Füge unter der Sektion `[/Script/Dominion.DedicatedServerSettings]` die Zeile `PlatformPolicy=` mit dem gewünschten Wert aus der Tabelle hinzu. Ist die Zeile bereits vorhanden, passe nur den Wert an.

   :::: tip Beispiel
   ```
   [/Script/Dominion.DedicatedServerSettings]
   PlatformPolicy=PC
   ```
   ::::

   :::: warning Achtung
   Verwende genau die Schreibweise aus der Tabelle. Bei einem ungültigen Wert startet der Server nicht und im Log erscheint die Meldung `The [PlatformPolicy] value [...] is invalid. Valid values: ...` mit den gültigen Werten. Korrigiere in diesem Fall den Wert und starte den Server neu.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: info Hinweis
Die Verwaltung schreibt beim Start nur die Werte aus den Einstellungen (Owner ID, Namen und Passwörter) in die Datei. Deine `PlatformPolicy`-Zeile bleibt dabei erhalten.
::::

## Einstellung überprüfen

Ob die Einstellung übernommen wurde, siehst du im Log deines Servers unter `/RSDragonwilds/Saved/Logs/RSDragonwilds.log`:

- `Session crossplay set to [...]` – zeigt die aktive Crossplay-Einstellung deines Servers
- `PlatformPolicy not set - defaulting to Crossplay` – es ist kein Wert eingetragen, alle Plattformen dürfen beitreten

## Crossplay wieder für alle öffnen

Setze den Wert wieder auf `PlatformPolicy=Crossplay` oder entferne die Zeile aus der Datei und starte deinen Server neu.

:::: tip Fehlerbehebung
Wird ein Spieler auf deinem Crossplay-Server mit einer Crossplay-Fehlermeldung abgewiesen, hat er Crossplay in den Einstellungen des Spiels deaktiviert und muss es dort wieder aktivieren. Im Log deines Servers erscheint in diesem Fall `PreLogin rejected crossplay-disabled client from a crossplay server`.
::::
