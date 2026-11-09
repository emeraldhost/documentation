---
slug: "spark-einrichten"
language: "de"
title: "So richtest Du spark auf Deinem Minecraft Java Edition Server ein und findest Lag-Ursachen"
description: "spark auf einem Minecraft Java Edition Server installieren, verwenden und Lag-Ursachen im Report erkennen"
tags: []
date: "2026-11-09"
visibility: "public"
cta: "gameserver"
product_keys: ["minecraft"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "spark einrichten"
sort: 40
related: ["gameserver/minecraft/improve-performance", "gameserver/minecraft/fix-server-crashes", "gameserver/minecraft/install-mods", "gameserver/minecraft/install-plugins"]
---

[spark](https://spark.lucko.me/) ist ein kostenloser Performance-Profiler für Minecraft-Server. Statt zu raten, warum Dein Server laggt, zeigt Dir spark, **was** die Rechenzeit verbraucht – eine bestimmte Mod, zu viele Mobs, die Weltgenerierung oder ein voller Arbeitsspeicher.

Diese Anleitung zeigt Dir das Wichtigste: spark installieren, Daten sammeln und die typischen Lag-Ursachen erkennen. Alle Befehle und Funktionen im Detail findest Du in der offiziellen [spark-Dokumentation](https://spark.lucko.me/docs).

> [!NOTE]
> Auf einem reinen **Vanilla**-Server kann spark nicht installiert werden, weil Vanilla weder Plugins noch Mods lädt.

## Schritt 1: spark installieren

Welche Datei Du brauchst, hängt von der Server-Plattform ab, die Du im Assistenten [Version ändern](/tutorials/gameserver/minecraft/change-version) gewählt hast:

| Plattform | Was Du tun musst | Ordner |
| --------- | ---------------- | ------ |
| Paper / Purpur ab 1.21 | Nichts – spark ist bereits eingebaut | – |
| Paper / Purpur vor 1.21, Spigot | Version **Bukkit (Paper/Spigot)** hochladen | `plugins` |
| Fabric | Version **Fabric** **und** die [Fabric API](https://modrinth.com/mod/fabric-api) hochladen | `mods` |
| Forge / NeoForge | Version **Forge** bzw. **NeoForge** hochladen | `mods` |
| Velocity / BungeeCord | Version **Velocity** bzw. **BungeeCord** hochladen – die Befehle heißen dort `/sparkv` bzw. `/sparkb` | `plugins` |

Die Dateien findest Du auf [spark.lucko.me/download](https://spark.lucko.me/download), Mod-Versionen für ältere Minecraft-Versionen auf [Modrinth](https://modrinth.com/mod/spark). Auf Mod-Servern kannst Du spark auch direkt über die Seite **Plugins & Mods** im Dashboard installieren (siehe [Mods hinzufügen](/tutorials/gameserver/minecraft/install-mods)). Starte den Server danach neu. Deine Spieler müssen spark **nicht** installieren.

> [!WARNING]
> Auf **Fabric** wird die benötigte **Fabric API** nicht automatisch mitinstalliert. Fehlt sie, startet der Server nicht und nennt in der Konsole fehlende Module wie `fabric-api-base`.

## Schritt 2: Schnellcheck mit `/spark tps`

Die Befehle kannst Du in der Konsole der Verwaltung oder im Spiel mit [OP-Rechten](/tutorials/gameserver/minecraft/grant-op-rights) ausführen. Bei starkem Lag reagiert die Konsole zuverlässiger.

> [!WARNING]
> In der Konsole müssen alle Befehle ohne `/` eingegeben werden!

`/spark tps` zeigt Dir sofort, ob Dein Server laggt. So sieht die Ausgabe eines stark überlasteten Servers aus:

```text
TPS from last 5s, 10s, 1m, 5m, 15m:
 4.54, 5.10, 7.83, 12.40, 15.02

Tick durations (min/med/95%ile/max ms) from last 10s, 1m:
 38.2/142.6/980.4/2066.0;  31.5/118.3/870.1/2066.0

CPU usage from last 10s, 1m, 15m:
 74%, 68%, 55%  (system)
 6%, 6%, 5%  (process)
```

- **TPS**: Der Server berechnet die Welt im Idealfall 20-mal pro Sekunde. Werte unter 18 bedeuten spürbaren Lag.
- **Tick durations**: Wie lange ein Tick dauert (kürzester, Median, 95-%-Wert, längster). Für 20 TPS darf ein Tick **höchstens 50 ms** dauern. Das ist die wichtigste Zahl.
- **CPU**: Wird oft falsch gedeutet – siehe „Häufige Missverständnisse“ weiter unten.

Im Beispiel liegt schon der Median bei 142,6 ms – der Server ist **dauerhaft** überlastet. Ist der Median niedrig, das Maximum aber sehr hoch, hat der Server nur einzelne **Lag-Spitzen**.

## Schritt 3: Einen Profiler-Report erstellen

Der Profiler zeichnet auf, womit der Server seine Zeit verbringt. **Der Lag muss während der Aufnahme auftreten** – ein Report von einem leeren Server zeigt Dir nichts.

1. **Profiler starten**\
   Führe aus, sobald der Lag auftritt:

   ```text
   /spark profiler start --timeout 600
   ```

2. **Normal weiterspielen**\
   Lass Deine Spieler währenddessen normal weiterspielen. Nach 10 Minuten stoppt spark automatisch.

3. **Report öffnen**\
   spark gibt Dir einen Link zum Report aus. Mit `/spark profiler stop` kannst Du auch früher stoppen.

> [!TIP]
> Hat Dein Server nur einzelne Lag-Spitzen, starte den Profiler mit `/spark profiler start --only-ticks-over 100`. Dann zeichnet spark nur Ticks über 100 ms auf. Mehr dazu in der spark-Anleitung [Finding lag spikes](https://spark.lucko.me/docs/guides/Finding-lag-spikes).

## Schritt 4: Den Report lesen

1. **Server-Thread aufklappen**\
   Klappe im Report den Eintrag **Server thread** auf – hier läuft die gesamte Spielwelt.

2. **Den größten Prozentwerten folgen**\
   Klappe immer den Eintrag mit dem höchsten Prozentwert auf und arbeite Dich nach unten, bis Du bei einer konkreten Ursache ankommst.

3. **Nach Plugins bzw. Mods sortieren**\
   Über das Augen-Symbol wechselst Du in die Ansicht **Sources**. Dort siehst Du die Zeit aufgeteilt nach Plugins bzw. Mods.

Ein Eintrag wie `waitForNextTick` bedeutet übrigens, dass der Server nichts zu tun hat – das ist gut. Wie Du den Report im Detail liest, erklärt die spark-Anleitung [Using the viewer](https://spark.lucko.me/docs/Using-the-viewer).

## Probleme erkennen

| Was Du im Report siehst | Ursache | Was hilft |
| ----------------------- | ------- | --------- |
| `EntityTickList` oder `tickNonPassenger` weit oben | Zu viele Mobs, Tiere, Villager oder Items am Boden | Mob-Farmen verkleinern, Items aufsammeln |
| `tickBlockEntities` weit oben | Viele Hopper, Öfen oder Maschinen aus Mods | Hopper-Ketten kürzen, große Mod-Fabriken verkleinern |
| `tickChunks` oder Weltgenerierung weit oben | Spieler reisen weit und es werden ständig neue Chunks generiert | [Welt-Grenze](/tutorials/gameserver/minecraft/change-world-border) setzen und die Welt vorab generieren, z.B. mit [Chunky](https://modrinth.com/plugin/chunky) |
| Ein Plugin- oder Mod-Name dominiert in **Sources** | Dieses Plugin bzw. diese Mod verursacht den Lag | Aktualisieren, sparsamer konfigurieren oder – mit Backup – testweise entfernen |
| Kachel **GC** im Report rot | Der Arbeitsspeicher wird knapp | Unnötige Plugins und Mods entfernen; bleibt der RAM dauerhaft voll, auf mehr RAM upgraden |

> [!WARNING]
> Erstelle ein [Backup](/tutorials/gameserver/minecraft/create-backup), bevor Du eine Mod entfernst. Sind Blöcke oder Items dieser Mod in der Welt verbaut, verschwinden sie – das kann die Welt dauerhaft beschädigen.

Wie Du die Ursache anschließend behebst, zeigt [Performance verbessern](/tutorials/gameserver/minecraft/improve-performance).

### Häufige Missverständnisse

- **„Can't keep up! … Running 5000ms or 100 ticks behind“**: Der Server liegt insgesamt so weit hinter seinem Zeitplan, dass er Ticks überspringt – ein klares Zeichen für Server-Lag. Paper und Purpur geben diese Meldung nicht aus. Eine Konsole ohne sie bedeutet also nicht, dass alles in Ordnung ist.
- **„Die Prozess-CPU ist niedrig, also ist der Server nicht überlastet“**: Doch, das ist möglich. Die Spielwelt läuft in einem einzigen Thread auf **einem** Prozessorkern, die Prozess-CPU wird aber an allen Kernen gemessen. Auf einem System mit 16 Threads entsprechen 6 % bereits einem voll ausgelasteten Kern.
- **„Die System-CPU ist hoch, also liegt es an der Hardware“**: Die System-CPU umfasst alle Prozesse des gesamten Systems und kann in Containern ungenau sein. Aussagekräftiger ist ein Test: Führe `/spark tps` aus, wenn keine Spieler online sind. Sinkt die Tickdauer deutlich, kommt die Last aus Deiner Welt bzw. Deinen Plugins und Mods. Bleibt sie auch bei leerem Server hoch, wende Dich an den Support.
- **„Auf einem anderen Server liefen dieselben Mods problemlos“**: Lag hängt vor allem von der **Welt** ab – wie viele Chunks, Maschinen, Farmen und Mobs es gibt. Eine neue Welt läuft mit denselben Mods oft flüssig, eine gewachsene nicht mehr.

## Die wichtigsten Befehle

| Befehl | Beschreibung |
| ------ | ------------ |
| `/spark tps` | TPS, Tickdauer und CPU-Auslastung |
| `/spark health` | Gesundheitsbericht mit RAM, CPU und Festplatte |
| `/spark profiler start --timeout 600` | Profiler für 10 Minuten starten |
| `/spark profiler stop` | Profiler stoppen und Report-Link erhalten |

Alle weiteren Befehle findest Du in der [Befehlsübersicht der spark-Dokumentation](https://spark.lucko.me/docs/Command-Usage).

> [!TIP]
> Wendest Du Dich wegen Lag an den Support, schicke den Report-Link aus `/spark profiler stop`, die Ausgabe von `/spark tps` und die Uhrzeit des Lags direkt mit. So kann Dir das Team deutlich schneller helfen.
