using System;
using System.Diagnostics.CodeAnalysis;

public class Kata
{
    public static int Remainder(int a, int b)
    {
        if (a > b)
        {
            return a % b;
        }
        else
        {
            return b % a;
        }
    }
}



//public class Kata
//{
  //public static int Remainder(int a, int b) =>
  //  a > b ? a % b : b % a;
//}
