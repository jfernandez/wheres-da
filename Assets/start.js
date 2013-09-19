#pragma strict
var NarrativeTile1;
var scrollSpeed : float = .5;
var offset : float;
var rotate : float;

function Start () {
	NarrativeTile1 = Resources.Load("Reunion");
}

function Update () {
if(Input.GetMouseButton(0))
    loadNext();
}

function loadNext() {	
        //renderer.material.SetTextureScale = Vector2(100, 200);
        renderer.material.mainTexture = NarrativeTile1;

	    var scrollSpeed = 0.1;
		
		var offset = Time.time * scrollSpeed;
	
		renderer.material.mainTextureOffset = Vector2 (0,offset);	
}