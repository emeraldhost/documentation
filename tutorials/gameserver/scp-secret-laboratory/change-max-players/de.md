---
slug: "max-spieler-aendern"
language: "de"
title: "So änderst Du die maximale Spieleranzahl auf Deinem SCP: Secret Laboratory Server"
description: "Maximale Spieleranzahl auf einem SCP: Secret Laboratory Server ändern"
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
short_title: "Maximale Spieler ändern"
sort: 19
related: ["gameserver/scp-secret-laboratory/set-up-reserved-slots", "gameserver/scp-secret-laboratory/edit-config-files", "gameserver/scp-secret-laboratory/change-server-name", "gameserver/scp-secret-laboratory/adjust-round-flow"]
---

Wie viele Spieler gleichzeitig auf Deinem Server spielen können, legst Du mit der Option `max_players` in der Datei `config_gameplay.txt` fest. Der Standardwert ist `20`. Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest Du in der Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Der Pfad zu den Konfigurationsdateien enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

## Grenzen für die Spieleranzahl

Bevor Du den Wert änderst, beachte diese Grenzen:

- **Verifizierte Server höchstens 60**: Verifizierte Server dürfen im Normalfall maximal 60 Slots haben – Server mit mehr als 60 Slots werden von der Serverliste entfernt. Mehr dazu in der Anleitung [Server verifizieren lassen](/tutorials/gameserver/scp-secret-laboratory/get-server-verified).
- **Reservierte Slots**: Spieler mit reserviertem Slot können auch einem vollen Server beitreten – die Spieleranzahl kann dann über `max_players` liegen. Mehr dazu im Abschnitt [Zusammenspiel mit reservierten Slots](#zusammenspiel-mit-reservierten-slots).

## Spieleranzahl ändern

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Spieleranzahl anpassen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

   Suche den Eintrag `max_players` und trage die gewünschte Spieleranzahl ein:

   ```text
   max_players: 20
   ```

   > [!NOTE]
   > **Beispiel**
   >
   > Für einen Server mit 32 Slots trägst Du `max_players: 32` ein.

5. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung. Die neue Spieleranzahl gilt erst nach diesem Start.

## Zusammenspiel mit reservierten Slots

Steht `use_reserved_slots` in der `config_gameplay.txt` auf `true` (Standard), können Spieler aus der Datei `UserIDReservedSlots.txt` auch dann noch beitreten, wenn bereits `max_players` Spieler auf dem Server sind. Die Spieleranzahl kann dadurch über `max_players` liegen.

Steht `use_reserved_slots` auf `false`, gelten keine reservierten Slots – dann ist `max_players` die Obergrenze für alle. Wie Du die Liste befüllst, erfährst Du in der Anleitung [Reservierte Slots einrichten](/tutorials/gameserver/scp-secret-laboratory/set-up-reserved-slots).

## Mindestanzahl für den Rundenstart

> [!NOTE]
> Eine Runde startet erst, wenn mindestens 2 Spieler auf dem Server sind.
