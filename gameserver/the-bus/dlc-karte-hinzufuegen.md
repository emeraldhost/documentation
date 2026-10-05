---
description: DLC-Karte wie Hamburg City auf einem The Bus Server spielen
---

# So spielst du eine DLC-Karte auf deinem The Bus Server

Die Standardkarte von The Bus ist **Berlin**. Zusätzliche Karten kommen als DLC hinzu. Aktuell ist **Hamburg City (by Halycon)** das einzige veröffentlichte Karten-DLC. Es erschien am 31. Juli 2025. Weitere Karten wie **New York City**, **London South** und **Lübeck** sind angekündigt, aber noch nicht erschienen.

Seit **Update 1.2** funktioniert Hamburg auch auf dedizierten Servern zuverlässig. In dieser Anleitung erfährst du, wie du deinen Server von Berlin auf Hamburg umstellst.

## Voraussetzungen

- **Alle Spieler besitzen das DLC:** Jeder Spieler, der auf der Karte spielen möchte, muss das DLC **Hamburg City** auf Steam besitzen. Alle Spieler müssen dieselben DLCs besitzen, um sie gemeinsam nutzen zu können.
- **Spiel und Server sind aktuell:** Halte dein Spiel und deinen Server auf dem neuesten Stand. Setze dazu in der Verwaltung unter **Einstellungen** das Feld **Auto Update** auf `1`, dann aktualisiert sich dein Server bei jedem Start automatisch.
- **Admin-Rechte:** Du benötigst Owner- oder Admin-Rechte oder das Admin-Passwort deines Servers, siehe [Admin hinzufügen](admin-hinzufuegen.md).

:::: info Hinweis
Für ein offizielles DLC musst du nichts auf deinen Server hochladen. Du wählst die Karte einfach im Spiel aus.
::::

:::: danger Wichtig
Erstelle vor dem Kartenwechsel ein [Backup](backup-erstellen.md). Fahrplan und Flotte wählst du nach dem Wechsel passend zur neuen Karte.
::::

## So wechselst du die Karte über das Admin-Menü

1. <b>Server beitreten</b><br>
   Tritt deinem Server im Spiel bei, siehe [Server beitreten](server-beitreten.md).

2. <b>Admin-Menü öffnen</b><br>
   Öffne das Pausenmenü und wähle das **Admin-Menü**. Hast du keinen Admin-Rang, gib das Admin-Passwort deines Servers ein.

3. <b>Karte auswählen</b><br>
   Wähle unter **Map** die Karte **Hamburg** aus.

:::: info Hinweis
Die im Admin-Menü gewählte Karte wird in den Servereinstellungen gespeichert und bleibt auch nach einem Neustart deines Servers erhalten.
::::

## So wechselst du die Karte per Chat-Befehl

Alternativ kannst du die Karte über den Ingame-Chat wechseln.

1. <b>Verfügbare Karten anzeigen</b><br>
   Gib folgenden Befehl im Ingame-Chat ein, um alle verfügbaren Karten aufzulisten:
   ```
   /mapList
   ```
   Die Hamburg-Karte erscheint dort als `Hamburg`.

2. <b>Karte wechseln</b><br>
   Gib folgenden Befehl ein:
   ```
   /map Hamburg
   ```

:::: info Hinweis
Diese Befehle funktionieren nur im Ingame-Chat und erfordern Owner- oder Admin-Rechte. Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
::::

## Fahrplan und Flotte anpassen

Nach dem Kartenwechsel wählst du einen passenden Fahrplan und eine passende Flotte für die neue Karte:

- [Fahrplan ändern](fahrplan-aendern.md)
- [Flotte ändern](flotte-aendern.md)

Hamburg bringt eigene Linien mit: **6**, **7**, **17**, **218** und **277** sowie eine Variante als Nachtlinie **617**.

## DLC auf dem Server aktivieren

Mit dem Befehl `/dlc` aktivierst oder deaktivierst du ein DLC auf deinem Server. Wie das funktioniert, erfährst du unter [DLC aktivieren](dlc-aktivieren.md).

## So wechselst du zurück zu Berlin

Der Wechsel zurück zur Standardkarte funktioniert genauso: Wähle im **Admin-Menü** unter **Map** die Karte Berlin oder verwende `/map` mit dem Namen, den `/mapList` für Berlin ausgibt. Wähle danach wieder einen passenden Fahrplan und eine passende Flotte.

## Probleme beim Kartenwechsel

| Problem | Lösung |
|---------|--------|
| Die Karte wird nicht angezeigt | Aktualisiere deinen Server (Feld **Auto Update** auf `1` und Server neu starten) und dein Spiel. Halte Server und Spiel auf dem neuesten Stand. |
| Spieler können nicht beitreten | Ist auf deinem Server festgelegt, dass Spieler das DLC zum Beitreten besitzen müssen, können Spieler ohne das DLC nicht beitreten. Prüfe außerdem, ob Server und Spiel auf dem neuesten Stand sind. Alle Spieler müssen dieselben DLCs besitzen, um sie gemeinsam nutzen zu können. |

:::: tip Tipp
Weitere Lösungen für häufige Probleme findest du unter [Server-Probleme beheben](server-probleme-beheben.md).
::::
