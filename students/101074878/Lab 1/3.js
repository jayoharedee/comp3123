function angleType(angleDeg)
	{
        if (angleDeg>0 && angleDeg<90)
        {
            return (angleDeg+ " degrees is an Acute Angle");
        }

        else if (angleDeg>90 && angleDeg<180)
        {
            return (angleDeg+ " degrees is an Obtuse Angle");
        }

        else if (angleDeg==180)
        {
            return (angleDeg+ " degrees is a Straight Angle");
        }

        else if (angleDeg>180 | angleDeg<0)
        {
            return (angleDeg+ " degrees is not a valid number to measure");
        }

        else if (angleDeg==90)
        {
            return (angleDeg+ " degrees is a Right Angle");
        }

        else
        {
            return ("invalid input");
        }

	}

angleType(67);