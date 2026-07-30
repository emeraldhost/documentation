---
description: Spieler auf einem Terraria tShock Server kicken und bannen
---

# So kickst und bannst du Spieler auf deinem Terraria tShock Server

tShock bringt ein vollwertiges Bannsystem mit: zeitlich begrenzte Banns, Gründe und Ticketnummern zum gezielten Aufheben. Alle Befehle funktionieren sowohl im **Ingame-Chat** als auch in der **Serverkonsole** deiner Verwaltung.

:::: info Hinweis
In der Serverkonsole schreibst du die Befehle **ohne** führenden Schrägstrich (`kick Spielername`), im Ingame-Chat **mit** (`/kick Spielername`). Für die Befehle im Spiel benötigst du einen Account mit den passenden Rechten: [Admin hinzufügen](admin-hinzufuegen.md).
::::

## Spieler anzeigen

```
who
```

Der Befehl listet alle verbundenen Spieler auf. Mit `who -i` bekommst du zusätzlich den Index jedes Spielers angezeigt, über den du ihn eindeutig ansprechen kannst.

## Spieler kicken

```
kick <Spieler> [Grund]
```

Der Spieler wird vom Server entfernt, kann aber sofort wieder beitreten. Ohne Angabe eines Grundes trägt tShock automatisch einen Standardtext ein.

:::: tip Beispiel
```
kick Spielername "Bitte im Chat sachlich bleiben"
```
::::

:::: info Hinweis
Besteht der Grund aus mehreren Wörtern, setze ihn in Anführungszeichen. Spieler mit Adminrechten lassen sich nicht kicken.
::::

## Spieler bannen

```
ban add <Ziel> [Grund] [Dauer] [Flags]
```

Der Spieler wird sofort vom Server geworfen und kann sich nicht mehr verbinden. Als Antwort nennt dir tShock eine **Ticketnummer** – die brauchst du später zum Entbannen.

:::: tip Beispiel
```
ban add Spielername "Griefing" 10d0h0m0s
```
::::

### Dauer angeben

Die Dauer schreibst du im Format `0d0h0m0s` – Tage, Stunden, Minuten, Sekunden. Lässt du die Angabe weg, ist der Bann **dauerhaft**.

| Angabe | Bedeutung |
|--------|-----------|
| `1d0h0m0s` | 1 Tag |
| `0d12h0m0s` | 12 Stunden |
| `10d30m0s` | 10 Tage und 30 Minuten |
| _(keine Angabe)_ | Dauerhaft |

### Flags

Über Flags legst du fest, woran der Bann festgemacht wird. Ohne Angabe bannt tShock Account, Geräte-Kennung und IP-Adresse gleichzeitig.

| Flag | Bedeutung |
|------|-----------|
| `-a` | Bannt den tShock-Account |
| `-u` | Bannt die Geräte-Kennung (UUID) des Clients |
| `-n` | Bannt den Charakternamen |
| `-ip` | Bannt die IP-Adresse |
| `-e` | Wertet die Angabe als direkten Identifier – nötig für Banns gegen Offline-Spieler |

:::: warning Achtung
Ohne das Flag `-e` muss der Spieler **online** sein. Ist er es nicht, meldet dir tShock, dass das Ziel nicht gefunden wurde.
::::

### Offline-Spieler bannen

Ist der Spieler nicht mehr auf dem Server, verwendest du das Flag `-e` zusammen mit einem Präfix, das angibt, worauf sich der Bann bezieht:

| Präfix | Bedeutung |
|--------|-----------|
| `acc:` | tShock-Account |
| `name:` | Charaktername |
| `uuid:` | Geräte-Kennung des Clients |
| `ip:` | IP-Adresse |

:::: tip Beispiel
```
ban add "acc:Spielername" "Griefing" -e
```
::::

## Bann aufheben

```
ban del <Ticketnummer>
```

Einen `unban`-Befehl gibt es nicht – du hebst einen Bann immer über seine Ticketnummer auf.

1. <b>Ticketnummer heraussuchen</b><br>
   Lass dir die Banns auflisten:

   ```
   ban list
   ```

   Bei vielen Einträgen blätterst du mit `ban list 2`, `ban list 3` und so weiter.

2. <b>Eintrag prüfen</b><br>
   Details zu einem Eintrag zeigt dir:

   ```
   ban details <Ticketnummer>
   ```

3. <b>Bann löschen</b><br>
   Hebe den Bann auf:

   ```
   ban del <Ticketnummer>
   ```

:::: danger Wichtig
Ein Spieler kann **mehrere Ban-Einträge** haben: Bannst du ohne Flags, legt tShock je einen Eintrag für Account, Geräte-Kennung und IP-Adresse mit jeweils eigener Ticketnummer an. Kommt der Spieler nach dem Entbannen weiterhin nicht auf den Server, sind noch weitere Einträge vorhanden – prüfe die Liste mit `ban list` und lösche alle zugehörigen Tickets.
::::

:::: info Hinweis
Banns speichert tShock in der Datenbank `/tshock/tshock.sqlite`. Eine Datei `banlist.txt` wie beim normalen Terraria-Server gibt es hier nicht.
::::

## Spieler stummschalten

```
mute <Spieler> [Grund]
```

```
unmute <Spieler>
```

Der Spieler bleibt auf dem Server, kann aber nicht mehr im Chat schreiben.

## Befehle im Überblick

| Befehl | Beschreibung |
|--------|-------------|
| `who` | Verbundene Spieler anzeigen (`who -i` mit Index) |
| `kick <Spieler> [Grund]` | Spieler vom Server entfernen |
| `ban add <Ziel> [Grund] [Dauer] [Flags]` | Spieler bannen |
| `ban del <Ticketnummer>` | Bann aufheben |
| `ban list [Seite]` | Alle Banns auflisten |
| `ban details <Ticketnummer>` | Details zu einem Bann anzeigen |
| `ban help` | Hilfe zum Bannsystem anzeigen |
| `mute <Spieler>` | Spieler stummschalten |
| `unmute <Spieler>` | Stummschaltung aufheben |
| `broadcast <Nachricht>` | Nachricht an alle Spieler senden |
| `save` | Welt sofort speichern |
| `reload` | Konfiguration neu einlesen |
| `help` | Alle verfügbaren Befehle anzeigen |

:::: tip Tipp
Speichere nach Moderationsmaßnahmen mit `save`, damit der aktuelle Stand der Welt gesichert ist.
::::

:::: info Whitelist
Möchtest du deinen Server nur für bestimmte Spieler öffnen, kannst du zusätzlich die Whitelist von tShock nutzen. Sie arbeitet mit IP-Adressen: Der Befehl `whitelist <IP-Adresse>` trägt eine Adresse in die Datei `/tshock/whitelist.txt` ein. Aktiv wird die Liste erst, wenn du in der Datei `/tshock/config.json` den Wert `EnableWhitelist` auf `true` setzt.
::::
