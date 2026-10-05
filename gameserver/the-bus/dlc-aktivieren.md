---
description: DLCs auf einem The Bus Server per Befehl aktivieren oder deaktivieren
---

# So aktivierst du DLCs auf einem The Bus Server

Mit dem Befehl `/dlc` aktivierst oder deaktivierst du ein DLC auf deinem Server. Den Befehl gibst du im Ingame-Chat ein.

:::: tip Tipp
Möchtest du deinen Server auf die Karte Hamburg umstellen, findest du die Anleitung unter [DLC-Karte hinzufügen](dlc-karte-hinzufuegen.md).
::::

## Verfügbare DLCs

| DLC | Typ |
|-----|-----|
| **Hamburg City (by Halycon)** | Karte (im Spiel: **Hamburg**) |
| **Ebus 2.2** | Bus |

:::: info Hinweis
Weitere DLCs wie New York City, London South, Lübeck und der New York US LFS Bus sind angekündigt, aber noch nicht erschienen.
::::

## So aktivierst oder deaktivierst du ein DLC

1. <b>Server beitreten</b><br>
   Tritt deinem Server bei, siehe [Server beitreten](server-beitreten.md). Den Befehl kannst du nur mit Owner- oder Admin-Rechten nutzen – siehe [Admin hinzufügen](admin-hinzufuegen.md).

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl im Ingame-Chat ein und ersetze `<dlc>` durch das gewünschte DLC:

   ```
   /dlc <dlc>
   ```

   :::: info Hinweis
   Wie das DLC beim Befehl anzugeben ist, ist nicht offiziell dokumentiert. Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Befehle entgegen.
   ::::

## Was Spieler besitzen müssen

- **Karten-DLC:** Alle Spieler müssen das DLC der aktiven Karte besitzen, um auf ihr zu spielen.
- **Bus-DLC:** Nur Spieler, die das DLC besitzen, können einen DLC-Bus auswählen und fahren.

:::: warning Achtung
Seit Update 3.2 EA kann ein The Bus Server DLCs als Voraussetzung für den Beitritt festlegen. Spieler, die ein vorausgesetztes DLC nicht besitzen, können deinem Server dann nicht beitreten.
::::
