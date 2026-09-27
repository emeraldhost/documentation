---
slug: "crossplay-aktivieren"
language: "de"
title: "So aktivierst Du Crossplay auf Deinem Space Engineers Server"
description: "Crossplay auf einem Space Engineers Server aktivieren"
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
short_title: "Crossplay aktivieren"
sort: 16
related: ["gameserver/space-engineers/add-mods", "gameserver/space-engineers/add-admins", "gameserver/space-engineers/join-server", "gameserver/space-engineers/change-block-limits"]
---
Mit Crossplay spielen Spieler auf **PC (Steam)**, **Xbox** und **PlayStation** gemeinsam auf Deinem Server. Dein Server läuft dafür über die **Epic Online Services (EOS)** statt über Steam und wird als **konsolenkompatibel** gekennzeichnet. Beides stellst Du in der Datei `SpaceEngineers-Dedicated.cfg` ein – ein Feld in der Verwaltung gibt es dafür nicht. Die Verwaltung überschreibt diese Einträge beim Start nicht, Deine Änderung bleibt also erhalten.

## Voraussetzungen

Damit Deine Welt mit Crossplay startet, muss sie diese Bedingungen erfüllen:

- **Höchstens drei verschiedene Planetentypen** – mit Crossplay lässt der Server nur drei Planetentypen pro Welt zu. Enthält Deine Welt mehr, bricht der Start mit der Meldung `World contains too many planet types and could not be loaded.` ab.
- **Keine Steam-Workshop-Mods** – Crossplay-Server laden nur Mods von mod.io. Steht eine Steam-Workshop-Mod in der Mod-Liste, startet die Welt nicht. Entferne solche Mods vorher aus dem `<Mods>`-Block (siehe [Mods hinzufügen](/tutorials/gameserver/space-engineers/add-mods)).
- **Aktive Blocklimits** – in `Sandbox_config.sbc` darf `<BlockLimitsEnabled>` nicht auf `NONE` und `<TotalPCU>` nicht auf `0` stehen. Die vorinstallierte Welt erfüllt das bereits.

> [!IMPORTANT]
> Die vorinstallierte Welt Deines Servers enthält **sechs** Planetentypen (EarthLike, Mars, Moon, Alien, Europa und Titan) und startet mit Crossplay nicht. Lade vorher eine Welt mit höchstens drei Planetentypen hoch – siehe [Welt hochladen](/tutorials/gameserver/space-engineers/upload-world).

## Crossplay aktivieren

> [!WARNING]
> Stoppe Deinen Server, bevor Du die Konfigurationsdatei bearbeitest. Ein laufender Server kann Deine Änderungen überschreiben.

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. **Konfiguration öffnen**\
   Öffne die Datei `/config/SpaceEngineers-Dedicated.cfg`.

4. **Netzwerk auf EOS umstellen**\
   Suche die Zeile `<NetworkType>steam</NetworkType>` und ändere den Wert auf `eos`:

   ```xml
   <NetworkType>eos</NetworkType>
   ```

5. **Konsolenkompatibilität aktivieren**\
   Suche die Zeile `<ConsoleCompatibility>false</ConsoleCompatibility>` und ändere den Wert auf `true`:

   ```xml
   <ConsoleCompatibility>true</ConsoleCompatibility>
   ```

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

7. **Crossplay prüfen**\
   Beim Laden der Welt zeigt die Server-Konsole, ob die Konsolenkompatibilität aktiv ist:

   ```text
   Console compatibility: Yes
   ```

> [!NOTE]
> Du brauchst **beide** Einträge: `eos` lässt Deinen Server über die Epic Online Services laufen, über die PC- und Konsolenspieler gemeinsam spielen, und `ConsoleCompatibility` gibt ihn für Xbox- und PlayStation-Spieler frei. Die Einträge stehen nur in `SpaceEngineers-Dedicated.cfg` – die Weltdateien `Sandbox.sbc` und `Sandbox_config.sbc` musst Du dafür nicht ändern.

> [!WARNING]
> Zeigt die Konsole `Console compatibility: No`, hat der Server die Konsolenkompatibilität beim Laden wieder abgeschaltet. Den Grund nennt die Konsole kurz davor:
>
> - `World does not have Block Limits Enabled.` – aktiviere die Blocklimits in `Sandbox_config.sbc`.
> - `Total PCU value is 0.` – setze `<TotalPCU>` in `Sandbox_config.sbc` auf einen Wert größer als `0`.
> - `Total mods size ... is higher than limit` – Deine Mods sind zusammen größer als 3 GB.

