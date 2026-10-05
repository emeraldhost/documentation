---
description: Mods auf einem The Bus Server installieren
---

# So installierst du Mods auf einem The Bus Server

The Bus unterstützt Mods über den **Steam Workshop**. Mods werden auf dem Server im Ordner `/TheBus/Mods/` abgelegt. Kompatible Mods werden auf dem Server immer automatisch aktiviert – du musst sie nach dem Hochladen nicht zusätzlich einschalten.

:::: tip Tipp
Mods für The Bus findest du im [Steam Workshop](https://steamcommunity.com/workshop/browse/?appid=491540).
::::

## So installierst du Mods

1. <b>Mod herunterladen</b><br>
   Abonniere die gewünschten Mods im [Steam Workshop für The Bus](https://steamcommunity.com/workshop/browse/?appid=491540). Steam lädt sie anschließend in folgenden Ordner auf deinem PC herunter:
   ```
   SteamLibrary/steamapps/workshop/content/491540/
   ```

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Mit SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Mod hochladen</b><br>
   Lade den Ordner jedes Mods in den Ordner `/TheBus/Mods/` hoch.

5. <b>Server starten</b><br>
   Starte deinen Server wieder, damit die Mods geladen werden.

:::: tip Tipp
Ob ein Map-Mod geladen wurde, prüfst du nach dem Start im Spiel: Öffne das **Admin-Menü** über das Pausenmenü und sieh nach, ob die Karte in der Map-Auswahl erscheint. Du benötigst dafür Owner- oder Admin-Rechte ([Admin hinzufügen](admin-hinzufuegen.md)). Alternativ zeigt dir `/mapList` im Chat alle verfügbaren Karten an, eine Übersicht aller Befehle erhältst du mit `/commands`. Wie du die Karte wechselst, erfährst du unter [Map ändern](map-aendern.md).
::::

## Fahrpläne und Flotten aus dem Workshop

Auch Fahrpläne und Flotten aus dem Steam Workshop kannst du wie Mods aus dem Workshop-Ordner (siehe Schritt 1) in den Ordner `/TheBus/Mods/` hochladen. Der Server lädt sie von dort, anschließend kannst du sie wie gewohnt auswählen. Mehr dazu findest du unter [Fahrplan ändern](fahrplan-aendern.md) und [Flotte ändern](flotte-aendern.md).

## Mod-Typen

Achte auf die Kennzeichnung der Mods, da diese bestimmt, wo sie installiert werden müssen:

| Typ | Beschreibung |
|-----|-------------|
| **Client and Server** | Muss sowohl auf dem Server als auch bei allen Spielern installiert sein |
| **Client only** | Wird normalerweise nur beim Spieler benötigt – ist der Mod jedoch auf dem Server installiert, müssen ihn auch alle Spieler installieren |
| **Server only** | Wird nur auf dem Server benötigt und ist bei Spielern deaktiviert |

:::: warning Achtung
Kompatible Mods werden auf dem Server automatisch aktiviert. Stelle sicher, dass alle Spieler die benötigten Client-Mods ebenfalls installiert haben, da sie sonst nicht beitreten können.
::::

## Mods nach einem Spiel-Update

Mods, die für eine andere Nebenversion des Spiels erstellt wurden (z.B. eine ältere Version als die aktuelle), werden als „potentially incompatible“ (möglicherweise inkompatibel) gekennzeichnet. Prüfe nach einem Update im Workshop, ob es eine aktualisierte Version des Mods gibt, und lade diese auf deinen Server hoch.

:::: info Hinweis
Stürzt dein Server nach einem Spiel-Update ab oder startet er nicht mehr, entferne die Mods vorübergehend aus dem Ordner `/TheBus/Mods/` und starte den Server erneut. Startet er dann wieder, füge die Mods einzeln wieder hinzu, um den fehlerhaften Mod zu finden. Weitere Lösungen findest du unter [Server-Probleme beheben](server-probleme-beheben.md).
::::
