using System;
using System.Text.RegularExpressions;

public class Kata
{
  public static Boolean Validate_hello(String Greetings)
  {
    return Regex.IsMatch(Greetings, "hello|ciao|salut|hallo|hola|ahoj|czesc", RegexOptions.IgnoreCase);
  }
}



using System;
using System.Collections.Generic;
using System.Linq;

    public class Kata
    {
        public static bool Validate_hello(string greetings)
        {
            Console.WriteLine(greetings);
            List<string> myList = new List<string>() { "hello", "ciao", "salut", "hallo", "hola", "ahoj", "czesc" };
            return myList.Any(greetings.ToLower().Contains);
        }
    }




    public class Kata
    {
        public static bool Validate_hello(string greetings)
        {
         greetings = greetings.ToLower();
          //string helloStr = "[hello|ciao|salut|hallo|hola|ahoj|czec/i]";
          if (greetings.Contains("hello"))
          {
            return true;
          } else if (greetings.ToLower().Contains("ciao"))
           {
             return true;
           } else if (greetings.ToLower().Contains("salut"))
          {
            return true;
          }else if (greetings.ToLower().Contains("hallo"))
          {
            return true;
          }else if (greetings.ToLower().Contains("hola"))
          {
            return true;
          }else if (greetings.ToLower().Contains("ahoj"))
          {
            return true;
          }else if (greetings.ToLower().Contains("czesc"))
          {
            return true;
          }
          return false;
        } 
    }
