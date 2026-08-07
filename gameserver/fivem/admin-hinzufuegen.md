---
description: Administratoren auf einem FiveM Server einrichten
---

# So fügst du einen Admin auf deinem FiveM Server hinzu

Auf einem FiveM Server gibt es zwei voneinander unabhängige Rechtesysteme:

- **txAdmin Admins** — Zugriff auf die txAdmin Web-Oberfläche und auf das In-Game-Menü von txAdmin.
- **ACE-Berechtigungen** in der `server.cfg` — legen fest, wer welche Server- und Script-Befehle ausführen darf.

:::: info Hinweis
Die beiden Systeme haben nichts miteinander zu tun. Ein txAdmin Admin bekommt dadurch **nicht** automatisch ACE-Rechte auf dem Server — und umgekehrt. Wenn ein Spieler beides braucht, musst du ihn in beiden Systemen eintragen.
::::

## Weg 1: Admin in txAdmin anlegen

txAdmin ist in FXServer bereits enthalten. Damit es startet, muss in der Verwaltung deines Servers unter **Einstellungen** das Feld **txAdmin** auf `1` stehen.

Der erste Admin (der **Master Admin**) entsteht bei der Ersteinrichtung von txAdmin und wird dabei mit einem Cfx.re Account verknüpft — der Ablauf steht unter [txAdmin aktivieren](txadmin-aktivieren.md). Alle weiteren Admins legst du danach im **Admin Manager** an.

1. <b>txAdmin öffnen</b><br>
   Öffne die txAdmin Web-Oberfläche und melde dich an.

2. <b>Admin Manager öffnen</b><br>
   Klicke in der oberen Navigation auf **Admins**. Du landest auf der Seite **Admin Manager**.

   :::: info Hinweis
   Der Punkt lässt sich nur öffnen, wenn dein Konto Master Admin ist oder die Berechtigung `all_permissions` bzw. `manage.admins` besitzt. Sonst ist er ausgegraut.
   ::::

3. <b>Neuen Admin anlegen</b><br>
   Klicke oben rechts auf **Add**. Es öffnet sich das Fenster **New Admin**.

