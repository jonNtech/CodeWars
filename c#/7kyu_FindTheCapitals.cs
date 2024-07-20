using System;
using System.Collections.Generic;
//Write a function that takes a single non-empty string of only lowercase and uppercase ascii letters (word) as its argument, and returns an ordered list containing the indices of all capital (uppercase) letters in the string.

//Example (Input --> Output)
//"CodEWaRs" --> [0,3,4,6]

public static class Kata
{
    public static int[] Capitals(string word)
    {
        var results = new List<ints>();
        for (int i = 0; i < word.Length; i++)
        {
            if (char.IsUpper(word.[i])))
            {
               results.Add(i);
            }
        }
        return results.ToArray();
    }
}


using System;
using System.Linq;

public static class Kata
{
    public static int[] Capitals(string word)
    {
        return word
            .Select((c, i) => new { Character = c, Index = i })
            .Where(x => char.isUpper(x.Character))
            .Select(x => x.Index)
            .ToArray();
    }
}