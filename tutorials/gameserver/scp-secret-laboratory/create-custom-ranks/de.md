---
slug: "eigene-raenge-erstellen"
language: "de"
title: "So erstellst Du eigene Ränge auf Deinem SCP: Secret Laboratory Server"
description: "Eigene Ränge auf einem SCP: Secret Laboratory Server erstellen"
tags: []
date: "2026-10-02"
visibility: "public"
cta: "gameserver"
product_keys: ["scp-secret-laboratory"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Eigene Ränge erstellen"
sort: 23
related: ["gameserver/scp-secret-laboratory/assign-ranks", "gameserver/scp-secret-laboratory/use-remote-admin", "gameserver/scp-secret-laboratory/use-console-commands", "gameserver/scp-secret-laboratory/set-up-reserved-slots"]
---

Neben den Standard-Rollen `owner`, `admin` und `moderator` kannst Du in der Datei `config_remoteadmin.txt` beliebig viele eigene Rollen anlegen, z.B. einen `vip`-Rang mit reinem Abzeichen oder einen `supporter`-Rang mit ausgewählten Remote-Admin-Rechten. Für jede Rolle legst Du Abzeichen, Farbe und Kick-Power fest und bestimmst über die Berechtigungen, was ihre Mitglieder dürfen. Ein Rang heißt in der Datei Rolle – gemeint ist dasselbe.

Wie Du Spielern einen Rang zuweist, zeigt Dir die Anleitung [Ränge vergeben](/tutorials/gameserver/scp-secret-laboratory/assign-ranks). Die Grundlagen zum Bearbeiten der Konfigurationsdateien findest Du in der Anleitung [Konfigurationsdateien bearbeiten](/tutorials/gameserver/scp-secret-laboratory/edit-config-files).

> [!WARNING]
> Der Pfad zur Konfigurationsdatei enthält den Game Port Deines Servers: `/.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt`. Ersetze `<Port>` durch den tatsächlichen Game Port Deines Servers. Den Game Port findest Du in der Verwaltung unter **Übersicht**.

## Eigene Rolle anlegen

1. **Game Port herausfinden**\
   Öffne die Verwaltung Deines Servers und notiere Dir den Game Port aus der **Übersicht**.

2. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

3. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

4. **Konfigurationsdatei öffnen**\
   Öffne folgende Datei – ersetze `<Port>` durch Deinen Game Port:

   ```text
   /.config/SCP Secret Laboratory/config/<Port>/config_remoteadmin.txt
   ```

5. **Rolle definieren**\
   Suche die Einträge der Standard-Rollen (`owner_badge`, `admin_badge`, `moderator_badge` …). Füge darunter einen eigenen Block für Deine Rolle hinzu. Der Name der Rolle steht vor jedem Schlüssel, hier am Beispiel `supporter`:

   ```text
   supporter_badge: SUPPORTER
   supporter_color: cyan
   supporter_cover: true
   supporter_hidden: false
   supporter_kick_power: 0
   supporter_required_kick_power: 1
   ```

   Verwende als Rollennamen einen kurzen Namen ohne Leerzeichen, z.B. `supporter` oder `vip`. Was die einzelnen Schlüssel bedeuten, findest Du im Abschnitt [Die Einstellungen einer Rolle](#die-einstellungen-einer-rolle).

6. **Rolle in die Rollenliste eintragen**\
   Suche den Abschnitt `Roles:` und ergänze Deine Rolle in derselben Schreibweise wie die vorhandenen Einträge:

   ```text
   Roles:
    - owner
    - admin
    - moderator
    - supporter
   ```

   Nur Rollen, die in dieser Liste stehen, liest der Server ein.

7. **Berechtigungen vergeben**\
   Suche den Abschnitt `Permissions:` und ergänze Deine Rolle in den eckigen Klammern aller Berechtigungen, die sie bekommen soll. Mehr dazu im Abschnitt [Berechtigungen zuweisen](#berechtigungen-zuweisen).

8. **Mitglieder zuweisen**\
   Trage die Spieler im Abschnitt `Members:` mit dem Namen Deiner neuen Rolle ein, z.B.:

   ```text
   Members:
    - 76561198000000001@steam: supporter
   ```

   Achte auf ein Leerzeichen vor und nach dem Bindestrich. Alle Details dazu findest Du in der Anleitung [Ränge vergeben](/tutorials/gameserver/scp-secret-laboratory/assign-ranks).

9. **Server starten**\
   Speichere die Datei und starte Deinen Server über die Verwaltung.

> [!IMPORTANT]
> Der Rollenname muss überall exakt gleich geschrieben sein: vor jedem Schlüssel (`supporter_badge` …), in der Liste `Roles:`, in den Berechtigungen und bei den Mitgliedern. Achte außerdem auf die Einrückung und die Bindestriche wie bei den vorhandenen Einträgen und trenne Rollen in den eckigen Klammern immer mit Komma und Leerzeichen. Schon ein Tippfehler sorgt dafür, dass der Server die Rolle nicht korrekt lädt.

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

Für `<Rolle>_color` kannst Du z.B. folgende Farbnamen verwenden:

```text
pink, red, default, brown, silver, light_green, crimson, cyan, aqua,
deep_pink, tomato, yellow, magenta, blue_green, orange, lime, green,
emerald, carmine, nickel, mint, army_green, pumpkin
```

Mit `none` blendest Du das Abzeichen komplett aus.

> [!NOTE]
> Einige Farben sind globalen Abzeichen vorbehalten und lassen sich für Server-Rollen nicht verwenden. Nutze deshalb am besten die Farbnamen aus der Liste oben.

## Berechtigungen zuweisen

Im Abschnitt `Permissions:` steht jede Berechtigung in einer eigenen Zeile, dahinter in eckigen Klammern die Rollen, die sie besitzen. Um einer Rolle eine Berechtigung zu geben, ergänzt Du ihren Namen in der passenden Zeile:

```text
 - KickingAndShortTermBanning: [owner, admin, moderator, supporter]
```

Diese Berechtigungen kennt das Spiel:

```text
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

Fehlt eine dieser Zeilen in Deiner Datei, ergänze sie im selben Format, z.B. `- Vanish: [owner]`.

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

> [!WARNING]
> Gib Berechtigungen wie `SetGroup`, `PermissionsManagement`, `ServerConfigs` oder `ServerConsoleCommands` nur Personen, denen Du voll vertraust. In der Standard-Konfiguration hat nur `owner` diese Rechte, `ServerConsoleCommands` hat sogar keine Rolle.

## Beispiel: VIP- und Supporter-Rang

> [!NOTE]
> **Beispiel**
>
> Ein `vip`-Rang soll nur ein Abzeichen anzeigen und keine Rechte haben. Ein `supporter`-Rang soll Spieler kicken, kurz bannen, sich selbst eine Klasse geben und den Admin-Chat nutzen dürfen.

Die Rollen-Definitionen:

```text
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

```text
Roles:
 - owner
 - admin
 - moderator
 - supporter
 - vip
```

Die geänderten Zeilen im Abschnitt `Permissions:`. Der `vip`-Rang taucht hier nicht auf, deshalb hat er keine Rechte:

```text
 - KickingAndShortTermBanning: [owner, admin, moderator, supporter]
 - ForceclassSelf: [owner, admin, moderator, supporter]
 - AdminChat: [owner, admin, moderator, supporter]
```

Alle anderen Zeilen lässt Du unverändert.

## Versteckte Abzeichen

Steht `<Rolle>_hidden` auf `true`, ist das Abzeichen eines Spielers zunächst unsichtbar. Der Spieler erhält dann in der Spielkonsole den Hinweis, dass seine Rolle vergeben, aber versteckt ist.

Jeder Spieler mit Rang kann sein Abzeichen selbst ein- und ausblenden. Dazu gibt er in der Spielkonsole oder in der textbasierten Remote-Admin-Konsole einen dieser Befehle ein:

| Befehl | Wirkung |
|--------|---------|
| `showtag` | Blendet das eigene Server-Abzeichen ein |
| `hidetag` | Blendet das eigene Server-Abzeichen aus |

> [!TIP]
> Versteckte Abzeichen eignen sich z.B. für Teammitglieder, die unerkannt spielen möchten. Rollen mit der Berechtigung `ViewHiddenBadges` sehen versteckte Abzeichen trotzdem.

## Änderungen übernehmen

Am zuverlässigsten übernimmst Du Änderungen an der `config_remoteadmin.txt` mit einem Neustart des Servers über die Verwaltung.

Alternativ lädst Du die Datei ohne Neustart neu:

1. **Berechtigungsdatei neu laden**\
   Gib in der Konsole der Verwaltung folgenden Befehl ein:

   ```text
   /pm reload
   ```

2. **Spieler-ID herausfinden**\
   Ist ein Spieler gerade online und soll seine neue Rolle sofort bekommen, gib in der Konsole `players` ein. Du erhältst eine Liste aller Spieler im Format `- Name: UserID [SpielerID]`.

3. **Rolle für Spieler online setzen**\
   Gib `/setgroup`, die Spieler-ID und den Namen der Rolle ein, z.B.:

   ```text
   /setgroup 2 supporter
   ```

   Ohne diesen Befehl bekommt der Spieler seine neue Rolle erst in der nächsten Runde.

> [!NOTE]
> In der Konsole der Verwaltung setzt Du vor Remote-Admin-Befehle einen `/`. In der textbasierten Remote-Admin-Konsole im Spiel lässt Du ihn weg. Mehr dazu in den Anleitungen [Remote Admin nutzen](/tutorials/gameserver/scp-secret-laboratory/use-remote-admin) und [Konsolenbefehle nutzen](/tutorials/gameserver/scp-secret-laboratory/use-console-commands).