## So treten Spieler bei

Crossplay-Server erscheinen nicht in der Steam-Serverliste, sondern in der **EOS**-Serverliste:

- **PC:** Wähle im Hauptmenü **Join Game**, öffne den Tab **Servers** und wechsle die Serverliste von **Steam** auf **EOS**. Suche dort nach Deinem Servernamen.
- **Xbox und PlayStation:** Suche Deinen Server in der Serverliste des Mehrspielermenüs. Auf der PlayStation muss in den Spieloptionen **Enable Crossplay** eingeschaltet sein – sonst zeigt das Spiel keine Crossplay-Server an.

> [!NOTE]
> Die Direktverbindung über IP-Adresse und Port aus [Server beitreten](/tutorials/gameserver/space-engineers/join-server) gilt nur für Server ohne Crossplay. Einem Crossplay-Server treten alle Spieler – auch am PC – über die EOS-Serverliste bei.

> [!TIP]
> Ist auf Deinem Server der [Experimental Modus](/tutorials/gameserver/space-engineers/enable-experimental-mode) aktiv, sehen Konsolenspieler ihn in der Serverliste erst, wenn sie den Experimental Modus auch in ihrem Spiel einschalten.

## Was sich mit Crossplay ändert

- **Mods:** Es funktionieren nur Mods von mod.io (siehe unten). Mods mit Skripten laufen nur, wenn ihr Code ausschließlich auf dem Server ausgeführt wird – clientseitige Skripte laufen auf Konsolen nicht.
- **Admins:** Admins per SteamID in der Konfiguration greifen nicht. Befördere Admins im Spiel oder über die Remote API – siehe [Admins hinzufügen](/tutorials/gameserver/space-engineers/add-admins).
- **PCU:** Der Server berechnet die PCU nach Konsolenwerten – zum Beispiel kosten Panzerungsblöcke 2 statt 1 PCU.
- **Ingame-Skripte:** [Skripte für Programmierbare Blöcke](/tutorials/gameserver/space-engineers/enable-ingame-scripts) kannst Du weiterhin nutzen, auch mit Konsolenspielern.

## Mods von mod.io eintragen

1. **Mod-ID finden**\
   Öffne die gewünschte Mod auf [mod.io](https://mod.io/g/spaceengineers). Die Mod-ID steht in der rechten Seitenleiste der Mod unter **ID**, zum Beispiel `1234567`. Mit dem Kopier-Symbol daneben kopierst Du sie.

2. **Mod eintragen**\
   Öffne bei gestopptem Server `/config/Saves/World/Sandbox_config.sbc` und trage die Mod wie unter [Mods hinzufügen](/tutorials/gameserver/space-engineers/add-mods) beschrieben im `<Mods>`-Block ein – mit `mod.io` als Dienst. Ersetze `1234567` durch die Mod-ID:

   ```xml
   <Mods>
     <ModItem FriendlyName="Mod Name">
       <Name>1234567.sbm</Name>
       <PublishedFileId>1234567</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

3. **Server starten**\
   Speichere die Datei und starte Deinen Server. Der Server lädt die Mods beim Start von mod.io herunter.

## Crossplay deaktivieren

Setze in `/config/SpaceEngineers-Dedicated.cfg` bei gestopptem Server die Werte zurück auf `<NetworkType>steam</NetworkType>` und `<ConsoleCompatibility>false</ConsoleCompatibility>` und starte Deinen Server.

> [!NOTE]
> Einige Welteinstellungen passt der Server bei aktiviertem Crossplay an und speichert sie in der Welt – unter anderem `<UseConsolePCU>` (PCU nach Konsolenwerten) und `<MaxPlanets>` (höchstens drei Planetentypen) in `Sandbox_config.sbc`. Diese Werte bleiben nach dem Deaktivieren erhalten. Ändere sie bei Bedarf bei gestopptem Server zurück, zum Beispiel auf `<UseConsolePCU>false</UseConsolePCU>` und `<MaxPlanets>99</MaxPlanets>`.
