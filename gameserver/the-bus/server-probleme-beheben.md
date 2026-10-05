---
description: Häufige Probleme auf einem The Bus Server finden und beheben
---

# So behebst du häufige Probleme auf deinem The Bus Server

Taucht dein Server nicht in der Serverliste auf, können Spieler nicht beitreten oder startet der Server nach einem Update nicht mehr, steckt meist eine von wenigen typischen Ursachen dahinter. Diese Anleitung zeigt dir die häufigsten Probleme, ihre Ursache und die passende Lösung.

:::: danger Wichtig
Erstelle vor jeder Änderung an deinem Server ein [Backup](backup-erstellen.md). So kannst du jederzeit zum letzten funktionierenden Stand zurückkehren.
::::

## Zuerst das Log prüfen

Fast jedes Problem hinterlässt Spuren in der Ausgabe des Servers. Die Konsole in der Verwaltung zeigt dir live den Inhalt der Log-Datei `/TheBus/Saved/Logs/TheBus.log` an – inklusive aller Warnungen und Fehler. Die letzten Zeilen vor einem Absturz sind meist die entscheidenden.

:::: info Hinweis
Die Konsole zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen. Befehle gibst du als Owner oder Admin im Ingame-Chat ein.
::::

So lädst du das vollständige Log herunter:

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Log herunterladen</b><br>
   Öffne den Ordner `/TheBus/Saved/Logs/` und lade die Datei `TheBus.log` herunter.

:::: tip Tipp
Wenn du ein Support-Ticket erstellst, schicke die passende Fehlermeldung aus der Konsole bzw. dem Log direkt mit – so kann dir das Team deutlich schneller helfen.
::::

## Server erscheint nicht in der Serverliste

**Symptom:** Dein Server läuft, ist in der öffentlichen Serverliste im Spiel aber nicht zu finden.

**Ursache:** Steht das Feld **Serverliste** in den Einstellungen auf `0`, wird dein Server in der öffentlichen Serverliste ausgeblendet.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Serverliste aktivieren</b><br>
   Setze das Feld **Serverliste** auf `1`.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: tip Tipp
Unabhängig von der Serverliste können deine Spieler jederzeit direkt beitreten. Seit dem Early-Access-Update 3.0 lassen sich Server über ihre ID statt über die IP-Adresse finden: Beim Start zeigt die Konsole die Meldung `Server can be reached with the GUID` mit der GUID deines Servers an. Wie du damit beitrittst, zeigt [Server beitreten](server-beitreten.md).
::::

## Spieler können nicht beitreten

**Symptom:** Dein Server ist in der Liste zu sehen oder per GUID erreichbar, Spieler können ihm aber nicht beitreten.

**Ursache:** Typische Gründe sind:

- **Unterschiedliche Versionen**: Server und Spiel laufen nach einem Update auf unterschiedlichen Versionen.
- **Server-Passwort gesetzt**: Ist in den Einstellungen ein **Server Passwort** eingetragen, müssen Spieler es beim Beitreten eingeben.
- **Fehlendes DLC**: Läuft auf deinem Server eine DLC-Karte wie **Hamburg** (DLC Hamburg City) oder ist ein DLC für das Beitreten vorausgesetzt, müssen alle Spieler dieses DLC besitzen.
- **Konsole statt PC**: Der Multiplayer von The Bus ist nur auf dem PC verfügbar. Spieler auf PlayStation 5 oder Xbox Series X|S können keinem Server beitreten.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Auto Update prüfen</b><br>
   Prüfe, ob das Feld **Auto Update** auf `1` steht. Nur dann wird dein Server bei jedem Start automatisch aktualisiert.

4. <b>Passwort prüfen</b><br>
   Prüfe das Feld **Server Passwort**. Gib Spielern das Passwort weiter oder lass das Feld leer, wenn dein Server ohne Passwort erreichbar sein soll.

5. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu, damit er auf die aktuelle Version gebracht wird.

6. <b>Spiel aktualisieren</b><br>
   Alle Spieler müssen ihr Spiel in Steam ebenfalls auf die aktuelle Version bringen.

7. <b>DLCs prüfen</b><br>
   Prüfe, welche DLCs auf deinem Server aktiv sind oder vorausgesetzt werden, siehe [DLC aktivieren](dlc-aktivieren.md) und [DLC-Karte hinzufügen](dlc-karte-hinzufuegen.md).

:::: info Hinweis
Mods, die auf dem Server installiert sind und auch beim Spieler benötigt werden, müssen alle Spieler ebenfalls installiert haben. Mehr dazu in [Mods hinzufügen](mods-hinzufuegen.md).
::::

## Server stürzt ab oder startet nach einem Update nicht

**Symptom:** Dein Server stürzt kurz nach dem Start ab oder startet nach einem Update nicht mehr.

**Ursache:** Häufige Auslöser sind:

