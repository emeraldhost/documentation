---
description: "Mutatoren auf einem Insurgency: Sandstorm Server hinzufügen"
---

# So fügst du Mutatoren auf deinem Insurgency: Sandstorm Server hinzu

Mutatoren sind spezielle Spielregeln, die das Gameplay verändern — zum Beispiel nur Pistolen erlauben, die Lebenspunkte anpassen, das Bewegungstempo ändern oder Spezialeffekte wie „Vampirism" hinzufügen. Es gibt eine Reihe vom Spiel mitgelieferter Mutatoren; manche Mods bringen zusätzlich eigene mit.

## Mutatoren aktivieren

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Mutatoren eintragen</b><br>
   Trage im Feld **Zusätzliche Parameter** den gewünschten Mutator ein:

   ```
   -Mutators=MutatorName
   ```

   Mehrere Mutatoren trennst du mit Komma:

   ```
   -Mutators=Vampirism,HotPotato,PistolsOnly
   ```

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

:::: warning Achtung
Verwende den exakten **Dateinamen** aus der Tabelle unten (ohne Leerzeichen) und achte auf die Groß- und Kleinschreibung — sonst wird der Mutator nicht geladen.
::::

:::: tip Tipp
Mutatoren lassen sich auch an einen Travel-Befehl anhängen, indem du `?Mutators=Dateiname` am Ende ergänzt.
::::

## Verfügbare Mutatoren

| Dateiname | Mutator | Beschreibung |
|-----------|---------|--------------|
| `AllYouCanEat` | All You Can Eat | Start mit 100 Versorgungspunkten |
| `AntiMaterielRiflesOnly` | Anti-Materiel Only | Nur Anti-Materiel-Gewehre (plus normale Ausrüstung und Sprengstoff) |
| `BoltActionsOnly` | Bolt-Actions Only | Nur Repetiergewehre (plus normale Ausrüstung und Sprengstoff) |
| `Broke` | Broke | Start mit 0 Versorgungspunkten |
| `BulletSponge` | Bullet Sponge | Erhöhte Lebenspunkte |
| `Competitive` | Competitive | Ausrüstung teurer, kürzere Runden, schnelleres Einnehmen von Zielen |
| `CompetitiveLoadouts` | Competitive Loadouts | Spielerklassen werden durch die aus dem Competitive-Modus ersetzt |
| `FastMovement` | Fast Movement | Schnellere Bewegung |
| `Frenzy` | Frenzy | Kampf gegen KI-Gegner, die nur Nahkampf nutzen — Vorsicht vor Spezialgegnern |
| `Guerrillas` | Guerrillas | Start mit 5 Versorgungspunkten |
| `Hardcore` | Hardcore | Langsamere Bewegung und längere Einnahmezeiten |
| `HeadshotOnly` | Headshots Only | Spieler nehmen nur bei Kopftreffern Schaden |
| `HotPotato` | Hot Potato | Beim Tod wird eine scharfe Granate fallen gelassen |
| `LockedAim` | Locked Aim | Waffen zielen immer auf die Bildschirmmitte |
| `NoAim` | No Aim Down Sight | Zielen über Kimme und Korn ist deaktiviert |
| `PistolsOnly` | Pistols Only | Nur Pistolen (plus normale Ausrüstung und Sprengstoff) |
| `ShotgunsOnly` | Shotguns Only | Nur Schrotflinten (plus normale Ausrüstung und Sprengstoff) |
| `SlowCaptureTimes` | Slow Capture Times | Ziele brauchen länger zum Einnehmen |
| `SlowMovement` | Slow Movement | Langsamere Bewegung |
| `SoldierOfFortune` | Soldier of Fortune | Versorgungspunkte steigen mit der Punktzahl |
| `SpecialOperations` | Special Operations | Start mit 30 Versorgungspunkten |
| `Strapped` | Strapped | Start mit 1 Versorgungspunkt |
| `Ultralethal` | Ultralethal | Jeder stirbt durch einen einzigen Schuss |
| `Vampirism` | Vampirism | Du erhältst Leben in Höhe des verursachten Schadens |
| `Warlords` | Warlords | Start mit 10 Versorgungspunkten |

## Mutatoren konfigurieren (für Fortgeschrittene)

Einige Mutatoren lassen sich über die `Engine.ini` (im Ordner `Insurgency/Saved/Config/LinuxServer/`) weiter anpassen. Trage dazu den jeweiligen Header und darunter die gewünschten Einstellungen ein.

**Headshots Only**

```ini
[/Script/Insurgency.Mutator_HeadshotOnly]
bCheckMeleeDamage=false
```

`bCheckMeleeDamage` (Standard `false`) — legt fest, ob Nahkampftreffer als Kopftreffer zählen.

**Hot Potato**

```ini
[/Script/Insurgency.Mutator_HotPotato]
bIgnoreHeadshots=false
bBotsOnly=false
```

`bIgnoreHeadshots` — keine Granate bei Kopftreffer fallen lassen. `bBotsOnly` — nur bei Bots auslösen.

**Vampirism**

```ini
[/Script/Insurgency.Mutator_Vampirism]
bCountFriendlyFire=false
MaxHealth=1000
```

`bCountFriendlyFire` — Eigenbeschuss zählt zur Lebensregeneration. `MaxHealth` (Standard `1000`) — maximales Leben, das du durch Schaden gewinnen kannst.

:::: tip Tipp
Weitere Startparameter findest du in der Anleitung [Zusätzliche Parameter](zusaetzliche-parameter.md).
::::
