---
description: "Die wichtigsten Gameplay-Einstellungen auf einem SCP: Secret Laboratory Server anpassen"
---

# So passt du die wichtigsten Gameplay-Einstellungen auf deinem SCP: Secret Laboratory Server an

Die Datei `config_gameplay.txt` steuert das Verhalten deines Servers im Spiel. Diese Anleitung bündelt die wichtigsten Einstellungen zu Intercom, AFK-Kick, Idle Mode, Spawn-Schutz, Runden-Neustart und Broadcasts — jeweils mit einer kurzen Übersicht der Schlüssel und einem Praxis-Rezept zum Übernehmen.

## Voraussetzung

Wie du Konfigurationsdateien auf deinem Server findest, bearbeitest und Änderungen sicher übernimmst, zeigt dir die Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md). Alle Einstellungen aus dieser Anleitung gehören in folgende Datei — ersetze `<Port>` durch den Game Port deines Servers aus der **Übersicht** der Verwaltung:

```
/.config/SCP Secret Laboratory/config/<Port>/config_gameplay.txt
```

:::: warning Achtung
Stoppe deinen Server, bevor du die Datei bearbeitest, und achte darauf, dass du im Ordner des aktuellen Game Ports arbeitest — unter `/.config/SCP Secret Laboratory/config/` können mehrere Port-Ordner liegen, der Server liest aber nur den mit dem aktuellen Game Port. Details dazu findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).
::::

## Intercom

Über das Intercom können Spieler eine Durchsage an alle machen. Mit diesen Schlüsseln steuerst du, wie lange gesprochen werden darf und wie lange das Intercom danach gesperrt ist:

| Schlüssel | Standardwert | Wirkung |
|-----------|--------------|---------|
| `intercom_cooldown` | `120` | Zeit in Sekunden, bis das Intercom nach einer Durchsage wieder verfügbar ist |
| `intercom_max_speech_time` | `20` | Maximale Sprechzeit in Sekunden pro Durchsage |

**Praxis-Rezept — längere Durchsagen, kürzere Wartezeit:**

```
intercom_max_speech_time: 30
intercom_cooldown: 60
```

## AFK-Kick und Idle Mode

### AFK-Kick

Inaktive Spieler werden automatisch vom Server entfernt:

| Schlüssel | Standardwert | Wirkung |
|-----------|--------------|---------|
| `afk_time` | `90` | Zeit in Sekunden, bis ein inaktiver Spieler gekickt wird — SCP-079 bekommt 13 Sekunden extra |
| `constantly_check_afk` | `false` | Aktiviert die dauerhafte AFK-Prüfung |
| `afk_kick_message` | `AFK` | Nachricht, die dem gekickten Spieler angezeigt wird |

**Praxis-Rezept — mehr Geduld mit inaktiven Spielern und eine verständliche Kick-Nachricht:**

```
afk_time: 180
afk_kick_message: Du warst zu lange inaktiv und wurdest vom Server entfernt.
```

### Idle Mode

Im Idle Mode senkt der Server seine Tickrate, solange niemand verbunden ist — das spart CPU-Ressourcen auf leeren Servern:

| Schlüssel | Standardwert | Wirkung |
|-----------|--------------|---------|
| `idle_mode_enabled` | `false` | Aktiviert oder deaktiviert den Idle Mode |
| `idle_mode_time` | `5000` | Zeit in Millisekunden, bis der Idle Mode aktiv wird |
| `idle_mode_preauth_time` | `30000` | Idle-Mode-Wartezeit in Millisekunden nach einem Verbindungsversuch (Preauth) |
| `idle_mode_tickrate` | `1` | Tickrate des Servers im Idle Mode |

**Praxis-Rezept — CPU sparen, wenn der Server leer ist:**

```
idle_mode_enabled: true
```

Die übrigen Idle-Mode-Werte kannst du auf den Standardwerten lassen.

## Spawn-Schutz

Der Spawn-Schutz bewahrt frisch gespawnte Verstärkungen davor, direkt beim Einstieg getötet zu werden:

