---
description: "Eigene Ränge auf einem SCP: Secret Laboratory Server erstellen"
---

# So erstellst du eigene Ränge auf deinem SCP: Secret Laboratory Server

Neben den Standard-Rollen `owner`, `admin` und `moderator` kannst du in der Datei `config_remoteadmin.txt` beliebig viele eigene Rollen anlegen, z.B. einen `vip`-Rang mit reinem Abzeichen oder einen `supporter`-Rang mit ausgewählten Remote-Admin-Rechten. Für jede Rolle legst du Abzeichen, Farbe und Kick-Power fest und bestimmst über die Berechtigungen, was ihre Mitglieder dürfen. Ein Rang heißt in der Datei Rolle – gemeint ist dasselbe.

Wie du Spielern einen Rang zuweist, zeigt dir die Anleitung [Ränge vergeben](raenge-vergeben.md). Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest du in der Anleitung [Konfigurationsdateien bearbeiten](config-dateien-bearbeiten.md).

:::: warning Achtung
Der Pfad zur Konfigurationsdatei enthält den Game Port deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt`. Ersetze `<Port>` durch den tatsächlichen Game Port deines Servers. Den Game Port findest du in der Verwaltung unter **Übersicht**.
::::

## Eigene Rolle anlegen

1. <b>Game Port herausfinden</b><br>
   Öffne die Verwaltung deines Servers und notiere dir den Game Port aus der **Übersicht**.

2. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

3. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

4. <b>Konfigurationsdatei öffnen</b><br>
   Öffne folgende Datei – ersetze `<Port>` durch deinen Game Port:

   ```
   /.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt
   ```

5. <b>Rolle definieren</b><br>
   Suche die Einträge der Standard-Rollen (`owner_badge`, `admin_badge`, `moderator_badge` …). Füge darunter einen eigenen Block für deine Rolle hinzu. Der Name der Rolle steht vor jedem Schlüssel, hier am Beispiel `supporter`:

   ```
   supporter_badge: SUPPORTER
   supporter_color: cyan
   supporter_cover: true
   supporter_hidden: false
   supporter_kick_power: 0
   supporter_required_kick_power: 1
   ```

   Verwende als Rollennamen einen kurzen Namen ohne Leerzeichen, z.B. `supporter` oder `vip`. Was die einzelnen Schlüssel bedeuten, findest du im Abschnitt [Die Einstellungen einer Rolle](#die-einstellungen-einer-rolle).

6. <b>Rolle in die Rollenliste eintragen</b><br>
   Suche den Abschnitt `Roles:` und ergänze deine Rolle in derselben Schreibweise wie die vorhandenen Einträge:

   ```
   Roles:
    - owner
    - admin
    - moderator
    - supporter
   ```

   Nur Rollen, die in dieser Liste stehen, liest der Server ein.

7. <b>Berechtigungen vergeben</b><br>
   Suche den Abschnitt `Permissions:` und ergänze deine Rolle in den eckigen Klammern aller Berechtigungen, die sie bekommen soll. Mehr dazu im Abschnitt [Berechtigungen zuweisen](#berechtigungen-zuweisen).

8. <b>Mitglieder zuweisen</b><br>
   Trage die Spieler im Abschnitt `Members:` mit dem Namen deiner neuen Rolle ein, z.B.:

   ```
   Members:
    - 76561198000000001@steam: supporter
   ```

   Achte auf ein Leerzeichen vor und nach dem Bindestrich. Alle Details dazu findest du in der Anleitung [Ränge vergeben](raenge-vergeben.md).

9. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server über die Verwaltung.

:::: danger Wichtig
Der Rollenname muss überall exakt gleich geschrieben sein: vor jedem Schlüssel (`supporter_badge` …), in der Liste `Roles:`, in den Berechtigungen und bei den Mitgliedern. Achte außerdem auf die Einrückung und die Bindestriche wie bei den vorhandenen Einträgen und trenne Rollen in den eckigen Klammern immer mit Komma und Leerzeichen. Schon ein Tippfehler sorgt dafür, dass der Server die Rolle nicht korrekt lädt.
::::

## Die Einstellungen einer Rolle

| Schlüssel | Bedeutung |
|-----------|-----------|
| `<Rolle>_badge` | Text des Abzeichens, das im Spiel angezeigt wird, z.B. `SUPPORTER` |
| `<Rolle>_color` | Farbe des Abzeichens aus einer festen Liste (siehe unten); `none` deaktiviert das Abzeichen |
| `<Rolle>_cover` | `true`: Das Server-Abzeichen ist wichtiger als ein globales Abzeichen und überdeckt es |
| `<Rolle>_hidden` | `true`: Das Abzeichen ist standardmäßig versteckt |
| `<Rolle>_kick_power` | Kick-Power der Rolle zum Kicken und Bannen, von `0` bis `255` |
| `<Rolle>_required_kick_power` | Kick-Power, die jemand braucht, um Mitglieder dieser Rolle zu kicken oder zu bannen, von `0` bis `255` |

Zum Vergleich die Standardwerte: `owner` hat eine Kick-Power von `255` und eine erforderliche Kick-Power von `255`, `admin` hat `1` und `2`, `moderator` hat `0` und `1`.

### Erlaubte Farben

Für `<Rolle>_color` kannst du z.B. folgende Farbnamen verwenden:

```
pink, red, default, brown, silver, light_green, crimson, cyan, aqua,
deep_pink, tomato, yellow, magenta, blue_green, orange, lime, green,
emerald, carmine, nickel, mint, army_green, pumpkin
```

Mit `none` blendest du das Abzeichen komplett aus.

:::: info Hinweis
Einige Farben sind globalen Abzeichen vorbehalten und lassen sich für Server-Rollen nicht verwenden. Nutze deshalb am besten die Farbnamen aus der Liste oben.
::::

## Berechtigungen zuweisen

Im Abschnitt `Permissions:` steht jede Berechtigung in einer eigenen Zeile, dahinter in eckigen Klammern die Rollen, die sie besitzen. Um einer Rolle eine Berechtigung zu geben, ergänzt du ihren Namen in der passenden Zeile:

```
 - KickingAndShortTermBanning: [owner, admin, moderator, supporter]
