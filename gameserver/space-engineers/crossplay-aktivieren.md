---
description: Crossplay auf einem Space Engineers Server aktivieren
---

# So aktivierst du Crossplay auf deinem Space Engineers Server

Mit Crossplay spielen Spieler auf **PC (Steam)**, **Xbox** und **PlayStation** gemeinsam auf deinem Server. Dein Server läuft dafür über die **Epic Online Services (EOS)** statt über Steam und wird als **konsolenkompatibel** gekennzeichnet. Beides stellst du in der Datei `SpaceEngineers-Dedicated.cfg` ein — ein Feld in der Verwaltung gibt es dafür nicht. Die Verwaltung überschreibt diese Einträge beim Start nicht, deine Änderung bleibt also erhalten.

## Voraussetzungen

Damit deine Welt mit Crossplay startet, muss sie diese Bedingungen erfüllen:

- **Höchstens drei verschiedene Planetentypen** — mit Crossplay lässt der Server nur drei Planetentypen pro Welt zu. Enthält deine Welt mehr, bricht der Start mit der Meldung `World contains too many planet types and could not be loaded.` ab.
- **Keine Steam-Workshop-Mods** — Crossplay-Server laden nur Mods von mod.io. Steht eine Steam-Workshop-Mod in der Mod-Liste, startet die Welt nicht. Entferne solche Mods vorher aus dem `<Mods>`-Block (siehe [Mods hinzufügen](mods-hinzufuegen.md)).
- **Aktive Blocklimits** — in `Sandbox_config.sbc` darf `<BlockLimitsEnabled>` nicht auf `NONE` und `<TotalPCU>` nicht auf `0` stehen. Die vorinstallierte Welt erfüllt das bereits.

:::: danger Wichtig
Die vorinstallierte Welt deines Servers enthält **sechs** Planetentypen (EarthLike, Mars, Moon, Alien, Europa und Titan) und startet mit Crossplay nicht. Lade vorher eine Welt mit höchstens drei Planetentypen hoch — siehe [Welt hochladen](welt-hochladen.md).
::::

## Crossplay aktivieren

:::: warning Achtung
Stoppe deinen Server, bevor du die Konfigurationsdatei bearbeitest. Ein laufender Server kann deine Änderungen überschreiben.
::::

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Konfiguration öffnen</b><br>
   Öffne die Datei `/config/SpaceEngineers-Dedicated.cfg`.

4. <b>Netzwerk auf EOS umstellen</b><br>
   Suche die Zeile `<NetworkType>steam</NetworkType>` und ändere den Wert auf `eos`:

   ```xml
   <NetworkType>eos</NetworkType>
   ```

