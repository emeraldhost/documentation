---
description: Version bei einem Minecraft Server ändern
---

# Version bei einem Minecraft Server ändern

## Version

In Minecraft bezieht sich eine "Version" auf eine bestimmte Variante oder Ausgabe des Spiels. Minecraft hat im Laufe der Jahre verschiedene Versionen veröffentlicht, die sowohl Änderungen am Gameplay als auch an den Spielmechaniken, Grafiken und Funktionen mit sich bringen.

## Version bei einem Minecraft Server ändern:

1. <b>Serververwaltung öffnen</b><br>
    Um ein Version auszuwählen, besuche bitte die Verwaltungsseite deines Minecraft-Servers auf EmeraldHost.

2. <b>Finde die Server-Einstellungen</b><br>
    Navigiere in der rechten Seitenleiste zum Reiter "Einstellungen" und wähle diesen aus.

    <img src="../../assets/gameserver/minecraft-java-edition/version-aendern/Code_Z3M5jSqcUj.png" />

3. <b>Neue Version auswählen</b><br>
    <img src="../../assets/gameserver/minecraft-java-edition/version-aendern/chrome_vaH22UQ5MP.png" />

    Unter der Eingabe "Minecraft Version" kannst du nun die gewünschte Minecraft-Version eingeben. Die Version sollte der offiziellen Minecraft-Versionierung entsprechen.
    
    Beispiel: `1.20` oder `1.19` oder `1.18` oder `1.17` oder `1.16`, ...

    Je nach ausgewählter Minecraft-Version sollte eine andere Java-Version für das "Docker Image" ausgewählt werden. Hier ist eine Liste von Minecraft-Versionen und den entsprechenden Docker-Images:
    | Minecraft Version          | Docker Image       |
    | -------------------------- | ------------------ |
    | 1.17 und höher             | Java 16 oder höher |
    | 1.16.x (Nether Update)     | Java 11 oder höher |
    | 1.15.x (Buzzy Bees)        | Java 8 oder höher  |
    | 1.14.x (Village & Pillage) | Java 8 oder höher  |
    | 1.13.x                     | Java 8 oder höher  |
    | 1.12.x                     | Java 8             |
    | 1.11.x und älter           | Java 8             |

    Des Weiteren muss die "Build Number" passend zur zuvor eingegebenen Minecraft-Version angegeben werden. Wir installieren standardmäßig PaperSpigot auf allen Minecraft-Servern. Falls die Serversoftware geändert wurde, sollte die entsprechende Buildnummer von der Website der jeweiligen Serversoftware ermittelt werden.

    Hier findet ihr alle Minecraft-Versionen und zugehörigen Buildnummern von PaperSpigot: https://papermc.io/downloads/all
    
    <img src="../../assets/gameserver/minecraft-java-edition/version-aendern/chrome_Vmbm9yAOL3.png" />
    
    Du kannst auf der linken Seite die gewünschte Minecraft-Version auswählen, und für jede Version findest du in der Mitte alle zugehörigen Builds. Bei EmeraldHost musst du die Buildnummer ohne das "#" eingeben.

    Hier ist eine Liste von Buildnummern, die den jeweiligen Minecraft-Versionen entsprechen:
    | Minecraft Version | Paper Build |
    | ----------------- | ----------- |
    | 1.20              | 17          |
    | 1.19              | 81          |
    | 1.18              | 66          |
    | 1.17              | 79          |
    | 1.16.1            | 138         |
    | 1.15              | 21          |
    | 1.14              | 17          |
    | 1.13              | 173         |
    | 1.12              | 1169        |
    | 1.11.2            | 1106        |
    | 1.10.2            | 918         |
    | 1.8.8             | 445         |

4. <b>Server neuinstallieren</b><br>
    Kehre zur Übersichtsseite deines Minecraft-Servers zurück. Klicke oben rechts auf die drei Punkte und wähle "Neuinstallieren" aus. Dein Minecraft-Server wird einmal zurückgesetzt und mit der von dir ausgewählten Minecraft-Version neuinstalliert.

    <img src="../../assets/gameserver/minecraft-java-edition/version-aendern/chrome_PGFBVaKsrL.png" />

    Ein neues Fenster wird geöffnet, in dem du die Neuinstallation bestätigen musst. Bestätige diesen Vorgang, indem du auf "Ja, Server neu installieren" klickst.

    <img src="../../assets/gameserver/minecraft-java-edition/version-aendern/chrome_7rgg2mZwFp.png" />

    Die Fertigstellung des Vorgangs wird angezeigt, sobald dein Minecraft-Server wieder online ist.

### Das war's! Mit diesen Schritten solltest Du in der Lage sein, eine andere Version für dein Minecraft Server zu installieren.