---
description: "Häufige Probleme auf einem SCP: Secret Laboratory Server finden und beheben"
---

# So behebst du häufige Probleme auf deinem SCP: Secret Laboratory Server

Taucht dein Server nicht in der Serverliste auf, können Spieler nach einem Update nicht mehr beitreten oder startet der Server immer wieder neu, steckt meist eine von wenigen typischen Ursachen dahinter. Diese Anleitung zeigt dir die häufigsten Probleme, ihre Ursache und die passende Lösung.

:::: danger Wichtig
Erstelle vor jeder Änderung an deinem Server ein [Backup](backup-erstellen.md). So kannst du jederzeit zum letzten funktionierenden Stand zurückkehren.
::::

:::: info Hinweis
Bei SCP: Secret Laboratory stellst du nichts in den Einstellungen der Verwaltung ein – die gesamte Konfiguration läuft über Dateien per SFTP. Wo die Dateien liegen, zeigt [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).
::::

## Zuerst die Konsole prüfen

Fast jedes Problem hinterlässt Spuren in der Ausgabe des Servers. Die Konsole in der Verwaltung ist die LocalAdmin-Konsole deines Servers: Dort siehst du den Start-Output live, inklusive aller Warnungen und Fehler. Die letzten Zeilen vor einem Absturz sind meist die entscheidenden. Wie du die Ausgabe auch nachträglich liest, zeigt [Server-Log auslesen](server-log-auslesen.md).

:::: tip Tipp
Wenn du ein Support-Ticket erstellst, schicke die passende Fehlermeldung aus der Konsole bzw. dem Log direkt mit – so kann dir das Team deutlich schneller helfen.
::::

## Server erscheint nicht in der Serverliste

**Symptom:** Dein Server läuft, ist in der öffentlichen Serverliste im Spiel aber nicht zu finden.

**Ursache:** In die öffentliche Serverliste kommen nur Server, die von Northwood verifiziert wurden. Typische Gründe, warum dein Server fehlt:

- **Nicht verifiziert**: Dein Server wurde noch nicht verifiziert. Beim Start meldet die Konsole dann `Your server won't be visible on the public server list`. Ist `contact_email` bereits gesetzt, nennt sie dabei auch den Befehl `!verify static`.
- **Auf privat gesetzt**: Ein verifizierter Server wurde mit `!private` aus der Liste ausgeblendet.
- **`contact_email` fehlt**: In der Datei `config_gameplay.txt` steht noch der Standardwert `contact_email: default`. Die Konsole fordert dich dann auf, `contact_email` zu setzen und den Server neu zu starten.
- **`online_mode` deaktiviert**: Steht in der `config_gameplay.txt` `online_mode: false`, meldet die Konsole `Server WON'T be visible on the public list due to online_mode turned off in server configuration.`

**Lösung:**

1. <b>Konsole prüfen</b><br>
   Starte deinen Server über die Verwaltung neu und lies in der Konsole den Start-Output. Anhand der oben genannten Meldungen erkennst du, welche Ursache bei dir vorliegt.

2. <b>Server wieder öffentlich schalten</b><br>
   Ist dein Server verifiziert, aber auf privat gesetzt, gib folgenden Befehl in die Konsole der Verwaltung ein:

   ```
   !public
   ```

   Damit ist dein Server wieder in der Liste – die folgenden Schritte brauchst du in diesem Fall nicht.

3. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

4. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

5. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

6. <b>contact_email und online_mode prüfen</b><br>
   Öffne folgende Datei – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Trage bei `contact_email` eine gültige E-Mail-Adresse ein und prüfe, dass `online_mode` auf `true` (Standard) steht:

   ```
   contact_email: admin@example.com
   online_mode: true
   ```

7. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

8. <b>Verifizierung beantragen</b><br>
   Ist dein Server noch nicht verifiziert, folge der Anleitung [Server verifizieren lassen](server-verifizieren-lassen.md). Dafür muss `contact_email` gesetzt sein – sonst lehnt der Server den Befehl `!verify` ab.

:::: tip Tipp
Unabhängig von der Serverliste können deine Spieler jederzeit per Direct Connect beitreten – mit der IP-Adresse und dem Game Port aus der **Übersicht**, z.B. `203.0.113.10:7777`. Wie das geht, zeigt [Server beitreten](server-beitreten.md).
::::

## Versionskonflikt nach einem Spiel-Update

