---
description: Mods über mod.io auf einem Mordhau Server hinzufügen
---

# So fügst du Mods auf deinem Mordhau Server hinzu

Mods für Mordhau werden über **mod.io** bereitgestellt – nicht über den Steam Workshop. Du lädst dabei keine Dateien hoch: Du trägst nur die **numerische mod.io-ID** der Mod in die `Game.ini` ein, der Server lädt sie beim Start selbst herunter.

:::: danger Wichtig
Anleitungen, die für Mordhau von Steam-Workshop-IDs sprechen, sind falsch. Mordhau nutzt ausschließlich [mod.io](https://mod.io/g/mordhau).
::::

## Mod-ID finden

1. <b>mod.io öffnen</b><br>
   Öffne den [Mordhau-Bereich auf mod.io](https://mod.io/g/mordhau) und suche dir die gewünschte Mod aus.

2. <b>ID übernehmen</b><br>
   Jede Mod hat eine eigene numerische ID, zum Beispiel `1700790`. Genau diese Zahl trägst du später ein – nicht den Namen der Mod.

   :::: tip Tipp
   Viele Mod-Beschreibungen enthalten die fertigen Zeilen für die `Game.ini`, inklusive der ID und – bei Karten-Mods – des passenden Kartennamens. Lies die Beschreibung immer durch, bevor du die Mod einträgst.
   ::::

## Mods eintragen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

   :::: warning Achtung
   Bearbeite die `Game.ini` ausschließlich bei gestopptem Server. Mordhau schreibt die Datei beim Beenden komplett neu und entfernt dabei unter anderem Kommentare – Änderungen im laufenden Betrieb gehen verloren.
   ::::

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Game.ini öffnen</b><br>
   Öffne folgende Datei:

   ```
   /Mordhau/Saved/Config/LinuxServer/Game.ini
   ```

4. <b>Mod-IDs eintragen</b><br>
   Ergänze im Abschnitt `[/Script/Mordhau.MordhauGameSession]` pro Mod eine eigene `Mods=`-Zeile:

   ```ini
   [/Script/Mordhau.MordhauGameSession]
   Mods=1700790
   Mods=2673283
   ```

   :::: info Hinweis
   Jede ID braucht eine eigene Zeile. Mehrere IDs durch Komma getrennt in eine Zeile zu schreiben, funktioniert nicht.
   ::::

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server. Beim Start lädt er die eingetragenen Mods herunter und bindet sie ein. Der erste Start dauert dadurch länger als gewohnt.

## Karten-Mods in die Rotation aufnehmen

Eine Karten-Mod wird durch den `Mods=`-Eintrag nur heruntergeladen – gespielt wird sie erst, wenn die Karte auch in der Rotation steht. Ergänze dazu im Abschnitt `[/Script/Mordhau.MordhauGameMode]` eine `MapRotation=`-Zeile mit dem Kartennamen aus der Mod-Beschreibung:

```ini
[/Script/Mordhau.MordhauGameSession]
Mods=2673283

[/Script/Mordhau.MordhauGameMode]
MapRotation=HRD_Catacombs
```

:::: info Hinweis
Der Kartenname ist nicht der Anzeigename der Mod, sondern der interne Name der Karte. Er steht in der Beschreibung der jeweiligen Mod auf mod.io.
::::

## Mods, die einen Server-Actor benötigen

Manche Gameplay-Mods müssen zusätzlich beim Kartenstart geladen werden. Solche Mods geben in ihrer Beschreibung einen Pfad an, den du unter `[/Script/Mordhau.MordhauGameMode]` einträgst:

```ini
[/Script/Mordhau.MordhauGameMode]
SpawnServerActorsOnMapLoad=/ServerSideCmds/BP_ServerSideCMDs.BP_ServerSideCMDs_C
```

:::: warning Achtung
Trage hier nur den Pfad ein, den die Mod-Beschreibung ausdrücklich nennt. Ein selbst zusammengesetzter Pfad führt dazu, dass die Mod nicht startet.
::::

## Nicht jede Mod läuft auf einem Linux-Server

:::: danger Wichtig
Dein Server läuft unter Linux. **Server-seitige Mods** (auf mod.io häufig als „server-side" oder „server only" gekennzeichnet) funktionieren dort zuverlässig. **Karten- und Content-Mods** werden von ihren Erstellern dagegen meist nur für Windows erzeugt und können auf einem Linux-Server fehlerhaft sein – etwa durch Spieler, die durch den Boden oder durch Objekte fallen.

Prüfe deshalb vor dem Einsatz einer Karten-Mod, ob der Ersteller Linux-Server ausdrücklich unterstützt, und teste die Karte auf deinem Server, bevor du sie in die öffentliche Rotation nimmst.
::::

## Clientseitige Mods

Ob die Spieler eine Mod ebenfalls benötigen, hängt von der Mod ab: Reine Server-Mods laufen ausschließlich auf dem Server, Karten- und Content-Mods brauchen die Spieler auch lokal. Was für deine Mod gilt, steht in ihrer Beschreibung auf mod.io.

Ob clientseitige Mods auf deinem Server überhaupt erlaubt sind, steuerst du über folgenden Eintrag im Abschnitt `[/Script/Mordhau.MordhauGameMode]`:

```ini
[/Script/Mordhau.MordhauGameMode]
bDisableClientMods=False
```

| Wert | Bedeutung |
|------|-----------|
| `False` | Clientseitige Mods sind erlaubt |
| `True` | Clientseitige Mods werden auf deinem Server unterbunden |

## Mod entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die **Verwaltung**.

2. <b>Einträge löschen</b><br>
   Entferne die `Mods=`-Zeile der Mod aus der `Game.ini` – und, falls vorhanden, auch die zugehörigen Einträge unter `MapRotation=` und `SpawnServerActorsOnMapLoad=`.

3. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Bleibt eine Karte in der `MapRotation=` stehen, deren Mod du entfernt hast, versucht der Server auf eine nicht vorhandene Karte zu wechseln. Räume beide Einträge immer gemeinsam auf.
::::

:::: info Hinweis
Der Ordner `LinuxServer` und die `Game.ini` entstehen erst, nachdem dein Server einmal vollständig gestartet ist. Findest du die Datei nicht, starte deinen Server einmal und stoppe ihn wieder.
::::
