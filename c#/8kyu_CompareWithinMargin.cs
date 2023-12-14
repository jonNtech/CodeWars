using System;
public class Kata
{
    public static int CloseCompare(double a, double b, double margin = 0)
    {
        if (Math.Abs(a - b) <= margin)
        {
            return 0;
        }
        else if (a > b)
        {
            return 1;
        }
        else if (a < b)
        {
            return -1;
        }
        else
        {
            return 0;
        }
    }
}



//public class Kata
//{
//    public static int CloseCompare(double a, double b, double margin = 0)
//    {
//        if (a + margin < b) return -1;
//        else if (a > b + margin) return 1;

//        return 0;
//    }
//}