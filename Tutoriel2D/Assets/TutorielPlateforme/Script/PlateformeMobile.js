#pragma strict
public var deplacementMax:float =1;
public var deplacementMin:float =1;
public var tempsDeplacement:float = 1;

public var direction:DirectionPlateforme;

enum DirectionPlateforme{Verticale, Horizontale}

private var positionInitiale:float;
private var deltaDeplacement:float;


function Start () {
	deltaDeplacement = deplacementMax + deplacementMin;
	if(direction == DirectionPlateforme.Verticale)
	{
		positionInitiale = transform.position.y;
	}
	else if(direction == DirectionPlateforme.Horizontale)
	{
		positionInitiale = transform.position.x;
	}
}

function Update () {
	var deplacement = Mathf.PingPong(Time.time*deltaDeplacement/tempsDeplacement, deltaDeplacement) + (positionInitiale - deplacementMin);
	if(direction == DirectionPlateforme.Verticale)
	{
		transform.position.y = deplacement;
	}
	else if(direction == DirectionPlateforme.Horizontale)
	{
		transform.position.x = deplacement;
	}
	
}