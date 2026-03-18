---
description: Cheat-Modus auf einem 7 Days to Die Server aktivieren
---

# So aktivierst du den Cheat-Modus auf deinem 7 Days to Die Server

Der Cheat-Modus gibt dir Zugriff auf das Kreativmenü und Debug-Optionen.

## Cheat-Modus für alle Spieler

:::: warning Achtung
Diese Einstellung aktiviert den Cheat-Modus für **alle Spieler** auf dem Server.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serverconfig.xml öffnen</b><br>
   Öffne die Datei `serverconfig.xml` im Hauptverzeichnis deines Servers.

4. <b>Cheat-Modus aktivieren</b><br>
   Suche die folgende Zeile und setze den Wert auf `true`:

   ```xml
   <property name="BuildCreate" value="true"/>
   ```

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

Im Spiel kannst du nun mit `U` das Kreativmenü öffnen.

## Cheat-Modus nur für Admins

Wenn du den Cheat-Modus **nur für Admins** aktivieren möchtest, lasse `BuildCreate` auf `false` und nutze stattdessen die Konsolenbefehle. Du benötigst dafür Berechtigungsstufe `0` (siehe [Admin hinzufügen](admin-hinzufuegen.md)).

Drücke `F1`, um die Konsole zu öffnen:

| Befehl | Beschreibung |
|--------|-------------|
| `cm` | Kreativmenü aktivieren (öffne es mit `U`) |
| `dm` | Debug-Modus aktivieren |

### Debug-Modus Funktionen

Nach Eingabe von `dm` stehen dir über `Esc` folgende Optionen zur Verfügung:

- **God Mode** — Unverwundbarkeit
- **Fly Mode** — Fliegen (mit `H` umschalten)
- **Unsichtbarkeit** — Für Zombies und Spieler unsichtbar
