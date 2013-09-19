#pragma strict
private var NarrativeTile1;
private var scrollSpeed : float = .5;
private var offset : float;
private var rotate : float;
private var clicked : boolean;
private var textures = ["Reunion", "EndCredits"];
private var x : int;

function Start () {
	NarrativeTile1 = Resources.Load("Reunion");	
	x = 0;
	scrollIt();
}

function Update () {
	
}

function scrollIt() {
	//if(clicked === true){
		//Debug.Log("Trying to scroll");
		renderer.material.SetTextureScale("_MainTex", Vector2(1, .5));
	    renderer.material.mainTexture = NarrativeTile1;
	    
		
		//var offset = Time.time * scrollSpeed;	
		var offset = -0.01;
		while(offset < 0.5){//specific reunion offset
			renderer.material.mainTextureOffset = Vector2 (0,offset);
			offset = offset + 0.001;
			//Debug.Log(offset);
			yield WaitForSeconds(0.001);
			
			if(offset >= 0.49){
		
				//Fade? 
				yield WaitForSeconds(2);
				changeTexture();
			} 
		}	
	//}
}

function changeTexture() {
	NarrativeTile1 = Resources.Load("EndCredits");
	renderer.material.mainTexture = NarrativeTile1;
	//renderer.material.SetTextureScale("_MainTex", Vector2(1, 1));
	scrollIt();
}
