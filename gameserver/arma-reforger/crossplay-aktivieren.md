---
description: Crossplay auf einem Arma Reforger Server nutzen, damit Spieler auf PC, Xbox und PlayStation 5 gemeinsam spielen
---

# So nutzt du Crossplay auf deinem Arma Reforger Server

Mit Crossplay können Spieler auf PC, Xbox und PlayStation 5 gemeinsam auf deinem Server spielen. Auf deinem Server ist Crossplay immer aktiv – du musst dafür nichts einstellen.

## Crossplay ist immer aktiv

Beim Start deines Servers wird in der `config.json` automatisch `"crossPlatform": true` gesetzt. Damit akzeptiert dein Server Spieler von allen Plattformen:

| Plattform | Beitritt möglich |
|-----------|------------------|
| PC | Ja |
| Xbox | Ja |
| PlayStation 5 | Ja |

:::: warning Achtung
Crossplay lässt sich nicht deaktivieren. Änderst du `crossPlatform` in der `config.json` auf `false`, wird der Wert beim nächsten Serverstart wieder auf `true` gesetzt. Welche Einträge die Verwaltung bei jedem Start überschreibt, erfährst du unter [Server konfigurieren](server-konfigurieren.md).
::::

## Darauf solltest du für Konsolenspieler achten

Wenn Spieler auf Xbox und PlayStation 5 auf deinem Server mitspielen sollen, beachte diese zwei Punkte.

### Mods für Konsolen

Nicht jeder Mod ist auch für Xbox und PlayStation 5 verfügbar. Ist ein Mod aus dem Bereich `"mods"` der `config.json` auf einer Konsole nicht verfügbar, können Spieler dieser Konsole deinem Server unter Umständen nicht beitreten. Lass deshalb nach dem Hinzufügen neuer Mods einen Konsolenspieler den Beitritt testen.

Wie du Mods einträgst, erfährst du in der Anleitung [Mods hinzufügen](mods-hinzufuegen.md).

### BattlEye eingeschaltet lassen

Lass für Konsolenspieler BattlEye eingeschaltet. Ohne BattlEye wird dein Server PlayStation-5-Spielern im Server-Browser nicht angezeigt. So prüfst du die Einstellung:

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Battle-Eye prüfen</b><br>
   Stelle sicher, dass im Feld **Battle-Eye** der Wert `true` eingetragen ist.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

## So treten Konsolenspieler deinem Server bei

Konsolenspieler finden deinen Server über die Suche im Server-Browser. Dafür muss dein Server dort sichtbar sein.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Sichtbarkeit prüfen</b><br>
   Stelle sicher, dass im Feld **Sichtbar im Server-Browser** der Wert `true` eingetragen ist.

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

5. <b>Server suchen</b><br>
   Die Spieler öffnen in Arma Reforger den **Multiplayer**-Bereich und suchen dort nach dem Namen deines Servers.

:::: info Hinweis
Eine ausführliche Anleitung zum Beitreten findest du unter [Server beitreten](server-beitreten.md).
::::
