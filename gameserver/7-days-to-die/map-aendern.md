---
description: Map auf einem 7 Days to Die Server ändern
---

# So änderst du die Map auf deinem 7 Days to Die Server

Du kannst zwischen der handgestalteten Map **Navezgane**, vorgenerierten Maps (**Pregen**) und einer zufällig generierten Welt (**RWG**) wählen.

## Map ändern

1. <b>Server stoppen</b><br>
   Stoppe deinen Server über die Verwaltung.

2. <b>Per SFTP verbinden</b><br>
   Verbinde dich per [SFTP](../sftp-verbindung-herstellen.md) mit deinem Server.

3. <b>serverconfig.xml öffnen</b><br>
   Öffne die Datei `serverconfig.xml` im Hauptverzeichnis deines Servers.

4. <b>Map festlegen</b><br>
   Suche die folgende Zeile und ändere den Wert:

   ```xml
   <property name="GameWorld" value="Navezgane"/>
   ```

   | Wert | Beschreibung |
   |------|-------------|
   | `Navezgane` | Die handgestaltete Standard-Map |
   | `RWG` | Zufällig generierte Welt |
   | `Pregen06k01` bis `Pregen06k04` | Vorgenerierte 6k-Maps |
   | `Pregen08k01` bis `Pregen08k04` | Vorgenerierte 8k-Maps |
   | `Pregen10k01` bis `Pregen10k04` | Vorgenerierte 10k-Maps |

5. <b>Server starten</b><br>
   Speichere die Datei und starte deinen Server.

## Zufällige Welt konfigurieren (RWG)

Wenn du `RWG` als Map gewählt hast, kannst du die Weltgenerierung zusätzlich anpassen:

```xml
<property name="GameWorld" value="RWG"/>
<property name="WorldGenSeed" value="MeinSeed"/>
<property name="WorldGenSize" value="6144"/>
```

| Einstellung | Beschreibung |
|-------------|-------------|
| `WorldGenSeed` | Der Seed für die Weltgenerierung (beliebiger Text) |
| `WorldGenSize` | Kartengröße: `6144`, `8192` oder `10240` |

:::: info Hinweis
Je größer die Welt, desto mehr Ressourcen benötigt der Server. Eine Größe von `6144` ist für die meisten Server empfehlenswert.
::::

:::: warning Achtung
Beim Wechseln der Map wird die bestehende Welt nicht gelöscht. Wenn du zu einer neuen zufälligen Welt wechseln möchtest, ändere den `WorldGenSeed` oder lösche den bestehenden Weltordner unter `/Saves/`.
::::
