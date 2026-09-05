---
slug: "admin-hinzufuegen"
language: "de"
title: "So fügst Du einen Admin auf Deinem Enshrouded Server hinzu"
description: "Admin auf einem Enshrouded Server hinzufügen"
tags: []
date: "2026-04-11"
visibility: "public"
updated: "2026-08-29"
cta: "gameserver"
product_keys: ["enshrouded"]
author: "EmeraldHost Team"
author_link: "https://emeraldhost.de"
author_img: "emeraldhost-team"
author_description: "Das EmeraldHost-Team teilt sein Wissen, damit Du das Beste aus Deinem Server herausholst."
available_languages: ["de", "en"]
short_title: "Admin hinzufügen"
sort: 1
related: ["gameserver/enshrouded/add-savegame", "gameserver/enshrouded/adjust-difficulty", "gameserver/enshrouded/change-server-password", "gameserver/enshrouded/control-automatic-updates"]
---

Enshrouded kennt keinen Admin, den Du in der Verwaltung einträgst. Adminrechte werden über **Usergruppen** im Abschnitt `userGroups` der Datei `enshrouded_server.json` vergeben. Jede Gruppe hat eigene Rechte und ein eigenes Passwort – wer beim Beitritt das Passwort der Admin-Gruppe eingibt, spielt mit deren Rechten.

> [!NOTE]
> In der Verwaltung gibt es kein Feld für ein Admin-Passwort. Die Rechtevergabe läuft ausschließlich über die `enshrouded_server.json`.

## Adminrechte vergeben

1. **Server stoppen**\
   Stoppe Deinen Server über die Verwaltung.

2. **Per SFTP verbinden**\
   Verbinde Dich per [SFTP](/tutorials/gameserver/establish-sftp-connection) mit Deinem Server.

3. **enshrouded_server.json öffnen**\
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis und suche den Abschnitt `userGroups`. Die Datei bringt bereits fertige Gruppen mit, unter anderem `Admin`.

4. **Rechte der Admin-Gruppe prüfen**\
   In der Gruppe `Admin` sollten alle Rechte auf `true` stehen:

   ```json
   {
       "name": "Admin",
       "password": "DEIN_ADMIN_PASSWORT",
       "canKickBan": true,
       "canAccessInventories": true,
       "canEditWorld": true,
       "canEditBase": true,
       "canExtendBase": true,
       "reservedSlots": 0
   }
   ```

   > [!TIP]
   > Prüfe die Datei nach dem Bearbeiten mit einem JSON-Formatter wie [JSONLint](https://jsonlint.com/) – ein fehlendes oder überzähliges Komma reicht, damit der Server Deine Usergruppen verwirft.

5. **Passwort vergeben**\
   Im Feld `password` steht standardmäßig ein zufällig erzeugtes Passwort. Ersetze es durch eines, das nur Deine Admins kennen. Mehr dazu unter [Server Passwort ändern](/tutorials/gameserver/enshrouded/change-server-password).

6. **Server starten**\
   Speichere die Datei und starte Deinen Server.

> [!WARNING]
> Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.

> [!IMPORTANT]
> Lass das Feld `password` der Admin-Gruppe niemals leer. Eine Gruppe ohne Passwort steht jedem offen – jeder Spieler, der Deinen Server findet, bekäme damit volle Adminrechte.

## Als Admin beitreten

1. **Server beitreten**\
   Verbinde Dich wie unter [Server beitreten](/tutorials/gameserver/enshrouded/join-server) beschrieben mit Deinem Server.

2. **Admin-Passwort eingeben**\
   Gib im Passwort-Fenster das Passwort der Gruppe `Admin` ein. Das eingegebene Passwort entscheidet, in welche Gruppe Du eingeordnet wirst und welche Rechte Du bekommst.

> [!TIP]
> Setzt Du bei einer Gruppe `reservedSlots` auf `1` oder höher, wird der Server für Spieler anderer Gruppen als voll angezeigt, sobald sie den letzten freien Platz belegen würden. So kommst Du als Admin auch dann noch auf Deinen Server, wenn er gut besucht ist.

## Rechte einer Gruppe

| Schlüssel | Werte | Bedeutung |
|-----------|-------|-----------|
| `name` | Text | Name der Gruppe |
| `password` | Text | Passwort, mit dem Spieler dieser Gruppe beitreten |
| `canKickBan` | `true` / `false` | Spieler kicken und bannen |
| `canAccessInventories` | `true` / `false` | Truhen und andere Behälter nutzen |
| `canEditWorld` | `true` / `false` | Terraforming und andere Eingriffe in die Welt außerhalb der Basen |
| `canEditBase` | `true` / `false` | Blöcke und Objekte in Basen setzen und entfernen |
| `canExtendBase` | `true` / `false` | Flammenaltäre setzen, aufwerten und entfernen – also das Basisgebiet erweitern |
| `reservedSlots` | Zahl | Slots, die für diese Gruppe freigehalten werden |

Diese Rechte steuern nur Basen, Behälter, die Welt außerhalb der Basen und die Moderation. Kämpfen, Looten, Erkunden und der Fortschritt in der Spielwelt sind in den Gruppen `Admin` und `Friend` ausdrücklich erlaubt.

## Eigene Gruppe anlegen

Du kannst zusätzlich eigene Gruppen anlegen, zum Beispiel eine Moderator-Gruppe, die zwar kicken darf, aber keine Flammenaltäre setzen kann. Füge dazu im Abschnitt `userGroups` einen weiteren Eintrag mit eigenem `name`, eigenem `password` und den gewünschten Rechten hinzu:

```json
{
    "name": "Moderator",
    "password": "DEIN_MODERATOR_PASSWORT",
    "canKickBan": true,
    "canAccessInventories": true,
    "canEditWorld": true,
    "canEditBase": true,
    "canExtendBase": false,
    "reservedSlots": 0
}
```

> [!TIP]
> Vergib für jede Gruppe ein eigenes Passwort. Nur so ist eindeutig, welche Rechte ein Spieler mit seinem Passwort bekommt.

> [!IMPORTANT]
> Das Feld `password` ganz oben in der Datei stammt aus der Zeit vor den Usergruppen. Steht dort ein Passwort, legt das Spiel daraus eine Gruppe namens `default` an, die die Rechte der Gruppe `Friend` bekommt – also keine Adminrechte und kein Kick/Ban. Wird die Datei mit einem gesetzten Passwort neu erzeugt, entsteht ausschließlich diese Gruppe `default`; die mitgelieferten Gruppen wie `Admin` fehlen dann. Lass dieses Feld leer (`""`) und vergib Adminrechte ausschließlich über den Abschnitt `userGroups`.

> [!NOTE]
> Beim Serverstart schreibt die Verwaltung nur die Werte `name`, `slotCount`, `queryPort` und `gameSettingsPreset` neu. Dein Abschnitt `userGroups` bleibt dabei erhalten.

Was ein Admin mit dem Recht `canKickBan` im Spiel tun kann, liest Du unter [Spieler kicken und bannen](/tutorials/gameserver/enshrouded/kick-ban-players).
