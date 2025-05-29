---
description: Install Minecraft server on a root server (Ubuntu/Debian)
---

# Install Minecraft Server

1. update your system and install necessary programs

```
apt update && upgrade -y
```

<details>

<summary>Debian 10</summary>

```
apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 73C3DB2A
```

```
echo "deb http://ppa.launchpad.net/linuxuprising/java/ubuntu focal main" | tee /etc/apt/sources.list.d/java.list
```

```
apt update
```

```
apt install screen gnupg oracle-java17-installer -y
```

Accept the license conditions by clicking on "OK" with **TAB** and confirm with **ENTER**. In the following window click on "YES" and confirm again with **ENTER**.

</details>

<details>

<summary>Debian 11</summary>

```
apt install screen openjdk-17-jre-headless -y
```

</details>

<details>

<summary>Ubuntu</summary>

```
sudo apt install screen gnupg software-properties-common -y
```

```
sudo add-apt-repository ppa:linuxuprising/java
```

```
sudo apt update
```

```
sudo apt install oracle-java17-installer -y
```

Accept the license conditions by clicking on "OK" with **TAB** and confirm with **ENTER**. In the following window click on "YES" and confirm again with **ENTER**.

</details>

2. create a subuser for the server and log in

```
adduser minecraft --disabled-login
```

```
su minecraft -l
```

3. version selection (for example with Spigot 1.19.3)
   * [Spigot Download](https://getbukkit.org/download/spigot)
   * [Craftbukkit Download](https://getbukkit.org/download/craftbukkit)

```
wget https://download.getbukkit.org/spigot/spigot-1.19.3.jar
```

4. create start file

Create a start.sh with:

```
nano start.sh
```

Now copy the following line and paste it with a left click:

```
 screen -AmdS minecraft java -Xms1G -Xmx1G -jar spigot-1.19.3.jar
```

:::warning
change the 1 in -Xmx1G to the number of your ram e.g. 10 (server with 10 gigabyte ram)
:::

:::info
Now save the entry with **CTRL + O** and close the window with **CTRL + X**
:::

5. accept licenses and assign file rights

```
echo "eula = true" > eula.txt
```

```
chmod +x start.sh
```

6. start server

```
./start.sh
```

:::info
The console can be opened with "screen -r minecraft".
:::
