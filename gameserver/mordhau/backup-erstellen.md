---
description: Backup eines Mordhau Servers erstellen
---

# So erstellst du ein Backup deines Mordhau Servers

Mordhau speichert keine Spielwelt und keinen Spielerfortschritt auf deinem Server – die Charaktere der Spieler gehören zu ihren Accounts. Sichernswert ist deshalb vor allem deine **Konfiguration**: In der `Game.ini` stehen unter anderem deine Admins, deine Banns, deine Mod-Liste und deine Kartenrotation. Geht diese Datei verloren, richtest du deinen Server komplett neu ein.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Bevor du Mods hinzufügst oder entfernst
- Nachdem du deine Kartenrotation, deine Admins oder deine Regeln final eingerichtet hast
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

## Konfiguration einzeln sichern

Möchtest du nur deine Einstellungen sichern, lade dir per [SFTP](../sftp-verbindung-herstellen.md) folgenden Ordner auf deinen PC herunter:

```
/Mordhau/Saved/Config/LinuxServer/
```

Darin liegen die `Game.ini` mit deinen Servereinstellungen und die `Engine.ini`.

:::: warning Achtung
Stoppe deinen Server, bevor du die Konfiguration sicherst oder zurückspielst. Mordhau schreibt die `Game.ini` beim Beenden komplett neu – eine im laufenden Betrieb gesicherte oder hochgeladene Datei entspricht sonst nicht dem Stand, den du erwartest.
::::

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Zusätzlich zur Konfiguration legt dein Server unter `/Mordhau/Saved/Logs/` seine Logdateien ab. Sie sind für ein Backup nicht nötig, helfen aber bei der Fehlersuche.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
