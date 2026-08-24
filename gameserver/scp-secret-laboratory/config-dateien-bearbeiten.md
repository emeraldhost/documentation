---
description: "Konfigurationsdateien auf einem SCP: Secret Laboratory Server bearbeiten"
---

# So bearbeitest du die Konfigurationsdateien auf deinem SCP: Secret Laboratory Server

Bei SCP: Secret Laboratory läuft die gesamte Server-Konfiguration über Textdateien. Diese Anleitung zeigt dir, wo die Dateien liegen, welche Datei wofür zuständig ist und wie du Änderungen sicher vornimmst.

## Wo liegen die Konfigurationsdateien?

Alle Spiel-Konfigurationsdateien liegen in folgendem Verzeichnis — ersetze `<Port>` durch den Game Port deines Servers:

```
/.config/SCP Secret Laboratory/config/<Port>/
```

Den Game Port findest du in der Verwaltung unter **Übersicht**.

:::: warning Achtung
Der Game Port wird automatisch zugewiesen. Unter `/.config/SCP Secret Laboratory/config/` können deshalb mehrere Port-Ordner liegen, zum Beispiel von einer früheren Port-Zuweisung. Der Server liest ausschließlich den Ordner, dessen Name dem aktuellen Game Port entspricht — Änderungen in einem alten Port-Ordner haben keine Wirkung. Prüfe deshalb vor jeder Änderung den aktuellen Game Port in der **Übersicht** der Verwaltung.
::::

## Welche Datei wofür?

| Datei | Zweck |
|-------|-------|
| `config_gameplay.txt` | Gameplay-Einstellungen des Servers, z.B. Spielregeln und Rundenverhalten |
| `config_remoteadmin.txt` | Ränge und Rechte — siehe [Ränge vergeben](raenge-vergeben.md) |
| `UserIDWhitelist.txt` | Spieler auf der Whitelist — siehe [Whitelist einrichten](whitelist-einrichten.md) |

:::: info Hinweis
Plugin-Konfigurationen liegen nicht in diesem Verzeichnis. EXILED speichert die Configs seiner Plugins unter `/.config/EXILED/Configs/` — mehr dazu in der Anleitung [EXILED Plugins installieren](exiled-plugins-installieren.md).
::::

## Aufbau der Dateien

Einstellungen stehen im Format `schlüssel: wert`, eine Einstellung pro Zeile. Zeilen, die mit `#` beginnen, sind Kommentare und werden vom Server ignoriert:

```
# Diese Zeile ist ein Kommentar
friendly_fire: false
```

Ändere nur den Wert hinter dem Doppelpunkt und lass den Schlüsselnamen unverändert.

## Konfigurationsdatei bearbeiten

:::: danger Wichtig
Stoppe deinen Server immer, bevor du eine Konfigurationsdatei bearbeitest. Nur so ist sichergestellt, dass der Server deine Änderungen beim nächsten Start zuverlässig übernimmt.
::::

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Wechsle in folgendes Verzeichnis — ersetze `<Port>` durch deinen Game Port — und öffne die gewünschte Datei:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/
   ```

5. <b>Änderungen vornehmen</b><br>
   Passe die gewünschten Werte im Format `schlüssel: wert` an und speichere die Datei.

6. <b>Server starten</b><br>
   Starte deinen Server über die Verwaltung. Die Änderungen greifen erst mit diesem Start.

:::: info Hinweis
Es gibt kein Hot-Reload — Änderungen an den Konfigurationsdateien werden erst nach einem Neustart über die Verwaltung übernommen.
::::
