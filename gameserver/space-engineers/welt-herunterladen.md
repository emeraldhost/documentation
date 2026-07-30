---
description: Welt von einem Space Engineers Server herunterladen
---

# So lädst du die Welt deines Space Engineers Servers herunter

Du kannst die Welt deines Servers jederzeit auf deinen PC herunterladen — zum Beispiel als zusätzliche Sicherung, zum Archivieren oder um sie auf einen anderen Server zu übertragen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Dateien herunterlädst. Während der Server läuft, speichert er regelmäßig — du würdest sonst eine unvollständige oder beschädigte Welt herunterladen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser.

3. <b>Welt-Ordner öffnen</b><br>
   Wechsle auf dem Server in folgenden Ordner:

   ```
   Saves/World/
   ```

4. <b>Weltdaten herunterladen</b><br>
   Lade den **kompletten Inhalt** dieses Ordners auf deinen PC herunter — unter anderem `Sandbox.sbc`, `Sandbox_config.sbc` und die `.sbs`-Dateien. Lade immer alle Dateien herunter, einzelne Dateien allein ergeben keine lauffähige Welt.

5. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: info Hinweis
Der Weltname ist auf deinem Server fest auf **World** eingestellt und kann nicht geändert werden (sichtbar in den **Einstellungen**). Deine Welt liegt daher immer im Ordner `Saves/World/` — es gibt keinen weiteren Ordner, in dem du suchen müsstest.
::::

:::: tip Welt wieder einspielen
Möchtest du die Welt später wieder auf einen Server übertragen, folge der Anleitung [Welt hochladen](welt-hochladen.md).
::::

:::: info Regelmäßige Sicherungen
Für regelmäßige Sicherungen kannst du die [automatischen Backups](automatische-backups-aktivieren.md) deines Servers nutzen oder ein manuelles [Backup erstellen](../backup-erstellen.md).
::::
