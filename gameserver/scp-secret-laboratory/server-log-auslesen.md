---
description: "Server-Log eines SCP: Secret Laboratory Servers in der Konsole mitlesen und die Log-Dateien per SFTP herunterladen"
---

# So liest du das Server-Log deines SCP: Secret Laboratory Servers aus

Die Logs zeigen dir, was auf deinem SCP: Secret Laboratory Server passiert: den Start, das Laden von Plugins, Verbindungen von Spielern und Aktionen deiner Admins. Bei Problemen sind sie die erste Anlaufstelle – und genau das, was der Support von dir braucht.

Es gibt drei Quellen:

| Quelle | Inhalt |
|--------|--------|
| Konsole in der Verwaltung | Live-Ausgabe des Servers, solange er läuft |
| LocalAdmin-Logs | Die komplette Konsolenausgabe als Datei – eine Datei pro Serverstart |
| Runden-Logs | Ein Protokoll pro Runde mit Verbindungen, Kills, Remote-Admin-Aktionen und Spielereignissen |

## Log live in der Konsole mitlesen

Die Konsole in der Verwaltung ist die LocalAdmin-Konsole deines Servers. Neben der Ausgabe kannst du dort auch Befehle eingeben – mehr dazu in [Konsolenbefehle nutzen](konsolenbefehle-nutzen.md) und [Remote Admin nutzen](remote-admin-nutzen.md).

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers und wechsle zur **Konsole**.

2. <b>Server starten</b><br>
   Starte deinen Server. Die Konsole gibt ab jetzt die Ausgabe des Servers direkt aus.

3. <b>Ausgabe verfolgen</b><br>
   Lies die Meldungen von oben nach unten mit. Beim Start melden EXILED und LabAPI hier jedes Plugin, das sie laden. Achte besonders auf die Zeilen kurz vor einem Absturz oder einem fehlgeschlagenen Start – dort steht meistens die Ursache.

## Log-Dateien herunterladen

