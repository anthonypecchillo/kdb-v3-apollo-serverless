# kdb-v3-apollo-serverless

This is the Apollo GraphQL Server that supports GraphQL queries from the kdb-v3 client codebase.

This project was started by following this [Apollo tutorial](http://apollographql.com/docs/tutorial/introduction.html). 🚀

## Dev Database Setup

**Prerequisite Step:** Postgres must be installed on your local machine for the following to work.

I have no clue if this will really work, but, here's what I think you should do:

- Create a database called `gcftaskforce`

- Set the username and password both to empty strings, `''`.

- Run the following command in a terminal window from the root:

```bash
psql gcftaskforce < database/schema-postgres.sql
```

- Cross your fingers, because I'm not sure if that will work. If not, contact Anthony and we'll work through it together on a call.

## Installation

### Dev Database Setup

**Prerequisite Step:** Postgres must be installed on your local machine for the following to work.

I have no clue if this will really work, but, here's what I think you should do:

- Create a database called `gcftaskforce`

- Set the username and password both to empty strings, `''`.

- Run the following command in a terminal window from the root:

```bash
psql gcftaskforce < database/schema-postgres.sql
```

- Cross your fingers, because I'm not sure if that will work. If not, contact Anthony and we'll work through it together on a call.

### Run the App

To run the app, run these commands in a terminal window from the root:

- Install dependencies:

```bash
yarn
```

- Set up environment variables:

```bash
cp .env.example .env
```

> Ask Anthony for the API key and add it to the `.env` file you just created.

- Start the Apollo server in your dev environment:

```bash
yarn start
```

## File Structure

**TODO:** Replace the below from the original tutorial.

*The app is split out into two folders:
- `start`: Starting point for the tutorial
- `final`: Final version

From within the `start` and `final` directories, there are two folders (one for `server` and one for `client`).*