- **Mods, die nicht zur Version passen**: Mods, die für eine andere Nebenversion des Spiels erstellt wurden, kennzeichnet The Bus als „potentially incompatible“. Nach einem Update können solche Mods Probleme verursachen.
- **Fehler in der ServerSettings.cfg**: Die Datei `/TheBus/Settings/ServerSettings.cfg` ist im JSON-Format. Schon ein fehlendes oder überzähliges Komma kann dazu führen, dass die Einstellungen nicht mehr korrekt eingelesen werden.

**Lösung:**

1. <b>Log prüfen</b><br>
   Lies in der Konsole bzw. im Log die letzten Zeilen vor dem Absturz. Dort steht oft, welche Datei oder welcher Mod den Fehler auslöst.

2. <b>Zuletzt geänderte Datei prüfen</b><br>
   Hast du kurz vor dem Problem die `ServerSettings.cfg` bearbeitet, prüfe ihren Inhalt mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/). Mach deine Änderung im Zweifel rückgängig.

### Ohne Mods testen

Findest du die Ursache nicht, starte deinen Server testweise ohne Mods. Läuft er dann stabil, liegt das Problem bei einem Mod.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mods auslagern</b><br>
   Erstelle im Hauptverzeichnis deines Servers einen Ordner, z.B. `mods-test`, und verschiebe den Inhalt des Ordners `/TheBus/Mods/` dort hinein.

   :::: warning Achtung
   Lösche die Mods nicht, sondern verschiebe sie nur. So kannst du sie nach dem Test wieder zurücklegen.
   ::::

4. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung und beobachte die Konsole.

5. <b>Mods einzeln zurücklegen</b><br>
   Läuft der Server stabil, stoppe ihn, lege einen Mod zurück in `/TheBus/Mods/` und starte den Server wieder. Wiederhole das für jeden Mod, bis du den Mod findest, der den Absturz auslöst.

:::: tip Tipp
Prüfe im Steam Workshop, ob es für den betroffenen Mod eine aktualisierte Version für die aktuelle Spielversion gibt.
::::

## Server läuft nicht flüssig

**Symptom:** Auf deinem Server ruckelt es, oder Busse und Verkehr bewegen sich nicht flüssig.

**Ursache:** Je mehr Verkehr auf der Karte unterwegs ist, desto mehr muss der Server berechnen – eine geringere Verkehrsdichte kann helfen.

**Lösung:**

1. <b>Leistung prüfen</b><br>
   Gib als Owner oder Admin folgenden Befehl im Ingame-Chat ein:

   ```
   /tickrate
   ```

   Der Server schreibt danach alle 10 Sekunden seine Tickrate ins Log. Du siehst die Werte live in der Konsole der Verwaltung.

2. <b>Verkehrsdichte verringern</b><br>
   Verringere die Verkehrsdichte auf deinem Server, siehe [Verkehr einstellen](verkehr-einstellen.md).

3. <b>Ungesteuerte Busse entfernen</b><br>
   Stehen viele ungenutzte Busse auf der Karte, entferne alle Busse, die gerade von keinem Spieler gesteuert werden, mit `/clearBusses`. Mehr dazu unter [Bus spawnen](bus-spawnen.md).

## Einstellungen sind nach einem Neustart zurückgesetzt

**Symptom:** Du hast Servername, Passwörter, maximale Spieler oder die Sichtbarkeit in der Serverliste im Spiel oder direkt in der `ServerSettings.cfg` geändert, nach einem Neustart sind die alten Werte aber wieder da.

**Ursache:** Bei jedem Start schreibt die Verwaltung die Werte aus den **Einstellungen** in die Datei `/TheBus/Settings/ServerSettings.cfg`. Die Schlüssel `serverName`, `serverPassword`, `adminPassword`, `listServerAsPublic` und `maxPlayerCount` werden dabei überschrieben.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Werte ändern</b><br>
   Ändere die Werte in den Feldern **Server Name**, **Server Passwort**, **Admin Passwort**, **Maximale Spieler** oder **Serverliste**.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: info Hinweis
Alle übrigen Einträge der `ServerSettings.cfg` überschreibt die Verwaltung nicht. Mehr dazu in [Server konfigurieren](server-konfigurieren.md).
::::

## GUID funktioniert nicht

**Symptom:** Spieler erreichen deinen Server nicht über die GUID, die in der Konsole angezeigt wird.

**Ursache:** In Versionen vor Version 1.1 (Juni 2026) wurde beim ersten Start eine falsche Server-GUID angezeigt. Läuft dein Server noch auf einer älteren Version, z.B. weil **Auto Update** auf `0` steht, kann dieser Fehler auftreten.

**Lösung:**

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Auto Update aktivieren</b><br>
   Setze das Feld **Auto Update** auf `1`, damit dein Server auf die aktuelle Version gebracht wird.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

5. <b>GUID erneut ablesen</b><br>
   Lies die GUID aus der Meldung `Server can be reached with the GUID` in der Konsole erneut ab und verwende sie zum Beitreten, siehe [Server beitreten](server-beitreten.md).
