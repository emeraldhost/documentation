---
slug: "server-log-auslesen"
language: "de"
title: "So liest Du das Server-Log Deines SCP: Secret Laboratory Servers aus"
description: "Server-Log eines SCP: Secret Laboratory Servers in der Konsole mitlesen und die Log-Dateien per SFTP herunterladen"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server-Log auslesen"
sort: 21
related: ["gameserver/scp-secret-laboratory/troubleshoot-server", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/use-console-commands", "gameserver/scp-secret-laboratory/edit-config-files"]
---
Die Logs zeigen Dir, was auf Deinem SCP: Secret Laboratory Server passiert: den Start, das Laden von Plugins, Verbindungen von Spielern und Aktionen Deiner Admins. Bei Problemen sind sie die erste Anlaufstelle – und genau das, was der Support von Dir braucht.

Es gibt drei Quellen:

| Quelle | Inhalt |
|--------|--------|
| Konsole in der Verwaltung | Live-Ausgabe des Servers, solange er läuft |
| LocalAdmin-Logs | Die komplette Konsolenausgabe als Datei – eine Datei pro Serverstart |
| Runden-Logs | Ein Protokoll pro Runde mit Verbindungen, Kills, Remote-Admin-Aktionen und Spielereignissen |

## Log live in der Konsole mitlesen

Die Konsole in der Verwaltung ist die LocalAdmin-Konsole Deines Servers. Neben der Ausgabe kannst Du dort auch Befehle eingeben – mehr dazu in [Konsolenbefehle nutzen](/tutorials/gameserver/scp-secret-laboratory/use-console-commands) und [Remote Admin nutzen](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin).

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers und wechsle zur **Konsole**.

2. **Server starten**\
   Starte Deinen Server. Die Konsole gibt ab jetzt die Ausgabe des Servers direkt aus.

3. **Ausgabe verfolgen**\
   Lies die Meldungen von oben nach unten mit. Beim Start melden EXILED und LabAPI hier jedes Plugin, das sie laden. Achte besonders auf die Zeilen kurz vor einem Absturz oder einem fehlgeschlagenen Start – dort steht meistens die Ursache.

## Log-Dateien herunterladen

Beide Log-Arten legt der Server in Unterordnern ab, die nach dem Game Port benannt sind. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Log-Ordner öffnen**\
   Wechsle in den passenden Ordner – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/LocalAdminLogs/<Port>/
   /.config/SCP Secret Laboratory/ServerLogs/<Port>/
   ```

   Im Ordner `LocalAdminLogs` liegen die LocalAdmin-Logs, im Ordner `ServerLogs` die Runden-Logs.

4. **Passende Datei auswählen**\
   Die Dateinamen enthalten Datum und Uhrzeit, zu der die Datei angelegt wurde:

   ```text
   LocalAdmin Log 2026-10-02 18.30.05.txt
   Round 2026-10-02 18.31.12.txt
   ```

   Die neueste Datei erkennst Du am jüngsten Datum und der spätesten Uhrzeit im Namen.

5. **Datei herunterladen**\
   Lade die Datei auf Deinen PC herunter und öffne sie mit einem beliebigen Texteditor.

> [!NOTE]
> Der Ordner `.config` beginnt mit einem Punkt und ist deshalb ein versteckter Ordner. Siehst Du ihn in Deinem SFTP-Programm nicht, aktiviere dort die Anzeige versteckter Dateien.

## Aufbau der Runden-Logs

Jede Zeile eines Runden-Logs besteht aus vier Teilen, getrennt durch `|`:

```text
Zeitpunkt | Typ | Modul | Inhalt
```

- **Zeitpunkt**: Datum und Uhrzeit mit Millisekunden. Endet der Zeitpunkt auf `Z`, ist die Uhrzeit in UTC angegeben, sonst folgt die Abweichung von UTC (z.B. `+02:00`).
- **Typ**: die Art des Eintrags, z.B. `Connection update`, `Remote Admin`, `Remote Admin - Misc`, `Kill`, `Game Event`, `Teamkill`, `Suicide`, `AdminChat` oder `Internal`.
- **Modul**: der Bereich des Spiels, z.B. `Networking`, `Administrative`, `Class change`, `Warhead` oder `Game logic`.
- **Inhalt**: die eigentliche Meldung.

> [!TIP]
> **Beispiel**
>
> ```text
> 2026-10-02 18:31:12.402Z | Internal            | Game logic     | Started logging.
> 2026-10-02 18:45:37.918Z | Remote Admin        | Administrative | Admin (76561198000000001@steam) banned player Max (76561198000000002@steam). Ban duration: 1d. Reason: Cheating.
> ```

## Worauf Du im Log achten solltest

### Plugin-Fehler

Fehlermeldungen von Plugins stehen in der Konsole und in den LocalAdmin-Logs. EXILED und LabAPI kennzeichnen sie mit `[ERROR]`, gefolgt vom Namen der Plugin-DLL (ohne `.dll`) in eckigen Klammern, z.B. `[ERROR] [MeinPlugin] ...`. Warnungen erkennst Du an `[WARN]`. Interne Fehler von LabAPI selbst beginnen mit `[LabAPI INTERNAL ERROR]`.

Ob ein Plugin überhaupt geladen wurde, siehst Du an den Lade-Meldungen beim Serverstart: bei EXILED `Loaded plugin <Name>@<Version>`, bei LabAPI `[LOADER] Successfully loaded <Name>`. Was die einzelnen Fehlermeldungen bedeuten und wie Du sie behebst, erfährst Du unter [Plugins laden nicht](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading).

> [!TIP]
> Suche in der heruntergeladenen Datei mit der Suchfunktion Deines Texteditors nach `[ERROR]` oder nach dem Namen der Plugin-DLL (ohne `.dll`) – so findest Du die relevanten Zeilen schneller.

### Blockierte Länder

Hast Du [Geoblocking](/tutorials/gameserver/scp-secret-laboratory/set-up-geoblocking) eingerichtet, schreibt der Server jeden abgewiesenen Verbindungsversuch in die Konsole und damit auch in die LocalAdmin-Logs:

```text
Player 76561198000000002@steam (203.0.113.10:51234) tried joined from blocked country US.
```

Die Meldung enthält die UserID, die IP-Adresse samt Port und das Länderkürzel.

> [!NOTE]
> Diese Meldungen erscheinen nur, solange `display_preauth_logs` nicht auf `false` gesetzt ist. Der Eintrag steht standardmäßig nicht in der `config_gameplay.txt`, die Meldungen sind also aktiv. Kommen sehr viele abgewiesene Verbindungen auf einmal, unterdrückt der Server weitere Meldungen dieser Art vorübergehend.

### Kicks und Bans

Bans und Kicks über Remote Admin landen im Runden-Log mit dem Typ `Remote Admin` und dem Modul `Administrative`. Die Zeile nennt den Admin, den betroffenen Spieler, die Dauer und den Grund (siehe Beispiel oben). Ein Kick erscheint dort ebenfalls als `banned player` – mit der Dauer `0`.

Versucht ein gebannter Spieler erneut beizutreten, steht im Runden-Log und in der Konsole eine Zeile wie:

```text
Banned player 76561198000000002@steam tried to connect from endpoint 203.0.113.10:51234.
```

Mehr zum Moderieren findest Du unter [Spieler kicken und bannen](/tutorials/gameserver/scp-secret-laboratory/kick-and-ban-players).

## Wie lange Logs aufbewahrt werden

LocalAdmin räumt alte Logs automatisch auf, solange Dein Server läuft. Gesteuert wird das über die LocalAdmin-Konfiguration – die Datei `config_localadmin.txt` im Ordner `/.config/SCP Secret Laboratory/config/<Port>/` oder, falls dort keine liegt, die Datei `config_localadmin_global.txt` in `/.config/SCP Secret Laboratory/config/`.

| Eintrag | Standard | Bedeutung |
|---------|----------|-----------|
| `la_delete_old_logs` | `true` | LocalAdmin-Logs automatisch löschen |
| `la_logs_expiration_days` | `90` | Alter in Tagen, ab dem LocalAdmin-Logs gelöscht werden |
| `delete_old_round_logs` | `false` | Runden-Logs automatisch löschen |
| `round_logs_expiration_days` | `180` | Alter in Tagen, ab dem Runden-Logs gelöscht werden |
| `compress_old_round_logs` | `false` | Runden-Logs automatisch komprimieren |
| `round_logs_compression_threshold_days` | `14` | Alter in Tagen, ab dem Runden-Logs komprimiert werden |

LocalAdmin-Logs werden also standardmäßig nach 90 Tagen gelöscht. Runden-Logs bleiben dagegen erhalten, bis Du sie selbst löschst. Setzt Du `delete_old_round_logs` auf `true`, werden sie nach 180 Tagen gelöscht. Mit `compress_old_round_logs: true` packt LocalAdmin Runden-Logs, die älter als 14 Tage sind, pro Tag in ein ZIP-Archiv mit dem Namen `Round Logs Archive <Datum>.zip`.

So änderst Du die Aufbewahrung:

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **LocalAdmin-Konfiguration bearbeiten**\
   Öffne die Datei `/.config/SCP Secret Laboratory/config/<Port>/config_localadmin.txt` – ersetze `<Port>` durch Deinen Game Port. Liegt dort keine, öffne `/.config/SCP Secret Laboratory/config/config_localadmin_global.txt`. Passe die Einträge aus der Tabelle an, z.B.:

   ```text
   delete_old_round_logs: true
   ```

5. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

> [!NOTE]
> Mehr zum Bearbeiten von Konfigurationsdateien findest Du unter [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Lade Logs, die Du für ein Problem brauchst, am besten direkt herunter – bevor sie automatisch gelöscht werden.

## Wenn Du nicht weiterkommst

Wirst Du aus dem Log nicht schlau, hänge die passende Datei aus `LocalAdminLogs` und – wenn es um Ereignisse in einer Runde geht – das Runden-Log aus `ServerLogs` einfach an ein [Support-Ticket](https://emeraldhost.de/de/support) an und beschreibe kurz, wann das Problem aufgetreten ist. Damit können wir gezielt nachsehen.

> [!NOTE]
> Lösungen für typische Fehler findest Du unter [Server-Probleme beheben](/tutorials/gameserver/scp-secret-laboratory/troubleshoot-server).
