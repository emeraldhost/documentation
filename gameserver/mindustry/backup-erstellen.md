---
description: Backup eines Mindustry Servers erstellen
---

# So erstellst du ein Backup deines Mindustry Servers

Ein regelmäßiges Backup deines Mindustry Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen überschriebenen Spielstand oder einen Mod, der deine Karte unbrauchbar macht.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Vor dem Hochladen eines anderen Spielstands
- Vor dem Hinzufügen, Aktualisieren oder Entfernen von Mods und Plugins
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Was gehört zum Backup?

Mindustry legt alle Serverdaten im Ordner `config` ab:

| Pfad | Inhalt |
|------|--------|
| `/config/saves/` | Alle Spielstände als `.msav`-Dateien, inklusive der Auto-Saves |
| `/config/maps/` | Deine eigenen Karten |
| `/config/mods/` | Installierte Mods und Plugins |
| `/config/settings.bin` | Alle Servereinstellungen sowie Admin- und Bannliste |

:::: danger Wichtig
`settings.bin` ist eine Binärdatei und enthält unter anderem deine Admins, Banns und die Whitelist. Es gibt in Mindustry **keine** Textdateien wie `admins.txt` oder `bans.json`. Bearbeite `settings.bin` niemals von Hand – sichere sie nur.
::::

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du die `.msav`-Dateien auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Mindustry schreibt Einstellungen sofort und Spielstände regelmäßig auf die Festplatte — eine Sicherung während des Betriebs kann einen unvollständigen Stand enthalten.
::::

## Auto-Saves als zusätzliche Absicherung

Zusätzlich zu den Backups kann dein Server in festen Abständen selbst speichern. Aktiviere die Funktion in der **Konsole** deiner Verwaltung:

```
config autosave true
```

| Einstellung | Standard | Bedeutung |
|-------------|----------|-----------|
| `autosave` | `false` | Schaltet die automatischen Speicherungen ein oder aus |
| `autosaveSpacing` | `300` | Abstand zwischen zwei Speicherungen in Sekunden |
| `autosaveAmount` | `10` | Anzahl der aufbewahrten Auto-Saves |

Die Dateien landen mit dem Präfix `auto_` in `/config/saves/`. Den zuletzt erstellten Auto-Save lädst du mit:

```
loadautosave
```

:::: info Hinweis
Auto-Saves ersetzen kein Backup: Sie liegen auf demselben Server und werden nach Erreichen der eingestellten Anzahl automatisch überschrieben.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
