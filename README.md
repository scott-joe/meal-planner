# Meal Planner

### Purpose

Web client to the Meal Planner app.

---

## Monorepo

This is a monorepo for a React PWA and NestJS middleware.

### Purpose

To help cut down on the effort going into meal planning each week. Yes I realize this is way more work than meal planning, but I like doing this and I don't like meal planning. Also gives me a good reason to try new things.

## Running

```
yarn
yarn client start:dev
```

## Test
```
yarn test
```

## Roadmap

⚠️ _Convert to GH Project_

- [x] App bar
- [x] Side nav drawer
- [x] Redux
- [x] Consumer layer
- [x] Stub HTTP routes for recipes
- [ ] Connect to SQLite db
- [ ] Create new recipes (basic MD)
- [ ] Recall and display recipe list
- [ ] Recall and display single recipe
- [ ] Create recipes with metadata

---
- create better interface for the db client
- add way to check off stuff you know you have and end up with a list of things to check for before you go or order groceries
- recipe can add link to source
- recipe can add photos
- recipe can be added from pinterest
	- pulls pin's title
	- pull's link for recipe
	- asks you to fill out the rest
- verify items exist before attempting to collect
- set frequency of each recipe
- set frequency of each meal
- flag recipe as public/shared/community
	- comes from moderator
	- suggested by user
	- comes from trusted source/domain
- search recipe for keywords in ingredients list to tag proteins and other things like 'contains nuts' or 'contains dairy'
 -->
