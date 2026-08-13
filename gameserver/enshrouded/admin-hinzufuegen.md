---
description: Admin auf einem Enshrouded Server hinzufügen
---

# So fügst du einen Admin auf deinem Enshrouded Server hinzu

Enshrouded kennt keinen Admin, den du in der Verwaltung einträgst. Adminrechte werden über **Usergruppen** im Abschnitt `userGroups` der Datei `enshrouded_server.json` vergeben. Jede Gruppe hat eigene Rechte und ein eigenes Passwort — wer beim Beitritt das Passwort der Admin-Gruppe eingibt, spielt mit deren Rechten.

:::: info Hinweis
In der Verwaltung gibt es kein Feld für ein Admin-Passwort. Die Rechtevergabe läuft ausschließlich über die `enshrouded_server.json`.
::::

## Adminrechte vergeben

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>enshrouded_server.json öffnen</b><br>
   Öffne die Datei `enshrouded_server.json` im Hauptverzeichnis und suche den Abschnitt `userGroups`. Die Datei bringt bereits fertige Gruppen mit, unter anderem `Admin`.

4. <b>Rechte der Admin-Gruppe prüfen</b><br>
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

5. <b>Passwort vergeben</b><br>
   Im Feld `password` steht standardmäßig ein zufällig erzeugtes Passwort. Ersetze es durch eines, das nur deine Admins kennen. Mehr dazu unter [Server Passwort ändern](server-passwort-aendern.md).

6. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

:::: warning Achtung
Änderungen in der `enshrouded_server.json` werden überschrieben, wenn der Server beim Speichern läuft. Stoppe den Server immer vor dem Bearbeiten.
::::

:::: danger Wichtig
Lass das Feld `password` der Admin-Gruppe niemals leer. Eine Gruppe ohne Passwort steht jedem offen — jeder Spieler, der deinen Server findet, bekäme damit volle Adminrechte.
::::

## Als Admin beitreten

1. <b>Server beitreten</b><br>
   Verbinde dich wie unter [Server beitreten](server-beitreten.md) beschrieben mit deinem Server.

2. <b>Admin-Passwort eingeben</b><br>
   Gib im Passwort-Fenster das Passwort der Gruppe `Admin` ein. Das eingegebene Passwort entscheidet, in welche Gruppe du eingeordnet wirst und welche Rechte du bekommst.

:::: tip Tipp
Setzt du bei einer Gruppe `reservedSlots` auf `1` oder höher, wird der Server für Spieler anderer Gruppen als voll angezeigt, sobald sie den letzten freien Platz belegen würden. So kommst du als Admin auch dann noch auf deinen Server, wenn er gut besucht ist.
::::

## Rechte einer Gruppe

| Schlüssel | Werte | Bedeutung |
|-----------|-------|-----------|
| `name` | Text | Name der Gruppe |
| `password` | Text | Passwort, mit dem Spieler dieser Gruppe beitreten |
| `canKickBan` | `true` / `false` | Spieler kicken und bannen |
| `canAccessInventories` | `true` / `false` | Truhen und andere Behälter nutzen |
| `canEditWorld` | `true` / `false` | Terraforming und andere Eingriffe in die Welt außerhalb der Basen |
| `canEditBase` | `true` / `false` | Blöcke und Objekte in Basen setzen und entfernen |
| `canExtendBase` | `true` / `false` | Flammenaltäre setzen, aufwerten und entfernen — also das Basisgebiet erweitern |
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

:::: tip Tipp
Vergib für jede Gruppe ein eigenes Passwort. Nur so ist eindeutig, welche Rechte ein Spieler mit seinem Passwort bekommt.
::::

:::: danger Wichtig
Das Feld `password` ganz oben in der Datei stammt aus der Zeit vor den Usergruppen. Steht dort ein Passwort, legt das Spiel daraus eine Gruppe namens `default` an, die die Rechte der Gruppe `Friend` bekommt — also keine Adminrechte und kein Kick/Ban. Wird die Datei mit einem gesetzten Passwort neu erzeugt, entsteht ausschließlich diese Gruppe `default`; die mitgelieferten Gruppen wie `Admin` fehlen dann. Lass dieses Feld leer (`""`) und vergib Adminrechte ausschließlich über den Abschnitt `userGroups`.
::::

:::: info Hinweis
Beim Serverstart schreibt die Verwaltung nur die Werte `name`, `slotCount`, `queryPort` und `gameSettingsPreset` neu. Dein Abschnitt `userGroups` bleibt dabei erhalten.
::::

Was ein Admin mit dem Recht `canKickBan` im Spiel tun kann, liest du unter [Spieler kicken und bannen](spieler-kicken-bannen.md).
