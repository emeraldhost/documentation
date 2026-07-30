---
description: Spieler auf einem The Forest Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem The Forest Server

Spieler entfernst du auf einem The Forest Server über **Chat-Befehle im Spiel**. Angegeben wird dabei immer die **SteamID64** des Spielers – eine 17-stellige Zahl, die mit `7656` beginnt.

:::: info Hinweis
Die Befehle stehen nur Spielern zur Verfügung, die beim Beitreten das Admin-Passwort eingetragen haben. Siehe [Admin hinzufügen](admin-hinzufuegen.md).
::::

:::: tip Tipp
Hier findest du eine Anleitung, wie du eine [SteamID64](../steamid64-herausfinden.md) herausfindest.
::::

## Befehle im Spiel nutzen

1. <b>Als Admin beitreten</b><br>
   Trage beim Beitritt das Admin-Passwort ein, sonst werden die Befehle ignoriert.

2. <b>Chat öffnen</b><br>
   Drücke im Spiel `Enter`, um den Chat zu öffnen.

3. <b>Befehl eingeben</b><br>
   Alle Adminbefehle beginnen mit `/`, zum Beispiel:

   ```
   /ban 76561198012345678
   ```

## Spieler kicken

```
/kick <SteamID64>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
/ban <SteamID64>
```

Der Spieler wird vom Server geworfen und kann sich nicht mehr verbinden.

## Bann aufheben

```
/unban <SteamID64>
```

:::: warning Achtung
`/unban` ist in der offiziellen Befehlsliste von The Forest **nicht** aufgeführt, wird aber von mehreren Hostern beschrieben. Es kann daher sein, dass der Befehl auf deiner Serverversion nicht funktioniert. Eine Bann-Datei, die du per SFTP bearbeiten könntest, gibt es nicht – The Forest legt keine dokumentierte Banliste im Dateisystem ab. Ebenso ist nicht dokumentiert, ob Banns einen Serverneustart überdauern.
::::

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `/help` | Liste aller verfügbaren Befehle anzeigen |
| `/kick <SteamID64>` | Spieler vom Server trennen |
| `/ban <SteamID64>` | Spieler aussperren |
| `/save <1-5>` | Spielstand auf dem angegebenen Slot speichern |
| `/restart` | Server neu starten |
| `/shutdown` | Server herunterfahren |
| `/openlogs` | Log-Fenster öffnen |
| `/closelogs` | Log-Fenster schließen |
| `/treeregrowmode on\|off` | Nachwachsen gefällter Bäume ein- oder ausschalten |
| `/allowbuildingdestruction on\|off` | Zerstörung von Gebäuden erlauben oder verbieten |
| `/allowenemiescreative on\|off` | Gegner im Kreativmodus erlauben oder verbieten |

:::: danger Wichtig
Nutze `/restart` **nicht** zum Neustarten deines Servers: Laut offizieller Befehlsliste setzt dieser Befehl den Spielstand zurück – die Speicherdaten werden dabei gelöscht. Starte deinen Server stattdessen über die **Verwaltung** neu. Erstelle vorher ein [Backup](backup-erstellen.md).
::::

:::: warning Achtung
`/save <1-5>` speichert auf dem angegebenen Slot – gibst du einen anderen Slot als den deines Servers an, überschreibst du damit möglicherweise einen anderen Spielstand.
::::

## Keine Konsole in der Verwaltung

:::: info Hinweis
Die Konsole in der Verwaltung zeigt bei The Forest ausschließlich die Ausgaben des Servers an. Der Server nimmt dort **keine** Befehle entgegen – alle Adminbefehle laufen über den Chat im Spiel.
::::

## Keine Whitelist

:::: warning Achtung
The Forest hat **keine Whitelist-Funktion**. Möchtest du deinen Server nur bestimmten Spielern zugänglich machen, setze ein Server-Passwort und gib es nur an diese Spieler weiter.
::::
