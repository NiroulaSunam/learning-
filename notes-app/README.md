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

## Understanding frontend and backend 
api -> whatever is inside it is backend \
pages -> whatever inside it is frontent except the api folder \
public -> images \
styles -> css folders \
eslint.config.mjs -> for people to write polished and similar structure code | code quality checker\
jsconfig.json -> helps VS code understand your project structure for better autocomplete
next.config.mjs -> Next.js configuration itself
lib -> added later to write whatever connects to the database 

## Installing pg (library that lets JavaScript talk to PostgreSQL)
```bash
npm install pg
```