```

Diese Berechtigungen kennt das Spiel:

```
KickingAndShortTermBanning, BanningUpToDay, LongTermBanning,
ForceclassSelf, ForceclassToSpectator, ForceclassWithoutRestrictions,
GivingItems, WarheadEvents, RespawnEvents, RoundEvents, SetGroup,
GameplayData, Overwatch, FacilityManagement, PlayersManagement,
PermissionsManagement, ServerConsoleCommands, ViewHiddenBadges,
ServerConfigs, Broadcasting, PlayerSensitiveDataAccess, Noclip,
AFKImmunity, AdminChat, ViewHiddenGlobalBadges, Announcer, Effects,
FriendlyFireDetectorImmunity, FriendlyFireDetectorTempDisable,
ServerLogLiveFeed, ExecuteAs, Vanish
```

Fehlt eine dieser Zeilen in deiner Datei, ergänze sie im selben Format, z.B. `- Vanish: [owner]`.

Einige wichtige Berechtigungen im Überblick:

| Berechtigung | Erlaubt |
|--------------|---------|
| `KickingAndShortTermBanning` | Kicken und kurze Bans (1 Stunde) |
| `BanningUpToDay` | Bans bis zu einem Tag, Muten und Intercom-Sperren |
| `LongTermBanning` | Bans über einen Tag hinaus und den Befehl `unban` |
| `ForceclassSelf` | Sich selbst eine Klasse zuweisen |
| `ForceclassToSpectator` | Andere Spieler nur zum Zuschauer machen |
| `ForceclassWithoutRestrictions` | Anderen Spielern jede Klasse zuweisen |
| `GivingItems` | Spielern Items geben |
| `Broadcasting` | Broadcast-Nachrichten senden |
| `SetGroup` | Den Befehl `setgroup` nutzen |
| `AdminChat` | Den Admin-Chat nutzen |
| `ViewHiddenBadges` | Versteckte Server-Abzeichen sehen |

:::: warning Achtung
Gib Berechtigungen wie `SetGroup`, `PermissionsManagement`, `ServerConfigs` oder `ServerConsoleCommands` nur Personen, denen du voll vertraust. In der Standard-Konfiguration hat nur `owner` diese Rechte, `ServerConsoleCommands` hat sogar keine Rolle.
::::

## Beispiel: VIP- und Supporter-Rang

:::: info Beispiel
Ein `vip`-Rang soll nur ein Abzeichen anzeigen und keine Rechte haben. Ein `supporter`-Rang soll Spieler kicken, kurz bannen, sich selbst eine Klasse geben und den Admin-Chat nutzen dürfen.
::::

Die Rollen-Definitionen:

```
vip_badge: VIP
vip_color: yellow
vip_cover: false
vip_hidden: false
vip_kick_power: 0
vip_required_kick_power: 0

