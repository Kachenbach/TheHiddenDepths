#pragma strict

function Start () {

}

function Update () {
if( Input.GetKeyDown(KeyCode.J) == true)
	animation.Play("SwordSwing");

}