function largest(num1,num2,num3)
	{

		if(num1>num2 && num1>num3)
		{
			return (num1+" is greatest");
		}
		else if(num2>num1 && num2>num3)
		{
			return (num2+" is greatst");
		}
		else if(num3>num1 && num3>num1)
		{
			return (num3+" is greatest");
		}
	}

largest(67,13,42);