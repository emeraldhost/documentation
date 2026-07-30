---
description: Admin auf einem IOSoccer Server hinzufügen
---

# So fügst du einen Admin auf deinem IOSoccer Server hinzu

IOSoccer bringt von Haus aus **kein Adminsystem** mit. Es gibt keine Adminliste im Spiel und keine Servereinstellung, mit der du einen Spieler zum Admin machst. Verwaltet wird der Server über die **Serverkonsole** beziehungsweise **RCON** — Adminrechte direkt im Spiel gibt es ausschließlich über **SourceMod**.

:::: info Hinweis
Die Kapitänsfunktionen `mp_captaincy_home` und `mp_captaincy_away` haben nichts mit Adminrechten zu tun — sie steuern nur, wer im Spiel Mannschaftskapitän ist. Ein Abstimmungssystem, über das Spieler selbst Entscheidungen treffen könnten, hat IOSoccer ebenfalls nicht.
::::

:::: warning Voraussetzung
Metamod:Source und SourceMod müssen auf deinem Server installiert sein. Wie das geht, steht unter [Mods hinzufügen](mods-hinzufuegen.md).
::::

## SteamID herausfinden

Für die Adminliste benötigst du die SteamID im Format `STEAM_0:x:xxxxxxx`.

:::: tip Tipp
Die SteamID eines verbundenen Spielers findest du am schnellsten mit dem Befehl `status` in der Serverkonsole. Alternativ kannst du sie über die [SteamID](../steamid64-herausfinden.md) Website nachschlagen; dort wird neben der SteamID64 auch die benötigte `STEAM_0:`-Schreibweise angezeigt.
::::

:::: info Hinweis
Statt `STEAM_0:1:12345678` kannst du auch das Steam3-Format `[U:1:24691357]` eintragen. Beide Schreibweisen funktionieren.
::::

