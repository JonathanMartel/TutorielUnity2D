#pragma strict

private var rb2d:Rigidbody2D;
private var saut:boolean = false;
private var estAuSol:boolean = false;
private var versLaDroite:boolean = true;

public var vitesse:float = 5.0;
public var facteurCourse:float =2.0;
public var forceSaut:float = 500;
public var verifSol:Transform;
public var layerSol:LayerMask;

public var anim:Animator;

function Start () {
	rb2d = GetComponent.<Rigidbody2D>();
	anim = GetComponent.<Animator>();
}

function Update()
{
	if(Input.GetKeyDown(KeyCode.Space))
	{
		saut = true;
	}
	
}


function FixedUpdate () {
	var hor:float = Input.GetAxis("Horizontal");
	if(Physics2D.OverlapCircle(verifSol.position, 0.1,layerSol ))
	{
		estAuSol = true;
	}
	else
	{
		estAuSol = false;
	}
	anim.SetBool("DansLesAir", !estAuSol);
	
	
	var course = 1;
		
	if(Input.GetKey(KeyCode.LeftShift))
	{
		course = facteurCourse;
		anim.SetBool("Course", true);
	}
	else
	{
		anim.SetBool("Course", false);
	}
	
	
	rb2d.velocity.x = hor * vitesse * course;
	
	anim.SetFloat("Vitesse", Mathf.Abs(hor));
	
	if(versLaDroite && hor<0)
	{
		Tourne();
	}
	else if(!versLaDroite && hor>0)
	{
		Tourne();
	}
	
	
	
	if(saut && estAuSol)
	{
		rb2d.AddForce(new Vector2(0, forceSaut));
		saut = false;
	}
}


function Tourne()
{
	versLaDroite = !versLaDroite;
	transform.localScale.x *= -1;
}



