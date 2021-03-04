# set up the server
 1. create new adonis package with ```adonis new image_gallery ```
 2. clone this repository in to another folder
 3. create an .env with this info
>
```
HOST=127.0.0.1
PORT=3333
NODE_ENV=development
APP_URL=http://${HOST}:${PORT}
CACHE_VIEWS=false
APP_KEY=Rc3uL0qUAMMZX22BHrZFq9An5vRMcfcA
DB_CONNECTION=pg
DB_HOST=127.0.0.1
DB_PORT=10000
DB_USER=postgres
DB_PASSWORD=
DB_DATABASE=web_database
SESSION_DRIVER=cookie
HASH_DRIVER=bcrypt 
```
  4. delete all the file in the ```need_delete.txt```
