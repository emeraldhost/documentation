---
description: Mods aus dem Steam Workshop oder von mod.io auf einem Space Engineers Server hinzufügen
---

# So fügst du Mods zu deinem Space Engineers Server hinzu

Du kannst Mods aus dem **Steam Workshop** oder von **mod.io** auf deinem Server hinzufügen, um Blöcke, Fahrzeuge, Spielmechaniken und mehr zu ergänzen. Die Mods werden über ihre **ID** in der Konfigurationsdatei deiner Welt eingetragen — der Server lädt sie beim Start automatisch herunter. Du musst also keine Mod-Dateien manuell hochladen.

:::: warning Achtung
Stoppe deinen Server, bevor du die Konfigurationsdatei bearbeitest. Ein laufender Server kann deine Änderungen beim Speichern oder Stoppen überschreiben.
::::

## Steam Workshop oder mod.io?

Welchen Mod-Dienst du nutzen kannst, hängt davon ab, ob auf deinem Server [Crossplay](crossplay-aktivieren.md) aktiv ist:

| Server | Mod-Dienst | `PublishedServiceName` |
| --- | --- | --- |
| Ohne Crossplay | Steam Workshop oder mod.io | `Steam` bzw. `mod.io` |
| Mit Crossplay | nur mod.io | `mod.io` |

Ohne Crossplay kannst du Mods aus beiden Diensten in derselben Mod-Liste mischen.

:::: info Crossplay-Server
Ein Crossplay-Server lädt ausschließlich Mods von mod.io. Steht eine Steam-Workshop-Mod in der Mod-Liste, startet die Welt nicht. Außerdem dürfen deine Mods zusammen höchstens **3 GB** groß sein — sonst schaltet der Server die Konsolenkompatibilität beim Laden ab.
::::

## Mod-ID finden

### Steam Workshop

1. <b>Mod im Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für Space Engineers](https://steamcommunity.com/app/244850/workshop/) und rufe die gewünschte Mod auf.

2. <b>ID aus der URL kopieren</b><br>
   Die Workshop-ID ist die Zahl am Ende der URL nach `?id=`:

   ```
   https://steamcommunity.com/sharedfiles/filedetails/?id=123456789
   ```

   Die ID lautet hier `123456789`.

### mod.io

1. <b>Mod auf mod.io öffnen</b><br>
   Öffne [mod.io für Space Engineers](https://mod.io/g/spaceengineers) und rufe die gewünschte Mod auf.

2. <b>ID in der Seitenleiste kopieren</b><br>
   Die mod.io-ID steht in der rechten Seitenleiste der Mod unter **ID**, zum Beispiel `1234567`. Mit dem Kopier-Symbol daneben kopierst du sie.

   :::: info Hinweis
   Anders als im Steam Workshop steht die ID nicht in der URL. Die Adresse einer mod.io-Mod enthält nur ihren Kurznamen, zum Beispiel `https://mod.io/g/spaceengineers/m/beispiel-mod`.
   ::::

## Mods eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server oder nutze den Datei-Browser in der Verwaltung.

3. <b>Konfigurationsdatei öffnen</b><br>
   Öffne im Ordner deiner Welt `/config/Saves/World/` die Datei `Sandbox_config.sbc`.

4. <b>Mod-Liste einfügen</b><br>
   Suche nach dem `<Mods>`-Block (bei einer neuen Welt steht dort `<Mods />`) und trage pro Mod einen `<ModItem>` ein. Ersetze die Beispiel-IDs durch die IDs deiner Mods.

   Mods aus dem **Steam Workshop**:

   ```xml
   <Mods>
     <ModItem FriendlyName="Erste Mod">
       <Name>123456789.sbm</Name>
       <PublishedFileId>123456789</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Zweite Mod">
       <Name>987654321.sbm</Name>
       <PublishedFileId>987654321</PublishedFileId>
       <PublishedServiceName>Steam</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   Mods von **mod.io**:

   ```xml
   <Mods>
     <ModItem FriendlyName="Erste Mod">
       <Name>1234567.sbm</Name>
       <PublishedFileId>1234567</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
     <ModItem FriendlyName="Zweite Mod">
       <Name>7654321.sbm</Name>
       <PublishedFileId>7654321</PublishedFileId>
       <PublishedServiceName>mod.io</PublishedServiceName>
     </ModItem>
   </Mods>
   ```

   - `<Name>` ist die ID mit der Endung `.sbm`.
   - `<PublishedFileId>` ist die reine ID ohne Endung.
   - `<PublishedServiceName>` legt den Mod-Dienst fest: `Steam` für den Steam Workshop, `mod.io` für mod.io. Achte auf die exakte Schreibweise — fehlt der Eintrag, sucht ein Server ohne Crossplay die Mod im Steam Workshop.
   - `FriendlyName` ist optional und dient nur als Anzeigename.

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start lädt der Server die Mods automatisch aus dem Steam Workshop bzw. von mod.io herunter — den Fortschritt siehst du in der Server-Konsole.

:::: info Reihenfolge beachten
Die Reihenfolge bestimmt die Priorität: Mods **weiter oben** in der Liste überschreiben Mods weiter unten, wenn beide dieselbe Definition ändern. Ordne sich überschneidende Mods entsprechend an.
::::

:::: tip Experimental Modus & Skripte
Seit Update 1.206 benötigen Mods keinen [Experimental Modus](experimental-modus-aktivieren.md) mehr — auch Mods mit eigenem Code (Skript-Mods) laufen ohne ihn.

Skripte für **Programmierbare Blöcke** sind keine Mods und werden nicht in die Mod-Liste eingetragen — siehe [Ingame Skripte erlauben](ingame-skripte-aktivieren.md).
::::

:::: warning Mods fehlen nach einem Neustart?
Öffne bei gestopptem Server erneut `/config/Saves/World/Sandbox_config.sbc` und prüfe, ob dein `<Mods>`-Block noch vorhanden ist. Trage die Mods andernfalls erneut ein und starte den Server neu.
::::

:::: danger Wichtig
Spieler müssen die Mods nicht manuell herunterladen — der Client lädt die Server-Mods beim Beitreten automatisch. Steam-Workshop-Mods funktionieren jedoch nur mit **deaktiviertem Crossplay** — auf einem Crossplay-Server nutzt du Mods von mod.io.
::::
