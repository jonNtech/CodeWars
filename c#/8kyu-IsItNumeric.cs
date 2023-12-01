using System;

public class CodeWars
{
  public static bool IsDigit(string s) 
  {
    Decimal n;
    bool isNumeric = Decimal.TryParse(s, out n);
    return isNumeric;
  }
}