supporter_badge: SUPPORTER
supporter_color: cyan
supporter_cover: true
supporter_hidden: false
supporter_kick_power: 0
supporter_required_kick_power: 1
```

Die Rollenliste:

```
Roles:
 - owner
 - admin
 - moderator
 - supporter
 - vip
```

Die geänderten Zeilen im Abschnitt `Permissions:`. Der `vip`-Rang taucht hier nicht auf, deshalb hat er keine Rechte:

```
 - KickingAndShortTermBanning: [owner, admin, moderator, supporter]
 - ForceclassSelf: [owner, admin, moderator, supporter]
 - AdminChat: [owner, admin, moderator, supporter]
```

Alle anderen Zeilen lässt du unverändert.

## Versteckte Abzeichen

Steht `<Rolle>_hidden` auf `true`, ist das Abzeichen eines Spielers zunächst unsichtbar. Der Spieler erhält dann in der Spielkonsole den Hinweis, dass seine Rolle vergeben, aber versteckt ist.

Jeder Spieler mit Rang kann sein Abzeichen selbst ein- und ausblenden. Dazu gibt er in der Spielkonsole oder in der textbasierten Remote-Admin-Konsole einen dieser Befehle ein:

| Befehl | Wirkung |
|--------|---------|
| `showtag` | Blendet das eigene Server-Abzeichen ein |
| `hidetag` | Blendet das eigene Server-Abzeichen aus |

:::: tip Tipp
Versteckte Abzeichen eignen sich z.B. für Teammitglieder, die unerkannt spielen möchten. Rollen mit der Berechtigung `ViewHiddenBadges` sehen versteckte Abzeichen trotzdem.
::::

## Änderungen übernehmen

Am zuverlässigsten übernimmst du Änderungen an der `config_remoteadmin.txt` mit einem Neustart des Servers über die Verwaltung.

Alternativ lädst du die Datei ohne Neustart neu:

1. <b>Berechtigungsdatei neu laden</b><br>
   Gib in der Konsole der Verwaltung folgenden Befehl ein:

   ```
   /pm reload
   ```

2. <b>Spieler-ID herausfinden</b><br>
   Ist ein Spieler gerade online und soll seine neue Rolle sofort bekommen, gib in der Konsole `players` ein. Du erhältst eine Liste aller Spieler im Format `- Name: UserID [SpielerID]`.

3. <b>Rolle für Spieler online setzen</b><br>
   Gib `/setgroup`, die Spieler-ID und den Namen der Rolle ein, z.B.:

   ```
   /setgroup 2 supporter
   ```

   Ohne diesen Befehl bekommt der Spieler seine neue Rolle erst in der nächsten Runde.

:::: info Hinweis
In der Konsole der Verwaltung setzt du vor Remote-Admin-Befehle einen `/`. In der textbasierten Remote-Admin-Konsole im Spiel lässt du ihn weg. Mehr dazu in den Anleitungen [Remote Admin nutzen](remote-admin-nutzen.md) und [Konsolenbefehle nutzen](konsolenbefehle-nutzen.md).
::::
