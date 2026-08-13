---
description: Automatische Updates auf einem Enshrouded Server steuern
---

# So steuerst du die automatischen Updates deines Enshrouded Servers

Dein Enshrouded Server kann sich bei jedem Start selbst auf die aktuelle Version bringen. In der Verwaltung entscheidest du über zwei Felder, ob das passiert — und ob die Serverdateien dabei zusätzlich auf Vollständigkeit geprüft und repariert werden.

| Feld | Werte | Standard | Bedeutung |
|------|-------|----------|-----------|
| `Auto Update` | `1` / `0` | `1` | `1` = der Server sucht bei jedem Start nach einer neuen Version und lädt sie, `0` = die installierte Version bleibt unverändert |
| `Serverdateien validieren` | `1` / `0` | `0` | `1` = die vorhandenen Serverdateien werden dabei zusätzlich geprüft, fehlende oder veränderte Dateien werden neu geladen, `0` = keine Prüfung |

:::: info Hinweis
Erstelle vor jedem Update und vor jedem Validieren ein Backup: [Backup erstellen](backup-erstellen.md). So kannst du deine Welt und deine Konfiguration wiederherstellen, falls dabei etwas schiefgeht.
::::

## Auto Update ein- oder ausschalten

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Wert eintragen</b><br>
   Trage im Feld **Auto Update** den gewünschten Wert ein: `1` für automatische Updates, `0` um sie abzuschalten. Speichere die Einstellung.

4. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit die Einstellung greift.

## Wann du Auto Update abschalten solltest

- <b>Kein Versionssprung mitten in einer Session</b><br>
  Jeder Neustart lädt sonst eine bereits erschienene neue Version nach. Solange `Auto Update` auf `0` steht, bleibt dein Server auf der Version, die gerade installiert ist.

- <b>Ein Patch macht dir Probleme</b><br>
  Läuft dein Server auf einer Version, mit der alles funktioniert, hältst du ihn mit `0` genau dort fest, bis Keen Games nachbessert. `0` verhindert allerdings nur kommende Updates: Ein bereits installiertes Update lässt sich darüber nicht rückgängig machen.

:::: tip Tipp
Ob ein Patch deinen Server überhaupt betrifft, steht im Changelog: Keen Games schreibt bei reinen Client-Hotfixes ausdrücklich dazu, dass die dedizierten Server kein Update benötigen ("Dedicated servers do not require an update").
::::

:::: warning Achtung
Lass `Auto Update` nur vorübergehend auf `0`. Deine Mitspieler bekommen die neue Version über Steam automatisch. Läuft dein Server dann noch auf der alten Version, weist der Server-Browser ihn als „Version mismatch“ aus — gemeinsam spielen könnt ihr erst wieder, wenn Server und Spiel auf derselben Version sind. Setze den Wert deshalb rechtzeitig wieder auf `1`.
::::

## Serverdateien validieren

Wenn dein Server nach einem Update oder nach einem abgebrochenen Download nicht mehr startet, können Serverdateien fehlen oder beschädigt sein. Beim Validieren werden sie wiederhergestellt.

:::: warning Achtung
Das Validieren läuft nur mit, wenn **Auto Update** auf `1` steht. Steht **Auto Update** auf `0`, wird beim Start nichts geprüft — egal, was im Feld **Serverdateien validieren** eingetragen ist.
::::

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Validieren aktivieren</b><br>
   Trage im Feld **Serverdateien validieren** den Wert `1` ein und setze **Auto Update** auf `1`. Speichere die Einstellungen.

4. <b>Server neu starten</b><br>
   Starte deinen Server neu. Der Start dauert diesmal deutlich länger, weil jede einzelne Datei geprüft wird.

5. <b>Validieren wieder abschalten</b><br>
   Trage im Feld **Serverdateien validieren** wieder `0` ein, sobald dein Server sauber läuft.

:::: warning Achtung
Lass das Validieren nicht dauerhaft auf `1`. Jeder Start prüft dann erneut alle Dateien und dein Server braucht spürbar länger, bis er erreichbar ist.
::::

## Was beim Validieren passiert

Steam vergleicht jede installierte Datei mit der Vorgabe aus der Server-App und ersetzt alles, was fehlt oder verändert wurde. Dateien, die nicht zur Installation gehören, bleiben dabei unangetastet.

Für dich heißt das:

- <b>Dein Spielstand bleibt erhalten</b><br>
  Die Welt liegt im Ordner `savegame` (in der `enshrouded_server.json` als `saveDirectory` mit dem Standardwert `./savegame` eingetragen) und gehört damit nicht zur Steam-Installation.

- <b>Deine Konfiguration bleibt erhalten</b><br>
  Die `enshrouded_server.json` gehört nicht zur Steam-Installation und wird beim Validieren nicht zurückgesetzt. Deine Usergruppen und Passwörter aus [Server Passwort ändern](server-passwort-aendern.md) bleiben also bestehen.

- <b>Veränderte Spieldateien werden überschrieben</b><br>
  Alles, was zur Installation der Server-App gehört, wird auf den Auslieferungszustand zurückgesetzt.

:::: tip Tipp
Wenn dein Server nach dem Validieren zwar startet, aber weiter ruckelt oder lagt, hilft dir die Anleitung [Performance-Probleme auf Enshrouded Servern](performance-probleme-auf-enshrouded-servern.md) weiter.
::::
