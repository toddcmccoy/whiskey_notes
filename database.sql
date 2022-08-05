-- Create a database named "whiskey_notes"


-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "tasting_notes" (
	"id" SERIAL PRIMARY KEY,
	"user_id" INT not null,
	"date" text,
	"whiskey_name" varchar(255),
	"whiskey_abv" varchar(255),
	"whiskey_style" varchar(255),
	"whiskey_country" varchar(255),
	"why_this_whiskey" varchar(255),
	"aroma_rating" INT not null,
	"aroma_notes" text,
	"flavor_rating" INT not null,
	"flavor_notes" text,
	"overall_notes" text,
	"buy_again" varchar(255),
	"overall_rating" INT not null,
);