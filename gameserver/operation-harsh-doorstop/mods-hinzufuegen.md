---
description: Mods auf einem Operation Harsh Doorstop Server hinzufügen
---

# So fügst du Mods auf deinem Operation Harsh Doorstop Server hinzu

Mods für Operation Harsh Doorstop stammen aus dem **Steam Workshop**. Auf dem Server landen sie als Ordner im Verzeichnis `Mods` – eine Mod-Liste oder Konfigurationsdatei, in der du Mods aktivierst, gibt es nicht. Karten, Fraktionen und Spielmodi aus Mods werden stattdessen über die **Startparameter** deines Servers ausgewählt.

:::: warning Achtung
Dein Server lädt Mods **nicht** selbstständig aus dem Workshop herunter. Du lädst den Mod-Ordner selbst herunter und überträgst ihn per SFTP auf den Server.
::::

## Schritt 1: Mod herunterladen

1. <b>Mod im Workshop öffnen</b><br>
   Öffne die gewünschte Mod im **Steam Workshop** von Operation Harsh Doorstop und abonniere sie. Steam legt die Mod anschließend lokal auf deinem PC ab – im Steam-Verzeichnis unter `steamapps/workshop/content/736590/<Workshop-ID>`.

   :::: info Hinweis
   `736590` ist die Steam-App-ID von Operation Harsh Doorstop. Die Workshop-ID steht in der Adresszeile der Workshop-Seite hinter `?id=`.
   ::::

2. <b>Alternative: Download per SteamCMD</b><br>
   Du kannst die Mod auch ohne Abo mit SteamCMD auf deinem PC herunterladen:

   ```
   steamcmd +login anonymous +workshop_download_item 736590 <Workshop-ID> +quit
   ```

   Die Dateien liegen danach ebenfalls unter `steamapps/workshop/content/736590/<Workshop-ID>`.

3. <b>Mod-Ordner heraussuchen</b><br>
   In diesem Verzeichnis findest du den eigentlichen Mod-Ordner. Dieser Ordner – nicht der Ordner mit der Workshop-ID – wird später auf den Server kopiert. Wie er heißt, steht in der Regel in der Beschreibung der Mod.

## Schritt 2: Mod auf den Server hochladen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>Mods-Ordner öffnen</b><br>
   Wechsle in folgendes Verzeichnis. Existiert der Ordner `Mods` noch nicht, lege ihn an:

   ```
   /HarshDoorstop/Mods
   ```

4. <b>Mod-Ordner hochladen</b><br>
   Lade den kompletten Mod-Ordner in dieses Verzeichnis hoch. Für jede Mod liegt dort genau ein Ordner:

   ```
   /HarshDoorstop/Mods/MEINE_MOD
   ```

5. <b>Server starten</b><br>
   Starte deinen Server, sobald der Upload abgeschlossen ist.

:::: warning Achtung
Lade den Ordner vollständig hoch und starte den Server erst danach. Ein abgebrochener Upload führt dazu, dass Karten oder Spielmodi der Mod nicht geladen werden können.
::::

## Schritt 3: Modinhalte auf dem Server aktivieren

Es reicht nicht, die Mod hochzuladen: Karten, Fraktionen und Spielmodi musst du zusätzlich in den **Startparametern** deines Servers auswählen. Diese passt du in der **Verwaltung** an.

| Parameter | Bedeutung |
|-----------|-----------|
| `<MapName>` | Die Karte, auf der der Server startet – bei einer Karten-Mod der Name der modifizierten Karte |
| `?BluforFaction=` | Fraktion des blauen Teams |
| `?OpforFaction=` | Fraktion des roten Teams |
| `?game=` | Pfad der Spielmodus-Klasse aus einer Mod |

Ein Startparameter-Beispiel für einen modifizierten Server sieht so aus:

```
MODDED_MAP?BluforFaction=MODDED_FACTION?OpforFaction=MODDED_FACTION?game=MODDED_GAMEMODE_PFAD
```

:::: info Hinweis
Die genauen Werte für Karten-, Fraktions- und Spielmodusnamen legt der Ersteller der Mod fest. Sie stehen in der Beschreibung der Mod im Workshop – erfundene oder falsch geschriebene Namen führen dazu, dass der Server nicht wie erwartet startet. Lässt du `?game=` weg, verwendet der Server den Standard-Spielmodus der Karte.
::::

:::: tip Tipp
Mods, die nur Inhalte ergänzen (zum Beispiel zusätzliche Ausrüstung), benötigen oft keine Startparameter. Nur Karten, Fraktionen und Spielmodi müssen ausdrücklich ausgewählt werden.
::::

## Was Spieler tun müssen

Karten, Fraktionen und Spielmodi aus Mods müssen auch auf den PCs deiner Mitspieler vorliegen. Am zuverlässigsten ist es, wenn alle die verwendeten Mods im **Steam Workshop** abonnieren und das Spiel anschließend neu starten.

## Mod entfernen

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Startparameter bereinigen</b><br>
   Entferne alle Verweise auf die Mod aus den Startparametern – also modifizierte Karte, Fraktionen und Spielmodus. Bleibt ein Verweis stehen, startet der Server anschließend nicht mehr korrekt.

3. <b>Ordner löschen</b><br>
   Lösche den Mod-Ordner per SFTP aus `/HarshDoorstop/Mods`.

4. <b>Server starten</b><br>
   Starte deinen Server.
