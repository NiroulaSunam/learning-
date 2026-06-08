## Installing Postgres SQL and making it work 

```bash
brew install postgresql@17
```

### Needed for mac for path
```bash
echo 'export PATH="/opt/homebrew/opt/postgresql@17/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

### Start
brew services start postgresql@17

```bash
psql postgres
```

### Create Database and connect to it
```postgres
postgres=# CREATE DATABASE notesapp;

postgres=# \c notesapp
```

### Create Table
```sql
CREATE TABLE notes ( 
    id SERIAL PRIMARY KEY,
    title TEXT NOT NULL, 
    content TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT NOT()
);
```

```postgres
notesapp=# \d notes
```
-> to check if the notes have been made correctly or not 

```postgres
\q
```
-> quit the postgres and go back to terminal

## Install next.js

```bash
npx create-next-app@latest notes-app
```

## Understanding res and req
res -> response -> what you send back to the client. 
req -> request -> what client sends you. 