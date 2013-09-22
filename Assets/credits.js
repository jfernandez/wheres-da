#pragma strict
private var NarrativeTile1;
private var scrollSpeed : float = .5;
private var offset : float;
private var textures = ["Reunion", "EndCredits"];
private var x : int;
private var switched : boolean;
private var offsetDirection : float;

function Start () {
	NarrativeTile1 = Resources.Load("Reunion");	
	renderer.material.mainTextureOffset = Vector2 (0,0);
	x = 0;
	switched = false;
	scrollIt();
	offset = 0;
}

function Update () {
	
}

function scrollIt() {
	//if(clicked === true){
		//Debug.Log("Trying to scroll");
		renderer.material.SetTextureScale("_MainTex", Vector2(1, .5));
	    renderer.material.mainTexture = NarrativeTile1;
		
		//var offset = Time.time * scrollSpeed;	
		if(switched == false){
		    offsetDirection = 0.002;
		    while(offset < 0.5){//specific reunion offset
				renderer.material.mainTextureOffset = Vector2 (0,offset);
				offset = offset + offsetDirection;
				
				yield WaitForSeconds(0.01);
			    Debug.Log(offset);
				if(offset >= .5){
					//Fade? 
					yield WaitForSeconds(2);
					changeTexture();
					} 
				}
			}
		else
		{
			if(switched == true){
			    offsetDirection = -0.001;
			    while(offset >= 0.5){
					renderer.material.mainTextureOffset = Vector2 (0,offset);
					offset = offset + offsetDirection;				
					yield WaitForSeconds(0.01);
					}
					
				}
			}
}

function changeTexture() {
	Debug.Log("ChangingTexture");
	switched = true;
	NarrativeTile1 = Resources.Load("EndCredits");
	renderer.material.mainTexture = NarrativeTile1;
	renderer.material.mainTextureOffset = Vector2 (0,-.5);
	//renderer.material.SetTextureScale("_MainTex", Vector2(1, 1));
	scrollIt();
}