4. <b>Daten eintragen</b><br>
   Fülle die Felder aus:

   | Feld | Bedeutung |
   |------|-----------|
   | **Username** | Pflichtfeld. Der Anmeldename des Admins in txAdmin. |
   | **Cfx.re ID** | Optional. Der Benutzername des Admins im [Cfx.re Forum](https://forum.cfx.re/). Wird benötigt, wenn sich der Admin über den Cfx.re Button anmelden soll. |
   | **Discord ID** | Optional. Die Discord User ID des Admins. |

5. <b>Berechtigungen setzen</b><br>
   Setze darunter unter **Permissions** die Haken für die Rechte, die der Admin bekommen soll.

6. <b>Speichern</b><br>
   Klicke auf **Save**. txAdmin zeigt dir anschließend ein temporäres Passwort an (*Please copy the following temporary password*). Kopiere es und gib es dem Admin weiter — beim ersten Login wird er aufgefordert, es zu ändern.

:::: warning Achtung
Die Admins werden in der Datei `txData/admins.json` gespeichert. Bearbeite sie nicht per SFTP, sondern nutze den Admin Manager.
::::

### Verfügbare Berechtigungen

| Berechtigung | Bedeutung |
|--------------|-----------|
| `all_permissions` | Vollzugriff. Wird dieses Recht gesetzt, entfernt txAdmin alle anderen Häkchen. |
| `manage.admins` | Admin-Konten anlegen, bearbeiten und löschen |
| `settings.view` | Einstellungen ansehen (ohne Tokens) |
| `settings.write` | Einstellungen ändern |
| `console.view` | Konsole ansehen |
| `console.write` | Befehle in der Konsole ausführen |
| `control.server` | Server starten, stoppen und neu starten |
| `announcement` | Ankündigungen senden |
| `commands.resources` | Resources starten und stoppen |
| `server.cfg.editor` | `server.cfg` lesen und schreiben |
| `txadmin.log.view` | txAdmin Log ansehen |
| `server.log.view` | Server Logs ansehen |
| `menu.vehicle` | Fahrzeuge spawnen und reparieren |
| `menu.clear_area` | Bereich der Welt zurücksetzen |
| `menu.viewids` | Spieler-IDs im Spiel anzeigen |
| `players.direct_message` | Direktnachrichten an Spieler senden |
| `players.whitelist` | Spieler auf die Whitelist setzen |
| `players.warn` | Spieler verwarnen |
| `players.kick` | Spieler kicken |
| `players.ban` | Spieler bannen und entbannen |
| `players.freeze` | Spieler einfrieren |
| `players.heal` | Sich selbst oder alle heilen |
| `players.playermode` | NoClip, God Mode oder Superjump umschalten |
| `players.spectate` | Spieler beobachten |
| `players.teleport` | Sich selbst oder Spieler teleportieren |
| `players.troll` | Troll-Menü nutzen |
| `players.remove_ids` | IDs und HWIDs eines Spielers aus der Datenbank entfernen |

:::: tip Tipp
Vergib nur die Rechte, die wirklich gebraucht werden. Ein Admin kann zum Beispiel die Konsole ansehen und Spieler kicken, ohne den Server neu starten zu dürfen.
::::

### In-Game-Menü nutzen

Das txAdmin Menü öffnest du im Spiel mit dem Befehl `/tx` oder `/txadmin`. Alternativ kannst du dir unter `Game Settings > Key Bindings > FiveM` eine Taste für **(txAdmin) Menu: Open Main Page** belegen.

:::: warning Achtung
Damit ein Admin das Menü im Spiel öffnen kann, muss in seinem txAdmin Konto entweder die **Discord ID** oder die **Cfx.re ID** hinterlegt sein. Ohne einen dieser beiden Identifier bekommt er keinen Zugriff auf das Menü.
::::

:::: info Hinweis
Passiert beim Befehl `/tx` gar nichts, ist das Menü vermutlich deaktiviert. Erscheint stattdessen eine rote Fehlermeldung, kannst du mit `/txAdmin-reauth` im Chat einen neuen Anmeldeversuch auslösen.
::::

## Weg 2: ACE-Berechtigungen in der server.cfg

Das ACE-System (*Access Control Entries*) von FXServer regelt, wer welche Befehle ausführen darf. Es besteht aus zwei Bausteinen:

- **Principal** — wer: eine Gruppe (z.B. `group.admin`) oder ein einzelner Spieler (`identifier.license:...`)
- **Object** — was: meist ein Befehl in der Schreibweise `command.<name>`

Befehle, die eine Resource mit `RegisterCommand` als *restricted* registriert, kann ein Spieler nur ausführen, wenn ihm das passende `command.<name>` Object erlaubt ist.

### Die wichtigsten Befehle

| Befehl | Funktion |
|--------|----------|
| `add_ace [principal] [object] [allow/deny]` | Fügt der Zugriffsliste einen Eintrag hinzu |
| `add_principal [child_principal] [parent_principal]` | Lässt einen Principal von einem anderen erben (z.B. Spieler → Gruppe) |
| `remove_ace [principal] [object] [allow/deny]` | Entfernt einen Eintrag aus der Zugriffsliste |
| `remove_principal [child_principal] [parent_principal]` | Entfernt eine Vererbung |
| `test_ace [principal] [object]` | Prüft, ob ein Principal auf ein Object zugreifen darf |

### Identifier herausfinden

Für `add_principal` brauchst du den Identifier des Spielers. FiveM kennt diese Typen:

| Typ | Herkunft |
|-----|----------|
| `license` | Rockstar Online Services (Hash) |
| `license2` | Rockstar Online Services (Hash). Bei Steam-Nutzern der ROS-Key, kann denselben Wert wie `license` haben. |
| `steam` | Steam ID (Hex) |
| `discord` | Discord User ID |
| `fivem` | Cfx.re User ID |
| `ip` | IPv4-Adresse |

Es gibt zwei Wege, an den Identifier eines Spielers zu kommen:

- **Über txAdmin** — Öffne die Seite **Players**, klicke den Spieler an und wechsle im Fenster auf den Reiter **IDs**. Dort siehst du alle bekannten Identifier.
- **Über die Konsole** — Führe den Befehl `status` aus. Er listet alle verbundenen Spieler mit ihrem primären Identifier, der Server-ID, dem Namen, dem Endpunkt und dem Ping auf. Bereitgestellt wird der Befehl von der Resource **rconlog** — ist sie nicht gestartet, steht er nicht zur Verfügung.

:::: info Hinweis
Läuft dein Server mit txAdmin, gibst du Befehle wie `status` in der **Live Console** der txAdmin Web-Oberfläche ein. Ohne txAdmin nutzt du die Konsole in der Verwaltung deines Servers.
::::

:::: info Hinweis
Der `steam:` Identifier wird nur zurückgegeben, wenn ein **Steam Web API Key** hinterlegt ist. Das Feld dafür findest du in der Verwaltung deines Servers unter **Einstellungen**.
::::

### Admin in der server.cfg eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>server.cfg öffnen</b><br>
   Öffne die `server.cfg`, die dein Server beim Start ausführt. Wo sie je nach txAdmin Setup liegt, steht in der Anleitung [Port einstellen](port-einstellen.md).

4. <b>Gruppe und Admin eintragen</b><br>
   Ergänze die folgenden Zeilen. So steht der Block auch in der Beispiel-Konfiguration von Cfx.re — nur den Identifier ersetzt du durch deinen eigenen:

   ```
   add_ace group.admin command allow
   add_ace group.admin command.quit deny
   add_principal identifier.license:DEIN_IDENTIFIER group.admin
   ```

   Die erste Zeile erlaubt der Gruppe `group.admin` alle Befehle, die zweite nimmt den Befehl `quit` (Server beenden) wieder heraus. Die dritte Zeile macht einen bestimmten Spieler zum Mitglied der Gruppe.

   :::: info Hinweis
   Vor den Identifier gehört immer das Präfix `identifier.`. In der Cfx.re Dokumentation sieht ein vollständiger Eintrag zum Beispiel so aus: `add_principal identifier.steam:110000112345678 group.admin`. Genauso funktionieren `identifier.discord:...`, `identifier.fivem:...` und `identifier.license:...`.
   ::::

5. <b>Weitere Admins ergänzen</b><br>
   Für jeden weiteren Admin fügst du eine eigene `add_principal` Zeile hinzu:

   ```
   add_principal identifier.license:IDENTIFIER_ZWEI group.admin
   add_principal identifier.license:IDENTIFIER_DREI group.admin
   ```

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: tip Tipp
Du kannst die `server.cfg` auch direkt über den **CFG Editor** in der txAdmin Web-Oberfläche bearbeiten. Dafür brauchst du die Berechtigung `server.cfg.editor`.
::::

:::: info Hinweis
Beim Start schreibt die Verwaltung einige Zeilen der `server.cfg` neu — unter anderem `endpoint_add_tcp`, `endpoint_add_udp`, `sv_hostname`, `set sv_licenseKey`, `set steam_webApiKey` und `sv_maxclients`. Deine `add_ace` und `add_principal` Zeilen sind davon nicht betroffen und bleiben erhalten.
::::

:::: tip Tipp
Wird die Liste deiner Admins länger, kannst du sie in eine eigene Datei auslagern (z.B. `permissions.cfg`) und diese in der `server.cfg` mit `exec permissions.cfg` laden. Der Pfad wird dabei relativ zum Serverdatenverzeichnis angegeben.
::::

:::: danger Wichtig
`add_ace group.admin command allow` erlaubt **alle** Befehle — auch die, mit denen sich der Server abschalten oder umkonfigurieren lässt. Trage hier nur Personen ein, denen du vollständig vertraust, und lege vorher ein [Backup](backup-erstellen.md) an.
::::

## Rechte prüfen

Ob ein Eintrag greift, kannst du in der Konsole testen — mit txAdmin in der **Live Console**, ohne txAdmin in der Konsole deiner Verwaltung:

```
test_ace identifier.license:DEIN_IDENTIFIER command.quit
```

Der Befehl gibt zurück, ob der Principal auf das angegebene Object zugreifen darf.
