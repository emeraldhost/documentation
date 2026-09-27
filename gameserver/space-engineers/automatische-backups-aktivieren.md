---
description: Automatische Backups auf einem Space Engineers Server einrichten
---

# So richtest du automatische Backups auf deinem Space Engineers Server ein

Dein Server speichert die Welt in regelmäßigen Abständen automatisch und legt dabei jedes Mal ein Backup an. So legst du fest, wie oft das passiert.

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Intervall festlegen</b><br>
   Trage im Feld **Automatischer Backup Interval** das gewünschte Intervall in Minuten ein, in dem der Server die Welt speichert (Standard: `5`). Nach jedem erfolgreichen Speichern legt der Server ein Backup im Ordner `/config/Saves/World/Backup/` an.

4. <b>Server neu starten</b><br>
   Speichere die Einstellungen und starte deinen Server neu, damit die Änderungen übernommen werden.

:::: warning Achtung
Mit dem Wert `0` speichert der Server die Welt nicht mehr automatisch und legt damit auch keine automatischen Backups mehr an. Stürzt der Server ab, geht alles verloren, was seit dem letzten Speichern passiert ist.
::::

:::: info Hinweis
Die Einstellung **Automatische Backup** schaltet das automatische Speichern **nicht** ab — auch mit `false` speichert der Server weiter im eingestellten Intervall. Sie setzt den Wert `EnableSaving`, den Keen als „Enable Saving from Menu" bezeichnet. Er legt nur fest, ob man in einem selbst gehosteten Spiel über das Menü speichern kann. Lass die Einstellung auf dem Standardwert `true`.
::::

Wie du deine Welt aus einem dieser Backups wiederherstellst und wie viele Backups dein Server aufbewahrt, erfährst du unter [Automatisches Backup wiederherstellen](automatisches-backup-wiederherstellen.md).

:::: tip Tipp
Ein manuelles Backup kannst du jederzeit zusätzlich über die [Backup-Funktion](../backup-erstellen.md) in der Verwaltung erstellen.
::::
