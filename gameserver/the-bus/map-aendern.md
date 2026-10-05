---
description: Map auf einem The Bus Server ändern
---

# So änderst du die Map auf einem The Bus Server

Die Basiskarte von The Bus ist **Berlin** mit den Linien TXL, 100, N100, 123, 142, 147, 200, 245 und 300. Weitere Karten kommen aus DLCs (aktuell das DLC Hamburg City, im Spiel als Karte **Hamburg** auswählbar) oder aus Map-Mods, die du im Ordner `/TheBus/Mods/` installierst.

Du kannst die aktive Karte über das **Admin-Menü** oder per **Befehl** im Ingame-Chat ändern.

:::: info Hinweis
Alle Spieler benötigen das DLC der jeweiligen Karte bzw. die Map-Mod, sofern diese auch auf dem Client benötigt wird, um auf der Karte beitreten und spielen zu können.
::::

:::: tip Tipp
Erstelle vor einem Kartenwechsel ein [Backup](backup-erstellen.md). Savegames und Fahrpläne gehören jeweils zu einer bestimmten Karte.
::::

## So änderst du die Map über das Admin-Menü

1. <b>Server beitreten</b><br>
   Tritt deinem Server im Spiel bei, siehe [Server beitreten](server-beitreten.md).

2. <b>Admin-Menü öffnen</b><br>
   Öffne im Spiel das Pausenmenü und wähle das **Admin-Menü**. Bist du noch kein Admin, gib das Admin-Passwort deines Servers ein, siehe [Admin hinzufügen](admin-hinzufuegen.md).

3. <b>Karte auswählen</b><br>
   Wähle im Admin-Menü die gewünschte Karte aus.

:::: info Hinweis
Seit Update 3.2 EA wird die im Admin-Menü gewählte Karte gespeichert und bleibt auch nach einem Neustart deines Servers erhalten.
::::

## So änderst du die Map per Befehl

Alternativ kannst du die Karte über den Ingame-Chat wechseln. Dafür benötigst du Owner- oder Admin-Rechte, siehe [Admin hinzufügen](admin-hinzufuegen.md).

1. <b>Verfügbare Karten anzeigen</b><br>
   Gib folgenden Befehl im Ingame-Chat ein, um alle verfügbaren Karten aufzulisten:
   ```
   /mapList
   ```

2. <b>Karte wechseln</b><br>
   Gib folgenden Befehl ein und ersetze `<Kartenname>` durch den Namen der Karte genau so, wie ihn `/mapList` ausgibt:
   ```
   /map <Kartenname>
   ```
   Für die Hamburg-Karte lautet der Befehl zum Beispiel:
   ```
   /map Hamburg
   ```

   :::: tip Tipp
   Um zurück zur Standardkarte Berlin zu wechseln, verwende `/map` mit dem Namen, den `/mapList` für Berlin ausgibt.
   ::::

:::: info Hinweis
Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
::::

## So fügst du weitere Karten hinzu

- Eine vollständige Anleitung für den Wechsel auf Hamburg findest du unter [DLC-Karte spielen](dlc-karte-hinzufuegen.md).
- Wie du Map-Mods installierst, erfährst du unter [Mods hinzufügen](mods-hinzufuegen.md).
