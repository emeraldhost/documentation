---
description: Einem SCUM Server beitreten
---

# So trittst du deinem SCUM Server bei

SCUM verwendet zum Verbinden **nicht den Game Port**, sondern den Query-Port. Dieser liegt immer **zwei Ports über** dem Game Port deines Servers. Das ist der häufigste Grund, warum ein Beitritt scheitert.

## Verbindungsdaten finden

:::: danger Wichtig
Für die Verbindung benötigst du die **IP-Adresse** und den **Port** deines Servers. Beides findest du in der **Verwaltung** deines Servers. Rechne zum dort angezeigten Port immer **+2**, bevor du ihn im Spiel einträgst.
::::

:::: tip Beispiel
| Angezeigter Port (Game Port) | Port zum Verbinden |
|-----------------------------|--------------------|
| `7777` | `7779` |
| `7000` | `7002` |
| `7010` | `7012` |
::::

## Direkt über die IP verbinden

Die Direktverbindung ist der zuverlässigste Weg auf deinen Server.

1. <b>SCUM starten</b><br>
   Starte SCUM auf deinem PC.

2. <b>Multiplay öffnen</b><br>
   Wähle im Hauptmenü **Multiplay**.

3. <b>Serveradresse eintragen</b><br>
   Trage im Eingabefeld für die Direktverbindung (**Direct Connect**) die IP-Adresse und den Port deines Servers ein, getrennt durch einen Doppelpunkt:

   ```
   123.45.67.89:7779
   ```

   :::: warning Achtung
   Denk daran, hier den Game Port **+2** einzutragen. Der unveränderte Port aus der Verwaltung funktioniert nicht.
   ::::

4. <b>Verbinden</b><br>
   Bestätige die Eingabe mit Enter beziehungsweise über die Verbinden-Schaltfläche.

5. <b>Charakter erstellen</b><br>
   Beim ersten Beitritt legst du deinen Charakter an. Danach landest du auf der Insel und dein Fortschritt wird auf dem Server gespeichert.

## Über den Serverbrowser

Alternativ findest du deinen Server im Spiel unter **Multiplay**, indem du im Suchfeld nach dem Namen deines Servers suchst.

:::: warning Achtung
Der Serverbrowser von SCUM gilt als unzuverlässig. Neu erstellte Server tauchen dort erst nach einigen Minuten bis Stunden auf, und auch danach werden Server nicht immer angezeigt. Nutze im Zweifel die Direktverbindung über die IP-Adresse.
::::

## Über die Steam-Favoriten

Du kannst deinen Server auch dauerhaft in Steam hinterlegen:

1. <b>Server-Browser öffnen</b><br>
   Öffne Steam, klicke oben links auf **Anzeige** und wähle **Spielserver**.

2. <b>Server hinzufügen</b><br>
   Klicke auf den Tab **Favoriten**, dann unten rechts auf **+** und trage die IP-Adresse mit dem Query-Port ein:

   ```
   123.45.67.89:7779
   ```

3. <b>Beitreten</b><br>
   Der Server erscheint anschließend im Spiel im Favoriten-Bereich und du kannst von dort beitreten.

## Welche Ports nutzt SCUM?

:::: info Hinweis
Ein SCUM-Server belegt mehrere aufeinanderfolgende Ports. Ausgehend vom Game Port (im Beispiel `7777`) sieht die Aufteilung so aus:

| Port | Protokoll | Verwendung |
|------|-----------|------------|
| `7777` | UDP | Game Port |
| `7778` | UDP | Raw-UDP |
| `7779` | UDP | Query-Port – hierüber verbinden sich Spieler und der Steam-Serverbrowser |
| `7777` | TCP | RCON |

Deshalb trägst du im Spiel immer den Game Port **+2** ein.
::::
