---
description: Performance auf einem Minecraft Java Edition Server verbessern
---

# So verbesserst du die Performance auf deinem Minecraft Java Server

## Lag verstehen

Ein Minecraft-Server berechnet die Spielwelt in sogenannten Ticks — **20 Ticks pro Sekunde (TPS)** sind der Normalwert. Schafft der Server die 20 TPS nicht mehr, läuft alles spürbar langsamer: Mobs bewegen sich ruckartig, Pflanzen wachsen verzögert und abgebaute Blöcke tauchen kurz wieder auf.

Nicht jedes "Lag" ist Server-Lag — drei Dinge werden oft verwechselt:

- **Server-Lag**: Die TPS liegen unter 20. Betrifft alle Spieler gleichzeitig.
- **Verbindungs-Lag**: Ein hoher Ping zwischen Spieler und Server. Betrifft nur einzelne Spieler — der Server kann dabei stabile 20 TPS haben.
- **Client-FPS**: Eine niedrige Bildrate entsteht auf dem PC des Spielers und hat mit dem Server nichts zu tun.

In dieser Anleitung geht es um Server-Lag — und darum, wie du seine Ursache findest und behebst.

## So findest du die Ursache mit spark

[spark](https://spark.lucko.me/) ist ein kostenloser Performance-Profiler für Minecraft-Server. Er zeigt dir die aktuellen TPS, die Auslastung des Servers und vor allem, **was genau** die Tickzeit verbraucht — statt zu raten, siehst du die Ursache schwarz auf weiß.

:::: info spark ist in Paper bereits enthalten
Seit Minecraft **1.21** liefert Paper spark direkt mit. Läuft dein Server mit Paper 1.21 oder neuer, musst du nichts installieren — die Befehle unten funktionieren sofort.
::::

### spark installieren

Für ältere Versionen oder andere Server-Software lädst du spark von [spark.lucko.me](https://spark.lucko.me/download) herunter (alternativ über [Modrinth](https://modrinth.com/plugin/spark) oder [Hangar](https://hangar.papermc.io/lucko/spark)):

1. <b>Passende Version herunterladen</b><br>
   Wähle **Bukkit**, wenn dein Server mit Paper, Purpur oder Spigot läuft, bzw. **Forge**, **NeoForge** oder **Fabric** für Mod-Server.

2. <b>Datei hochladen</b><br>
   Lade die `.jar`-Datei auf Plugin-Servern in den `plugins`-Ordner hoch (siehe [Plugins installieren](plugins-installieren.md)), auf Mod-Servern in den `mods`-Ordner (siehe [Mods hinzufügen](mods-hinzufuegen.md)).

3. <b>Server neu starten</b><br>
   Starte deinen Server neu, damit spark geladen wird.

### spark verwenden

Die Befehle kannst du im Spiel (mit [OP-Rechten](op-rechte-vergeben.md)) oder über die Konsole in der Verwaltung ausführen.

:::: warning Achtung
In der Konsole müssen alle Befehle ohne `/` eingegeben werden!
::::

| Befehl | Beschreibung |
| ------ | ------------ |
| `/spark tps` | Zeigt die aktuellen TPS und die CPU-Auslastung an |
| `/spark health` | Zeigt einen Gesundheitsbericht mit TPS, CPU-, RAM- und Festplatten-Auslastung |
| `/spark health --upload` | Lädt den Gesundheitsbericht als Link in den spark-Viewer hoch |
| `/spark profiler start` | Startet den Profiler |
| `/spark profiler stop` | Stoppt den Profiler und erstellt den Report-Link |

### Einen Profiler-Report erstellen

1. <b>Profiler starten</b><br>
   Führe `/spark profiler start` aus, während der Lag gerade auftritt.

2. <b>Server normal bespielen</b><br>
   Lass den Profiler 5–10 Minuten laufen, damit genug Daten zusammenkommen.

3. <b>Profiler stoppen</b><br>
   Führe `/spark profiler stop` aus. spark gibt dir einen Link zum fertigen Report aus.

4. <b>Report öffnen</b><br>
   Öffne den Link im Browser.

### Den Report lesen

Der spark-Viewer zeigt einen Aufrufbaum mit Prozentwerten: Je höher der Wert, desto mehr Tickzeit verbraucht der Eintrag. Klappe die größten Einträge auf und arbeite dich nach unten. Grobe Faustregeln:

- **Entity-Einträge weit oben** (z.B. `entityTick`): Zu viele Mobs, Items oder Hopper — siehe die Maßnahmen weiter unten.
- **Chunk- oder Weltgenerierungs-Einträge**: Es werden zu viele Chunks geladen oder neu generiert — senke die View-Distance und setze eine Welt-Grenze.
- **Ein Plugin- oder Mod-Name weit oben**: Dieses Plugin verursacht den Lag — aktualisiere es, konfiguriere es sparsamer oder entferne es.

## Schnelle Stellschrauben

:::: tip Tipp
Erstelle vor größeren Änderungen an der Konfiguration ein [Backup](backup-erstellen.md).
::::

### server.properties

Die beiden wirksamsten Einstellungen stehen in der Datei `server.properties`:

- **`view-distance`** bestimmt, wie viele Chunks der Server um jeden Spieler lädt und versendet. Weniger Chunks bedeuten deutlich weniger Last — wie du den Wert sinnvoll setzt, zeigt [View-Distance ändern](view-distance-aendern.md).
- **`simulation-distance`** bestimmt, in welchem Umkreis Mobs, Redstone und Pflanzen aktiv berechnet werden. Eine niedrigere Simulation-Distance spart oft am meisten Tickzeit — Details in [Simulation-Distance ändern](simulation-distance-aendern.md).

### Paper-Konfiguration

Läuft dein Server mit Paper oder Purpur, kannst du dich per [SFTP](../sftp-verbindung-herstellen.md) verbinden und in der Datei `config/paper-world-defaults.yml` weitere Optimierungen vornehmen. Alle Einstellungen sind in der [offiziellen Paper-Dokumentation](https://docs.papermc.io/paper/reference/world-configuration) beschrieben — diese hier bringen nachweislich etwas:

| Einstellung | Standard | Wirkung |
| ----------- | -------- | ------- |
| `misc.redstone-implementation` | `VANILLA` | `ALTERNATE_CURRENT` berechnet Redstone deutlich effizienter |
| `environment.optimize-explosions` | `false` | `true` beschleunigt Explosionen (TNT, Creeper) durch gecachte Entity-Abfragen |
| `hopper.disable-move-event` | `false` | `true` deaktiviert das `InventoryMoveItemEvent` und entlastet Server mit vielen Hoppern |
| `collisions.max-entity-collisions` | `8` | Ein niedrigerer Wert (z.B. `4`) reduziert die Last bei großen Mob-Ansammlungen |

Starte den Server nach jeder Änderung neu.

:::: warning Achtung
Aktiviere `hopper.disable-move-event` nur, wenn keines deiner Plugins auf dieses Event angewiesen ist (z.B. Schutz-Plugins, die Item-Bewegungen protokollieren).
::::

## Die richtige Server-Software

Vanilla ist die mit Abstand langsamste Server-Software. **Paper** enthält hunderte Performance-Optimierungen und ist deshalb auf EmeraldHost-Servern standardmäßig vorinstalliert. **Purpur** baut auf Paper auf und bietet zusätzliche Konfigurationsmöglichkeiten.

Läuft dein Server noch mit Vanilla und benötigst du keine Mods, ist der Wechsel zu Paper die wirksamste einzelne Maßnahme. Die Software wechselst du über das Feld **Software** in den Einstellungen der Verwaltung — die einzelnen Schritte findest du in [Version ändern](version-aendern.md).

## Weitere Maßnahmen gegen Lag

Die häufigsten Lag-Quellen in der Praxis — und was dagegen hilft:

- **Zu viele Entities**: Riesige Mob-Farmen, tausende Items am Boden oder lange Hopper-Ketten kosten viel Tickzeit. Begrenze die Größe von Farmen, sammle Item-Drops zeitnah auf und ersetze unnötige Hopper (z.B. durch Wassertransport).
- **Große Redstone-Anlagen**: Dauerhaft laufende Clocks und Maschinen ticken auch dann, wenn niemand sie benutzt. Baue Abschaltungen ein.
- **Weit verstreute Spieler**: Jeder Spieler lädt seinen eigenen Chunk-Bereich. Eine [Welt-Grenze](welt-grenze-aendern.md) hält die Welt kompakt und verhindert, dass ständig neue Chunks generiert werden müssen.
- **Zu viele Plugins oder Mods**: Jedes Plugin kostet Leistung. Entferne, was du nicht nutzt — der spark-Report zeigt dir, welche Plugins am meisten Zeit verbrauchen.

## Wenn der RAM dauerhaft voll ist

Zeigt `/spark health` dauerhaft eine fast volle RAM-Auslastung, hilft auch die beste Optimierung nicht mehr: Mehr Spieler, Plugins und Mods benötigen schlicht mehr Arbeitsspeicher. In diesem Fall solltest du deinen Tarif auf ein Paket mit mehr RAM upgraden.

## Tägliche Neustarts

Ein täglicher Neustart deines Servers kann Speicherlecks (RAM-Leaks) beheben und die Performance stabil halten.

:::: info Info
Automatische Neustarts sowie Backups können kostenlos über ein Support-Ticket angefragt werden. Die Funktion "Geplante Aufgaben" befindet sich aktuell in Entwicklung und wird dieses Jahr veröffentlicht.
::::
