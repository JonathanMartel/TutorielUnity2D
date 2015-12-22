#pragma strict
private var anim:Animator;

function Start () {
	anim = GetComponent.<Animator>();
	
}

function Update () {
	if(Input.GetKeyDown(KeyCode.Space))
	{
		anim.SetTrigger("Declenchement");	
	}
}


function FinExplosion()
{
	GameObject.Destroy(this.gameObject);
}