**Symptom:** Nach einem Update von SCP: Secret Laboratory können Spieler nicht mehr beitreten, weil Server und Spiel unterschiedliche Versionen haben.

**Ursache:** Entweder läuft dein Server noch auf der alten Version, weil er seit dem Update nicht neu gestartet wurde, oder das Spiel des Spielers ist noch nicht aktualisiert. Spieler müssen ihr Spiel ebenfalls auf die aktuelle Version bringen.

**Lösung:**

1. <b>Server neu starten</b><br>
   Starte deinen Server über die Verwaltung neu. Bei jedem Start wird dein Server automatisch auf die aktuelle Version gebracht.

2. <b>Plugins prüfen</b><br>
   Nutzt du EXILED oder LabAPI-Plugins, prüfe nach dem Update in der Konsole, ob alle Plugins geladen wurden. Nach einem Spiel-Update sind Plugins oft vorübergehend inkompatibel – siehe [Plugins laden nicht](plugins-laden-nicht.md).

:::: info Hinweis
Dein Server läuft auf der regulären öffentlichen Version des Spiels. Spieler, die in Steam an einer Beta von SCP: Secret Laboratory teilnehmen, haben deshalb eine andere Version als dein Server.
::::

## Server stürzt ab oder startet in einer Schleife neu

**Symptom:** Dein Server stürzt kurz nach dem Start ab oder startet immer wieder neu, ohne dass jemand beitreten kann.

**Ursache:** LocalAdmin startet den Server nach einem Absturz automatisch neu. Kommt es standardmäßig innerhalb von 8 Minuten nach dem ersten Neustart zu mehr als 4 automatischen Neustarts, gibt LocalAdmin mit der Meldung `Restarts limit exceeded.` auf. Häufige Auslöser für die Abstürze sind:

- **Fehler in einer Konfigurationsdatei**: z.B. eine falsche Einrückung oder Tabs statt Leerzeichen in einer YAML-Datei wie einer Plugin-Config (`.yml`). YAML erlaubt zum Einrücken ausschließlich Leerzeichen.
- **Plugins, die nicht zur Version passen**: Nach einem Spiel-Update können EXILED, LabAPI-Plugins oder einzelne EXILED-Plugins inkompatibel sein.

**Lösung:**

1. <b>Log prüfen</b><br>
   Lies in der Konsole bzw. im [Server-Log](server-log-auslesen.md) die letzten Zeilen vor dem Absturz. Dort steht meist, welche Datei oder welches Plugin den Fehler auslöst.

   :::: info Hinweis
   Stürzt LocalAdmin selbst ab, legt es im Hauptverzeichnis deines Servers zusätzlich eine Datei `LocalAdmin Crash <Datum und Uhrzeit>.txt` mit der Fehlermeldung an.
   ::::

2. <b>Zuletzt geänderte Datei prüfen</b><br>
   Hast du kurz vor dem Problem eine Datei geändert, prüfe sie zuerst: Stimmen Einrückungen und Doppelpunkte, und sind keine Tabs enthalten? Mach deine Änderung im Zweifel rückgängig.

3. <b>Plugins prüfen</b><br>
   Passt eine Fehlermeldung zu einem Plugin, folge der Anleitung [Plugins laden nicht](plugins-laden-nicht.md).

### Ohne Plugins testen

Findest du die Ursache nicht, starte deinen Server testweise ohne Plugins. Läuft er dann stabil, liegt das Problem bei einem Plugin.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Plugins auslagern</b><br>
   Erstelle im Hauptverzeichnis deines Servers einen Ordner, z.B. `plugins-test`, und verschiebe die Plugin-DLLs aus folgenden Verzeichnissen dort hinein:

   ```
   /.config/EXILED/Plugins/
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   /.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/
   ```

   Ersetze `<Port>` durch deinen Game Port aus der **Übersicht** – LabAPI lädt Plugins sowohl aus `global` als auch aus dem Ordner deines Game Ports. Verschiebe nur die DLL-Dateien der Plugins, nicht die Unterordner wie `dependencies`.

   :::: warning Achtung
   Der Exiled Loader liegt als `Exiled.Loader.dll` ebenfalls in `/.config/SCP Secret Laboratory/LabAPI/plugins/global/`. Verschiebst du ihn, lädt EXILED gar nicht – das ist für den Test gewollt, denk aber daran, ihn danach zurückzulegen.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung und beobachte die Konsole.

