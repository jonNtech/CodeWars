using System;

public class Kata
{
    public static bool CheckForFactor(int num, int factor)
    {
        if (num == 0) return false;
        if (num % factor == 0)
        {
            return true;
        }
        else
        {
            return false;
        }
    }
}



//public class Kata
//{
//    public static bool CheckForFactor(int num, int factor) => num % factor == 0;
//}