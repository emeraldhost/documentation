---
description: Experimental Modus auf einem Space Engineers Server aktivieren
---

# So aktivierst du den Experimental Modus auf deinem Space Engineers Server

Der Experimental Modus schaltet erweiterte und experimentelle Funktionen frei. Für Mods brauchst du ihn nicht: Seit Update 1.206 laufen Mods ohne Experimental Modus, auch Mods mit eigenem Code (siehe [Mods hinzufügen](mods-hinzufuegen.md)). Einige Einstellungen schalten ihn dagegen automatisch ein (siehe [unten](#einstellungen-die-den-experimental-modus-erzwingen)).

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Experimental Modus aktivieren</b><br>
   Setze die Einstellung **Experimental Modus** auf `true`, um ihn zu aktivieren, oder auf `false`, um ihn zu deaktivieren.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu, damit die Änderung übernommen wird.

:::: warning Achtung
Das Feld allein schaltet den Experimental Modus nicht dauerhaft ein. Beim Laden der Welt behält der Server ihn nur, wenn eine der [unten genannten Einstellungen](#einstellungen-die-den-experimental-modus-erzwingen) ihn erfordert – sonst setzt er ihn wieder auf `false`. Ob er aktiv ist, siehst du nach dem Start in der Konsole an der Zeile `Experimental mode: Yes`.
::::

## Einstellungen, die den Experimental Modus erzwingen

Beim Laden der Welt prüft der Server deine Einstellungen. Trifft einer der folgenden Punkte zu, schaltet er den Experimental Modus automatisch ein:

- **Ingame Skripte** steht in den **Einstellungen** auf `true` (siehe [Ingame Skripte erlauben](ingame-skripte-aktivieren.md)).
- **Maximale Spieler** steht in den **Einstellungen** auf mehr als `16`.
- Eine Welt-Einstellung in `Sandbox_config.sbc` erzwingt ihn, zum Beispiel `SyncDistance` über `3000`, `TotalPCU` über `600000` oder `BlockLimitsEnabled` auf `NONE`. Die vollständige Liste findest du unter [Erzwungener Experimental Modus](welt-einstellungen-aendern.md#erzwungener-experimental-modus).

:::: warning Achtung
Solange einer dieser Punkte zutrifft, kannst du den Experimental Modus nicht abschalten. Steht **Experimental Modus** auf `false`, schaltet der Server ihn beim Laden trotzdem wieder ein. Soll dein Server ohne Experimental Modus laufen, ändere zuerst die Einstellungen, die ihn erzwingen.
::::

Ob der Experimental Modus aktiv ist und welche Einstellung ihn erzwingt, zeigt die Server-Konsole beim Laden der Welt, zum Beispiel:

```
Experimental mode: Yes
Experimental mode reason: ExperimentalMode, EnableIngameScripts
```
