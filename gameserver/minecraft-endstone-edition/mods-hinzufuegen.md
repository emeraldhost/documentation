---
description: Mods bzw. Plugins auf einem Minecraft Endstone Edition Server hinzufügen
---

# So fügst du Mods zu deinem Minecraft Endstone Edition Server hinzu

Endstone kennt **keine klassischen Mods**. Erweitert wird der Server stattdessen über **Endstone-Plugins**, die ausschließlich auf dem Server laufen.

:::: danger Wichtig
Mods für Forge oder Fabric funktionieren auf deinem Server nicht. Sie gehören zur Minecraft Java Edition, während Endstone auf dem Bedrock Dedicated Server aufsetzt.
::::

:::: info Hinweis
Plugins laufen komplett auf dem Server. Deine Mitspieler müssen dafür **nichts** installieren und können mit einem unveränderten Minecraft Bedrock Client beitreten.
::::

## Welche Plugin-Formate gibt es?

| Format | Sprache | Hinweis |
|--------|---------|---------|
| `.whl` | Python | Das übliche Format. Endstone lädt alle `.whl`-Dateien aus dem Ordner `plugins`. |
| `.so` | C++ | Für Linux-Server. Achte darauf, die Linux-Variante des Plugins zu laden. |

:::: warning Achtung
Eine `.dll`-Datei ist die Windows-Variante eines C++-Plugins und funktioniert auf deinem Linux-Server **nicht**. Bietet ein Plugin beide Varianten an, lade immer die `.so`-Datei herunter.
::::

## Wo finde ich Plugins?

Einen offiziellen Plugin-Marktplatz mit Browser gibt es für Endstone **nicht**. Plugins findest du an folgenden Stellen:

- Python-Plugins werden in der Regel als Paket auf [PyPI](https://pypi.org/) veröffentlicht
- Viele Entwickler stellen ihr Plugin zusätzlich als Release-Datei auf GitHub bereit
- Eine Übersicht öffentlicher Projekte liefert das GitHub-Thema [endstone-plugin](https://github.com/topics/endstone-plugin)

:::: warning Achtung
Lade Plugins nur aus vertrauenswürdigen Quellen herunter und achte darauf, dass das Plugin zur installierten Endstone-Version passt.
::::

## Plugin installieren

1. <b>Plugin herunterladen</b><br>
   Lade das Plugin als `.whl`-Datei (Python) beziehungsweise als `.so`-Datei (C++, Linux) herunter.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. <b>Plugin hochladen</b><br>
   Lade die Datei im Hauptordner deines Servers in folgenden Ordner hoch:

   ```
   plugins
   ```

5. <b>Server starten</b><br>
   Starte deinen Server. Beim Start wird das Plugin geladen.

6. <b>Ergebnis prüfen</b><br>
   Gib in der Konsole deines Servers folgenden Befehl ein, um alle geladenen Plugins aufzulisten:

   ```
   plugins
   ```

:::: info Hinweis
In der Konsole deines Servers gibst du Befehle ohne führenden `/` ein. Im Spiel-Chat schreibst du sie mit `/`, also zum Beispiel `/plugins`.
::::

:::: danger Wichtig
Im Ordner `plugins` liegt ein Unterordner `.local`. Diesen verwaltet Endstone selbst – dort werden die Abhängigkeiten der Python-Plugins abgelegt. Bearbeite oder lösche ihn nicht.
::::

## Plugin aktualisieren

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Alte Version löschen</b><br>
   Lösche die alte Plugin-Datei aus dem Ordner `plugins`. Lässt du sie liegen, versucht der Server beide Versionen zu laden.

3. <b>Neue Version hochladen</b><br>
   Lade die neue Datei in den Ordner `plugins` hoch.

4. <b>Server starten</b><br>
   Starte deinen Server, damit die Änderung wirksam wird.

## Plugin entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Plugin löschen</b><br>
   Lösche die Plugin-Datei aus dem Ordner `plugins`.

3. <b>Konfiguration löschen</b><br>
   Lösche optional den zugehörigen Unterordner des Plugins unter `plugins/`.

4. <b>Server starten</b><br>
   Starte deinen Server.

## Plugins neu laden

Mit folgendem Befehl lädt Endstone die Konfiguration und die Plugins neu ein:

```
reload
```

:::: info Hinweis
Für den Befehl gibt es die Kurzform `rl`. Beide erfordern Operator-Rechte, siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: warning Achtung
`reload` eignet sich, um Änderungen an der Konfiguration eines bereits installierten Plugins zu übernehmen. Für ein **neu hochgeladenes** oder aktualisiertes Plugin startest du deinen Server sicherheitshalber komplett neu.
::::

## Behavior- und Resource Packs

Weil unter Endstone weiterhin der offizielle Bedrock Dedicated Server arbeitet, funktionieren Behavior- und Resource Packs zusätzlich zu den Plugins ganz normal.

:::: tip Tipp
Wie du Packs einbindest, erfährst du unter [Behavior- und Resource Packs hinzufügen](../minecraft-bedrock-edition/behavior-und-resource-packs-hinzufuegen.md).
::::
