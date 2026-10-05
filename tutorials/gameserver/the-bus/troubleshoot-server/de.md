---
slug: "server-probleme-beheben"
language: "de"
title: "So behebst Du häufige Probleme auf Deinem The Bus Server"
description: "Häufige Probleme auf einem The Bus Server finden und beheben"
tags: []
date: "2026-10-05"
visibility: "public"
cta: "gameserver"
product_keys: ["the-bus"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Server-Probleme beheben"
sort: 22
related: ["gameserver/the-bus/configure-server", "gameserver/the-bus/join-server", "gameserver/the-bus/add-mods", "gameserver/the-bus/add-dlc-map"]
---
Taucht Dein Server nicht in der Serverliste auf, können Spieler nicht beitreten oder startet der Server nach einem Update nicht mehr, steckt meist eine von wenigen typischen Ursachen dahinter. Diese Anleitung zeigt Dir die häufigsten Probleme, ihre Ursache und die passende Lösung.

> [!IMPORTANT]
> Erstelle vor jeder Änderung an Deinem Server ein [Backup](/tutorials/gameserver/the-bus/create-backup). So kannst Du jederzeit zum letzten funktionierenden Stand zurückkehren.

## Zuerst das Log prüfen

Fast jedes Problem hinterlässt Spuren in der Ausgabe des Servers. Die Konsole in der Verwaltung zeigt Dir live den Inhalt der Log-Datei `/TheBus/Saved/Logs/TheBus.log` an – inklusive aller Warnungen und Fehler. Die letzten Zeilen vor einem Absturz sind meist die entscheidenden.

> [!NOTE]
> Die Konsole zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen. Befehle gibst Du als Owner oder Admin im Ingame-Chat ein.

So lädst Du das vollständige Log herunter:

1. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

2. **Log herunterladen**\
   Öffne den Ordner `/TheBus/Saved/Logs/` und lade die Datei `TheBus.log` herunter.

> [!TIP]
> Wenn Du ein Support-Ticket erstellst, schicke die passende Fehlermeldung aus der Konsole bzw. dem Log direkt mit – so kann Dir das Team deutlich schneller helfen.

## Server erscheint nicht in der Serverliste

**Symptom:** Dein Server läuft, ist in der öffentlichen Serverliste im Spiel aber nicht zu finden.

**Ursache:** Steht das Feld **Serverliste** in den Einstellungen auf `0`, wird Dein Server in der öffentlichen Serverliste ausgeblendet.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Serverliste aktivieren**\
   Setze das Feld **Serverliste** auf `1`.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!TIP]
> Unabhängig von der Serverliste können Deine Spieler jederzeit direkt beitreten. Seit dem Early-Access-Update 3.0 lassen sich Server über ihre ID statt über die IP-Adresse finden: Beim Start zeigt die Konsole die Meldung `Server can be reached with the GUID` mit der GUID Deines Servers an. Wie Du damit beitrittst, zeigt [Server beitreten](/tutorials/gameserver/the-bus/join-server).

## Spieler können nicht beitreten

**Symptom:** Dein Server ist in der Liste zu sehen oder per GUID erreichbar, Spieler können ihm aber nicht beitreten.

**Ursache:** Typische Gründe sind:

- **Unterschiedliche Versionen**: Server und Spiel laufen nach einem Update auf unterschiedlichen Versionen.
- **Server-Passwort gesetzt**: Ist in den Einstellungen ein **Server Passwort** eingetragen, müssen Spieler es beim Beitreten eingeben.
- **Fehlendes DLC**: Läuft auf Deinem Server eine DLC-Karte wie **Hamburg** (DLC Hamburg City) oder ist ein DLC für das Beitreten vorausgesetzt, müssen alle Spieler dieses DLC besitzen.
- **Konsole statt PC**: Der Multiplayer von The Bus ist nur auf dem PC verfügbar. Spieler auf PlayStation 5 oder Xbox Series X|S können keinem Server beitreten.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Auto Update prüfen**\
   Prüfe, ob das Feld **Auto Update** auf `1` steht. Nur dann wird Dein Server bei jedem Start automatisch aktualisiert.

4. **Passwort prüfen**\
   Prüfe das Feld **Server Passwort**. Gib Spielern das Passwort weiter oder lass das Feld leer, wenn Dein Server ohne Passwort erreichbar sein soll.

5. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu, damit er auf die aktuelle Version gebracht wird.

6. **Spiel aktualisieren**\
   Alle Spieler müssen ihr Spiel in Steam ebenfalls auf die aktuelle Version bringen.

7. **DLCs prüfen**\
   Prüfe, welche DLCs auf Deinem Server aktiv sind oder vorausgesetzt werden, siehe [DLC aktivieren](/tutorials/gameserver/the-bus/activate-dlc) und [DLC-Karte hinzufügen](/tutorials/gameserver/the-bus/add-dlc-map).

> [!NOTE]
> Mods, die auf dem Server installiert sind und auch beim Spieler benötigt werden, müssen alle Spieler ebenfalls installiert haben. Mehr dazu in [Mods hinzufügen](/tutorials/gameserver/the-bus/add-mods).

## Server stürzt ab oder startet nach einem Update nicht

**Symptom:** Dein Server stürzt kurz nach dem Start ab oder startet nach einem Update nicht mehr.

**Ursache:** Häufige Auslöser sind:

