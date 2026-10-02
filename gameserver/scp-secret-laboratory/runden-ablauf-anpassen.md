---
description: "Rundenablauf auf einem SCP: Secret Laboratory Server anpassen – Lobby, Late Join, Alpha Warhead, Dead Man's Switch, Dekontamination, SCP-914, Item-Limits und Spawn-Reihenfolge"
---

# So passt du den Rundenablauf auf deinem SCP: Secret Laboratory Server an

Wie lange die Lobby wartet, ob Nachzügler noch einspawnen, wann der Alpha Warhead automatisch zündet und wie viele Items ein Spieler tragen darf – all das legst du in der Datei `config_gameplay.txt` fest. Diese Anleitung erklärt die Schlüssel, die den Ablauf einer Runde bestimmen, und gibt dir drei Rezepte für typische Server-Konzepte an die Hand.

Intercom, AFK-Kick, Spawn-Schutz und den Runden-Neustart findest du in der Anleitung [Gameplay-Einstellungen anpassen](gameplay-einstellungen-anpassen.md).

:::: warning Achtung
Der Pfad zur Konfigurationsdatei enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Rundenablauf ändern

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. <b>Werte anpassen</b><br>
   Suche die gewünschten Schlüssel aus den Abschnitten unten und ändere nur den Wert hinter dem Doppelpunkt. Fehlt ein Schlüssel, fügst du ihn als neue Zeile im Format `schlüssel: wert` hinzu. Speichere anschließend die Datei.

6. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. Die Änderungen greifen erst mit diesem Start.

:::: info Hinweis
Viele Schlüssel stehen in der Datei auf dem Wert `default`. Damit verwendet der Server seinen eingebauten Standardwert. Die tatsächlichen Werte dahinter findest du in den Tabellen dieser Anleitung.
::::

## Standardwerte im Überblick

| Schlüssel | Standardwert | Wirkung |
|-----------|--------------|---------|
| `lobby_waiting_time` | `default` (20 Sekunden) | Countdown in der Lobby bis zum Rundenstart |
| `late_join_time` | `0` | Sekunden nach Rundenstart, in denen neu beitretende Spieler noch einspawnen |
| `team_respawn_queue` | `default` | Reihenfolge, in der die Rollen beim Rundenstart verteilt werden |
| `auto_warhead_start_minutes` | `0` | Minuten nach Rundenstart, nach denen der Alpha Warhead automatisch startet – `0` deaktiviert die Funktion |
| `auto_warhead_lock` | `true` | Der automatisch gestartete Alpha Warhead kann nicht abgebrochen werden |
| `auto_warhead_broadcast_enabled` | `false` | Zeigt beim automatischen Start und bei der Detonation eine Broadcast-Nachricht |
| `auto_warhead_broadcast_message` | `The Alpha Warhead is being detonated` | Text beim automatischen Start |
| `auto_warhead_broadcast_time` | `10` | Anzeigedauer der Start-Nachricht in Sekunden |
| `auto_warhead_detonate_broadcast` | `The Alpha Warhead has been detonated now` | Text bei der Detonation |
| `auto_warhead_detonate_broadcast_time` | `10` | Anzeigedauer der Detonations-Nachricht in Sekunden |
| `disable_decontamination` | `false` | Auf `true` findet keine Dekontamination der Light Containment Zone statt |
| `auto_decon_broadcast_enabled` | `false` | Zeigt bei der Dekontamination eine Broadcast-Nachricht |
| `auto_decon_broadcast_message` | `Light Containment Zone is now decontaminated` | Text der Dekontaminations-Nachricht |
| `auto_decon_broadcast_time` | `10` | Anzeigedauer der Dekontaminations-Nachricht in Sekunden |
| `dms_enabled` | `true` | Aktiviert den Dead Man's Switch |
| `dms_activation_time` | `240` | Dauer des Dead-Man's-Switch-Countdowns in Sekunden |
| `end_round_on_one_player` | `false` | Legt fest, ob eine Runde auch enden darf, wenn nur ein Spieler auf dem Server ist |
| `914_mode` | `default` (`DroppedAndHeld`) | Legt fest, welche Items und Spieler SCP-914 verarbeitet |
| `limit_category_*` | `default` | Maximale Anzahl Items pro Kategorie im Inventar |
| `limit_ammo*` | `default` | Maximale Munition pro Munitionstyp |