5. <b>Plugins einzeln zurücklegen</b><br>
   Läuft der Server stabil, lege die Plugins einzeln zurück und starte den Server nach jedem Plugin neu. So findest du das Plugin, das den Absturz auslöst.

## Änderungen an der Konfiguration wirken nicht

**Symptom:** Du hast eine Konfigurationsdatei geändert, im Spiel ändert sich aber nichts.

**Ursache:** Meist steckt eine dieser drei Ursachen dahinter:

- **Falscher Port-Ordner**: Unter `/.config/SCP Secret Laboratory/config/` können mehrere Port-Ordner liegen. Der Server liest nur den Ordner, dessen Name seinem aktuellen Game Port entspricht.
- **Tippfehler im Schlüssel**: Ein falsch geschriebener Schlüssel, z.B. `friendlyfire` statt `friendly_fire`, ist für den Server ein anderer Eintrag und wirkt nicht.
- **Kein Neustart oder Neuladen**: Änderungen werden erst beim nächsten Start des Servers übernommen. Mit `config reload` lädst du die Spielkonfiguration auch ohne Neustart neu, manche Änderungen greifen dann aber erst in der nächsten Runde. Plugin-Konfigurationen von EXILED oder LabAPI lädt `config reload` nicht neu – dafür ist ein Neustart nötig. Mehr dazu in [Konsolenbefehle nutzen](konsolenbefehle-nutzen.md). Ein Neustart ist immer der sichere Weg.

**Lösung:**

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Richtige Datei prüfen</b><br>
   Prüfe, ob du die Datei im richtigen Port-Ordner bearbeitet hast – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

   Bei Plugin-Configs gilt dasselbe: Auch sie hängen vom Game Port ab, z.B. `/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml` bei EXILED oder `/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<Plugin-Name>/` bei LabAPI.

5. <b>Schlüssel vergleichen</b><br>
   Vergleiche die Schreibweise deines geänderten Schlüssels mit dem Original. Ändere nur den Wert hinter dem Doppelpunkt und lass den Schlüsselnamen unverändert.

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

## Fehler „Port Not Registered“ in der Konsole

**Symptom:** Dein Server taucht nicht in der Serverliste auf, und in der Konsole bzw. im Server-Log erscheint folgende Meldung:

```
Could not update server data on server list - [SECURITY VIOLATION] Specified port is not registered.
```

**Ursache:** Laut der offiziellen Dokumentation von Northwood tritt der Fehler auf, wenn die IP-Adresse deines Servers bereits bei den zentralen Servern von SCP: Secret Laboratory registriert bzw. verifiziert ist.

**Lösung:** Wende dich an den Support und nenne die IP-Adresse und den Game Port deines Servers aus der **Übersicht** sowie die genaue Fehlermeldung.

## Konfiguration zurücksetzen

Hilft nichts davon und ist deine Konfiguration so verbaut, dass du den Fehler nicht mehr findest, kannst du die Spiel-Konfiguration auf den Standard zurücksetzen.

:::: danger Wichtig
Beim Zurücksetzen verlierst du alle Einstellungen in diesem Port-Ordner – auch Ränge, Whitelist und reservierte Slots. Erstelle vorher unbedingt ein [Backup](backup-erstellen.md).
::::

1. <b>Backup erstellen</b><br>
   Erstelle ein [Backup](backup-erstellen.md) deines Servers.

2. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

3. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

4. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

5. <b>Port-Ordner umbenennen</b><br>
   Benenne folgenden Ordner um, z.B. von `7777` in `7777-alt` – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

   Durch das Umbenennen bleibt deine alte Konfiguration erhalten, und du kannst einzelne Einstellungen später daraus übernehmen.

6. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. Der Server legt den Port-Ordner beim Start mit den Standarddateien neu an.

7. <b>Ergebnis prüfen</b><br>
   Prüfe per SFTP, ob der Ordner `/.config/SCP Secret Laboratory/config/<Port>/` neu angelegt wurde. Übertrage anschließend nur die Einstellungen, die du wirklich brauchst, aus dem umbenannten Ordner – z.B. `contact_email` und `server_name`.

:::: tip Tipp
Wurde der Ordner nicht neu angelegt oder startet der Server nicht, benenne den alten Ordner wieder auf den Game Port zurück oder stelle dein Backup wieder her.
::::
