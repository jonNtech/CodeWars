using System;

namespace Converter {
  public class Converter
  {
    public string dnaToRna(string dna)
    {
        if (dna == "") return "";
        var result = "";
        
        result = dna.ToUpper().Replace("T", "U");
        return result;
    }
  };
