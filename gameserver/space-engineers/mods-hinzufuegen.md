---
description: Steam Workshop Mods auf einem Space Engineers Server hinzufügen
---

# So fügst du Mods zu deinem Space Engineers Server hinzu

Du kannst Steam-Workshop-Mods auf deinem Server hinzufügen, um Blöcke, Fahrzeuge, Spielmechaniken und mehr zu ergänzen. Die Mods werden über ihre **Workshop-ID** in der Konfigurationsdatei deiner Welt eingetragen — der Server lädt sie beim Start automatisch aus dem Steam Workshop herunter. Du musst also keine Mod-Dateien manuell hochladen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Konfigurationsdatei bearbeitest. Ein laufender Server kann deine Änderungen beim Speichern oder Stoppen überschreiben.
::::

## Workshop-ID finden

1. <b>Mod im Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für Space Engineers](https://steamcommunity.com/app/244850/workshop/) und rufe die gewünschte Mod auf.

2. <b>ID aus der URL kopieren</b><br>
   Die Workshop-ID ist die Zahl am Ende der URL nach `?id=`:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   Die ID lautet hier `123456789`.

## Mods eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Konfigurationsdatei öffnen</b><br>
   Öffne im Ordner deiner Welt (typischerweise unter `Saves/<Weltname>/`) die Datei `Sandbox_config.sbc`.

4. <b>Mod-Liste einfügen</b><br>
   Suche nach dem `<Mods>`-Block (bei einer neuen Welt steht dort `<Mods />`) und trage pro Mod einen `<ModItem>` ein. Ersetze `123456789` durch die jeweilige Workshop-ID:

   ```xml
   <Mods>
     <ModItem FriendlyName="Mod Name">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` ist die Workshop-ID mit der Endung `.sbm`.
   - `<PublishedFileId>` ist die reine Workshop-ID ohne Endung.
   - `FriendlyName` ist optional und dient nur als Anzeigename.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start lädt der Server die Mods automatisch aus dem Steam Workshop herunter — den Fortschritt siehst du in der Server-Konsole.

:::: info Reihenfolge beachten
Die Reihenfolge bestimmt die Priorität: Mods **weiter oben** in der Liste überschreiben Mods weiter unten, wenn beide dieselbe Definition ändern. Ordne sich überschneidende Mods entsprechend an.
::::

:::: tip Experimental Modus & Skripte
Viele Mods benötigen den aktivierten [Experimental Modus](experimental-modus-aktivieren.md) — Mods mit eigenem Code (Skript-Mods) benötigen ihn zwingend. Aktiviere ihn, sobald du Workshop-Mods verwendest.

Skripte für **Programmierbare Blöcke** sind keine Mods und werden nicht in die Mod-Liste eingetragen — siehe [Ingame Skripte erlauben](ingame-skripte-aktivieren.md).
::::

:::: warning Mods fehlen nach einem Neustart?
Space Engineers führt die Mod-Liste zusätzlich in der Server-Konfiguration `SpaceEngineers-Dedicated.cfg`. Stelle sicher, dass dort deine Welt geladen wird und dass derselbe `<Mods>`-Block auch dort eingetragen ist — andernfalls kann eine leere Liste die Mods beim Neustart wieder entfernen.
::::

:::: danger Wichtig
Spieler müssen die Mods nicht manuell herunterladen — der Client lädt die Server-Mods beim Beitreten automatisch. Steam-Workshop-Mods erfordern jedoch **deaktiviertes Crossplay**.
::::
