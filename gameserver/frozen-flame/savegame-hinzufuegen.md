---
description: Savegame auf einem Frozen Flame Server hinzufügen
---

# So fügst du ein Savegame zu deinem Frozen Flame Server hinzu

Der komplette Spielstand eines Frozen Flame Servers liegt im Ordner `SaveGames`. Du überträgst ihn also immer als **ganzen Ordner**, zum Beispiel wenn du von einem anderen Server umziehst oder einen älteren Stand zurückspielst.

:::: info Hinweis
Einen Welt- oder Spielstandnamen trägst du nirgends ein – Frozen Flame kennt keine solche Einstellung. Der Servername hat mit dem Spielstand nichts zu tun.
::::

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung. Solange der Server läuft, schreibt er laufend in den Spielstand.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Verzeichnis öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /FrozenFlame/Saved/
   ```

4. <b>Bisherigen Spielstand sichern</b><br>
   Benenne den vorhandenen Ordner `SaveGames` um, zum Beispiel in `SaveGames_alt`, oder lade ihn vorher herunter.

   :::: warning Achtung
   Löschst du den Ordner, ist der bisherige Spielstand deines Servers weg. Erstelle vorher ein [Backup](backup-erstellen.md) oder lade den bisherigen Stand herunter, falls du zurückwechseln möchtest.
   ::::

5. <b>Neuen Spielstand hochladen</b><br>
   Lade deinen Ordner `SaveGames` mit seinem kompletten Inhalt hoch, sodass er wieder unter folgendem Pfad liegt:

   ```
   /FrozenFlame/Saved/SaveGames/
   ```

6. <b>Server starten</b><br>
   Starte deinen Server. Der neue Spielstand wird nun geladen.

:::: warning Achtung
Ein Spielstand gehört immer zu dem Spielmodus, in dem er entstanden ist. Übertrage deshalb nur Spielstände zwischen Servern, die denselben Spielmodus laden – also **Cataclysm** auf **Cataclysm** beziehungsweise **Campaign** auf **Campaign**.
::::

:::: tip Tipp
Am zuverlässigsten funktioniert der Wechsel zwischen zwei Spielständen, die beide von einem Dedicated Server stammen – zum Beispiel beim Umzug auf einen anderen Server. Wie du deinen bisherigen Stand sicherst, steht unter [Savegame herunterladen](savegame-herunterladen.md).
::::

## Einzelspieler-Spielstand übertragen

:::: danger Wichtig
Es gibt **kein dokumentiertes Verfahren**, einen Einzelspieler- oder Local-Coop-Spielstand auf einen Dedicated Server zu übertragen. Die Entwickler beschreiben für das lokale Spiel lediglich, wo die Konfigurationsdatei liegt – ein Weg, den lokalen Spielstand auf einen Server zu übernehmen, wird nirgends genannt. Arbeite deshalb ausschließlich mit Spielständen, die von einem Frozen Flame Server stammen.
::::