:::: danger Wichtig
Im aktuellen SCP: Secret Laboratory gibt es **keine** Einstellungen für Respawn-Tickets oder Respawn-Timer von MTF und Chaos Insurgency. Schlüssel wie `minimum_MTF_time_to_spawn`, `maximum_MTF_time_to_spawn` oder `respawn_tickets_*` stammen aus veralteten Versionen der Konfigurationsdatei und haben keine Wirkung mehr. Übernimm sie nicht aus alten Anleitungen.
::::

## Lobby und Late Join

### Lobby-Wartezeit

`lobby_waiting_time` legt fest, wie viele Sekunden der Countdown in der Lobby läuft, bevor die Runde startet. Der Countdown beginnt erst, wenn mindestens zwei Spieler verbunden sind. Mit `default` wartet der Server 20 Sekunden. Ist der Server voll, startet die Runde sofort.

```
lobby_waiting_time: 30
```

### Late Join

Mit `late_join_time` bestimmst du, wie viele Sekunden nach Rundenstart neu beitretende Spieler noch eine Rolle bekommen. Wer später beitritt, landet als Zuschauer im Spiel und muss auf die nächste Verstärkungswelle oder die nächste Runde warten. Mit dem Standardwert `0` spawnt nach dem Rundenstart niemand mehr direkt ein.

```
late_join_time: 60
```

:::: info Hinweis
Late Join gilt nur für Spieler, die in der laufenden Runde noch nicht gespawnt sind. Wer die Verbindung trennt und neu beitritt, wird nicht erneut eingespawnt.
::::

## Automatischer Alpha Warhead

Der Alpha Warhead kann nach einer festen Zeit automatisch starten. So verhinderst du Runden, die sich endlos ziehen. `auto_warhead_start_minutes` zählt ab Rundenstart – mit `0` (Standard) ist die Funktion deaktiviert.

```
auto_warhead_start_minutes: 20
auto_warhead_lock: true
auto_warhead_broadcast_enabled: true
auto_warhead_broadcast_message: Der Alpha Warhead wird automatisch gezündet und kann nicht gestoppt werden.
auto_warhead_detonate_broadcast: Der automatische Alpha Warhead wurde gezündet.
```

Mit `auto_warhead_lock: true` (Standard) lässt sich der automatisch gestartete Warhead nicht mehr abbrechen. Setzt du den Wert auf `false`, können Spieler den Countdown wie gewohnt stoppen.

:::: info Hinweis
Die Nachrichten erscheinen nur, wenn `auto_warhead_broadcast_enabled` auf `true` steht. In der Konfigurationsvorlage steht der Wert standardmäßig auf `false`.
::::

## Dekontamination

Im Laufe einer Runde wird die Light Containment Zone dekontaminiert. Mit `disable_decontamination: true` schaltest du die Dekontamination komplett ab. Möchtest du sie behalten, aber eine eigene Nachricht anzeigen, aktivierst du den Broadcast:

```
auto_decon_broadcast_enabled: true
auto_decon_broadcast_message: Die Light Containment Zone wurde dekontaminiert.
```

## Dead Man's Switch

Haben sowohl MTF als auch Chaos Insurgency keine Verstärkungswellen mehr übrig, startet der Dead Man's Switch einen Countdown. Läuft er ab, startet der Alpha Warhead automatisch und kann nicht mehr gestoppt werden. Die Länge des Countdowns legst du mit `dms_activation_time` in Sekunden fest:

```
dms_enabled: true
dms_activation_time: 180
```

Mit `dms_enabled: false` schaltest du den Dead Man's Switch komplett ab.

## Rundenende mit einem Spieler

Standardmäßig (`end_round_on_one_player: false`) endet eine Runde nicht, solange weniger als zwei Spieler auf dem Server sind. Setzt du den Wert auf `true`, kann eine Runde auch dann regulär enden, wenn nur ein Spieler verbunden ist – praktisch, wenn du Einstellungen allein testen möchtest.

```
end_round_on_one_player: true
```

## SCP-914-Modus

`914_mode` legt fest, was SCP-914 beim Veredeln erfasst. Mit `default` verwendet der Server `DroppedAndHeld`.

| Wert | Wirkung |
|------|---------|
| `Dropped` | Nur Items, die in der Eingabekammer auf dem Boden liegen |
| `Inventory` | Das gesamte Inventar der Spieler in der Eingabekammer |
| `Held` | Nur das Item, das ein Spieler in der Eingabekammer in der Hand hält |
| `DroppedAndPlayerTeleport` | Items auf dem Boden – Spieler in der Eingabekammer werden nur teleportiert, ihre Items bleiben unverändert |
| `DroppedAndInventory` | Items auf dem Boden und das gesamte Inventar der Spieler |
| `DroppedAndHeld` | Items auf dem Boden und das Item in der Hand der Spieler |

