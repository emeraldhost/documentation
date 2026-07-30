---
description: Admin auf einem Counter-Strike Global Offensive Server hinzufügen
---

# So fügst du einen Admin auf deinem Counter-Strike Global Offensive Server hinzu

Counter-Strike Global Offensive bringt von Haus aus **kein Adminsystem** mit. Adminrechte im Spiel gibt es ausschließlich über **SourceMod**.

:::: warning Voraussetzung
Metamod:Source und SourceMod müssen auf deinem Server installiert sein. Wie das geht, steht unter [Mods hinzufügen](mods-hinzufuegen.md).
::::

## SteamID herausfinden

Für die Adminliste benötigst du die SteamID im Format `STEAM_0:x:xxxxxxx`.

:::: tip Tipp
Die SteamID eines verbundenen Spielers findest du am schnellsten mit dem Befehl `status` in der Serverkonsole. Alternativ kannst du sie über die [SteamID](../steamid64-herausfinden.md) Website nachschlagen; dort wird neben der SteamID64 auch die benötigte `STEAM_0:`-Schreibweise angezeigt.
::::

## Admin eintragen

1. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

2. <b>Datei öffnen</b><br>
   Öffne folgende Datei:

   ```
   /csgo/addons/sourcemod/configs/admins_simple.ini
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
| `h` | cvar | Die meisten ConVars ändern |
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

:::: info Hinweis
Die Immunitätsstufe steht vor dem Doppelpunkt. Ein Admin mit einer höheren Stufe kann Admins mit einer niedrigeren Stufe kicken oder bannen, umgekehrt nicht. Der Wert `0` bedeutet keine Immunität, das Flag `z` (root) ignoriert Immunitätsstufen vollständig.
::::

## Adminmenü nutzen

1. <b>Server beitreten</b><br>
   Verbinde dich mit deinem Server. Wie das geht, steht unter [Server beitreten](server-beitreten.md).

2. <b>Menü öffnen</b><br>
   Öffne das Adminmenü mit dem Befehl `sm_admin` in der Spielkonsole oder mit `!admin` beziehungsweise `/admin` im Chat.

## Alternative: admins.cfg

Statt der `admins_simple.ini` kannst du Admins auch im KeyValues-Format eintragen:

```
/csgo/addons/sourcemod/configs/admins.cfg
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

:::: tip Tipp
Wie du Spieler als Admin vom Server entfernst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
