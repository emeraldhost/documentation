---
description: "Mods über mod.io auf einem Insurgency: Sandstorm Server hinzufügen"
---

# So fügst du Mods auf deinem Insurgency: Sandstorm Server hinzu

Mods für Insurgency: Sandstorm werden über **mod.io** bereitgestellt. Damit dein Server Mods laden kann, meldet er sich mit einem persönlichen **Access Token** bei mod.io an und lädt die Mods herunter, die du in einer Mod-Liste angibst.

## Schritt 1: mod.io-Konto erstellen

Erstelle ein [mod.io](https://mod.io/)-Konto. Du kannst dich auch mit einem bestehenden Steam-, Xbox-, Google- oder Facebook-Konto anmelden.

## Schritt 2: Access Token generieren

1. <b>Profil öffnen</b><br>
   Klicke oben rechts auf deinen Benutzernamen, um zu deinem Profil zu gelangen.

2. <b>API Access öffnen</b><br>
   Wähle links im Menü **API Access**.

3. <b>Token erstellen</b><br>
   Gib im Abschnitt **OAuth 2 Management** unter **Generate Access Token** einen Namen ein (z.B. `Insurgency Server`) und klicke auf **Create Token**.

4. <b>Token kopieren</b><br>
   Klicke auf den Namen des Tokens, um ihn anzuzeigen, und kopiere ihn vollständig.

   :::: warning Achtung
   Behandle den Access Token wie ein Passwort und teile ihn mit niemandem. Jeder Server benötigt einen **eigenen** Access Token (bzw. ein eigenes mod.io-Konto) — verwende denselben Token nicht auf mehreren Servern.
   ::::

## Schritt 3: Access Token in die Config eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>GameUserSettings.ini öffnen</b><br>
   Die Datei `GameUserSettings.ini` befindet sich im Verzeichnis `Insurgency/Saved/Config/LinuxServer/`. Öffne sie.

4. <b>Token eintragen</b><br>
   Füge folgenden Abschnitt hinzu und ersetze `DEIN_TOKEN` durch deinen Access Token. Existiert der Abschnitt `[/Script/ModKit.ModIOClient]` bereits, ergänze nur die beiden Zeilen darunter:

   ```ini
   [/Script/ModKit.ModIOClient]
   bHasUserAcceptedTerms=True
   AccessToken=DEIN_TOKEN
   ```

   :::: warning Achtung
   Der gesamte Token muss in **einer einzigen Zeile** direkt hinter `AccessToken=` stehen — auch wenn er sehr lang ist. Füge keine Zeilenumbrüche ein. Beim Kopieren von mod.io kann der Token über mehrere Zeilen umgebrochen erscheinen; in der `GameUserSettings.ini` darf er nur eine Zeile belegen. Die Zeile `bHasUserAcceptedTerms=True` ist zwingend erforderlich — ohne sie meldet sich der Server nicht an.
   ::::

## Schritt 4: Mod-IDs finden

1. <b>Mods suchen</b><br>
   Öffne den [Insurgency: Sandstorm Bereich auf mod.io](https://mod.io/g/insurgencysandstorm) und wähle eine gewünschte Mod aus.

2. <b>Mod-ID notieren</b><br>
   Die numerische **Mod-ID** findest du in der URL der Mod-Seite. In einer URL wie `https://mod.io/g/insurgencysandstorm/m/<name>` ist die Mod-ID die **Zahl**, nicht der Namens-Slug. Notiere dir die numerischen IDs aller Mods, die der Server laden soll.

## Schritt 5: Mod-Liste anlegen

1. <b>Ordner anlegen</b><br>
   Erstelle — falls noch nicht vorhanden — den Ordner `Insurgency/Config/Server/`. Im SFTP-Programm (z.B. FileZilla/WinSCP) legst du Ordner per Rechtsklick → **Verzeichnis erstellen** an.

2. <b>Mods.txt erstellen</b><br>
   Lege in diesem Ordner die Datei `Mods.txt` an und trage **eine Mod-ID pro Zeile** ein:

   ```
   1234567
   2345678
   ```

   Am einfachsten erstellst du die `Mods.txt` lokal mit einem Texteditor und lädst sie anschließend hoch. Achte darauf, dass die Datei exakt `Mods.txt` heißt (nicht `Mods.txt.txt` — Windows blendet bekannte Dateiendungen standardmäßig aus).

   :::: tip Tipp
   Alternativ kannst du die Mods über den Startparameter `-CmdModList="1234567,2345678"` angeben, ohne eine `Mods.txt` anzulegen. Mit `-ModList=MeineListe` lädst du eine anders benannte Listen-Datei aus demselben Ordner (praktisch für mehrere Mod-Sets, Dateiname ohne `.txt`). Verwende entweder die `Mods.txt` oder `-CmdModList` — nicht beides gleichzeitig.
   ::::

## Schritt 6: Mods aktivieren und Server starten

1. <b>Parameter prüfen</b><br>
   Öffne in der Verwaltung die **Einstellungen** und stelle sicher, dass im Feld **Zusätzliche Parameter** der Parameter `-Mods` gesetzt ist, und speichere die Einstellung. Optional kannst du `-ModDownloadTravelTo=MAP?Scenario=SZENARIO` ergänzen, damit der Server nach dem Download automatisch auf die modifizierte Karte wechselt. Die genauen Werte für `MAP` und `SZENARIO` stehen in der Beschreibung der jeweiligen Karten-Mod auf mod.io bzw. im [Server Admin Guide](https://mod.io/g/insurgencysandstorm/r/server-admin-guide).

2. <b>Server starten</b><br>
   Starte deinen Server. Beim Start meldet er sich mit dem Access Token bei mod.io an und lädt die Mods aus deiner Liste herunter.

   :::: info Hinweis
   Bei manchen Mods (z.B. eigenen Karten) müssen auch die Spieler die Mod abonnieren bzw. herunterladen, um beitreten zu können.
   ::::

## Mods überprüfen und Fehlerbehebung

:::: info Hinweis
Prüfe nach dem Start die **Server-Konsole** in der Verwaltung: Du solltest die Anmeldung bei mod.io sowie pro Mod-ID eine Download-Zeile sehen. Eine modifizierte Karte erscheint außerdem beim Verbinden bzw. in der Server-Übersicht.
::::

Wenn keine Mods geladen werden, prüfe folgende häufige Ursachen:

- Der `AccessToken` wurde nicht vollständig kopiert oder enthält Zeilenumbrüche/Leerzeichen — füge den kompletten Token erneut in **einer** Zeile ein.
- Die Zeile `bHasUserAcceptedTerms=True` fehlt oder lautet nicht exakt `True`.
- Der Parameter `-Mods` ist nicht im Feld **Zusätzliche Parameter** gesetzt — ohne ihn lädt der Server nichts herunter.
- Falsche oder nicht-numerische Mod-IDs bzw. leere Zeilen in der `Mods.txt`.
- Die `GameUserSettings.ini` wurde bei laufendem Server bearbeitet und beim Beenden überschrieben — stoppe den Server immer **vor** dem Bearbeiten.
- Es wurde die falsche Datei bearbeitet — die `GameUserSettings.ini` liegt unter `Insurgency/Saved/Config/LinuxServer/`.

## Mods aktualisieren oder entfernen

- <b>Entfernen:</b> Lösche die entsprechende Mod-ID aus der `Mods.txt` (bzw. aus `-CmdModList`) und starte den Server neu.
- <b>Aktualisieren:</b> Der Server lädt beim Start die aktuelle Version von mod.io. Wird hartnäckig eine alte Version geladen, kannst du den zwischengespeicherten Mod-Download löschen, damit der Server die Mod neu herunterlädt.

## Mutatoren

Manche Mods benötigen zusätzlich aktivierte **Mutatoren**. Wie du sie aktivierst, erfährst du in der Anleitung [Mutatoren hinzufügen](mutatoren-hinzufuegen.md).

:::: info Hinweis
Einige Mods benötigen zusätzliche Einträge in der `Game.ini` (`Insurgency/Saved/Config/LinuxServer/Game.ini`). Wenn eine Mod zwar lädt, aber nichts bewirkt, prüfe die Mod-Beschreibung auf mod.io auf erforderliche Konfigurationsschlüssel.
::::
