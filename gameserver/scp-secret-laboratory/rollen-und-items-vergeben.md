---
description: "Rollen und Items auf einem SCP: Secret Laboratory Server vergeben"
---

# So vergibst du Rollen und Items auf deinem SCP: Secret Laboratory Server

Mit Remote Admin kannst du Spielern jederzeit eine bestimmte Rolle zuweisen und ihnen Items ins Inventar legen – z.B. für Events, um dich als Admin in der Tutorial-Rolle über die Karte zu bewegen oder um Waffen und SCPs zu testen. Das geht im Spiel über das Remote-Admin-Panel oder ohne Spiel über die Konsole der Verwaltung. Die Grundlagen zu Remote Admin findest du in der Anleitung [Remote Admin nutzen](remote-admin-nutzen.md).

## Voraussetzung: die passenden Berechtigungen

Welche Rollen und Items du vergeben darfst, hängt von den Berechtigungen deines Rangs im Abschnitt `Permissions:` der Datei `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt` ab – ersetze `<Port>` durch den Game Port deines Servers aus der **Übersicht** der Verwaltung:

| Berechtigung | Erlaubt |
|--------------|---------|
| `ForceclassSelf` | Dir selbst eine Rolle zuweisen |
| `ForceclassToSpectator` | Andere Spieler nur zum Zuschauer (`Spectator`) machen |
| `ForceclassWithoutRestrictions` | Dir selbst und anderen Spielern jede Rolle zuweisen |
| `GivingItems` | Spielern Items geben |

Wie du einem Rang Berechtigungen gibst, zeigt dir die Anleitung [Eigene Ränge erstellen](eigene-raenge-erstellen.md).

:::: info Hinweis
Die Rolle `Overwatch` kannst du nur mit der Berechtigung `Overwatch` vergeben – für andere Spieler brauchst du zusätzlich `ForceclassToSpectator` oder `ForceclassWithoutRestrictions`.
::::

:::: tip Tipp
Die Konsole der Verwaltung hat volle Rechte. Dort kannst du Rollen und Items auch ohne eigenen Rang im Spiel vergeben.
::::

## Spieler-ID herausfinden

Spieler sprichst du in den Befehlen über ihre Spieler-ID an. Die IDs siehst du im Remote-Admin-Panel in der linken Spalte **Players** oder in der Konsole der Verwaltung mit dem Befehl `players`. Mehrere Spieler gibst du an, indem du ihre IDs mit Punkten trennst, z.B. `2.5.7`.

## Rollen per Befehl vergeben

1. <b>Konsole öffnen</b><br>
   Öffne im Spiel das Remote-Admin-Panel (Standardtaste **M**) und darin die textbasierte Remote-Admin-Konsole. Alternativ öffnest du die Konsole in der Verwaltung deines Servers.

2. <b>Befehl eingeben</b><br>
   Gib den Befehl `forceclass` mit Spieler-ID und Rolle ein:

   ```
   forceclass <SpielerID> <Rolle>
   ```

   Die Rolle kannst du als Namen (Groß-/Kleinschreibung egal) oder als Zahl angeben. In der Konsole der Verwaltung setzt du einen `/` davor:

   ```
   /forceclass 2 Tutorial
   /forceclass 2.5.7 ClassD
   /forceclass 3 6
   ```

   Das erste Beispiel macht Spieler 2 zum Tutorial, das zweite macht die Spieler 2, 5 und 7 zu Class-D, das dritte macht Spieler 3 zum Wissenschaftler.

:::: tip Tipp
Statt `forceclass` funktionieren auch die Kurzformen `fc`, `fr` und `forcerole`. Mit `help forceclass` zeigst du die Beschreibung und Verwendung des Befehls an.
::::

## Liste der Rollen

| Name | ID | Rolle |
|------|----|-------|
| `ClassD` | 1 | Class-D-Personal |
| `Scientist` | 6 | Wissenschaftler |
| `FacilityGuard` | 15 | Facility Guard |
| `NtfPrivate` | 13 | MTF Private |
| `NtfSergeant` | 11 | MTF Sergeant |
| `NtfSpecialist` | 4 | MTF Specialist |
| `NtfCaptain` | 12 | MTF Captain |
| `ChaosConscript` | 8 | Chaos Insurgency Conscript |
| `ChaosRifleman` | 18 | Chaos Insurgency Rifleman |
| `ChaosMarauder` | 19 | Chaos Insurgency Marauder |
| `ChaosRepressor` | 20 | Chaos Insurgency Repressor |
| `Scp173` | 0 | SCP-173 |
| `Scp106` | 3 | SCP-106 |
| `Scp049` | 5 | SCP-049 |
| `Scp0492` | 10 | SCP-049-2 (Zombie) |
| `Scp079` | 7 | SCP-079 |
| `Scp096` | 9 | SCP-096 |
| `Scp939` | 16 | SCP-939 |
| `Scp3114` | 23 | SCP-3114 |
| `Tutorial` | 14 | Tutorial |
| `Spectator` | 2 | Zuschauer |
| `Overwatch` | 21 | Overwatch |
| `Filmmaker` | 22 | Filmmaker |

