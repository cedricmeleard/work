package main

import (
	"fmt"
	"strconv"
)

func fizzbuzz(chiffre int) string {
	if chiffre == 3 {
		return "fizz"
	}
	if chiffre == 5 {
		return "buzz"
	}
	return strconv.Itoa(chiffre)
}

//
func main() {
	fmt.Println( fizzbuzz(3) )
}