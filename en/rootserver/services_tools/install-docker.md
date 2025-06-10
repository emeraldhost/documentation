---
description: Install Docker on a root server (Ubuntu/Debian)
---

# Install Docker

1. first update the system of your Linux server. To do this, open the console and enter the following command.

    ```
    apt update
    ```

2. install the "docker.io" package by entering the following command in the console:

    ```
    apt install docker.io
    ```

3. start the Docker service with the following command:

    ```
    sudo systemctl start docker
    ```

4. configure the Docker service to start automatically when the system is booted by entering the following command:

    ```
    sudo systemctl enable docker
    ```

4. check that Docker has been properly installed with the following command:&#x20;

    ```
    sudo docker run hello-world
    ```

5. if Docker has been installed correctly, the Hello World example is executed and a confirmation message is displayed.

Docker is now successfully installed on your Linux server and you can run and manage containers. To learn more Docker commands, you can read the Docker documentation or use online resources.
