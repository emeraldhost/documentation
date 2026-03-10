---
description: Mods auf einem ARK Survival Evolved Server hinzufügen
---

# So fügst du Mods zu deinem ARK Survival Evolved Server hinzu

Du kannst Steam Workshop Mods auf deinem Server hinzufügen, um das Spielerlebnis zu erweitern.

:::: warning Achtung
Nach einem Spielupdate können Mods inkompatibel sein und Abstürze verursachen.
::::

## Mod-ID herausfinden

1. <b>Steam Workshop öffnen</b><br>
   Öffne den [Steam Workshop für ARK](https://steamcommunity.com/app/346110/workshop/) und suche den gewünschten Mod.

2. <b>Mod-ID kopieren</b><br>
   Die Mod-ID findest du in der URL der Workshop-Seite. Kopiere die Zahl nach `?id=`.

   :::: tip Beispiel
   In der URL `https://steamcommunity.com/sharedfiles/filedetails/?id=1785800853` ist die Mod-ID `1785800853`.
   ::::

## Mods zum Server hinzufügen

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Mod-IDs eintragen</b><br>
   Trage im Feld **Mods** die Mod-IDs durch Komma getrennt ein.

   :::: tip Beispiel
   ```
   1785800853,731604991,889745138
   ```
   ::::

4. <b>Server neu starten</b><br>
   Speichere die Einstellung und starte deinen Server neu. Die Mods werden beim Start automatisch heruntergeladen und installiert.

:::: info Hinweis
Die Reihenfolge der Mod-IDs bestimmt die Ladereihenfolge. Der erste Mod wird als Hauptmod geladen.
::::

:::: danger Wichtig
Alle Spieler müssen die **gleichen Mods** über den Steam Workshop abonniert haben, um dem Server beitreten zu können.
::::
