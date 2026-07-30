---
description: Admin auf einem SCUM Server hinzufügen
---

# So fügst du einen Admin auf deinem SCUM Server hinzu

Admins werden auf einem SCUM Server ausschließlich über Konfigurationsdateien festgelegt. Eingetragen wird die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

:::: info Hinweis
Der Konfigurationsordner heißt auch auf deinem Linux-Server `WindowsServer`. Das ist so gewollt – SCUM stellt nur ein Windows-Serverprogramm bereit, das auf Linux-Servern über eine Kompatibilitätsschicht läuft.
::::

## Admin hinzufügen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Die Admin-Listen werden nur beim Serverstart eingelesen.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>AdminUsers.ini öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /SCUM/Saved/Config/WindowsServer/AdminUsers.ini
   ```

4. <b>SteamID64 eintragen</b><br>
   Trage pro Zeile genau eine SteamID64 ein:

   ```
   76561198012345678
   76561198087654321
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Zusätzliche Rechte vergeben

Einzelne Befehle sind nicht automatisch freigeschaltet. Du erlaubst sie, indem du direkt hinter die SteamID64 – ohne Leerzeichen – ein Rechte-Suffix in eckigen Klammern setzt:

```
76561198012345678[SetGodMode]
76561198087654321[SetGodMode, RestartServer]
76561198011223344[RestartServer]
```

| Suffix | Bedeutung |
|--------|-----------|
| `[SetGodMode]` | Erlaubt den Befehl `#SetGodMode True` bzw. `#SetGodMode False`. In SCUM bedeutet das sofortiges Bauen – keine klassische Unverwundbarkeit, sterben kannst du weiterhin. |
| `[RestartServer]` | Erlaubt den Neustart des Servers über den Befehl `#RestartServer pretty please` |

:::: info Hinweis
Ohne Suffix erhält der Admin die normalen Adminbefehle. Mehrere Suffixe schreibst du durch Komma getrennt in dieselben eckigen Klammern.
::::

## Zugriff auf die Servereinstellungen im Spiel

Damit ein Admin zusätzlich die Servereinstellungen direkt im Spiel bearbeiten darf, trägst du ihn in eine zweite Datei ein:

```
/SCUM/Saved/Config/WindowsServer/ServerSettingsAdminUsers.ini
```

Hier gehört **nur die reine SteamID64** hinein – ohne eckige Klammern und ohne Suffixe:

```
76561198012345678
```

Auch diese Datei wird erst beim Serverstart eingelesen.

## Adminbefehle nutzen

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. <b>Befehl eingeben</b><br>
   Alle Adminbefehle beginnen mit `#`, zum Beispiel:

   ```
   #ListPlayers
   ```

3. <b>Befehle anzeigen</b><br>
   Gibst du nur ein einzelnes `#` ein, listet dir der Server alle verfügbaren Befehle auf.

:::: warning Achtung
Adminrechte lassen sich ausschließlich über die Datei `AdminUsers.ini` vergeben. Häufig kursierende Befehle wie `#SetAdmin` oder `#God` existieren in SCUM nicht.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
