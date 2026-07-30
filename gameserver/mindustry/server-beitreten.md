---
description: Einem Mindustry Server beitreten
---

# So trittst du deinem Mindustry Server bei

Mindustry hat im Beitritts-Menü eine echte Direktverbindung: Du trägst die **IP-Adresse** und den **Game Port** deines Servers ein und verbindest dich sofort. Das ist der zuverlässigste Weg auf deinen Server.

## Verbindungsdaten finden

:::: danger Wichtig
Die IP-Adresse und den Game Port deines Servers findest du in der **Verwaltung**. Trage immer genau den dort angezeigten Port ein – Mindustry verwendet ohne Portangabe einen fest eingebauten Standardwert, der bei einem gehosteten Server in der Regel nicht passt.
::::

:::: info Hinweis
Mindustry hat **keinen separaten Query Port**. Statusabfragen und das Spiel laufen über denselben Game Port, jeweils über TCP und UDP.
::::

## Über die Direktverbindung beitreten

1. <b>Mindustry starten</b><br>
   Starte Mindustry auf deinem PC.

2. <b>Beitritts-Menü öffnen</b><br>
   Wähle im Hauptmenü **Play** und anschließend **Join Game**.

3. <b>Server hinzufügen</b><br>
   Klicke im Bereich **Remote** auf **Add Server**.

4. <b>Serveradresse eintragen</b><br>
   Trage die IP-Adresse und den Game Port deines Servers ein, getrennt durch einen Doppelpunkt:

   :::: tip Beispiel
   ```
   123.45.67.89:<Game Port>
   ```

   Ersetze IP-Adresse und Game Port durch die Werte aus deiner **Verwaltung**.
   ::::

   :::: info IPv6
   Hat dein Server eine IPv6-Adresse, setzt du sie in eckige Klammern:

   ```
   [2001:db8::1]:<Game Port>
   ```
   ::::

5. <b>Eintrag bestätigen</b><br>
   Bestätige die Eingabe. Der Server erscheint danach dauerhaft im Bereich **Remote** und wird bei jedem Öffnen des Menüs abgefragt.

6. <b>Beitreten</b><br>
   Zeigt der Eintrag Servername, Karte und Spielerzahl an, klicke ihn an, um beizutreten.

## Die Bereiche im Beitritts-Menü

| Bereich | Bedeutung |
|---------|-----------|
| **Local** | Sucht Server im selben lokalen Netzwerk. Dein gehosteter Server wird hier **nicht** gefunden. |
| **Remote** | Deine selbst hinzugefügten Server. Hierüber trittst du deinem Server bei. |
| **Global** | Eine von der Community gepflegte Serverliste. Dein Server erscheint dort nicht automatisch. |

## Server wird nicht gefunden

:::: warning Achtung
Dein Server ist erst erreichbar, wenn er tatsächlich eine Karte hostet. Solange keine Karte geladen ist, nimmt er keine Verbindungen an. Prüfe in der **Konsole** deiner Verwaltung, ob eine Karte läuft, und starte sie andernfalls:

```
host <Kartenname>
```

Alternativ lädst du einen vorhandenen Spielstand, wodurch der Server ebenfalls online geht:

```
load <Slotname>
```
::::

:::: tip Tipp
Bleibt der Eintrag im Bereich **Remote** grau oder meldet einen Fehler, prüfe zuerst die Schreibweise von IP-Adresse und Port. Ein häufiger Fehler ist der Game Port aus einer alten Anleitung statt des Ports aus deiner Verwaltung.
::::
