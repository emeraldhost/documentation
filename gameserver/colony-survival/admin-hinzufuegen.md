---
description: Admin auf einem Colony Survival Server hinzufügen
---

# So fügst du einen Admin auf deinem Colony Survival Server hinzu

Colony Survival verwaltet Rechte über **Gruppen**. Jeder Spieler startet in der Gruppe `peasant`; Adminrechte bekommt er, indem du ihn einer höheren Gruppe zuweist. Auf einem frischen Server gibt es aber noch niemanden, der diese Zuweisung im Spiel vornehmen dürfte – deshalb legst du den ersten Admin über eine Datei fest.

:::: tip Tipp
Für den Eintrag in die Datei benötigst du die SteamID64 des Spielers. Hier findest du eine Anleitung, wie du deine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Die Rechtegruppen

| Gruppe | Rechte |
|--------|--------|
| `peasant` | Standardgruppe für alle Spieler – normales Spielen ohne Adminbefehle |
| `king` | Cheats, Teleport, Zeit- und Loot-Befehle sowie `/save`, `/backup` und das Stoppen des Servers |
| `god` | Enthält alle Rechte von `king` und darf zusätzlich Rechte vergeben sowie Whitelist und Blacklist verwalten |

:::: info Hinweis
Für die volle Adminrolle – inklusive Bannen und Vergeben von Rechten an andere Spieler – brauchst du die Gruppe `god`.
::::

## Ersten Admin eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Datei öffnen oder anlegen</b><br>
   Wechsle in den Ordner deiner Welt und öffne dort die Datei `permissionusers.json`. `<Weltname>` ist der Ordnername deiner Welt – er entspricht dem Feld **World Name** in der Verwaltung:

   ```
   /gamedata/savegames/<Weltname>/permissionusers.json
   ```

   :::: info Hinweis
   Die Datei existiert anfangs nicht. Lege sie in diesem Fall neu an.
   ::::

4. <b>SteamID64 eintragen</b><br>
   Trage deine SteamID64 mit der Gruppe `god` ein. Wichtig: Vor der SteamID64 steht ein `1.` – das ist die Kennung für einen Steam-Spieler und gehört zwingend dazu:

   ```json
   {
     "1.76561198012345678": {
       "includes": ["god"]
     }
   }
   ```

   Mehrere Admins trennst du durch ein Komma:

   ```json
   {
     "1.76561198012345678": {
       "includes": ["god"]
     },
     "1.76561198087654321": {
       "includes": ["king"]
     }
   }
   ```

   :::: warning Achtung
   Ohne das vorangestellte `1.` erkennt der Server den Eintrag nicht und du bleibst ohne Rechte. Enthält die Datei bereits Einträge wie `"2.0"` oder `"3.0"`, lass sie unverändert stehen und ergänze deinen Eintrag daneben.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

6. <b>Rechte prüfen</b><br>
   Tritt deinem Server bei, drücke `T` für den Chat und gib einen Adminbefehl ein, zum Beispiel:

   ```
   /reloadpermission
   ```

   Läuft der Befehl durch, hast du Adminrechte. Fehlen dir die Rechte, meldet der Server, dass dir die passende Berechtigung fehlt.

:::: warning Achtung
Achte auf gültiges JSON: doppelte Anführungszeichen, Kommas zwischen den Einträgen und kein Komma hinter dem letzten Eintrag. Ist die Datei fehlerhaft, werden die Rechte nicht übernommen.
::::

## Weitere Admins im Spiel hinzufügen

Sobald du selbst in der Gruppe `god` bist, vergibst du alle weiteren Rechte bequem im Chat.

1. <b>Chat öffnen</b><br>
   Drücke im Spiel `T`, um den Chat zu öffnen.

2. <b>Gruppe zuweisen</b><br>
   Weise dem Spieler die gewünschte Gruppe zu – wahlweise über seinen Spielernamen oder seine SteamID64:

   ```
   /setgroup god Sam
   ```

   ```
   /setgroup king 76561198012345678
   ```

   :::: info Hinweis
   Enthält der Spielername Leerzeichen, setzt du ihn in Anführungszeichen: `/setgroup god "The Dragon Whisperer"`
   ::::

3. <b>Rechte entziehen</b><br>
   Zum Zurücknehmen entfernst du die Gruppe wieder:

   ```
   /removegroup god Sam
   ```

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/setgroup <Gruppe> <Spieler>` | Setzt die Gruppe eines Spielers |
| `/addgroup <Gruppe> <Spieler>` | Fügt einem Spieler eine zusätzliche Gruppe hinzu |
| `/removegroup <Gruppe> <Spieler>` | Entfernt eine Gruppe wieder |
| `/addpermission <Recht> <Spieler>` | Vergibt ein einzelnes Recht |
| `/removepermission <Recht> <Spieler>` | Entzieht ein einzelnes Recht |
| `/reloadpermission` | Lädt die Rechtedateien neu ein |
| `/save` | Speichert die Welt |
| `/backup` | Erstellt ein Backup der Welt |
| `/tps` | Zeigt die Serverleistung an |
| `/time day` · `/time night` · `/time add <Stunden>` | Steuert die Tageszeit |
| `/worldseed` | Zeigt den Seed der Welt an |
| `/colony addowner <Spieler>` · `/colony removeowner <Spieler>` | Verwaltet die Mitbesitzer einer Kolonie |

:::: info Hinweis
Adminbefehle gibst du immer im Chat im Spiel ein. Der Chat öffnet sich mit `T`, alternativ direkt mit `/`.
::::

## Eigene Rechtegruppen anlegen

:::: tip Tipp
Die Standardgruppen liegen in `/gamedata/settings/permissiongroups.json`. Diese Datei wird bei Updates überschrieben. Möchtest du eigene Gruppen definieren, kopiere sie in den Ordner deiner Welt:

```
/gamedata/savegames/<Weltname>/permissiongroups.json
```

Dort bleiben deine Anpassungen auch nach einem Update erhalten.
::::

:::: danger Cheat-Befehle schalten Erfolge dauerhaft ab
Einige Befehle stehen erst zur Verfügung, wenn du mit `/disableachievements` die Cheats aktivierst. Dieser Schritt lässt sich für die betroffene Welt **nicht rückgängig machen** – Steam-Erfolge sind darin danach dauerhaft deaktiviert.
::::

:::: tip Tipp
Wie du Spieler vom Server aussperrst, erfährst du unter [Spieler kicken & bannen](spieler-kicken-bannen.md).
::::