Beide Log-Arten legt der Server in Unterordnern ab, die nach dem Game Port benannt sind. Den Game Port findest du in der Verwaltung unter **Übersicht**.

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Log-Ordner öffnen</b><br>
   Wechsle in den passenden Ordner – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/LocalAdminLogs/<Port>/
   /.config/SCP Secret Laboratory/ServerLogs/<Port>/
   ```

   Im Ordner `LocalAdminLogs` liegen die LocalAdmin-Logs, im Ordner `ServerLogs` die Runden-Logs.

4. <b>Passende Datei auswählen</b><br>
   Die Dateinamen enthalten Datum und Uhrzeit, zu der die Datei angelegt wurde:

   ```
   LocalAdmin Log 2026-10-02 18.30.05.txt
   Round 2026-10-02 18.31.12.txt
   ```

   Die neueste Datei erkennst du am jüngsten Datum und der spätesten Uhrzeit im Namen.

5. <b>Datei herunterladen</b><br>
   Lade die Datei auf deinen PC herunter und öffne sie mit einem beliebigen Texteditor.

:::: info Hinweis
Der Ordner `.config` beginnt mit einem Punkt und ist deshalb ein versteckter Ordner. Siehst du ihn in deinem SFTP-Programm nicht, aktiviere dort die Anzeige versteckter Dateien.
::::

## Aufbau der Runden-Logs

Jede Zeile eines Runden-Logs besteht aus vier Teilen, getrennt durch `|`:

```
Zeitpunkt | Typ | Modul | Inhalt
```

- **Zeitpunkt**: Datum und Uhrzeit mit Millisekunden. Endet der Zeitpunkt auf `Z`, ist die Uhrzeit in UTC angegeben, sonst folgt die Abweichung von UTC (z.B. `+02:00`).
- **Typ**: die Art des Eintrags, z.B. `Connection update`, `Remote Admin`, `Remote Admin - Misc`, `Kill`, `Game Event`, `Teamkill`, `Suicide`, `AdminChat` oder `Internal`.
- **Modul**: der Bereich des Spiels, z.B. `Networking`, `Administrative`, `Class change`, `Warhead` oder `Game logic`.
- **Inhalt**: die eigentliche Meldung.

:::: tip Beispiel
```
2026-10-02 18:31:12.402Z | Internal            | Game logic     | Started logging.
2026-10-02 18:45:37.918Z | Remote Admin        | Administrative | Admin (76561198000000001@steam) banned player Max (76561198000000002@steam). Ban duration: 1d. Reason: Cheating.
```
::::

## Worauf du im Log achten solltest

### Plugin-Fehler

Fehlermeldungen von Plugins stehen in der Konsole und in den LocalAdmin-Logs. EXILED und LabAPI kennzeichnen sie mit `[ERROR]`, gefolgt vom Namen der Plugin-DLL (ohne `.dll`) in eckigen Klammern, z.B. `[ERROR] [MeinPlugin] ...`. Warnungen erkennst du an `[WARN]`. Interne Fehler von LabAPI selbst beginnen mit `[LabAPI INTERNAL ERROR]`.

Ob ein Plugin überhaupt geladen wurde, siehst du an den Lade-Meldungen beim Serverstart: bei EXILED `Loaded plugin <Name>@<Version>`, bei LabAPI `[LOADER] Successfully loaded <Name>`. Was die einzelnen Fehlermeldungen bedeuten und wie du sie behebst, erfährst du unter [Plugins laden nicht](plugins-laden-nicht.md).

:::: tip Tipp
Suche in der heruntergeladenen Datei mit der Suchfunktion deines Texteditors nach `[ERROR]` oder nach dem Namen der Plugin-DLL (ohne `.dll`) – so findest du die relevanten Zeilen schneller.
::::

### Blockierte Länder

Hast du [Geoblocking](geoblocking-einrichten.md) eingerichtet, schreibt der Server jeden abgewiesenen Verbindungsversuch in die Konsole und damit auch in die LocalAdmin-Logs:

```
Player 76561198000000002@steam (203.0.113.10:51234) tried joined from blocked country US.
```

Die Meldung enthält die UserID, die IP-Adresse samt Port und das Länderkürzel.

:::: info Hinweis
Diese Meldungen erscheinen nur, solange `display_preauth_logs` nicht auf `false` gesetzt ist. Der Eintrag steht standardmäßig nicht in der `config_gameplay.txt`, die Meldungen sind also aktiv. Kommen sehr viele abgewiesene Verbindungen auf einmal, unterdrückt der Server weitere Meldungen dieser Art vorübergehend.
::::

### Kicks und Bans

Bans und Kicks über Remote Admin landen im Runden-Log mit dem Typ `Remote Admin` und dem Modul `Administrative`. Die Zeile nennt den Admin, den betroffenen Spieler, die Dauer und den Grund (siehe Beispiel oben). Ein Kick erscheint dort ebenfalls als `banned player` – mit der Dauer `0`.

Versucht ein gebannter Spieler erneut beizutreten, steht im Runden-Log und in der Konsole eine Zeile wie:

```
Banned player 76561198000000002@steam tried to connect from endpoint 203.0.113.10:51234.
```

Mehr zum Moderieren findest du unter [Spieler kicken und bannen](spieler-kicken-und-bannen.md).

## Wie lange Logs aufbewahrt werden

LocalAdmin räumt alte Logs automatisch auf, solange dein Server läuft. Gesteuert wird das über die LocalAdmin-Konfiguration – die Datei `config_localadmin.txt` im Ordner `/.config/SCP Secret Laboratory/config/<Port>/` oder, falls dort keine liegt, die Datei `config_localadmin_global.txt` in `/.config/SCP Secret Laboratory/config/`.

| Eintrag | Standard | Bedeutung |
|---------|----------|-----------|
| `la_delete_old_logs` | `true` | LocalAdmin-Logs automatisch löschen |
| `la_logs_expiration_days` | `90` | Alter in Tagen, ab dem LocalAdmin-Logs gelöscht werden |
| `delete_old_round_logs` | `false` | Runden-Logs automatisch löschen |
| `round_logs_expiration_days` | `180` | Alter in Tagen, ab dem Runden-Logs gelöscht werden |
| `compress_old_round_logs` | `false` | Runden-Logs automatisch komprimieren |
| `round_logs_compression_threshold_days` | `14` | Alter in Tagen, ab dem Runden-Logs komprimiert werden |

LocalAdmin-Logs werden also standardmäßig nach 90 Tagen gelöscht. Runden-Logs bleiben dagegen erhalten, bis du sie selbst löschst. Setzt du `delete_old_round_logs` auf `true`, werden sie nach 180 Tagen gelöscht. Mit `compress_old_round_logs: true` packt LocalAdmin Runden-Logs, die älter als 14 Tage sind, pro Tag in ein ZIP-Archiv mit dem Namen `Round Logs Archive <Datum>.zip`.

So änderst du die Aufbewahrung:

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>LocalAdmin-Konfiguration bearbeiten</b><br>
   Öffne die Datei `/.config/SCP Secret Laboratory/config/<Port>/config_localadmin.txt` – ersetze `<Port>` durch deinen Game Port. Liegt dort keine, öffne `/.config/SCP Secret Laboratory/config/config_localadmin_global.txt`. Passe die Einträge aus der Tabelle an, z.B.:

   ```
   delete_old_round_logs: true
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

:::: info Hinweis
Mehr zum Bearbeiten von Konfigurationsdateien findest du unter [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).
::::

:::: warning Achtung
Lade Logs, die du für ein Problem brauchst, am besten direkt herunter – bevor sie automatisch gelöscht werden.
::::

## Wenn du nicht weiterkommst

Wirst du aus dem Log nicht schlau, hänge die passende Datei aus `LocalAdminLogs` und – wenn es um Ereignisse in einer Runde geht – das Runden-Log aus `ServerLogs` einfach an ein [Support-Ticket](https://emeraldhost.de/de/support) an und beschreibe kurz, wann das Problem aufgetreten ist. Damit können wir gezielt nachsehen.

:::: info Hinweis
Lösungen für typische Fehler findest du unter [Server-Probleme beheben](server-probleme-beheben.md).
::::
