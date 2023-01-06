




using System.Collections.Generic;

public static class Filter
{
  public static IEnumerable<string> GooseFilter(IEnumerable<string> birds)
  {
    
    // return IEnumerable of string containing all of the strings in the input collection, except those that match strings in geese
    string[] geese = new string[] { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };
    List<string> result = new List<string>();
      
      foreach (string bird in birds)
      {
        bool includeBird = true;
          
        foreach (string goose in geese)
        {
          if (goose == bird)
          {
            includeBird = false;
              break;
          }
        }
        
        if (includeBird)
        {
          result.Add(bird);  
        }
      }
    return result;
  }
}

///////////////////

using System.Collections.Generic;
using System.Linq;

public static class Filter
{
  private static string[] geese = new string[] { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };

  public static IEnumerable<string> GooseFilter(IEnumerable<string> birds)
  {
    return birds.Except(geese);
  }
}


//////////////////////
using System.Collections.Generic;

public static class Filter
{
  private static HashSet<string> geese = new HashSet<string> { "African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher" };

  public static IEnumerable<string> GooseFilter(IEnumerable<string> birds)
  {
    foreach(var bird in birds) if(!geese.Contains(bird)) yield return bird;
  }
}
