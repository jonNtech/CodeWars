using System;
public class Kata
{
    public static string DatingRange(int age)
    {
        int minAge = age <= 14 ? (int)(age - 0.10 * age) : (int)(age / 2 + 7);
        int maxAge = age <= 14 ? (int)(age + 0.10 * age) : (int)((age - 7) * 2.0);
        return $"{minAge}-{maxAge}";
    }
}




//public class Kata
//{
  //public static string DatingRange(int age)
  //{
    //return age <= 14 ? $"{(int)(age - 0.10 * age)}-{(int)(age + 0.10 * age)}" : $"{age / 2 + 7}-{(age - 7) * 2}";
  //}
//}
