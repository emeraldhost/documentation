---
slug: "server-probleme-beheben"
language: "de"
title: "So behebst Du häufige Probleme auf Deinem SCP: Secret Laboratory Server"
description: "Häufige Probleme auf einem SCP: Secret Laboratory Server finden und beheben"
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
short_title: "Server-Probleme beheben"
sort: 22
related: ["gameserver/scp-secret-laboratory/read-server-log", "gameserver/scp-secret-laboratory/plugins-not-loading", "gameserver/scp-secret-laboratory/join-server", "gameserver/scp-secret-laboratory/get-server-verified"]
---
Taucht Dein Server nicht in der Serverliste auf, können Spieler nach einem Update nicht mehr beitreten oder startet der Server immer wieder neu, steckt meist eine von wenigen typischen Ursachen dahinter. Diese Anleitung zeigt Dir die häufigsten Probleme, ihre Ursache und die passende Lösung.

> [!IMPORTANT]
> Erstelle vor jeder Änderung an Deinem Server ein [Backup](/tutorials/gameserver/scp-secret-laboratory/create-backup). So kannst Du jederzeit zum letzten funktionierenden Stand zurückkehren.

> [!NOTE]
> Bei SCP: Secret Laboratory stellst Du nichts in den Einstellungen der Verwaltung ein – die gesamte Konfiguration läuft über Dateien per SFTP. Wo die Dateien liegen, zeigt [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

## Zuerst die Konsole prüfen

Fast jedes Problem hinterlässt Spuren in der Ausgabe des Servers. Die Konsole in der Verwaltung ist die LocalAdmin-Konsole Deines Servers: Dort siehst Du den Start-Output live, inklusive aller Warnungen und Fehler. Die letzten Zeilen vor einem Absturz sind meist die entscheidenden. Wie Du die Ausgabe auch nachträglich liest, zeigt [Server-Log auslesen](/tutorials/gameserver/scp-secret-laboratory/read-server-log).

> [!TIP]
> Wenn Du ein Support-Ticket erstellst, schicke die passende Fehlermeldung aus der Konsole bzw. dem Log direkt mit – so kann Dir das Team deutlich schneller helfen.

## Server erscheint nicht in der Serverliste

**Symptom:** Dein Server läuft, ist in der öffentlichen Serverliste im Spiel aber nicht zu finden.

**Ursache:** In die öffentliche Serverliste kommen nur Server, die von Northwood verifiziert wurden. Typische Gründe, warum Dein Server fehlt:

- **Nicht verifiziert**: Dein Server wurde noch nicht verifiziert. Beim Start meldet die Konsole dann `Your server won't be visible on the public server list`. Ist `contact_email` bereits gesetzt, nennt sie dabei auch den Befehl `!verify static`.
- **Auf privat gesetzt**: Ein verifizierter Server wurde mit `!private` aus der Liste ausgeblendet.
- **`contact_email` fehlt**: In der Datei `config_gameplay.txt` steht noch der Standardwert `contact_email: default`. Die Konsole fordert Dich dann auf, `contact_email` zu setzen und den Server neu zu starten.
- **`online_mode` deaktiviert**: Steht in der `config_gameplay.txt` `online_mode: false`, meldet die Konsole `Server WON'T be visible on the public list due to online_mode turned off in server configuration.`

**Lösung:**

1. **Konsole prüfen**\
   Starte Deinen Server über die Verwaltung neu und lies in der Konsole den Start-Output. Anhand der oben genannten Meldungen erkennst Du, welche Ursache bei Dir vorliegt.

2. **Server wieder öffentlich schalten**\
   Ist Dein Server verifiziert, aber auf privat gesetzt, gib folgenden Befehl in die Konsole der Verwaltung ein:

   ```text
   !public
   ```

   Damit ist Dein Server wieder in der Liste – die folgenden Schritte brauchst Du in diesem Fall nicht.

3. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

4. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

5. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

6. **contact_email und online_mode prüfen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Trage bei `contact_email` eine gültige E-Mail-Adresse ein und prüfe, dass `online_mode` auf `true` (Standard) steht:

   ```text
   contact_email: admin@example.com
   online_mode: true
   ```

7. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

8. **Verifizierung beantragen**\
   Ist Dein Server noch nicht verifiziert, folge der Anleitung [Server verifizieren lassen](/tutorials/gameserver/scp-secret-laboratory/get-server-verified). Dafür muss `contact_email` gesetzt sein – sonst lehnt der Server den Befehl `!verify` ab.

> [!TIP]
> Unabhängig von der Serverliste können Deine Spieler jederzeit per Direct Connect beitreten – mit der IP-Adresse und dem Game Port aus der **Übersicht**, z.B. `203.0.113.10:7777`. Wie das geht, zeigt [Server beitreten](/tutorials/gameserver/scp-secret-laboratory/join-server).

## Versionskonflikt nach einem Spiel-Update

**Symptom:** Nach einem Update von SCP: Secret Laboratory können Spieler nicht mehr beitreten, weil Server und Spiel unterschiedliche Versionen haben.

**Ursache:** Entweder läuft Dein Server noch auf der alten Version, weil er seit dem Update nicht neu gestartet wurde, oder das Spiel des Spielers ist noch nicht aktualisiert. Spieler müssen ihr Spiel ebenfalls auf die aktuelle Version bringen.

**Lösung:**

1. **Server neu starten**\
   Starte Deinen Server über die Verwaltung neu. Bei jedem Start wird Dein Server automatisch auf die aktuelle Version gebracht.

2. **Plugins prüfen**\
   Nutzt Du EXILED oder LabAPI-Plugins, prüfe nach dem Update in der Konsole, ob alle Plugins geladen wurden. Nach einem Spiel-Update sind Plugins oft vorübergehend inkompatibel – siehe [Plugins laden nicht](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading).

> [!NOTE]
> Dein Server läuft auf der regulären öffentlichen Version des Spiels. Spieler, die in Steam an einer Beta von SCP: Secret Laboratory teilnehmen, haben deshalb eine andere Version als Dein Server.

## Server stürzt ab oder startet in einer Schleife neu

**Symptom:** Dein Server stürzt kurz nach dem Start ab oder startet immer wieder neu, ohne dass jemand beitreten kann.

**Ursache:** LocalAdmin startet den Server nach einem Absturz automatisch neu. Kommt es standardmäßig innerhalb von 8 Minuten nach dem ersten Neustart zu mehr als 4 automatischen Neustarts, gibt LocalAdmin mit der Meldung `Restarts limit exceeded.` auf. Häufige Auslöser für die Abstürze sind:

- **Fehler in einer Konfigurationsdatei**: z.B. eine falsche Einrückung oder Tabs statt Leerzeichen in einer YAML-Datei wie einer Plugin-Config (`.yml`). YAML erlaubt zum Einrücken ausschließlich Leerzeichen.
- **Plugins, die nicht zur Version passen**: Nach einem Spiel-Update können EXILED, LabAPI-Plugins oder einzelne EXILED-Plugins inkompatibel sein.

**Lösung:**

1. **Log prüfen**\
   Lies in der Konsole bzw. im [Server-Log](/tutorials/gameserver/scp-secret-laboratory/read-server-log) die letzten Zeilen vor dem Absturz. Dort steht meist, welche Datei oder welches Plugin den Fehler auslöst.

   > [!NOTE]
   > Stürzt LocalAdmin selbst ab, legt es im Hauptverzeichnis Deines Servers zusätzlich eine Datei `LocalAdmin Crash <Datum und Uhrzeit>.txt` mit der Fehlermeldung an.

2. **Zuletzt geänderte Datei prüfen**\
   Hast Du kurz vor dem Problem eine Datei geändert, prüfe sie zuerst: Stimmen Einrückungen und Doppelpunkte, und sind keine Tabs enthalten? Mach Deine Änderung im Zweifel rückgängig.

3. **Plugins prüfen**\
   Passt eine Fehlermeldung zu einem Plugin, folge der Anleitung [Plugins laden nicht](/tutorials/gameserver/scp-secret-laboratory/plugins-not-loading).

### Ohne Plugins testen

Findest Du die Ursache nicht, starte Deinen Server testweise ohne Plugins. Läuft er dann stabil, liegt das Problem bei einem Plugin.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Plugins auslagern**\
   Erstelle im Hauptverzeichnis Deines Servers einen Ordner, z.B. `plugins-test`, und verschiebe die Plugin-DLLs aus folgenden Verzeichnissen dort hinein:

   ```text
   /.config/EXILED/Plugins/
   /.config/SCP Secret Laboratory/LabAPI/plugins/global/
   /.config/SCP Secret Laboratory/LabAPI/plugins/<Port>/
   ```

   Ersetze `<Port>` durch Deinen Game Port aus der **Übersicht** – LabAPI lädt Plugins sowohl aus `global` als auch aus dem Ordner Deines Game Ports. Verschiebe nur die DLL-Dateien der Plugins, nicht die Unterordner wie `dependencies`.

   > [!WARNING]
   > Der Exiled Loader liegt als `Exiled.Loader.dll` ebenfalls in `/.config/SCP Secret Laboratory/LabAPI/plugins/global/`. Verschiebst Du ihn, lädt EXILED gar nicht – das ist für den Test gewollt, denk aber daran, ihn danach zurückzulegen.

4. **Server starten**\
   Starte Deinen Server über die Verwaltung und beobachte die Konsole.

5. **Plugins einzeln zurücklegen**\
   Läuft der Server stabil, lege die Plugins einzeln zurück und starte den Server nach jedem Plugin neu. So findest Du das Plugin, das den Absturz auslöst.

## Änderungen an der Konfiguration wirken nicht

**Symptom:** Du hast eine Konfigurationsdatei geändert, im Spiel ändert sich aber nichts.

**Ursache:** Meist steckt eine dieser drei Ursachen dahinter:

- **Falscher Port-Ordner**: Unter `/.config/SCP Secret Laboratory/config/` können mehrere Port-Ordner liegen. Der Server liest nur den Ordner, dessen Name seinem aktuellen Game Port entspricht.
- **Tippfehler im Schlüssel**: Ein falsch geschriebener Schlüssel, z.B. `friendlyfire` statt `friendly_fire`, ist für den Server ein anderer Eintrag und wirkt nicht.
- **Kein Neustart oder Neuladen**: Änderungen werden erst beim nächsten Start des Servers übernommen. Mit `config reload` lädst Du die Spielkonfiguration auch ohne Neustart neu, manche Änderungen greifen dann aber erst in der nächsten Runde. Plugin-Konfigurationen von EXILED oder LabAPI lädt `config reload` nicht neu – dafür ist ein Neustart nötig. Mehr dazu in [Konsolenbefehle nutzen](/tutorials/gameserver/scp-secret-laboratory/use-console-commands). Ein Neustart ist immer der sichere Weg.

**Lösung:**

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Richtige Datei prüfen**\
   Prüfe, ob Du die Datei im richtigen Port-Ordner bearbeitet hast – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

   Bei Plugin-Configs gilt dasselbe: Auch sie hängen vom Game Port ab, z.B. `/.config/EXILED/Configs/Plugins/<Plugin-Name>/<Port>.yml` bei EXILED oder `/.config/SCP Secret Laboratory/LabAPI/configs/<Port>/<Plugin-Name>/` bei LabAPI.

5. **Schlüssel vergleichen**\
   Vergleiche die Schreibweise Deines geänderten Schlüssels mit dem Original. Ändere nur den Wert hinter dem Doppelpunkt und lass den Schlüsselnamen unverändert.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

## Fehler „Port Not Registered“ in der Konsole

**Symptom:** Dein Server taucht nicht in der Serverliste auf, und in der Konsole bzw. im Server-Log erscheint folgende Meldung:

```text
Could not update server data on server list - [SECURITY VIOLATION] Specified port is not registered.
```

**Ursache:** Laut der offiziellen Dokumentation von Northwood tritt der Fehler auf, wenn die IP-Adresse Deines Servers bereits bei den zentralen Servern von SCP: Secret Laboratory registriert bzw. verifiziert ist.

**Lösung:** Wende Dich an den Support und nenne die IP-Adresse und den Game Port Deines Servers aus der **Übersicht** sowie die genaue Fehlermeldung.

## Konfiguration zurücksetzen

Hilft nichts davon und ist Deine Konfiguration so verbaut, dass Du den Fehler nicht mehr findest, kannst Du die Spiel-Konfiguration auf den Standard zurücksetzen.

> [!IMPORTANT]
> Beim Zurücksetzen verlierst Du alle Einstellungen in diesem Port-Ordner – auch Ränge, Whitelist und reservierte Slots. Erstelle vorher unbedingt ein [Backup](/tutorials/gameserver/scp-secret-laboratory/create-backup).

1. **Backup erstellen**\
   Erstelle ein [Backup](/tutorials/gameserver/scp-secret-laboratory/create-backup) Deines Servers.

2. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

3. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

4. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

5. **Port-Ordner umbenennen**\
   Benenne folgenden Ordner um, z.B. von `7777` in `7777-alt` – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

   Durch das Umbenennen bleibt Deine alte Konfiguration erhalten, und Du kannst einzelne Einstellungen später daraus übernehmen.

6. **Server starten**\
   Starte Deinen Server über die Verwaltung. Der Server legt den Port-Ordner beim Start mit den Standarddateien neu an.

7. **Ergebnis prüfen**\
   Prüfe per SFTP, ob der Ordner `/.config/SCP Secret Laboratory/config/<Port>/` neu angelegt wurde. Übertrage anschließend nur die Einstellungen, die Du wirklich brauchst, aus dem umbenannten Ordner – z.B. `contact_email` und `server_name`.

> [!TIP]
> Wurde der Ordner nicht neu angelegt oder startet der Server nicht, benenne den alten Ordner wieder auf den Game Port zurück oder stelle Dein Backup wieder her.
