---
slug: "block-limits-aendern"
language: "de"
title: "So änderst Du die Block- und PCU-Limits auf Deinem Space Engineers Server"
description: "Block- und PCU-Limits auf einem Space Engineers Server ändern"
tags: []
date: "2026-09-27"
visibility: "public"
cta: "gameserver"
product_keys: ["space-engineers"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Block- und PCU-Limits ändern"
sort: 19
related: ["gameserver/space-engineers/change-world-settings", "gameserver/space-engineers/configure-trash-removal", "gameserver/space-engineers/enable-crossplay", "gameserver/space-engineers/enable-experimental-mode"]
---
Jeder Block kostet in Space Engineers **PCU** (Performance Cost Units). Ist das PCU-Budget aufgebraucht, meldet das Spiel `PCU limit reached.` und es lässt sich nichts mehr bauen. Wie viel PCU es gibt, wie es verteilt wird und wie viele Blöcke erlaubt sind, stellst Du in der Konfigurationsdatei Deiner Welt ein. Ein Feld in der Verwaltung gibt es dafür nicht – die Verwaltung überschreibt diese Einträge beim Start aber auch nicht, Deine Änderung bleibt also erhalten.

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfigurationsdatei bearbeitest. Ein laufender Server kann Deine Änderungen beim Speichern oder Stoppen überschreiben.

## Die Einstellungen im Überblick

Alle Einstellungen stehen in der Datei `Sandbox_config.sbc` Deiner Welt:

| Eintrag | Bedeutung | Vorinstallierte Welt |
| --- | --- | --- |
| `BlockLimitsEnabled` | Wie das PCU-Budget verteilt wird (siehe unten) | `GLOBALLY` |
| `TotalPCU` | Das PCU-Budget. `0` hebt das PCU-Limit auf | `100000` |
| `PiratePCU` | PCU-Budget der NPC-Fraktionen, zum Beispiel der Piraten | `50000` |
| `MaxGridSize` | Höchstzahl an Blöcken pro Grid (Schiff oder Station), `0` = unbegrenzt | `0` |
| `MaxBlocksPerPlayer` | Höchstzahl an Blöcken pro Spieler, `0` = unbegrenzt | `0` |
| `MaxFactionsCount` | Höchstzahl an Fraktionen, `0` = unbegrenzt (Ausnahme bei `PER_FACTION`, siehe unten) | `0` |
| `EnablePcuTrading` | Spieler bzw. Fraktionen können PCU untereinander handeln – bei `PER_PLAYER` und `PER_FACTION` | `true` |
| `BlockTypeLimits` | Limits für einzelne Blocktypen (siehe unten) | leer |

## So wird das PCU-Budget verteilt

Mit `BlockLimitsEnabled` legst Du fest, für wen `TotalPCU` gilt:

| Wert | Verteilung |
| --- | --- |
| `GLOBALLY` | Alle Spieler teilen sich **gemeinsam** ein Budget von `TotalPCU`. Auch `MaxBlocksPerPlayer` und `BlockTypeLimits` zählen dann für alle Spieler zusammen. |
| `PER_PLAYER` | Jeder Spieler erhält `TotalPCU` geteilt durch **Maximale Spieler** aus der Verwaltung – bei `100000` PCU und 10 Spielern also `10000` PCU pro Spieler. |
| `PER_FACTION` | Jede Fraktion erhält `TotalPCU` geteilt durch `MaxFactionsCount`. Spieler ohne Fraktion können **nicht bauen**. |
| `NONE` | Keine Block- und PCU-Limits – siehe [Limits ganz aufheben](#limits-ganz-aufheben). |

Die Spieleranzahl stellst Du unter [Maximale Spieler ändern](/tutorials/gameserver/space-engineers/change-max-players) ein. Das Budget berechnet der Server bei jedem Start neu aus den aktuellen Einstellungen – eine Änderung gilt nach dem Neustart also auch für bestehende Spieler und Fraktionen. Senkst Du die Limits unter den aktuellen Verbrauch, bleiben bestehende Bauten erhalten, betroffene Spieler können aber erst wieder bauen, wenn sie unter dem neuen Limit liegen.

> [!NOTE]
> **Fraktionen bei PER_FACTION**
>
> Setze bei `PER_FACTION` den Eintrag `MaxFactionsCount` auf die Anzahl der Fraktionen, die es auf Deinem Server geben soll. Steht er auf `0`, lässt der Server in diesem Modus nur **eine** Spielerfraktion zu – in der vorinstallierten Welt ist das die bereits vorhandene Fraktion **First Colony**. Sie erhält dann den vollen `TotalPCU`, neue Fraktionen lassen sich aber nicht gründen.

## Limits ändern

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Backup erstellen**\
   Erstelle ein [Backup](/tutorials/gameserver/create-backup) oder lade Dir eine Kopie der Datei `Sandbox_config.sbc` herunter. So kannst Du den alten Stand wiederherstellen, falls beim Bearbeiten etwas schiefgeht.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

4. **Konfigurationsdatei öffnen**\
   Öffne im Ordner Deiner Welt `/config/Saves/World/` die Datei `Sandbox_config.sbc`.

5. **Werte anpassen**\
   Suche die Einträge und ändere die Werte zwischen den Tags. Im Beispiel wird das PCU-Budget auf `300000` erhöht:

   ```xml
   <MaxGridSize>0</MaxGridSize>
   <MaxBlocksPerPlayer>0</MaxBlocksPerPlayer>
   <TotalPCU>300000</TotalPCU>
   <PiratePCU>50000</PiratePCU>
   <MaxFactionsCount>0</MaxFactionsCount>
   <BlockLimitsEnabled>GLOBALLY</BlockLimitsEnabled>
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

7. **Änderung prüfen**\
   Beim Laden der Welt muss in der Server-Konsole diese Zeile erscheinen:

   ```text
   Sandbox world configuration file found, overriding checkpoint settings.
   ```

   Sie zeigt, dass der Server Deine `Sandbox_config.sbc` übernommen hat.

> [!IMPORTANT]
> Ändere nur die Werte zwischen den Tags und lass die Tags selbst unverändert – jeder Eintrag braucht sein öffnendes und schließendes Tag, zum Beispiel `<TotalPCU>300000</TotalPCU>`. Die Werte für `BlockLimitsEnabled` schreibst Du exakt in Großbuchstaben (`GLOBALLY`, `PER_PLAYER`, `PER_FACTION` oder `NONE`).
>
> Enthält die Datei einen Fehler, ignoriert der Server die gesamte `Sandbox_config.sbc` – ohne Fehlermeldung in der Konsole, nur die Zeile aus Schritt 7 fehlt. Er lädt dann die Einstellungen und Mods aus `Sandbox.sbc` und überschreibt `Sandbox_config.sbc` beim nächsten Speichern. Deine Änderungen gehen dabei verloren. Fehlt die Zeile nach dem Start, stoppe den Server, spiele Deine Kopie der Datei wieder ein und ändere die Werte erneut.

> [!NOTE]
> Die meisten dieser Einträge stehen auch im Block `<SessionSettings>` der `SpaceEngineers-Dedicated.cfg`. Diesen Block nutzt der Server aber nur, wenn er eine neue Welt erstellt – für Deine bestehende Welt zählt ausschließlich `Sandbox_config.sbc`. Mehr dazu unter [Welt-Einstellungen ändern](/tutorials/gameserver/space-engineers/change-world-settings).

> [!NOTE]
> **Leistung**
>
> Hohe Limits belasten Deinen Server stärker: Jeder zusätzliche Block kostet Rechenleistung, und große Konstruktionen können die Leistung für alle Spieler beeinträchtigen. Erhöhe die Limits deshalb schrittweise.

## Limits für einzelne Blocktypen

Mit `BlockTypeLimits` begrenzt Du, wie oft ein bestimmter Block gebaut werden darf – zum Beispiel Raffinerien oder Montageanlagen. Die Liste bearbeitest Du wie unter [Limits ändern](#limits-andern) beschrieben in `Sandbox_config.sbc`. In der vorinstallierten Welt ist sie leer:

```xml
<BlockTypeLimits>
  <dictionary />
</BlockTypeLimits>
```

Ersetze den Block durch Deine Limits und trage pro Blocktyp einen `<item>` ein:

```xml
<BlockTypeLimits>
  <dictionary>
    <item>
      <Key>Refinery</Key>
      <Value>24</Value>
    </item>
    <item>
      <Key>Assembler</Key>
      <Value>24</Value>
    </item>
  </dictionary>
</BlockTypeLimits>
```

- `<Key>` ist der Name des Blocktyps.
- `<Value>` ist die erlaubte Anzahl – eine ganze Zahl bis höchstens `32767`.

Gültige Namen aus der Standardliste von Keen Software House sind zum Beispiel `Assembler`, `Refinery`, `Blast Furnace`, `Antenna`, `Drill`, `InteriorTurret`, `GatlingTurret`, `MissileTurret`, `ExtendedPistonBase`, `MotorStator`, `MotorAdvancedStator`, `ShipWelder` und `ShipGrinder`.

> [!NOTE]
> Die große und die kleine Ausführung eines Blocks teilen sich ein Limit, andere Varianten desselben Blocks zählen dagegen separat. Je nach `BlockLimitsEnabled` gilt das Limit für die ganze Welt, pro Spieler oder pro Fraktion.

## Limits ganz aufheben

Für ein unbegrenztes PCU-Budget hast Du zwei Möglichkeiten:

- **`<TotalPCU>0</TotalPCU>`** hebt nur das PCU-Limit auf. `MaxGridSize`, `MaxBlocksPerPlayer` und `BlockTypeLimits` gelten weiter.
- **`<BlockLimitsEnabled>NONE</BlockLimitsEnabled>`** schaltet alle Block- und PCU-Limits ab.

> [!IMPORTANT]
> Steht `BlockLimitsEnabled` auf `NONE` oder `TotalPCU` über `600000`, schaltet der Server beim Laden automatisch den [Experimental Modus](/tutorials/gameserver/space-engineers/enable-experimental-mode) ein – auch wenn er in der Verwaltung auf `false` steht. Den Grund zeigt die Server-Konsole beim Start, zum Beispiel `Experimental mode reason: ExperimentalMode, TotalPCU`. Möchtest Du ohne Experimental Modus mehr PCU vergeben, setze `TotalPCU` auf höchstens `600000`.

> [!WARNING]
> **Crossplay-Server**
>
> Mit aktivem [Crossplay](/tutorials/gameserver/space-engineers/enable-crossplay) darf `BlockLimitsEnabled` nicht auf `NONE` und `TotalPCU` nicht auf `0` stehen. Sonst schaltet der Server die Konsolenkompatibilität beim Laden ab und Spieler auf Xbox und PlayStation können Deinem Server nicht mehr beitreten. Die Server-Konsole meldet dann `World does not have Block Limits Enabled.` bzw. `Total PCU value is 0.` Erhöhe auf einem Crossplay-Server stattdessen `TotalPCU` – am besten auf höchstens `600000`, damit der Experimental Modus aus bleibt.

> [!TIP]
> **Admins ohne PCU-Limit**
>
> Admins können die PCU-Limits im Spiel für sich selbst ignorieren, ohne die Limits für den ganzen Server zu ändern – über die Option **Ignore PCU limits** im Admin-Menü (`Alt` + `F10`). Wie Du Admins festlegst, erfährst Du unter [Admins hinzufügen](/tutorials/gameserver/space-engineers/add-admins).
