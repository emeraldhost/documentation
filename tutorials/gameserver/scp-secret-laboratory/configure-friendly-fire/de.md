---
slug: "friendly-fire-konfigurieren"
language: "de"
title: "So konfigurierst Du Friendly Fire auf Deinem SCP: Secret Laboratory Server"
description: "Friendly Fire auf einem SCP: Secret Laboratory Server konfigurieren"
tags: []
date: "2026-08-24"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Friendly Fire konfigurieren"
sort: 4
related: ["gameserver/scp-secret-laboratory/adjust-gameplay-settings", "gameserver/scp-secret-laboratory/assign-ranks", "gameserver/scp-secret-laboratory/create-backup", "gameserver/scp-secret-laboratory/edit-config-files"]
---

Über die Datei `config_gameplay.txt` kannst Du Schaden zwischen Teammitgliedern (Friendly Fire) aktivieren und den automatischen Teamkill-Detector einstellen.

> [!WARNING]
> Der Pfad zur Konfigurationsdatei enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den findest Du in der Verwaltung unter **Übersicht**.

> [!IMPORTANT]
> Wer nur `friendly_fire: true` setzt, aktiviert damit automatisch auch den Teamkill-Detector: Der Spawn-Detector und der Explosions-Detector sind ab Werk eingeschaltet und **bannen** Spieler für 48 Stunden – der Spawn-Detector bereits bei 2 Teamkills oder 180 Teamschaden innerhalb von 120 Sekunden nach dem Spawn. Wundern sich Spieler auf Deinem Server über „zufällige“ automatische Bans, ist fast immer der Detector die Ursache. Wie Du ihn abschaltest oder entschärfst, zeigen die Rezepte weiter unten.

