---
description: Savegame auf einem Don’t Starve Together Server hinzufügen
---

# So fügst du ein Savegame zu deinem Don’t Starve Together Server hinzu

Du kannst eine lokal gespielte Welt auf deinen Server übertragen, um dort mit dem bestehenden Spielstand weiterzuspielen.

## Cluster-Ordner auf dem Server finden

:::: info Hinweis
Der Name des Cluster-Ordners ist nicht vom Spiel vorgegeben, sondern wird beim Serverstart festgelegt und kann je nach Server unterschiedlich lauten. Suche per [SFTP](../sftp-verbindung-herstellen.md) oder im Datei-Browser nach der Datei `cluster.ini` — der Ordner, in dem sie liegt, ist dein Cluster-Ordner.
::::

Der Cluster-Ordner ist so aufgebaut:

```
<Cluster-Ordner>/
├── Master/            # Shard der Oberwelt (enthält den Ordner save)
├── Caves/             # Shard der Höhlen (nur wenn Höhlen aktiv sind)
├── cluster.ini
├── cluster_token.txt
├── adminlist.txt      # nur vorhanden, wenn angelegt
├── whitelist.txt      # nur vorhanden, wenn angelegt
└── blocklist.txt      # nur vorhanden, wenn angelegt
```

Der eigentliche Spielstand liegt in den Ordnern `Master/save/` (Oberwelt) und `Caves/save/` (Höhlen). Es handelt sich um Ordner, nicht um eine einzelne Datei.

## Lokales Savegame finden

1. <b>Datenordner öffnen</b><br>
   Starte Don’t Starve Together und klicke im Hauptmenü unten links auf **Data**. Der Ordner mit deinen lokalen Welten wird geöffnet. Alternativ erreichst du ihn auf dem PC über diesen Pfad:

   ```
   C:\Users\<DeinBenutzer>\Documents\Klei\DoNotStarveTogether\<Zahlenordner>\
   ```

2. <b>Richtige Welt bestimmen</b><br>
   Jede lokale Welt liegt in einem eigenen Ordner `Cluster_1`, `Cluster_2` und so weiter. Öffne die darin liegende `cluster.ini` und prüfe den Wert `cluster_name` — so erkennst du, welcher Ordner zu welcher Welt gehört.

3. <b>Spielstand-Ordner öffnen</b><br>
   In deinem Welt-Ordner findest du dieselbe Struktur wie auf dem Server, also `Master\` und – falls du mit Höhlen gespielt hast – `Caves\`. Den Spielstand enthalten die Unterordner `Master\save\` und `Caves\save\`.

## Savegame hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Alten Spielstand entfernen</b><br>
   Wechsle in den Ordner `<Cluster-Ordner>/Master/save/` und lösche den kompletten Inhalt des Ordners.

4. <b>Neuen Spielstand hochladen</b><br>
   Lade den gesamten Inhalt deines lokalen Ordners `Master\save\` in das jetzt leere Verzeichnis `<Cluster-Ordner>/Master/save/` hoch.

5. <b>Höhlen übertragen</b><br>
   Sind auf deinem Server die Höhlen aktiv, wiederhole die Schritte 3 und 4 für den Ordner `<Cluster-Ordner>/Caves/save/` mit dem Inhalt deines lokalen Ordners `Caves\save\`.

6. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Übertrage ausschließlich den Inhalt der `save`-Ordner. Ersetzt du zusätzlich Dateien wie `cluster.ini`, `server.ini` oder `cluster_token.txt`, überschreibst du die Ports und das Cluster Token deines Servers und er lässt sich nicht mehr erreichen.
::::

:::: danger Wichtig
Solange im `save`-Ordner ein Spielstand liegt, generiert der Server keine neue Welt. Umgekehrt bedeutet das: Ein Server, der bereits gelaufen ist, hat dort einen Spielstand liegen, der vor dem Hochladen entfernt werden muss.
::::

:::: tip Tipp
Erstelle vor dem Hochladen ein [Backup](backup-erstellen.md) deines bisherigen Server-Spielstands, falls du später zurückwechseln möchtest.
::::

:::: info Mods
Hat deine lokale Welt Mods verwendet, musst du diese auch auf dem Server einrichten. Wie das geht, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).
::::
