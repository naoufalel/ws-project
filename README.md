# WebServices Meetup clone

Developped using `nodejs`, `angularjs`

[![N|Solid](https://media.licdn.com/mpr/mpr/shrinknp_100_100/AAEAAQAAAAAAAAhlAAAAJDU0ZjUwNmRlLTE2OWEtNDg3Yy1hZGU2LTY1MTA2OTc4ODEzNg.png)](https://nodejs.org/en/)
## Members of the group:
 - Naoufal EL BANTLI
 - Salif N'GOLO
 - Oussama BOUALEM

### This is the requested project, which consists of the following functions and their state :
  - user sign up ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user changes his/her full name and/or biography ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user deletes his/her account ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user creates new group ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user changes the description of the group he/she owns ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user deletes groups he/she owns ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user views a list of groups with descriptions and membership count ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user joins group ![N|Solid](http://tldr.me/uploadify/cancel.png)
  - user views members of the group he/she owns or has joined ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)
  - user comments on the dashboard of the group ![N|Solid](http://tldr.me/uploadify/cancel.png)
  - user leaves the group![N|Solid](http://tldr.me/uploadify/cancel.png)
  - user checks the profile of other users ![N|Solid](http://public-dns.info/assets/icons/states/valid-72a9f4b044b7a12ae4eb9d0b5d47369e.png)

### These are the `links` used throught out the web application:
##### `For the api`:
```sh
/api/groups
    /api/groups/:group_id
    Supports all HTTP verbs (GET, POST, PUT, DELETE)
    returns json
/api/users
    /api/users/:user_id
    Supports all HTTP verbs (GET, POST, PUT, DELETE)
    returns json
```
##### `For the user`:
```
/login
/register
/users
    /users/:id -for checking a profile
    /users/me -for the logged in user
    /users/update -to update info about the logged in user
    more functionnalities are possible such as delete
/groups
    /groups/create-group
    /groups/:id -for checking a group
    /groups/update/:id -to update info about the group
    more functionnalities are possible such as delete
/logout
```

##### Storage
We used MongoDB to store all the restfull app data.

##### Dependencies
Check the `package.json` file to see all the required modules for this app.
We used jade as our view template
##### Notes
We used `nodejs` because it was simpler. We found that `Java Spring` has a bigger learning curve for the short time we had to develop the app.