| Schlüssel | Standardwert | Wirkung |
|-----------|--------------|---------|
| `spawn_protect_enabled` | `false` | Aktiviert den Spawn-Schutz |
| `spawn_protect_time` | `8` | Dauer des Spawn-Schutzes in Sekunden |
| `spawn_protect_can_shoot` | `false` | Legt fest, ob geschützte Spieler schießen dürfen — standardmäßig endet der Schutz, sobald ein Spieler eine Schusswaffe zieht |
| `spawn_protect_prevent_all` | `false` | Auf `true` blockt der Schutz jeglichen Schaden, standardmäßig nur Schaden durch Friendly Fire |
| `spawn_protect_team` | `1, 2` | Teams mit Spawn-Schutz — `1` = MTF, `2` = Chaos Insurgency |

**Praxis-Rezept — Spawn-Schutz für Verstärkungen aktivieren:**

```
spawn_protect_enabled: true
spawn_protect_time: 10
```

## Runden-Neustart

Diese Schlüssel steuern, was nach dem Ende einer Runde passiert und ob Nachzügler noch einspawnen:

| Schlüssel | Standardwert | Wirkung |
|-----------|--------------|---------|
| `auto_round_restart_time` | `10` | Zeit in Sekunden zwischen Rundenende und automatischem Rundenneustart |
| `restart_after_rounds` | `0` | Kompletter Server-Neustart nach der angegebenen Anzahl Runden — `0` deaktiviert die Funktion |
| `enable_fast_round_restart` | `false` | Aktiviert den schnellen Rundenneustart — laut offizieller Referenz kann diese Funktion Fehler verursachen |
| `fast_round_restart_delay` | `3.2` | Verzögerung des schnellen Rundenneustarts |
| `late_join_time` | `0` | Zeit in Sekunden nach Rundenstart, in der neu beitretende Spieler noch eingespawnt werden |

**Praxis-Rezept — Speicher regelmäßig freigeben:** Ein kompletter Server-Neustart alle paar Runden wirkt schleichend steigendem Speicherverbrauch entgegen. Da dein Server hinter LocalAdmin läuft, wird er nach dem Herunterfahren automatisch neu gestartet — du musst in der Verwaltung nichts weiter tun.

```
restart_after_rounds: 15
```

## Broadcasts bei Kicks und Bans

Dein Server kann allen Spielern eine Nachricht anzeigen, wenn jemand gekickt oder gebannt wird. Wie du Spieler kickst und bannst, zeigt dir die Anleitung [Spieler kicken und bannen](spieler-kicken-und-bannen.md).

| Schlüssel | Standardwert | Wirkung |
|-----------|--------------|---------|
| `broadcast_bans` | `true` | Zeigt eine Broadcast-Nachricht, wenn ein Spieler gebannt wird |
| `broadcast_ban_text` | `%nick% has been banned from this server.` | Text der Ban-Nachricht — `%nick%` wird durch den Spielernamen ersetzt |
| `broadcast_ban_duration` | `5` | Anzeigedauer der Ban-Nachricht in Sekunden |
| `broadcast_kicks` | `false` | Zeigt eine Broadcast-Nachricht, wenn ein Spieler gekickt wird |
| `broadcast_kick_text` | `%nick% has been kicked from this server.` | Text der Kick-Nachricht — `%nick%` wird durch den Spielernamen ersetzt |
| `broadcast_kick_duration` | `5` | Anzeigedauer der Kick-Nachricht in Sekunden |

**Praxis-Rezept — deutsche Nachrichten für Kicks und Bans:**

```
broadcast_kicks: true
broadcast_kick_text: %nick% wurde vom Server gekickt.
broadcast_ban_text: %nick% wurde vom Server gebannt.
```

## Spezialthemen in derselben Datei

Zwei häufig gewünschte Themen stehen ebenfalls in der `config_gameplay.txt`, haben aber eigene Anleitungen:

- **Friendly Fire** inklusive der automatischen Teamkill-Strafen: [Friendly Fire konfigurieren](friendly-fire-konfigurieren.md)
- **Whitelist**, damit nur eingetragene Spieler beitreten können: [Whitelist einrichten](whitelist-einrichten.md)

:::: info Hinweis
Die Standardwerte in dieser Anleitung entsprechen der offiziellen Konfigurations-Referenz mit Stand 2026. Spiel-Updates können Werte und Schlüssel ändern — im Zweifel prüfst du die Kommentare direkt in deiner eigenen `config_gameplay.txt`, sie beschreiben jede Einstellung.
::::
