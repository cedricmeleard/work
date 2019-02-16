package main

import (
	"fmt"
	"strconv"
)

func fizzbuzz(chiffre int) string {

	switch {
	case chiffre%15 == 0:
		return "fizzbuzz"
	case chiffre%3 == 0:
		return "fizz"
	case chiffre%5 == 0:
		return "buzz"
	}
	return strconv.Itoa(chiffre)
}

func fizzbuzzlist(chiffre int) string {
	if chiffre == 0 {
		return ""
	}
	if chiffre == 1 {
		return "1"
	}

	return fizzbuzzlist(chiffre-1) + "..." + fizzbuzz(chiffre)
}

// ---------------------------------------------------------------------------
// fonction principale pour utiliser le programme
// Attention, pas de gestion d'erreur
func main() {
	fmt.Println(fizzbuzzlist(0))
}
