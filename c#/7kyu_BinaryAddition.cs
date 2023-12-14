using System;

public static class Kata
{
    public static string AddBinary(int a, int b)
    {
        int numResult = a + b;
        string result = Convert.ToString(numResult,2);
        return result;
    }
}


//using System;

//public static class Kata
//{
//    public static string AddBinary(int a, int b) =>
//      Convert.ToString(a + b, 2);
//}