---
description: Chat-Nachrichten und private Nachrichten auf einem The Bus Server senden
---

# So sendest du Chat-Nachrichten auf einem The Bus Server

Über den Ingame-Chat von The Bus schreibst du mit den anderen Spielern auf deinem Server. Mit Befehlen sendest du außerdem Server-Nachrichten an alle Spieler oder private Nachrichten an einzelne Spieler.

:::: info Hinweis
Nachrichten und Befehle gibst du ausschließlich im Ingame-Chat ein. Die Konsole in der Verwaltung zeigt auf unseren Servern nur die Ausgabe des Servers an und nimmt keine Eingaben entgegen – Nachrichten lassen sich daher nicht aus der Verwaltung heraus senden.
::::

:::: tip Tipp
Für die Befehle in dieser Anleitung brauchst du Owner- oder Admin-Rechte. Wie du Ränge vergibst, erfährst du unter [Admin hinzufügen](admin-hinzufuegen.md).
::::

## So sendest du eine Nachricht an alle Spieler

Gib einen der folgenden Befehle im Ingame-Chat ein und ersetze `<nachricht>` durch deinen Text:

```
/say <nachricht>
```

oder

```
/send <nachricht>
```

Beide Befehle senden die Nachricht in den Chat.

## So sendest du eine private Nachricht

```
/whisper <spieler> <nachricht>
```

Ersetze `<spieler>` durch den Namen des Spielers. Die Nachricht erhält nur dieser Spieler. Die Namen aller Spieler auf dem Server zeigt dir `/list` an.

## Befehlsübersicht

| Befehl | Beschreibung |
|--------|-------------|
| `/say <nachricht>` | Nachricht in den Chat senden |
| `/send <nachricht>` | Nachricht in den Chat senden |
| `/whisper <spieler> <nachricht>` | Private Nachricht an einen Spieler senden |
| `/list` | Alle Spieler anzeigen |

Mit `/commands` lässt du dir alle verfügbaren Befehle anzeigen.

## Hervorhebung im Chat

Seit Update 3.2 (Early Access) werden Admins und Moderatoren im Chat hervorgehoben. So erkennen die Spieler auf deinem Server Nachrichten von Admins und Moderatoren direkt.
