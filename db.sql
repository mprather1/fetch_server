DROP DATABASE IF EXISTS fetch_development;
CREATE DATABASE fetch_development;

\c fetch_development;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);


DROP DATABASE IF EXISTS fetch_test;
CREATE DATABASE fetch_test;

\c fetch_test;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);

DROP DATABASE IF EXISTS fetch_production;
CREATE DATABASE fetch_production;

\c fetch_production;

CREATE TABLE models (
  ID SERIAL PRIMARY KEY,
  name VARCHAR,
  attribute INTEGER,
  current_day TIMESTAMP without time zone default (now() at time zone 'utc')
);