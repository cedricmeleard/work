package main

import "testing"


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