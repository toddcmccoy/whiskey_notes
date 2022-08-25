(View Raw will give you the markdown that you can copy to your repos!)


![MIT LICENSE](https://img.shields.io/github/license/scottbromander/the_marketplace.svg?style=flat-square)
![REPO SIZE](https://img.shields.io/github/repo-size/scottbromander/the_marketplace.svg?style=flat-square)
![TOP_LANGUAGE](https://img.shields.io/github/languages/top/scottbromander/the_marketplace.svg?style=flat-square)
![FORKS](https://img.shields.io/github/forks/scottbromander/the_marketplace.svg?style=social)

# Whisk(e)y Notes

## Description

_Duration: 2 Week Sprint_

Whisk(e)y Notes is designed to help budding whiskey enthusiasts break into the hobby. With a large amount of industry jargon, copy written by marketing departments, and gatekeeping getting involved in whiskey as a hobby can be overwhelming and intimidating. This app helps to remove some of those barriers by creating a private journal to track whiskies you have tried. Simple ratings and no expectations or unnecessary jargon. You will have a chance to learn as you wish to learn and record notes in a way that makes sense to you.

To see the fully functional site, please visit: [DEPLOYED VERSION OF APP](https://whiskey-notes.herokuapp.com/)

## Screen Shot

![whiskey-note-dashboard](https://user-images.githubusercontent.com/93785112/186767954-82fad43c-63ba-4578-9537-95beb09c3816.png)


### Prerequisites

Link to software that is required to install the app (e.g. node).

- [Node.js](https://nodejs.org/en/)
- List other prerequisites here

## Local installation


1. Create a database named `whiskey_notes`,
2. The queries in the `database.sql` file are set up to create all the necessary tables and populate the needed data to allow the application to run correctly. The project is built on [Postgres](https://www.postgresql.org/download/), so you will need to make sure to have that installed. We recommend using Postico to run those queries as that was used to create the queries, 
3. Open up your editor of choice and run an `npm install`
4. Run `npm run server` in your terminal
5. Run `npm run client` in your terminal
6. The `npm run client` command will open up a new browser tab for you!

## Usage
How does someone use this application? Tell a user story here.

1. Arriving on the landing page the user either registers a new account or logs in to their account
2. The user can then view notes they have entered on their dashboard
3. The user then adds a new note
4. The new note buttong takes the user to the first page of the note entry
5. The user then steps through each stage of the note process
6. The user is then given a chance to review their entry before submitting to their journal
7. Once the note is entered the user can view all the notes in their archive and edit or delete notes as they wish


## Built With

Node
Express
React
Redux
Redux-Saga
Postgresql
Heroku
Sweet Alerts



## License
[MIT](https://choosealicense.com/licenses/mit/)

_Note, include this only if you have a license file. GitHub will generate one for you if you want!_

## Acknowledgement
Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. Thank you to all the members of the Jemisin Cohort. My instructor, Liz. My partner and my family.

## Support
If you have suggestions or issues, please email me at [Todd McCoy](tcmccoy@gmail.com)