## Friendly Fire konfigurieren

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
   ```

5. **Werte anpassen**\
   Wähle eines der [Rezepte](#rezepte) weiter unten und übernimm die Werte. Vorhandene Einträge änderst Du direkt in der Datei; fehlt ein Schlüssel, fügst Du ihn als neue Zeile im Format `schlüssel: wert` hinzu.

6. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

## Grundeinstellungen

| Schlüssel | Standard | Beschreibung |
|-----------|----------|--------------|
| `friendly_fire` | `false` | Aktiviert oder deaktiviert Schaden zwischen Teammitgliedern |
| `friendly_fire_multiplier` | `0.4` | Multiplikator für Schaden an Teammitgliedern (`0.4` = 40 % des normalen Schadens) |

## Der Teamkill-Detector

Der Detector überwacht Teamkills und Teamschaden und bestraft Spieler automatisch, sobald eine der beiden Schwellen erreicht ist – es zählen Kills **oder** Schaden. Es gibt fünf Varianten mit jeweils eigenem Zeitraum:

| Variante | Schlüssel-Präfix | Ab Werk aktiv | Zeitraum |
|----------|------------------|---------------|----------|
| Runde | `ff_detector_round_` | Nein | die gesamte Runde |
| Leben | `ff_detector_life_` | Nein | ein Leben (bis zum nächsten Respawn) |
| Zeitfenster | `ff_detector_window_` | Nein | rollierendes Fenster von 180 Sekunden (`ff_detector_window_seconds`) |
| Spawn | `ff_detector_spawn_` | **Ja** | 120 Sekunden nach dem Spawn (`ff_detector_spawn_window_seconds`) |
| Explosion nach Disconnect | `ff_detector_explosion_after_disconnecting_` | **Ja** | greift, wenn die Explosion eines Spielers (z.B. eine geworfene Granate) Teammitglieder trifft, nachdem er den Server verlassen hat |

Jede Variante wird über dieselben Suffixe konfiguriert (die Explosions-Variante besitzt keine `_kills`- und `_damage`-Schwellen):

| Suffix | Bedeutung |
|--------|-----------|
| `_enabled` | Schaltet die Variante an oder aus |
| `_kills` | Anzahl Teamkills, ab der die Aktion ausgelöst wird (`0` deaktiviert diese Schwelle) |
| `_damage` | Teamschaden, ab dem die Aktion ausgelöst wird (`0` deaktiviert diese Schwelle) |
| `_action` | Aktion, die ausgeführt wird: `kill`, `kick`, `ban` oder `noop` |
| `_ban_time` | Dauer des Banns bei der Aktion `ban` (z.B. `24h`) |

### Standardwerte

| Variante | `_enabled` | `_kills` | `_damage` | `_action` | `_ban_time` |
|----------|------------|----------|-----------|-----------|-------------|
| `round` | `false` | `6` | `500` | `ban` | `24h` |
| `life` | `false` | `4` | `300` | `ban` | `24h` |
| `window` | `false` | `3` | `250` | `ban` | `16h` |
| `spawn` | `true` | `2` | `180` | `ban` | `48h` |
| `explosion_after_disconnecting` | `true` | – | – | `ban` | `48h` |

### Aktionen

| Wert | Wirkung |
|------|---------|
| `kill` | Der Spieler wird getötet |
| `kick` | Der Spieler wird vom Server geworfen |
| `ban` | Der Spieler wird für die Dauer aus `_ban_time` gebannt |
| `noop` | Keine Aktion – nützlich, wenn Verstöße nur protokolliert werden sollen |

> [!NOTE]
> Teamschaden nach dem Rundenende wird vom Detector ignoriert. Eine vollständige Liste aller Schlüssel – etwa für die Broadcast- und Ban-Nachrichten der einzelnen Varianten – findest Du im [offiziellen SCP: Secret Laboratory Tech Wiki](https://techwiki.scpslgame.com/books/server-guides/page/2-gameplay-config-setup).

## Rezepte

### Friendly Fire mit Standard-Detector

Aktiviert Friendly Fire mit 40 % Schaden und belässt den Detector auf den Standardwerten:

```text
friendly_fire: true
friendly_fire_multiplier: 0.4
```

Damit sind der Spawn-Detector (48-Stunden-Bann ab 2 Teamkills oder 180 Teamschaden kurz nach dem Spawn) und der Explosions-Detector (48-Stunden-Bann) sofort scharf. Für einen öffentlichen Server ist das ein sinnvoller Schutz – sei Dir aber bewusst, dass der Server ohne Dein Zutun bannt.

### Friendly Fire ohne Detector

Aktiviert Friendly Fire und schaltet alle fünf Detector-Varianten sauber ab – z.B. für private Server oder Events, bei denen Teamschaden gewollt ist:

```text
friendly_fire: true
ff_detector_round_enabled: false
ff_detector_life_enabled: false
ff_detector_window_enabled: false
ff_detector_spawn_enabled: false
ff_detector_explosion_after_disconnecting_enabled: false
```

Die Varianten `round`, `life` und `window` stehen zwar schon ab Werk auf `false` – setze trotzdem alle fünf explizit, dann ist der Zustand eindeutig in Deiner Konfiguration dokumentiert.

### Detector auf Kick statt Ban

Behält den Schutz vor Teamkillern bei, ersetzt aber alle automatischen Bans durch einen Kick:

```text
friendly_fire: true
ff_detector_round_action: kick
ff_detector_life_action: kick
ff_detector_window_action: kick
ff_detector_spawn_action: kick
ff_detector_explosion_after_disconnecting_action: kick
```

> [!TIP]
> Die Standard-Broadcast-Nachrichten des Detectors sprechen von einem Bann („%nick has been automatically banned for teamkilling.“). Wenn Du die Aktion auf `kick` änderst, passe bei Bedarf auch `ff_detector_<variante>_broadcast_message` an, damit die Meldung im Spiel stimmt.

> [!NOTE]
> Änderungen an der `config_gameplay.txt` werden erst nach einem Neustart des Servers übernommen.
