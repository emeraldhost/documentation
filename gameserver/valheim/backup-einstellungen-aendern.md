---
description: Backup Einstellungen auf einem Valheim Server ändern
---

# So änderst du die Backup Einstellungen auf deinem Valheim Server

Du kannst einstellen, wie oft und wie viele Backups der Server erstellt.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Backup-Einstellungen anpassen</b><br>
   Passe die folgenden Felder an:

   | Feld | Beschreibung | Standard |
   |------|-------------|----------|
   | **Backup Interval** | Wie oft der Server die Welt speichert (in Sekunden). Trotz des Namens ist das nicht der Abstand zwischen den Backups. | `1800` (30 Minuten) |
   | **Backup Count** | Anzahl der aufbewahrten automatischen Backups. Das erste Backup folgt dem Abstand aus **Backup Shorttime**, alle weiteren dem Abstand aus **Backup Longtime**. | `4` |
   | **Backup Shorttime** | Abstand zwischen den ersten automatischen Backups (in Sekunden) | `7200` (2 Stunden) |
   | **Backup Longtime** | Abstand zwischen den folgenden automatischen Backups (in Sekunden) | `43200` (12 Stunden) |

4. <b>Server neu starten</b><br>
   Speichere die Einstellungen und starte deinen Server neu.

:::: info Hinweis
Die automatischen Backups legt der Server als eigene Ordner im Verzeichnis `/.config/unity3d/IronGate/Valheim/worlds_local/` direkt neben deiner Welt ab. Wie du eines davon zurückspielst, erfährst du in [Automatisches Backup wiederherstellen](automatisches-backup-wiederherstellen.md).
::::
