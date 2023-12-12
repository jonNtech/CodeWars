namespace CubeCheck
{
	using System;
	public class CubeChecker
	{
		public bool IsCube(double volume, double side)
		{
			return side > 0 && volume == side * side * side;
		}
	}
}


//namespace CubeCheck
//{
//	using System;
//	public class CubeChecker
//	{
//		public bool IsCube(double volume, double side)
//		{
//			return (Math.Pow(side, 3) == volume && side > 0);
//		}
//	}
//}