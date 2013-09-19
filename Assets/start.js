#pragma strict
var NarrativeTile1;
var scrollSpeed : float = .5;
var offset : float;
var rotate : float;
private var clicked : boolean;

function Start () {
	NarrativeTile1 = Resources.Load("Reunion");
	clicked = false;
}

function Update () {
	if(Input.GetMouseButton(0)){
	  if(clicked === false){
	  	clicked = true;
	  	Debug.Log("update is " + clicked);
	  	scrollIt();
	  }	
	}
}

function scrollIt() {
	if(clicked === true){
		Debug.Log("Trying to scroll");
		renderer.material.SetTextureScale("_MainTex", Vector2(1, .5));
	    renderer.material.mainTexture = NarrativeTile1;
	
	    var scrollSpeed = 0.1;
		
		//var offset = Time.time * scrollSpeed;	
		var offset = -0.01;
		while(offset < 0.562){
			renderer.material.mainTextureOffset = Vector2 (0,offset);
			offset = offset + 0.001;
			Debug.Log(offset);
			yield WaitForSeconds(0.0005); 
		}
		//renderer.material.mainTextureOffset = Vector2 (0,offset);
		
		
		
		if(offset > 0.5){
		
			//Fade? 
			yield WaitForSeconds(5);
			changeTexture();
		}	
	}
}

function changeTexture() {
	NarrativeTile1 = Resources.Load("CookieOnTheGrass");	
}
