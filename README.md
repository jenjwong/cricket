# BP
Blood Pressure Backend borrowed from Nick Lathen

### Getting Started

1. clone the respository.
2. run npm install (or yarn)
3. Create an Auth0[http://auth0.com] account (if you don't have one) and put the appropriate credentials into config/config.js
4. run a local postgres server with a database called 'underpressure'
    1. (OSX) brew install postgres
    2. brew services start postgresql (service)[https://launchschool.com/blog/how-to-install-postgresql-on-a-mac]
    3. createdb underpressure
5. run node server/app.js

once the UI is written, you'll be able to:

6. go to 127.0.0.1:9999 and sign up for a new account
7. once you are signed in to your account grab the token_id out of localStorage and paste it in as the 'token' in config/config.js
8. run npm test to test that everything is working and populate the database with a year of pressure data (takes about 30 seconds)
9. now you can go back to 127.0.0.1:9999 and your data should load in. The x-axis of the graph can be clicked and dragged, you can double click to scroll back to the beginning.
