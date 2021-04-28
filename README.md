# Collaborators

* [Paartheepan RAVEENTHIRAN](https://github.com/punkte)
* [Adrien BANNWARTH](https://github.com/adrienbannwarth)
* [Etienne Mela](https://github.com/EtienneMela/)
# How to install

#### Requirements
* [Docker](https://docs.docker.com/)
* [Docker-compose](https://docs.docker.com/compose/)

#### Launch the project

Create a `.env` file and copy the content of the [.env.example](.env.example) file.  

Build images in docker-compose  
```bash
$ docker-compose build
```
Launch containers  
```bash
$ docker-compose up # -d
```

#### Launch Storybook
Go to the front directory  
Create a `.env` file and copy the content of the [.env.example](./front/.env.example) file.  

Install dependancies 
```bash
$ yarn 
```

Launch storybook
```bash
$ yarn storybook
```

