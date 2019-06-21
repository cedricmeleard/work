# TCR dojo

L'idée est d'expérimenter le TCR (Test commit revert).

Le principe étant le suivant, on va écrire du code avec ses tests, toujours avec une approche tdd.

A ceci pret qu'on ne fera pas forcement fail le test tout de suite.

> Pourquoi?

Si on conserve l'écriture du test en premier, puis le code le faisant passer, l'approche TCR implique un revert du code portant sur un fail des tests.

## Lancement

pour lancer le test:

`npm run tcr`

il est toujours possible de lancer les test seuls avec

`npm test`

pour par exemple faire fail la saisie du test sans l'implémentation

## Objectif

- Bien identifier les use-cases
- Apprendre à mieux découper
- Approche baby step indispensable
