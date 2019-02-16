package main

import (
	"bufio" 
	"strings"
	"os"
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

// ---------------------------------------------------------------------------
// fonction principale pour utiliser le programme
// Attention, pas de gestion d'erreur
func main() {
	// initialize reader
	reader := bufio.NewReader(os.Stdin)
	// write text prompt
	fmt.Print("Enter a number: ")
	// read prompt as string value
	text, _ := reader.ReadString('\n')
	// convert CRLF to LF from user input
	text = strings.Replace(text, "\n", "", -1)
	// extract int value from user input
	value, _ := strconv.Atoi(text)
	// ---------------------------
	// call program entry point
	// ---------------------------
	fmt.Println( fizzbuzz(value) )
	// END
}