Die vollständige, aktuelle Liste aller Rollen findest du im Tab **Role Management** des Remote-Admin-Panels oder in der [Remote-Admin-Anleitung von Northwood](https://techwiki.scpslgame.com/books/server-guides/page/remote-admin-panel).

:::: warning Achtung
Die Zahlen-IDs können sich mit Spiel-Updates ändern, wenn Northwood neue Rollen hinzufügt. Nutze am besten die Namen – sie bleiben stabil.
::::

## Items per Befehl vergeben

1. <b>Konsole öffnen</b><br>
   Öffne wie oben die Remote-Admin-Konsole im Spiel oder die Konsole in der Verwaltung.

2. <b>Befehl eingeben</b><br>
   Gib den Befehl `give` mit Spieler-ID und Item-ID ein:

   ```
   give <SpielerID> <ItemID>
   ```

   Der Befehl `give` erwartet die Item-ID als Zahl – Item-Namen funktionieren hier nicht – im Remote-Admin-Panel kannst du Items stattdessen über ihren Namen im Tab **Inventory** auswählen. Mehrere Items trennst du genau wie mehrere Spieler mit Punkten. In der Konsole der Verwaltung setzt du wieder einen `/` davor:

   ```
   /give 2 14
   /give 2.5.7 11
   /give 3 20.37.14
   ```

   Das erste Beispiel gibt Spieler 2 ein Medkit, das zweite gibt den Spielern 2, 5 und 7 je eine Keycard O5, das dritte gibt Spieler 3 ein E-11-SR, eine Kampfweste und ein Medkit.

:::: info Hinweis
Ist das Inventar eines Spielers voll, kann er kein weiteres Item bekommen. Der Befehl meldet dann einen Fehler für diesen Spieler.
::::

## Liste häufiger Items

| ID | Item |
|----|------|
| 0 | Keycard Janitor |
| 1 | Keycard Scientist |
| 4 | Keycard Guard |
| 8 | Keycard MTF Captain |
| 9 | Keycard Facility Manager |
| 10 | Keycard Chaos Insurgency |
| 11 | Keycard O5 |
| 12 | Radio |
| 13 | COM-15 |
| 14 | Medkit |
| 15 | Taschenlampe |
| 16 | Micro H.I.D. |
| 17 | SCP-500 |
| 18 | SCP-207 |
| 19 | Munition 12/70 Buckshot |
| 20 | E-11-SR |
| 21 | Crossvec |
| 22 | Munition 5.56x45mm |
| 23 | FSP-9 |
| 24 | Logicer |
| 25 | Granate (HE) |
| 26 | Blendgranate |
| 27 | Munition .44 Mag |
| 28 | Munition 7.62x39mm |
| 29 | Munition 9x19mm |
| 30 | COM-18 |
| 31 | SCP-018 |
| 32 | SCP-268 |
| 33 | Adrenalin |
| 34 | Schmerzmittel |
| 35 | Münze |
| 36 | Leichte Weste |
| 37 | Kampfweste |
| 38 | Schwere Weste |
| 39 | Revolver |
| 40 | AK |
| 41 | Shotgun |
| 47 | Particle Disruptor |
| 50 | Jailbird |

Alle Item-IDs findest du in der [Remote-Admin-Anleitung von Northwood](https://techwiki.scpslgame.com/books/server-guides/page/remote-admin-panel).

:::: warning Achtung
Auch die Item-IDs können sich mit Spiel-Updates ändern. Prüfe nach einem größeren Update am besten mit einem kurzen Test, ob du das richtige Item bekommst.
::::

## Rollen und Items im Remote-Admin-Panel vergeben

Ohne Befehle geht es auch über die Oberfläche des Remote-Admin-Panels:

1. <b>Spieler auswählen</b><br>
   Öffne im Spiel das Remote-Admin-Panel (Standardtaste **M**) und wähle in der linken Spalte **Players** einen oder mehrere Spieler aus.

2. <b>Rolle zuweisen</b><br>
   Wechsle zum Tab **Role Management**, wähle die gewünschte Rolle und bestätige mit **SET CLASS**.

3. <b>Items geben</b><br>
   Wechsle zum Tab **Inventory**, wähle das gewünschte Item aus und bestätige mit **REQUEST**.

## Typische Anwendungsfälle

:::: info Beispiel
- **Als Admin unterwegs:** Mit `forceclass <DeineID> Tutorial` bewegst du dich als Tutorial über die Karte, ohne zu einem der spielenden Teams (Class-D, Wissenschaftler, MTF, Chaos, SCPs) zu gehören – praktisch zum Beobachten oder Helfen. Dafür reicht die Berechtigung `ForceclassSelf`.
- **Events:** Mach alle Teilnehmer gleichzeitig zu Class-D, z.B. `forceclass 2.5.7.9 ClassD`, und gib ihnen danach eine Ausrüstung, z.B. `give 2.5.7.9 13.14`.
- **Testen:** Weise dir selbst eine SCP-Rolle zu oder gib dir eine Waffe, um Einstellungen oder Plugins auszuprobieren.
::::

:::: warning Achtung
Rollenwechsel und Items wirken sofort und können eine laufende Runde stark beeinflussen. Kündige Events am besten vorher mit `bc` an – siehe [Remote Admin nutzen](remote-admin-nutzen.md).
::::