```
914_mode: DroppedAndInventory
```

## Item- und Munitionslimits

### Item-Kategorien

Diese Schlüssel legen fest, wie viele Items einer Kategorie ein Spieler gleichzeitig tragen darf. Das Inventar fasst maximal 8 Items – ein Limit von `8` ist daher praktisch unbegrenzt.

| Schlüssel | Standardwert (ohne Rüstung) | Kategorie |
|-----------|-----------------------------|-----------|
| `limit_category_grenade` | `2` | Granaten |
| `limit_category_keycard` | `3` | Keycards |
| `limit_category_medical` | `3` | Medizinische Items |
| `limit_category_scpitem` | `3` | SCP-Items |
| `limit_category_firearm` | `1` | Schusswaffen |

:::: warning Achtung
Der Wert `0` bedeutet **nicht** unbegrenzt: Mit `0` können Spieler Items dieser Kategorie gar nicht mehr aufheben.
::::

### Munition

Die Munitionslimits akzeptieren Werte von 1 bis 65535:

| Schlüssel | Standardwert (ohne Rüstung) | Munition |
|-----------|-----------------------------|----------|
| `limit_ammo9x19` | `40` | 9x19 mm |
| `limit_ammo556x45` | `40` | 5,56x45 mm |
| `limit_ammo762x39` | `40` | 7,62x39 mm |
| `limit_ammo44cal` | `18` | .44 Kaliber |
| `limit_ammo12gauge` | `14` | Kaliber 12 (Schrot) |

:::: info Hinweis
Rüstungen erhöhen die Item- und Munitionslimits zusätzlich. Die Werte aus der Konfiguration sind die Grundwerte ohne Rüstung.
::::

## Spawn-Reihenfolge

`team_respawn_queue` bestimmt, welche Rollen beim Rundenstart verteilt werden. Jede Ziffer steht für einen Spieler-Slot: Bei N Spielern legen die ersten N Ziffern fest, wie viele SCPs, Facility Guards, Scientists usw. gespawnt werden. Welcher Spieler welche Rolle bekommt, entscheidet das Spiel. Gibt es mehr Spieler als Ziffern, beginnt die Reihe wieder von vorn.

| Ziffer | Rolle |
|--------|-------|
| `0` | SCP |
| `1` | Facility Guard |
| `2` | Chaos Insurgency |
| `3` | Scientist |
| `4` | Class-D |

Mit `default` verwendet der Server die eingebaute Reihenfolge `4014314031441404134041434414`.

:::: tip Beispiel
Diese Reihenfolge verteilt bei 10 Spielern zwei SCPs und acht Class-D – passend für ein Event, in dem nur Class-D gegen SCPs antreten:

```
team_respawn_queue: 4044440444
```
::::

## Rezepte für typische Server

Die folgenden Rezepte kannst du direkt in deine `config_gameplay.txt` übernehmen. Ändere dabei nur die bestehenden Schlüssel – lege keine doppelten Einträge an. Fehlt ein Schlüssel, fügst du ihn als neue Zeile im Format `schlüssel: wert` hinzu.

### Kürzere Runden

Für Server, auf denen Runden zügig enden sollen:

```
lobby_waiting_time: 15
auto_warhead_start_minutes: 15
auto_warhead_lock: true
dms_activation_time: 120
```

### Entspanntere Runden

Für Server, auf denen Nachzügler noch mitspielen und Spieler mehr tragen dürfen:

```
lobby_waiting_time: 30
late_join_time: 60
limit_category_medical: 5
limit_category_grenade: 3
```

### Event-Server

Für Events mit eigenem Ablauf, bei denen Dekontamination und automatische Warheads stören würden:

```
lobby_waiting_time: 60
disable_decontamination: true
auto_warhead_start_minutes: 0
dms_enabled: false
team_respawn_queue: 4044440444
```

:::: info Hinweis
Die Standardwerte in dieser Anleitung entsprechen der Konfigurationsvorlage des Spiels mit Stand 2026. Spiel-Updates können Werte und Schlüssel ändern – im Zweifel prüfst du die Kommentare direkt in deiner eigenen `config_gameplay.txt`.
::::
