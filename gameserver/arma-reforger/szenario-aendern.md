---
description: Szenario auf einem Arma Reforger Server ändern und Workshop-Szenarien hinzufügen
---

# So änderst du das Szenario auf deinem Arma Reforger Server

Du kannst sowohl offizielle als auch benutzerdefinierte Workshop-Szenarien auf deinem Server verwenden.

## Szenario ändern

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Szenario ID eintragen</b><br>
   Trage die gewünschte Szenario ID in das Feld **Szenario ID** ein.

   :::: tip Beispiel
   ```
   {ECC61978EDCC2B5A}Missions/23_Campaign.conf
   ```
   ::::

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu.

### Verfügbare Szenarien

| Szenario | Szenario ID |
|----------|-------------|
| Tutorial | `{90F086877C27B6F6}Missions/99_Tutorial.conf` |
| Conflict | `{ECC61978EDCC2B5A}Missions/23_Campaign.conf` |
| Game Master - Everon | `{59AD59368755F41A}Missions/21_GM_Eden.conf` |
| Game Master - Arland | `{2BBBE828037C6F4B}Missions/22_GM_Arland.conf` |
| Conflict: St. Philippe & Morton | `{C700DB41F0C546E1}Missions/23_Campaign_NorthCentral.conf` |
| Conflict: Morton & St. Pierre | `{28802845ADA64D52}Missions/23_Campaign_SWCoast.conf` |
| Combat Ops: Arland | `{DAA03C6E6099D50F}Missions/24_CombatOps.conf` |
| Conflict: Arland | `{C41618FD18E9D714}Missions/23_Campaign_Arland.conf` |
| Combat Ops - Everon | `{DFAC5FABD11F2390}Missions/26_CombatOpsEveron.conf` |

## Workshop-Szenario hinzufügen

Du kannst auch benutzerdefinierte Szenarien aus dem [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) verwenden.

### Mod-Informationen finden

1. <b>Workshop öffnen</b><br>
   Öffne den [Arma Reforger Workshop](https://reforger.armaplatform.com/workshop) und suche das gewünschte Szenario.

2. <b>Informationen notieren</b><br>
   Notiere dir die folgenden Informationen von der Workshop-Seite:
   - **Mod-ID** — die ID des Mods
   - **Name** — der Name des Mods
   - **Version** — die aktuelle Versionsnummer
   - **Szenario ID** — zu finden im Tab **Scenarios**

### config.json anpassen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>config.json öffnen</b><br>
   Öffne die Datei `config.json` im Datei-Browser.

3. <b>Mod hinzufügen</b><br>
   Suche den `"mods"`-Bereich und füge den Mod hinzu:

   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985",
       "version": "1.0.26"
     }
   ]
   ```

   Für mehrere Mods trennst du die Einträge mit einem Komma:

   ```json
   "mods": [
     {
       "modId": "596338F447D34E39",
       "name": "NightOps - Everon 1985",
       "version": "1.0.26"
     },
     {
       "modId": "59655E11FDD04B97",
       "name": "Raid on Saint Pierre",
       "version": "1.0.49"
     }
   ]
   ```

4. <b>Szenario ID setzen</b><br>
   Trage die Szenario ID des Workshop-Szenarios in der Verwaltung unter **Einstellungen** im Feld **Szenario ID** ein.

   :::: tip Beispiel
   ```
   {1C7C31ACBB314DCF}Missions/MissionHeader_1.conf
   ```
   ::::

5. <b>Server starten</b><br>
   Speichere alle Änderungen und starte deinen Server.

:::: info Hinweis
Wenn ein Workshop-Szenario aktualisiert wird, musst du die Versionsnummer in der `config.json` ebenfalls anpassen.
::::

:::: tip Tipp
Du kannst die Mod-Informationen auch lokal finden, nachdem du den Mod im Spiel abonniert hast. Öffne dazu die Datei `ServerData.json` im Ordner `Dokumente/My Games/ArmaReforger/addons/`.
::::
