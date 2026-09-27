---
description: Admin auf einem Hytale Server hinzufügen
---

# So fügst du einen Admin auf einem Hytale Server hinzu

Admins (Operatoren) landen auf deinem Hytale Server in der Berechtigungsgruppe `hytale:Admin` und dürfen damit alle Befehle nutzen. Der Server speichert die Rechte in der Datei `permissions.json` im Hauptverzeichnis.

## Voraussetzung

Du brauchst den Namen oder die UUID des Spielers. Über den Namen klappt es nur, solange der Spieler auf dem Server online ist. Mit der UUID kannst du auch Spieler zum Admin machen, die gerade offline sind.

:::: tip Tipp
Seine UUID sieht jeder Spieler im Spiel mit dem Befehl `/whoami`.
::::

## So vergibst du Admin-Rechte

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Befehl eingeben</b><br>
   Gib folgenden Befehl in die Konsole ein:
   ```
   op add <Spielername>
   ```
   Alternativ mit der UUID des Spielers:
   ```
   op add <UUID>
   ```

3. <b>Bestätigung</b><br>
   In der Konsole erscheint die Meldung "... is now an operator!". Ist der Spieler online, erhält er die Nachricht "You have been made an operator." und hat ab sofort Admin-Rechte.

## So entfernst du Admin-Rechte

Um einem Spieler die Admin-Rechte zu entziehen, verwende:
```
op remove <Spielername>
```

Auch hier kannst du statt des Namens die UUID angeben.

## So ernennst du weitere Admins im Spiel

Spieler mit Admin-Rechten können direkt im Spiel weitere Admins ernennen:
```
/op add <Spielername>
```

:::: info Hinweis
Befehle in der Server-Konsole benötigen keinen Schrägstrich (/) am Anfang. Im Spiel muss der Schrägstrich verwendet werden.
::::

## Was bewirkt die Einstellung "Allow operators"?

In den **Einstellungen** deiner Verwaltung findest du das Feld **Allow operators**. Es steht standardmäßig auf `1` und schaltet den Befehl `/op self` frei. Damit kann sich jeder Spieler im Spiel selbst zum Admin machen. Ein weiteres `/op self` entzieht die Rechte wieder.

:::: warning Achtung
Solange **Allow operators** auf `1` steht, kann sich jeder Spieler, der deinem Server beitreten kann, mit `/op self` Admin-Rechte geben. Vergib Admin-Rechte deshalb am besten über die Konsole und setze das Feld danach auf `0`.
::::

So schaltest du `/op self` ab:

1. <b>Verwaltung öffnen</b><br>
   Öffne die Verwaltung deines Hytale-Servers.

2. <b>Einstellungen öffnen</b><br>
   Navigiere zu den **Einstellungen**.

3. <b>Allow operators deaktivieren</b><br>
   Setze das Feld **Allow operators** auf `0`.

4. <b>Server neustarten</b><br>
   Starte deinen Server neu, damit die Änderung übernommen wird.

:::: info Hinweis
Das Feld betrifft nur den Befehl `/op self`. Admins, die du bereits ernannt hast, behalten ihre Rechte, und `op add` sowie `op remove` funktionieren weiterhin.
::::
