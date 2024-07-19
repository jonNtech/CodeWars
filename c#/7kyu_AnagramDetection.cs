using System;
using System.Linq;


//An anagram is the result of rearranging the letters of a word to produce a new word(see wikipedia).

//Note: anagrams are case insensitive

//Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

//Examples
//"foefet" is an anagram of "toffee"

//"Buckethead" is an anagram of "DeathCubeK"



public class Kata
{
	public static bool IsAnagram(string test, string original)
	{
		test = test.ToLower();
		original = original.ToLower(); 
		
		char[] charArray1 = test.OrderBy(x => x).ToArray();
		char[] charArray2 = original.OrderBy(x => x).ToArray();
		
		return charArray1.SequenceEqual(charArray2);
	}
}