---
description: "Maximale Spieleranzahl auf einem SCP: Secret Laboratory Server ändern"
---

# So änderst du die maximale Spieleranzahl auf deinem SCP: Secret Laboratory Server

Wie viele Spieler gleichzeitig auf deinem Server spielen können, legst du mit der Option `max_players` in der Datei `config_gameplay.txt` fest. Der Standardwert ist `20`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).

:::: warning Achtung
Der Pfad zu den Konfigurationsdateien enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Grenzen für die Spieleranzahl

Bevor du den Wert änderst, beachte diese Grenzen:

- **Verifizierte Server höchstens 60**: Verifizierte Server dürfen im Normalfall maximal 60 Slots haben – Server mit mehr als 60 Slots werden von der Serverliste entfernt. Mehr dazu in der Anleitung [Server verifizieren lassen](server-verifizieren-lassen.md).
- **Reservierte Slots**: Spieler mit reserviertem Slot können auch einem vollen Server beitreten – die Spieleranzahl kann dann über `max_players` liegen. Mehr dazu im Abschnitt [Zusammenspiel mit reservierten Slots](#zusammenspiel-mit-reservierten-slots).

## Spieleranzahl ändern

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Spieleranzahl anpassen</b><br>
   Öffne folgende Datei – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche den Eintrag `max_players` und trage die gewünschte Spieleranzahl ein:

   ```
   max_players: 20
   ```

   :::: info Beispiel
   Für einen Server mit 32 Slots trägst du `max_players: 32` ein.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung. Die neue Spieleranzahl gilt erst nach diesem Start.

## Zusammenspiel mit reservierten Slots

Steht `use_reserved_slots` in der `config_gameplay.txt` auf `true` (Standard), können Spieler aus der Datei `UserIDReservedSlots.txt` auch dann noch beitreten, wenn bereits `max_players` Spieler auf dem Server sind. Die Spieleranzahl kann dadurch über `max_players` liegen.

Steht `use_reserved_slots` auf `false`, gelten keine reservierten Slots – dann ist `max_players` die Obergrenze für alle. Wie du die Liste befüllst, erfährst du in der Anleitung [Reservierte Slots einrichten](reservierte-slots-einrichten.md).

## Mindestanzahl für den Rundenstart

:::: info Hinweis
Eine Runde startet erst, wenn mindestens 2 Spieler auf dem Server sind.
::::
