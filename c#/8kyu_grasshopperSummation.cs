using System;

public static class Kata 
{
    public static int summation(int num)
    {
      int result = 0;
        for (int i = 0; i <= num; i++)
        {
            result += i;
        }
        return result;
    }
}


//public static class Kata
//{
//	public static int summation(int num)
//	{
//		return Enumerable.Range(1, num).Sum();
//	}
//}