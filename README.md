# Node or Express Js App with typescript 

This repository demonstrates how to use Docker Compose to build and run containers for your project.

## Prerequisites

Before you begin, make sure you have the following installed on your system:

- Docker: [Install Docker](https://docs.docker.com/get-docker/)
- Docker Compose: [Install Docker Compose](https://docs.docker.com/compose/install/)

## Building and Running Containers

### Building the Containers

To build the containers, run the following command:

```bash
docker compose build

```

Running and Stopping the Containers

This command will start the containers defined in the docker-compose.yml file. You can specify the -d option to run the containers in the background.

```bash
docker compose up

```

To stop and remove the running containers, use the following command:

```bash
docker compose down

```