#pragma strict
var movementSpeed = 5.0;
function Start () {
	
}

function Update () {
	var forwardSpeed = Input.GetAxis("Vertical");
	var sideSpeed = Input.GetAxis("Horizontal");
	var speed = new Vector3(sideSpeed * movementSpeed * 10 ,0 ,forwardSpeed * movementSpeed);
	var cc : CharacterController = gameObject.GetComponent(CharacterController);
	cc.SimpleMove(speed);
	
	
}