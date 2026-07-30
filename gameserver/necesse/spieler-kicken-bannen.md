---
description: Spieler auf einem Necesse Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Necesse Server

Spieler entfernst du auf einem Necesse Server über Befehle – entweder in der **Konsole** deiner Verwaltung oder im **Chat im Spiel**. Angegeben wird dabei der **Spielername**.

:::: info Hinweis
Zum Kicken benötigst du mindestens die Stufe `moderator`, zum Bannen mindestens `admin`. Wie du Rechte vergibst, steht unter [Admin hinzufügen](admin-hinzufuegen.md). In der Konsole der Verwaltung stehen dir alle Befehle ohne zusätzliche Rechte zur Verfügung.
::::

## Befehle ausführen

1. <b>Konsole oder Chat öffnen</b><br>
   Öffne die **Konsole** deines Servers in der Verwaltung oder drücke im Spiel `Enter`, um den Chat zu öffnen.

2. <b>Befehl eingeben</b><br>
   Alle Befehle beginnen mit `/`, zum Beispiel:

   ```
   /kick MaxMustermann
   ```

## Spieler kicken

```
/kick <Spielername> [Grund]
```

Der Spieler wird vom Server getrennt und kann jederzeit wieder beitreten. Der optionale Grund wird ihm beim Trennen angezeigt.

:::: tip Beispiel
```
/kick MaxMustermann Bitte halte dich an die Regeln
```
::::

## Spieler bannen

```
/ban <Spielername>
```

Der Spieler wird vom Server geworfen und kann sich nicht mehr verbinden, bis du den Bann aufhebst.

## Bann aufheben

```
/unban <Spielername>
```

## Banns anzeigen

```
/bans
```

Zeigt alle gebannten Spieler an.

## Befehle im Überblick

| Befehl | Benötigte Stufe | Beschreibung |
|--------|-----------------|-------------|
| `/kick <Spielername> [Grund]` | `moderator` | Spieler vom Server trennen |
| `/ban <Spielername>` | `admin` | Spieler aussperren |
| `/unban <Spielername>` | `admin` | Bann aufheben |
| `/bans` | `admin` | Alle Banns anzeigen |

:::: warning Achtung
Schreibe den Spielernamen exakt so, wie er im Spiel angezeigt wird – Groß- und Kleinschreibung inklusive. Mit `/bans` kontrollierst du, wie ein Eintrag gespeichert wurde.
::::

## Banns verwalten

:::: warning Achtung
Verwalte Banns ausschließlich über die Befehle `/ban`, `/unban` und `/bans`. Wie Necesse Banns intern speichert, ist nicht dokumentiert – bearbeite dafür keine Server-Dateien per SFTP.
::::

## Keine Whitelist

:::: info Hinweis
Necesse hat **keine Whitelist-Funktion**. Möchtest du deinen Server nur bestimmten Spielern zugänglich machen, schütze ihn mit einem Server-Passwort und gib dieses nur an die gewünschten Spieler weiter.
::::
