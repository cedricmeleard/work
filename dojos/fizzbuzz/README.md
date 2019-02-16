# FIZZBUZZ DOJO

Voici le code lié au coding dojo,
probleme du Fizzbuzz

# Description

On cherche a répondre au problème du fizzbuzz.
Il s'agit d'un programme qui compte en fizzbuzz jusqu'a un chiffre donné par l'utilisateur.

Règle pour 1 chiffre:

- Si un chiffre est un multiple de 3 alors le programme répond "Fizz"
- Si un chiffre est un multiple de 5 alors le programme répond "Buzz"
- Si il est multiple des 2 alors "FizzBuzz"
- Dans autres cas, le programme retourne la valeur

# Pré requis

Vous devez avoir une installation de Go, voir :
https://golang.org/dl/

## Test & run

Pour lancer les tests

> go test

Pour lancer le programme

> go run fizzbuzz.go

# A propos de Go (Aide mémoire)

## Variables

Décalaration d'une variable afin d'y stocker une valeur:

```go
// déclaration standard
var maVaraible string = "une chaine que je souhaite conserver"
```

ou...

```go
// Une syntaxe abrégée
maVaraible := "une chaine que je souhaite conserver"
// on peut aussi déclarer a la suite
var chaine1, chaine2 string = "test 1", "test 2"
```

Go étant fortement typé il faut préciser le type après le nom de la variable, ici on a pu abréger l'expression du fait que la valeur passée donne implicitement le type, par contre il ajouter `:=`

nb: Le compilateur de Go ne tolère pas une variable non utlisée, si vous la déclarez sans vous en servir, il y aura une erreur de compilation

## Conditionnelles

avec Go on a if et switch, rien de bien différent des autres langages au niveau de la déclaration

```go
// une conditionnelle IF
if maVariable == true {
    //...
}
//pour le switch
switch maVariable {
    case true :
        //... do something
    default :
}
```

Proche...Sauf que le switch n'a pas besoin de break, cela veut aussi dire que les instructions suivantes ne sont pas exécutées comme habituellement.
Cela fait parti des concepts de simplicité de Go

## Boucles

Si on veut itérer sur une liste ou sur une condition, habituel, vous avez for, foreach, while, do while, loop..Bref...A ne plus savoir lequel choisir.
Avec Go, vous avez for...Et c'est tout (et c'est très bien), voyons ca:

```go
// une boucle habituelle for...
for i int = 0; i <= 10; i++ {
    //...
}
// un while (exécuté tant que la condition n'est pas remplie)
for i <= 10 {
    //...
}
// une booucle infinie (goroutine par exemple)
for {
    //...
}
```

## Fonctions

Déclaration d'une fonction

```go
// Voici une décalaration de fonction
func DoEvilmaVaraible(number int) (evil string, e bool) {
    //...
    // traitement de ce qu'il y a faire
    // enfin il faut retourner
    return
}
```

A noter, la partie `(evil string, e bool)` défini le retour de la fonction,
Go permet de retourner plusieurs valeur en retour.
Ici nous les avons nommé, elles disponibles sans autre déclaration dans le corps de la fonction

Dans l'exemple ci dessus on voir `return` c'est ok avec Go, on est pas obligé de passer les valeurs, elle sont implicitement déduite, par contre ce n'est pas toujours à faire pour des questions de lisibilité

Un autre point interessant est que l'on peut affecter une fonction a une variable, ainsi

```go
// on affecte al fonction a
var a := DoEvilmaVaraible
//puis plus loin on peut appler
a(1234)
// ou meme la passer en parametre d'une autre fonction ;)
```

## Objets

On peut définir des types avec Go, pour faire simple:

```go
// Person Voici une décalaration d'un type Person
type Person struct {
    // FirstName, LastName propriété publiques (exposées)
    // car elles commencent par une majuscule
    FirstName, LastName string
    // propriété privée
    secret int
}
```

NB: pour tout ce qui est exposé (majuscule) il faut un commentaire (Warning sinon)

On peut ensuite utiliser `var person = Person{}`, maintenant comment déclarer des méthodes, par exemple une méthode qui retourne "Bonjour, je m'appelle [FirstName]"

```go
// Person Voici une décalaration d'un type Person
type Person struct {
    //...
}
// Greeting déclaration de la fonction
func (p *Person) Greeting() string {
    return "Bonjour, je m'appelle " + p.FirstName
}

var michel = Person{}
michel.FirstName = "Michel"
michel.Greeting() //return ...
```

Rapidement, dans `(p *Person)`, \* permet de définir que l'on passe l'objet et donc si dans méthode Greeting nous le modifions, il sera impacté.
Si l'on ne met pas \*, alors l'objet Person est passé comme copie (fonction pure) et les modifications apportées n'auront pas d'imapct

## pour aller plus loin

https://tour.golang.org/welcome/1

Cela permet d'aller plus loin et c'est très bien fait, certains point comme les interfaces, le goroutines, chan ou la notion de composition des objets ne sont pas abordés ici mais constituent autant de bonnes raisons de creuser le sujet
