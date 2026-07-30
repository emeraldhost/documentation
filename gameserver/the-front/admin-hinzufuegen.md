---
description: Admin auf einem The Front Server hinzufügen
---

# So fügst du einen Admin auf deinem The Front Server hinzu

Admins werden auf einem The Front Server über ihre **SteamID64** eingetragen – eine 17-stellige Zahl, die mit `7656` beginnt. Du kannst sie entweder als Startparameter setzen oder in die Konfigurationsdatei deines Servers schreiben.

:::: tip Tipp
Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

:::: danger Wichtig
Mehrere SteamID64 trennst du durch ein **Semikolon** (`;`) – ohne Leerzeichen dazwischen. Ein eingetragener Admin erhält automatisch die höchste GM-Stufe (Stufe 25).
::::

## Weg 1: Über die Verwaltung

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>Admin-IDs eintragen</b><br>
   Trage deine SteamID64 in das Feld für die Admin-Accounts ein. Bietet deine Verwaltung nur ein Feld für zusätzliche Startparameter, ergänzt du dort:

   ```
   -ServerAdminAccounts="76561198012345678;76561198087654321"
   ```

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu. Die Admin-Liste wird nur beim Serverstart eingelesen.

## Weg 2: Über die Konfigurationsdatei

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei. Existiert sie noch nicht, lege sie an:

   ```
   /TheFrontManager/ServerConfig_<Konfigurationsname>.ini
   ```

   :::: info Welcher Konfigurationsname?
   Der Name kommt vom Startparameter `-ConfigServerName=` deines Servers – das ist nicht der Servername aus der Serverliste. Steht dort `new`, lautet die Datei `ServerConfig_new.ini`. Ist kein Name gesetzt, heißt sie schlicht `ServerConfig_.ini`.

   Ordner- und Dateiname müssen exakt so geschrieben werden – sonst lädt der Server die Konfiguration nicht.
   ::::

4. <b>SteamID64 eintragen</b><br>
   Trage die IDs im Abschnitt `[BaseServerConfig]` ein:

   ```
   [BaseServerConfig]
   ServerAdminAccounts=76561198012345678;76561198087654321
   ```

   :::: info Hinweis
   Der Abschnitt `[BaseServerConfig]` muss in der Datei stehen, sonst wird kein Wert übernommen. Legst du die Datei neu an, ist das die minimale Struktur.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Admin im Spiel nutzen

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei, siehe [Server beitreten](server-beitreten.md).

2. <b>Adminmenü öffnen</b><br>
   Drücke `Shift` + `G`. Es öffnet sich das Adminmenü, über das du die Adminbefehle ausführst.

3. <b>Befehl ausführen</b><br>
   Gib den gewünschten Befehl ein, zum Beispiel:

   ```
   AddGM 76561198012345678 25
   ```

:::: tip Konsole
Alternativ öffnest du die Konsole mit der Taste `` ` `` beziehungsweise `~` – auf einer englischen Tastatur die Taste links neben der `1`. Reagiert die Taste nicht, stelle dein Tastaturlayout auf Englisch um.
::::

## Admins im Spiel verwalten

Bist du bereits Admin, kannst du weitere Admins direkt im Spiel vergeben – ohne Serverneustart:

| Befehl | Beschreibung |
|--------|-------------|
| `AddGM <SteamID64> <GM-Stufe>` | Spieler zum Admin machen. Höchste Stufe ist `25`. |
| `RemoveGM <SteamID64>` | Adminrechte wieder entziehen |
| `ToggleGMTitleShow 0` | Admin-Kennzeichnung im Spiel ausblenden |
| `ToggleGMTitleShow 1` | Admin-Kennzeichnung im Spiel einblenden |

:::: info Hinweis
Ob dein Admin-Titel für andere Spieler sichtbar ist, steuerst du zusätzlich über den Wert `IsShowGmTitle=` in der Konfigurationsdatei beziehungsweise den Startparameter `-IsShowGmTitle`.
::::

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
