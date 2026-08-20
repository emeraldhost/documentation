---
description: Mods bzw. Plugins auf einem Minecraft PocketMine Edition Server hinzufügen
---

# So fügst du Mods zu deinem Minecraft PocketMine Edition Server hinzu

PocketMine-MP kennt **keine klassischen Mods**. Erweitert wird der Server stattdessen über **Plugins** – kleine PHP-Erweiterungen im `.phar`-Format, die ausschließlich auf dem Server laufen.

:::: danger Wichtig
Weder Forge- oder Fabric-Mods noch Bedrock Add-Ons funktionieren auf einem PocketMine-Server. Forge und Fabric gehören zur Minecraft Java Edition, und Behaviour Packs werden von PocketMine-MP ausdrücklich nicht unterstützt. Packs, die ein Behaviour Pack voraussetzen, funktionieren dort ebenfalls nicht korrekt.
::::

:::: info Hinweis
Plugins laufen komplett auf dem Server. Deine Mitspieler müssen dafür **nichts** installieren und können mit einem unveränderten Minecraft Bedrock Client beitreten.
::::

## Wo finde ich Plugins?

Die offizielle Plugin-Plattform von PocketMine-MP ist Poggit:

- [Poggit Release](https://poggit.pmmp.io/plugins)

:::: warning Achtung
Lade Plugins nur aus vertrauenswürdigen Quellen herunter und achte darauf, dass das Plugin zur installierten PocketMine-Hauptversion passt.
::::

## Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade das Plugin als `.phar`-Datei herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. <b>Plugin hochladen</b><br>
   Lade die `.phar`-Datei im Hauptordner deines Servers in folgenden Ordner hoch:

   ```
   plugins
   ```

5. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird das Plugin geladen.

:::: tip Tipp
Beim ersten Start legt ein Plugin in der Regel einen eigenen Unterordner mit seinen Konfigurationsdateien an. Standardmäßig liegt dieser im Ordner `plugin_data` im Hauptordner deines Servers. Die Dateien darin kannst du anschließend anpassen.
::::

## Plugin aktualisieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Alte Version löschen</b><br>
   Lösche die alte `.phar`-Datei des Plugins aus dem Ordner `plugins`.

   :::: danger Wichtig
   Die offizielle PocketMine-Dokumentation weist ausdrücklich darauf hin, alte Versionen eines Plugins zu löschen und den Server neu zu starten. Lass die alte Datei also nicht einfach liegen.
   ::::

3. <b>Neue Version hochladen</b><br>
   Lade die neue `.phar`-Datei in den Ordner `plugins` hoch.

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderung wirksam wird.

## Plugin entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Plugin löschen</b><br>
   Lösche die `.phar`-Datei aus dem Ordner `plugins`.

3. <b>Konfiguration löschen</b><br>
   Lösche optional den zugehörigen Unterordner des Plugins im Ordner `plugin_data`.

4. <b>Server starten</b><br>
   Starte deinen Server.

## Wo liegen die Konfigurationsdateien der Plugins?

Standardmäßig sammelt PocketMine-MP die Konfigurationen aller Plugins im Ordner `plugin_data` im Hauptordner deines Servers – jedes Plugin bekommt dort einen eigenen Unterordner.

Möchtest du stattdessen die alte Struktur nutzen, bei der die Konfiguration eines Plugins direkt unterhalb von `plugins/` liegt, setze in der Datei `pocketmine.yml` im Hauptordner deines Servers folgenden Wert:

```yaml
plugins:
  legacy-data-dir: true
```

:::: info Hinweis
Standardmäßig steht dieser Wert auf `false`. Die Option existiert laut Kommentar in der `pocketmine.yml` nur aus Kompatibilitätsgründen für ältere Installationen – bei einem neuen Server musst du sie nicht ändern.
::::

## Resource Packs für die Optik

Optische Änderungen für alle Spieler setzt du über Resource Packs um.

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Pack hochladen</b><br>
   Lade das Resource Pack als `.zip`- oder `.mcpack`-Datei im Hauptordner deines Servers in folgenden Ordner hoch:

   ```
   resource_packs
   ```

3. <b>Pack registrieren</b><br>
   Öffne im Ordner `resource_packs` die Datei `resource_packs.yml` und trage den Dateinamen inklusive Endung in die Liste `resource_stack` ein:

   ```yaml
   resource_stack:
     - MeinPack.mcpack
   ```

4. <b>Server starten</b><br>
   Starte deinen Server.

:::: info Hinweis
Der Stapel unter `resource_stack` wird von unten nach oben angewendet: Einträge weiter oben überschreiben Einträge weiter unten.
::::

:::: warning Achtung
Entpackte Resource Packs (also einfache Ordner) werden nicht unterstützt – erlaubt sind ausschließlich `.zip` und `.mcpack`. Ebenso lassen sich Resource Packs nicht pro Welt festlegen, sie gelten immer für den gesamten Server.
::::

:::: tip Resource Pack verpflichtend machen
Mit dem Eintrag `force_resources` in der Datei `resource_packs.yml` im Ordner `resource_packs` legst du fest, ob Spieler das Pack laden müssen, um beitreten zu können:

```yaml
force_resources: true
```
::::
