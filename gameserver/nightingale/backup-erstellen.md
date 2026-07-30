---
description: Backup eines Nightingale Servers erstellen
---

# So erstellst du ein Backup deines Nightingale Servers

Ein regelmäßiges Backup deines Nightingale Servers schützt dich vor Datenverlust — egal ob durch ein fehlgeschlagenes Update, einen versehentlich zurückgesetzten Serverzustand oder einen misslungenen Import eines Charakters.

## Wann solltest du ein Backup erstellen?

- Vor Updates der Server-Version
- Vor größeren Änderungen an der Konfiguration
- Bevor sich ein neuer Charakter zum ersten Mal verbindet, denn dabei können Charakter- und Realm-Daten auf den Server übertragen werden
- Vor dem Hochladen eines anderen Spielstands
- Bevor du den Serverzustand zurücksetzt
- In regelmäßigen Abständen, damit du jederzeit einen sicheren Stand hast

## Backup erstellen

Den genauen Ablauf zum Erstellen, Verwalten und Wiederherstellen eines Backups findest du im allgemeinen Guide: [Backup erstellen](../backup-erstellen.md).

:::: tip Tipp
Sperre wichtige Backups (z.B. vor großen Änderungen), damit sie nicht durch automatische Backups überschrieben werden. Lade besonders wichtige Backups zusätzlich auf deinen PC herunter, falls dein Backup-Limit erreicht wird.
::::

:::: info Hinweis
Möchtest du nur den Spielstand sichern, kannst du die Spielstandsordner auch einzeln herunterladen: [Savegame herunterladen](savegame-herunterladen.md).
::::

:::: warning Achtung
Stoppe deinen Server, bevor du ein Backup erstellst oder wiederherstellst. Nightingale schreibt im laufenden Betrieb ständig in die Weltdaten — eine Sicherung während des Betriebs kann einen unvollständigen Spielstand enthalten.
::::

## Automatische Sicherung des Servers

:::: info Hinweis
Nightingale legt zusätzlich selbst eine einfache Sicherung an: Beim ersten Serverstart an einem neuen Wochentag kopiert der Server den kompletten Ordner `Offline` nach `OfflineBackup`.

```
/NWX/Saved/Offline
/NWX/Saved/OfflineBackup
```

Diese Kopie liegt auf demselben Server und wird regelmäßig überschrieben. Sie ersetzt daher **kein** richtiges Backup, ist aber ein nützlicher Rettungsanker, solange sie noch aktuell ist.
::::

:::: info Info
Automatische Backups sowie Neustarts können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
