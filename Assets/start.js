#pragma strict
private var NarrativeTile1;
private var scrollSpeed : float = .5;
private var offset : float;
private var rotate : float;
private var clicked : boolean;
private var textures = ["Opening2", "Opening3"];
private var x = 0;

function Start () {
	NarrativeTile1 = Resources.Load("Opening1");
	clicked = false;
}

function Update () {
	if(Input.GetMouseButton(0)){
	  if(clicked === false){
	  	clicked = true;
	  	//Debug.Log("update is " + clicked);
	  	scrollIt();
	  }	
	}
}

function scrollIt() {
	if(clicked === true){
		//Debug.Log("Trying to scroll");
		renderer.material.SetTextureScale("_MainTex", Vector2(1, .5));
	    renderer.material.mainTexture = NarrativeTile1;
	    var scrollSpeed = 0.1;
		
		//var offset = Time.time * scrollSpeed;	
		var offset = -0.01;
		while(offset < 0.562){//specific reunion offset
			renderer.material.mainTextureOffset = Vector2 (0,offset);
			offset = offset + 0.001;
			//Debug.Log(offset);
			yield WaitForSeconds(0.001);
			
			if(offset >= 0.562){
		
				//Fade? 
				yield WaitForSeconds(2);
				changeTexture();
			} 
		}	
	}
}

function changeTexture() {
	NarrativeTile1 = Resources.Load(textures[x]);
	Debug.Log(textures[x]);
	if(x > textures.Length){
	  x = 0;
	}
	if(x == 1){
	  Application.LoadLevel("MainScene");
	}
	else{
	  x++;
	};
	scrollIt();
}
