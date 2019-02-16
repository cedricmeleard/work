package main

import "testing"
import "fmt"

func TestFizzBuzz_given_1_should_return_1(t *testing.T) {
	var returnValue = fizzbuzz(1)
	if returnValue != "1" {
		t.Fail()
	}
}

func TestFizzBuzz_given_2_should_return_2(t *testing.T) {
	var returnValue = fizzbuzz(2)
	if returnValue != "2" {
		t.Fail()
	}
}

func TestFizzBuzz_given_3_should_return_fizz(t *testing.T) {
	var returnValue = fizzbuzz(3)
	if returnValue != "fizz" {
		t.Fail()
	}
}

func TestFizzBuzz_given_4_should_return_4(t *testing.T) {
	var returnValue = fizzbuzz(4)
	if returnValue != "4" {
		t.Fail()
	}
}

func TestFizzBuzz_given_5_should_return_buzz(t *testing.T) {
	var returnValue = fizzbuzz(5)
	if returnValue != "buzz" {
		t.Fail()
	}
}
func TestFizzBuzz_given_6_should_return_fizz(t *testing.T) {
	var returnValue = fizzbuzz(6)
	if returnValue != "fizz" {
		t.Fail()
	}
}

func TestFizzBuzz_given_10_should_return_buzz(t *testing.T) {
	var returnValue = fizzbuzz(10)
	if returnValue != "buzz" {
		t.Fail()
	}
}

func TestFizzBuzz_given_15_should_return_fizzbuzz(t *testing.T) {
	var returnValue = fizzbuzz(15)
	if returnValue != "fizzbuzz" {
		t.Fail()
	}
}

func TestFizzBuzzList_given_2_should_return_1_2(t *testing.T) {
	var returnValue = fizzbuzzlist(2)
	if returnValue != "1...2" {
		fmt.Println(returnValue)
		t.Fail()
	}
}

func TestFizzBuzzList_given_3_should_return_1_2_fizz(t *testing.T) {
	var returnValue = fizzbuzzlist(3)
	if returnValue != "1...2...fizz" {
		fmt.Println(returnValue)
		t.Fail()
	}
}
