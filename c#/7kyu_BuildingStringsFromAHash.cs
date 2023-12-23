using System;
using System.Collections.Generic;

public static class Kata
{
    public static string StringifyDict<TKey, TValue>(Dictionary<TKey, TValue> hash)
    {
        string result = "";

        foreach (var pair in hash)
        {
            result += pair.Key.ToString() + " = " + pair.Value.ToString() + ",";
        }

        // Remove the trailing comma if there is at least one key/value pair
        if (result.Length > 0)
        {
            result = result.Substring(0, result.Length - 1);
        }

        return result;
    }
}





//using System;
//using System.Collections.Generic;
//using System.Linq;

//public static class Kata
//{
//    public static string StringifyDict<TKey, TValue>(Dictionary<TKey, TValue> hash)
//    {
//        return string.Join(",", hash.Select(p => $"{p.Key} = {p.Value}"));
//    }
//}