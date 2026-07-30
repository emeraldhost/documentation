---
description: Spieler auf einem Romestead Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Romestead Server

Spieler entfernst du auf einem Romestead Server über die **Konsole in der Verwaltung**. Die Befehle arbeiten dabei mit der **IP-Adresse** des Spielers – nicht mit dem Spielernamen und nicht mit der SteamID64.

:::: info Hinweis
Romestead kennt kein Admin- oder Operator-System. Es gibt weder eine Adminliste noch Adminrechte im Spiel: Kicken und Bannen kann, wer Zugriff auf die Konsole in der Verwaltung hat.
::::

:::: warning Achtung
Die Konsolenbefehle stehen erst zur Verfügung, sobald dein Server die Welt vollständig geladen hat. Direkt nach dem Start ignoriert der Server deine Eingaben noch.
::::

## Spieler kicken

Öffne die **Konsole** in der Verwaltung und gib ein:

```
kick <IP-Adresse>
```

Der Spieler wird vom Server getrennt, kann aber jederzeit wieder beitreten.

## Spieler bannen

```
ban <IP-Adresse>
```

Der Spieler wird vom Server getrennt und kann sich nicht mehr verbinden, solange der Bann aktiv ist.

:::: danger Banns überleben keinen Neustart
Banns gelten nur bis zum nächsten Serverstart. Sobald du deinen Server neu startest oder er durch ein Update neu gestartet wird, ist die Bannliste wieder leer und der Spieler kann sich erneut verbinden. Du musst den Befehl danach erneut ausführen.
::::

## Bann aufheben

```
unban <IP-Adresse>
```

Danach kann sich der Spieler sofort wieder verbinden.

## IP-Adresse eines Spielers herausfinden

Alle drei Befehle brauchen zwingend eine IP-Adresse. Mit

```
list
```

zeigt dir der Server die aktuell verbundenen Spieler an. Sieh dir die Ausgabe in der Konsole an und achte zusätzlich auf die Meldungen, die der Server beim Beitritt eines Spielers ausgibt.

:::: warning Achtung
Es gibt keinen Befehl, der einen Spieler anhand seines Namens oder seiner SteamID64 entfernt. Ohne die passende IP-Adresse funktionieren `kick`, `ban` und `unban` nicht.
::::

## Banns gelten für IP-Adressen

:::: danger Wichtig
Ein Bann sperrt eine IP-Adresse, nicht ein Spielerkonto. Verbindet sich der Spieler später über eine andere IP-Adresse – etwa nach einem Router-Neustart bei dynamischer IP oder aus einem anderen Netzwerk –, greift der Bann nicht mehr. Umgekehrt sperrst du mit einer IP-Adresse auch alle anderen Spieler, die sich diese Adresse teilen, zum Beispiel im selben Haushalt.
::::

## Weitere Konsolenbefehle

| Befehl | Beschreibung |
|--------|-------------|
| `list` | Verbundene Spieler anzeigen |
| `kick <IP-Adresse>` | Spieler vom Server trennen |
| `ban <IP-Adresse>` | IP-Adresse aussperren |
| `unban <IP-Adresse>` | Bann aufheben (gilt bis zum nächsten Serverstart) |
| `say <Nachricht>` | Nachricht an alle Spieler senden |
| `save` | Vollständiger Speichervorgang – der Server ist währenddessen eingefroren |
| `quicksave` | Speichert in einem zweiten Thread, der Server läuft weiter |
| `stop` | Welt vollständig speichern und Server beenden |
| `quickstop` | Server beenden, ohne zu speichern |

:::: danger Wichtig
`quickstop` beendet den Server **ohne zu speichern**. Alles seit dem letzten Speicherpunkt geht dabei verloren. Nutze zum geordneten Beenden `stop` oder die Stopp-Funktion in der Verwaltung.
::::

## Keine Kick- und Bann-Befehle im Spiel

:::: info Hinweis
Im Spiel selbst gibt es keine Möglichkeit, Spieler zu entfernen. Die Developer Console von Romestead enthält ausschließlich Cheat- und Debug-Befehle, aber keine Befehle zum Kicken oder Bannen. Alles, was Spieler betrifft, läuft über die Konsole in der Verwaltung.
::::

:::: tip Tipp
Möchtest du deinen Server generell nur bestimmten Spielern zugänglich machen, setze ein Serverpasswort und gib es nur an diese Personen weiter. Das ist zuverlässiger als ein Bann auf eine IP-Adresse.
::::
