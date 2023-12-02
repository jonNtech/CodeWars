using System.Text;
using System;
using System.Collections.Generic;
public class Kata
{
  public static string[] AddLength(string str)
  {
    List<string> result = new();
    
    StringBuilder filter = new();
    
    for (int i = 0; i < str.Length; i++)
    {
        filter.Append(str[i]);
        
        if (Char.IsWhiteSpace(str[i]))
        {
            filter.Append(filter.Length - 1);
            result.Add(filter.ToString());
            filter.Clear();
        }

    }

    if (filter.Length > 0)
    {
        filter.Append($" {filter.Length - 1}");
        result.Add(filter.ToString());
    }
    return result.ToArray();
  }
}