## Admin eintragen

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Datei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /iosoccer/addons/sourcemod/configs/admins_simple.ini
   ```

3. <b>Spieler eintragen</b><br>
   Trage pro Zeile einen Admin ein. Der Aufbau einer Zeile sieht so aus:

   ```
   "<SteamID | !IP | Steam-Name>" "[Immunitätsstufe:]<Flags | @Gruppe>" ["Passwort"]
   ```

   Beispiele:

   ```
   "STEAM_0:1:16"		"bce"			// generic, kick, unban für diese SteamID, keine Immunität
   "STEAM_0:1:12345678"	"99:z"			// alle Rechte, Immunitätsstufe 99
   "[U:1:24691357]"	"z"			// gleiche Rechte über das Steam3-Format
   "!127.0.0.1"		"5:z"			// alle Rechte für diese IP, Immunitätsstufe 5
   ```

4. <b>Änderungen übernehmen</b><br>
   Speichere die Datei und gib in der Serverkonsole folgenden Befehl ein:

   ```
   sm_reloadadmins
   ```

   Alternativ startest du deinen Server neu.

:::: info Hinweis
Ein `!` vor dem Eintrag kennzeichnet eine IP-Adresse. Trägst du stattdessen einen Steam-Namen ein, solltest du in der dritten Spalte ein Passwort setzen — sonst kann jeder Spieler mit diesem Namen die Rechte übernehmen.
::::

## Rechte-Flags im Überblick

| Flag | Name | Bedeutung |
|------|------|-----------|
| `a` | reservation | Zugriff auf reservierte Slots |
| `b` | generic | Allgemeiner Adminstatus — für jeden Admin erforderlich |
| `c` | kick | Andere Spieler kicken |
| `d` | ban | Andere Spieler bannen |
| `e` | unban | Banns aufheben |
| `f` | slay | Spieler töten oder verletzen |
| `g` | changemap | Map wechseln oder zentrale Spielfunktionen ändern |
| `h` | cvars | Die meisten ConVars ändern |
| `i` | config | Konfigurationsdateien ausführen |
| `j` | chat | Besondere Chat-Rechte |
| `k` | vote | Abstimmungen starten oder erstellen |
| `l` | password | Passwort auf dem Server setzen |
| `m` | rcon | RCON-Befehle nutzen |
| `n` | cheats | `sv_cheats` ändern und Cheat-Befehle nutzen |
| `o` – `t` | custom1 – custom6 | Eigene Gruppen 1 bis 6 |
| `z` | root | Aktiviert alle Flags und ignoriert Immunität |

:::: danger Wichtig
Das Flag `b` (generic) ist Pflicht für jeden Admin. Ohne dieses Flag wird ein Eintrag nicht als Admin behandelt. Wer alle Rechte bekommen soll, erhält stattdessen `z`.
::::

## Adminmenü nutzen

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server. Wie das geht, steht unter [Server beitreten](server-beitreten.md).

2. <b>Menü öffnen</b><br>
   Öffne das Adminmenü mit dem Befehl `sm_admin` in der Spielkonsole oder mit `!admin` beziehungsweise `/admin` im Chat.

## Alternative: admins.cfg

Statt der `admins_simple.ini` kannst du Admins auch im KeyValues-Format eintragen:

```
/iosoccer/addons/sourcemod/configs/admins.cfg
```

```
Admins
{
	"Spielername"
	{
		"auth"		"steam"
		"identity"	"STEAM_0:1:12345678"
		"flags"		"abcdef"
	}
}
```

:::: info Hinweis
Beide Dateien werden von SourceMod ausgelesen. Nutze am besten nur eine davon, damit du den Überblick behältst.
::::

## Ohne Mods: Serverkonsole und RCON

Möchtest du keine Plugins installieren, bleibt dir die **Serverkonsole** in der Verwaltung. Dort führst du alle Serverbefehle direkt aus, ohne im Spiel Admin zu sein — auch die Matchsteuerung mit `sv_restart`, `sv_endmatch`, `sv_startpenalties`, `sv_starttimeout` und `sv_endtimeout`.

Zusätzlich lässt sich RCON nutzen, um dieselben Befehle von außerhalb auszuführen. Das RCON-Passwort bekommt dein Server bei jedem Start übergeben — du setzt es deshalb in der Verwaltung:

1. <b>Verwaltung öffnen</b><br>
   Öffne die **Verwaltung** deines Servers und wechsle zu den **Einstellungen**.

2. <b>Passwort eintragen</b><br>
   Trage im Feld **RCON Passwort** ein langes, einmaliges Passwort ein.

3. <b>Server neu starten</b><br>
   Speichere die Änderung und starte deinen Server neu. Das Passwort wird beim Start übergeben und gilt daher erst nach einem Neustart.

:::: danger Wichtig
Ab Werk ist ein Standardpasswort hinterlegt. Ändere es unbedingt, bevor dein Server öffentlich erreichbar ist. RCON läuft bei IOSoccer über TCP auf derselben Portnummer wie das Spiel — einen eigenen RCON-Port gibt es nicht. Wer dein RCON-Passwort kennt, hat die volle Kontrolle über deinen Server. Nutze im Zweifel einfach die eingebaute Konsole in der **Verwaltung**.
::::

### RCON absichern

Diese Werte trägst du zusätzlich per [SFTP](../sftp-verbindung-herstellen.md) in die `/iosoccer/cfg/server.cfg` ein. Existiert die Datei noch nicht, lege sie an:

| Einstellung | Bedeutung |
|-------------|-----------|
| `sv_rcon_maxfailures` | Anzahl fehlgeschlagener Anmeldungen, nach der eine IP gesperrt wird |
| `sv_rcon_minfailures` | Anzahl der Fehlversuche innerhalb von `sv_rcon_minfailuretime`, nach der eine IP gesperrt wird |
| `sv_rcon_minfailuretime` | Zeitraum in Sekunden, über den Fehlversuche mitgezählt werden |
| `sv_rcon_banpenalty` | Dauer der Sperre in Minuten |

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