- **Mods, die nicht zur Version passen**: Mods, die für eine andere Nebenversion des Spiels erstellt wurden, kennzeichnet The Bus als „potentially incompatible“. Nach einem Update können solche Mods Probleme verursachen.
- **Fehler in der ServerSettings.cfg**: Die Datei `/TheBus/Settings/ServerSettings.cfg` ist im JSON-Format. Schon ein fehlendes oder überzähliges Komma kann dazu führen, dass die Einstellungen nicht mehr korrekt eingelesen werden.

**Lösung:**

1. **Log prüfen**\
   Lies in der Konsole bzw. im Log die letzten Zeilen vor dem Absturz. Dort steht oft, welche Datei oder welcher Mod den Fehler auslöst.

2. **Zuletzt geänderte Datei prüfen**\
   Hast Du kurz vor dem Problem die `ServerSettings.cfg` bearbeitet, prüfe ihren Inhalt mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/). Mach Deine Änderung im Zweifel rückgängig.

### Ohne Mods testen

Findest Du die Ursache nicht, starte Deinen Server testweise ohne Mods. Läuft er dann stabil, liegt das Problem bei einem Mod.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **Mods auslagern**\
   Erstelle im Hauptverzeichnis Deines Servers einen Ordner, z.B. `mods-test`, und verschiebe den Inhalt des Ordners `/TheBus/Mods/` dort hinein.

   > [!WARNING]
   > Lösche die Mods nicht, sondern verschiebe sie nur. So kannst Du sie nach dem Test wieder zurücklegen.

4. **Server starten**\
   Starte Deinen Server über die Verwaltung und beobachte die Konsole.

5. **Mods einzeln zurücklegen**\
   Läuft der Server stabil, stoppe ihn, lege einen Mod zurück in `/TheBus/Mods/` und starte den Server wieder. Wiederhole das für jeden Mod, bis Du den Mod findest, der den Absturz auslöst.

> [!TIP]
> Prüfe im Steam Workshop, ob es für den betroffenen Mod eine aktualisierte Version für die aktuelle Spielversion gibt.

## Server läuft nicht flüssig

**Symptom:** Auf Deinem Server ruckelt es, oder Busse und Verkehr bewegen sich nicht flüssig.

**Ursache:** Je mehr Verkehr auf der Karte unterwegs ist, desto mehr muss der Server berechnen – eine geringere Verkehrsdichte kann helfen.

**Lösung:**

1. **Leistung prüfen**\
   Gib als Owner oder Admin folgenden Befehl im Ingame-Chat ein:

   ```text
   /tickrate
   ```

   Der Server schreibt danach alle 10 Sekunden seine Tickrate ins Log. Du siehst die Werte live in der Konsole der Verwaltung.

2. **Verkehrsdichte verringern**\
   Verringere die Verkehrsdichte auf Deinem Server, siehe [Verkehr einstellen](/tutorials/gameserver/the-bus/change-traffic).

3. **Ungesteuerte Busse entfernen**\
   Stehen viele ungenutzte Busse auf der Karte, entferne alle Busse, die gerade von keinem Spieler gesteuert werden, mit `/clearBusses`. Mehr dazu unter [Bus spawnen](/tutorials/gameserver/the-bus/spawn-bus).

## Einstellungen sind nach einem Neustart zurückgesetzt

**Symptom:** Du hast Servername, Passwörter, maximale Spieler oder die Sichtbarkeit in der Serverliste im Spiel oder direkt in der `ServerSettings.cfg` geändert, nach einem Neustart sind die alten Werte aber wieder da.

**Ursache:** Bei jedem Start schreibt die Verwaltung die Werte aus den **Einstellungen** in die Datei `/TheBus/Settings/ServerSettings.cfg`. Die Schlüssel `serverName`, `serverPassword`, `adminPassword`, `listServerAsPublic` und `maxPlayerCount` werden dabei überschrieben.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Werte ändern**\
   Ändere die Werte in den Feldern **Server Name**, **Server Passwort**, **Admin Passwort**, **Maximale Spieler** oder **Serverliste**.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

> [!NOTE]
> Alle übrigen Einträge der `ServerSettings.cfg` überschreibt die Verwaltung nicht. Mehr dazu in [Server konfigurieren](/tutorials/gameserver/the-bus/configure-server).

## GUID funktioniert nicht

**Symptom:** Spieler erreichen Deinen Server nicht über die GUID, die in der Konsole angezeigt wird.

**Ursache:** In Versionen vor Version 1.1 (Juni 2026) wurde beim ersten Start eine falsche Server-GUID angezeigt. Läuft Dein Server noch auf einer älteren Version, z.B. weil **Auto Update** auf `0` steht, kann dieser Fehler auftreten.

**Lösung:**

1. **Verwaltung öffnen**\
   Öffne die Verwaltung Deines Servers.

2. **Einstellungen öffnen**\
   Navigiere zu den **Einstellungen**.

3. **Auto Update aktivieren**\
   Setze das Feld **Auto Update** auf `1`, damit Dein Server auf die aktuelle Version gebracht wird.

4. **Server neu starten**\
   Speichere die Einstellung und starte Deinen Server neu.

5. **GUID erneut ablesen**\
   Lies die GUID aus der Meldung `Server can be reached with the GUID` in der Konsole erneut ab und verwende sie zum Beitreten, siehe [Server beitreten](/tutorials/gameserver/the-bus/join-server).