5. <b>Konsolenkompatibilität aktivieren</b><br>
   Suche die Zeile `<ConsoleCompatibility>false</ConsoleCompatibility>` und ändere den Wert auf `true`:

   ```xml
   <ConsoleCompatibility>true</ConsoleCompatibility>
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

7. <b>Crossplay prüfen</b><br>
   Beim Laden der Welt zeigt die Server-Konsole, ob die Konsolenkompatibilität aktiv ist:

   ```
   Console compatibility: Yes
   ```

:::: info Hinweis
Du brauchst **beide** Einträge: `eos` lässt deinen Server über die Epic Online Services laufen, über die PC- und Konsolenspieler gemeinsam spielen, und `ConsoleCompatibility` gibt ihn für Xbox- und PlayStation-Spieler frei. Die Einträge stehen nur in `SpaceEngineers-Dedicated.cfg` — die Weltdateien `Sandbox.sbc` und `Sandbox_config.sbc` musst du dafür nicht ändern.
::::

:::: warning Achtung
Zeigt die Konsole `Console compatibility: No`, hat der Server die Konsolenkompatibilität beim Laden wieder abgeschaltet. Den Grund nennt die Konsole kurz davor:

- `World does not have Block Limits Enabled.` — aktiviere die Blocklimits in `Sandbox_config.sbc`.
- `Total PCU value is 0.` — setze `<TotalPCU>` in `Sandbox_config.sbc` auf einen Wert größer als `0`.
- `Total mods size ... is higher than limit` — deine Mods sind zusammen größer als 3 GB.
::::

## So treten Spieler bei

Crossplay-Server erscheinen nicht in der Steam-Serverliste, sondern in der **EOS**-Serverliste:

- **PC:** Wähle im Hauptmenü **Join Game**, öffne den Tab **Servers** und wechsle die Serverliste von **Steam** auf **EOS**. Suche dort nach deinem Servernamen.
- **Xbox und PlayStation:** Suche deinen Server in der Serverliste des Mehrspielermenüs. Auf der PlayStation muss in den Spieloptionen **Enable Crossplay** eingeschaltet sein — sonst zeigt das Spiel keine Crossplay-Server an.

:::: info Hinweis
Die Direktverbindung über IP-Adresse und Port aus [Server beitreten](server-beitreten.md) gilt nur für Server ohne Crossplay. Einem Crossplay-Server treten alle Spieler — auch am PC — über die EOS-Serverliste bei.
::::

:::: tip Tipp
Ist auf deinem Server der [Experimental Modus](experimental-modus-aktivieren.md) aktiv, sehen Konsolenspieler ihn in der Serverliste erst, wenn sie den Experimental Modus auch in ihrem Spiel einschalten.
::::

## Was sich mit Crossplay ändert

- **Mods:** Es funktionieren nur Mods von mod.io (siehe unten). Mods mit Skripten laufen nur, wenn ihr Code ausschließlich auf dem Server ausgeführt wird — clientseitige Skripte laufen auf Konsolen nicht.
- **Admins:** Admins per SteamID in der Konfiguration greifen nicht. Befördere Admins im Spiel oder über die Remote API — siehe [Admins hinzufügen](admins-hinzufuegen.md).
- **PCU:** Der Server berechnet die PCU nach Konsolenwerten — zum Beispiel kosten Panzerungsblöcke 2 statt 1 PCU.
- **Ingame-Skripte:** [Skripte für Programmierbare Blöcke](ingame-skripte-aktivieren.md) kannst du weiterhin nutzen, auch mit Konsolenspielern.

## Mods von mod.io eintragen

1. <b>Mod-ID finden</b><br>
   Öffne die gewünschte Mod auf [mod.io](https://mod.io/g/spaceengineers). Die Mod-ID steht in der rechten Seitenleiste der Mod unter **ID**, zum Beispiel `1234567`. Mit dem Kopier-Symbol daneben kopierst du sie.

2. <b>Mod eintragen</b><br>
   Öffne bei gestopptem Server `/config/Saves/World/Sandbox_config.sbc` und trage die Mod wie unter [Mods hinzufügen](mods-hinzufuegen.md) beschrieben im `<Mods>`-Block ein — mit `mod.io` als Dienst. Ersetze `1234567` durch die Mod-ID:

   ```xml
   <Mods>
     <ModItem FriendlyName="Mod Name">
       <Name>1234567.sbm</Name>
       <PublishedFileId>1234567</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Der Server lädt die Mods beim Start von mod.io herunter.

## Crossplay deaktivieren

Setze in `/config/SpaceEngineers-Dedicated.cfg` bei gestopptem Server die Werte zurück auf `<NetworkType>steam</NetworkType>` und `<ConsoleCompatibility>false</ConsoleCompatibility>` und starte deinen Server.

:::: info Hinweis
Einige Welteinstellungen passt der Server bei aktiviertem Crossplay an und speichert sie in der Welt — unter anderem `<UseConsolePCU>` (PCU nach Konsolenwerten) und `<MaxPlanets>` (höchstens drei Planetentypen) in `Sandbox_config.sbc`. Diese Werte bleiben nach dem Deaktivieren erhalten. Ändere sie bei Bedarf bei gestopptem Server zurück, zum Beispiel auf `<UseConsolePCU>false</UseConsolePCU>` und `<MaxPlanets>99</MaxPlanets>`.
::::
