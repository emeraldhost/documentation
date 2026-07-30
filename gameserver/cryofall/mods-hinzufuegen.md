---
description: Mods auf einem CryoFall Server hinzufügen
---

# So fügst du Mods zu deinem CryoFall Server hinzu

Mods sind in CryoFall einzelne **`.mpk`-Dateien**. Du lädst sie in den Ordner `/Data/Mods/` hoch und aktivierst sie anschließend in der Datei `/Data/ModsConfig.xml`. Ohne den Eintrag in dieser Datei wird ein hochgeladener Mod nicht geladen.

:::: warning Achtung
Stoppe deinen Server, bevor du Mods hinzufügst, aktualisierst oder entfernst. Erstelle vorher außerdem ein [Backup](backup-erstellen.md) – Mods können deine Welt dauerhaft verändern.
::::

:::: info Kein Steam Workshop
Für CryoFall Server gibt es keine Workshop-Anbindung. Du lädst die `.mpk`-Datei jedes Mods immer manuell hoch.
::::

## Mod besorgen

1. <b>Mod auswählen</b><br>
   Mods findest du im offiziellen [CryoFall-Forum](https://forums.atomictorch.com/index.php?board=24.0) oder auf den Seiten und Discord-Servern der jeweiligen Mod-Autoren.

2. <b>Kennzeichnung beachten</b><br>
   Mod-Autoren geben an, wo ihr Mod installiert werden muss:

   | Kennzeichnung | Bedeutung |
   |---------------|-----------|
   | `[Server]` | Läuft nur auf dem Server. Deine Spieler müssen nichts installieren. |
   | `[Client]` | Reiner Spieler-Mod. Auf dem Server hat er keine Wirkung. |
   | `[Client+Server]` | Muss auf dem Server **und** bei jedem Spieler installiert sein. |

3. <b>Mod-ID notieren</b><br>
   Notiere dir die vom Autor angegebene Mod-ID – häufig inklusive Versionsnummer, zum Beispiel `duality_1.2.1`. Genau diese ID trägst du später in die `ModsConfig.xml` ein.

4. <b>Version prüfen</b><br>
   Achte darauf, dass der Mod zur Spielversion deines Servers passt. Mods für eine andere Version können den Serverstart verhindern.

## Mod hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mod-Ordner öffnen</b><br>
   Wechsle in folgendes Verzeichnis:

   ```
   /Data/Mods/
   ```

   :::: info Hinweis
   Existiert der Ordner noch nicht, lege ihn im Verzeichnis `/Data/` an. Der Name muss exakt `Mods` lauten – dein Server läuft unter Linux und unterscheidet Groß- und Kleinschreibung.
   ::::

4. <b>`.mpk`-Datei hochladen</b><br>
   Lade die `.mpk`-Datei direkt in diesen Ordner hoch. Lege keine Unterordner an.

## Mod aktivieren

1. <b>ModsConfig.xml öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Data/ModsConfig.xml
   ```

2. <b>Mod eintragen</b><br>
   Ergänze für jeden Mod eine eigene Zeile mit der Mod-ID:

   ```xml
   <?xml version="1.0" encoding="utf-8" standalone="yes"?>
   <mods>
     <mod>core_1.0.0</mod>
     <mod>cnei</mod>
   </mods>
   ```

   :::: danger Wichtig
   Lösche vorhandene Einträge nicht. Der Eintrag für den Core gehört zum Spiel selbst und muss stehen bleiben. Neue Mods kommen einfach darunter.
   ::::

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

4. <b>Konsole prüfen</b><br>
   Beim Start meldet dein Server die geladenen Mods in der Konsole. Erscheint dein Mod dort nicht, stimmt in der Regel die Mod-ID nicht mit dem Dateinamen im Ordner `Mods` überein.

## Mods bei deinen Spielern

:::: danger Wichtig
Dein Server verteilt Mods **nicht** automatisch an die Spieler. Bei einem Mod, der als `[Client+Server]` gekennzeichnet ist, muss jeder Spieler dieselbe `.mpk`-Datei zusätzlich in seinem eigenen Spiel installieren – wie genau, beschreibt der jeweilige Mod-Autor in seinem Forenbeitrag. Reine `[Server]`-Mods brauchen dagegen keine Installation bei den Spielern.
::::

:::: warning Client-Mods nicht sperren
In der Datei `/Data/SettingsServer.xml` steuert der Wert `no_client_mods`, ob Spieler mit eigenen Mods beitreten dürfen. Auf einem gemoddeten Server muss er auf `0` stehen:

```xml
<no_client_mods>0</no_client_mods>
```

Steht dort `1`, werden alle Mods auf Spielerseite deaktiviert.
::::

## Mods entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Eintrag löschen</b><br>
   Entferne die Zeile des Mods aus der Datei `/Data/ModsConfig.xml`.

3. <b>Datei löschen</b><br>
   Lösche die zugehörige `.mpk`-Datei aus dem Ordner `/Data/Mods/`.

4. <b>Server starten</b><br>
   Starte deinen Server wieder.

:::: warning Achtung
Entfernst du einen Mod, der Gegenstände, Gebäude oder Technologien zur Welt hinzugefügt hat, verschwinden dessen Inhalte aus deiner Welt. Spiele im Zweifel ein [Backup](backup-erstellen.md) zurück, statt den Mod einfach zu löschen.
::::

:::: info Hinweis
Nach einem Spielupdate können Mods inkompatibel werden und den Serverstart verhindern. Aktualisiere deine Mods in diesem Fall oder entferne sie vorübergehend aus `ModsConfig.xml` und dem Ordner `/Data/Mods/`.
::::
