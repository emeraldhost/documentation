---
description: Eine bestehende Welt auf einen Space Engineers Server hochladen
---

# So lädst du eine Welt auf deinen Space Engineers Server hoch

Du kannst eine lokal erstellte oder bestehende Welt auf deinen Server übertragen und dort weiterspielen. Eine Space-Engineers-Welt ist ein **Ordner**, der unter anderem die Dateien `Sandbox.sbc` und `Sandbox_config.sbc` enthält.

:::: info Hinweis
Der Weltname ist auf deinem Server fest auf **World** eingestellt und kann nicht geändert werden (sichtbar in den **Einstellungen**). Deine Welt wird daher immer aus dem Ordner `/config/Saves/World/` geladen — du lädst den **Inhalt** deiner Welt in genau diesen Ordner.
::::

## Welt-Ordner finden

Deine lokalen Welten findest du auf deinem PC unter:

```
%APPDATA%\SpaceEngineers\Saves\<SteamID>\
```

Jede Welt ist ein eigener Ordner (benannt nach dem Weltnamen). Du benötigst den **Inhalt** dieses Ordners — unter anderem `Sandbox.sbc`, `Sandbox_config.sbc` und die `.sbs`-Dateien.

## Welt hochladen

:::: warning Achtung
Stoppe deinen Server, bevor du Dateien hochlädst. Ein laufender Server speichert automatisch und kann die hochgeladene Welt beschädigen.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser.

3. <b>Welt-Ordner öffnen</b><br>
   Wechsle auf dem Server in den Ordner `/config/Saves/World/`.

4. <b>Alte Weltdateien löschen</b><br>
   Erstelle vorher ein [Backup](../backup-erstellen.md), falls du die aktuelle Welt behalten möchtest. Lösche dann alle Dateien, die direkt in `/config/Saves/World/` liegen, oder leere den Ordner komplett.

   :::: danger Wichtig
   Lade deine Welt nicht einfach über die alten Dateien. Liegt im Ordner eine `SANDBOX_0_0_0_.sbsB5`, lädt der Server diese Datei statt der `SANDBOX_0_0_0_.sbs`. Bringt deine Welt keine eigene `.sbsB5` mit, lädt der Server sonst die Schiffe, Stationen und weiteren Objekte aus der `.sbsB5` der alten Welt.
   ::::

5. <b>Weltdaten hochladen</b><br>
   Lade den **Inhalt** deines lokalen Welt-Ordners direkt in `/config/Saves/World/` hoch — **nicht** als weiteren Unterordner.

6. <b>Server starten</b><br>
   Starte deinen Server. In der Server-Konsole sollte „Loading world …" und anschließend „Game ready" erscheinen.

:::: warning Achtung
Speichere keine eigenen Backups innerhalb des Ordners `/config/Saves/World/` — der Server entfernt beim Speichern unbekannte Dateien.
::::
