var TantrometerNeedle : Texture;
var TantrometerFaces : Texture;
var TantrumOverlay : Texture;
private var tensionPoints : float = 0;
private var tensionStep : float  = 1;
private var maxTension : float = 600;
private var timerInterval : float = 0.1;
private var timer : float;

function Start () {
  timer = timerInterval;
}

function Update () {
  timer -= Time.deltaTime;

  if(timer < 0) {
    tensionPoints += tensionStep;
    timer = timerInterval;
    Debug.Log(tensionPoints);       
  }

  

  if(tensionPoints >= maxTension) {
    Debug.Log("Game Over!");
  }
}

function OnGUI() {
	if(!TantrometerNeedle){
		Debug.LogError("Assign a Texture in the inspector.");
		return;
	}
	
	if(!TantrometerFaces){
		Debug.LogError("Assign a Texture in the inspector.");
		return;
	}
	
	var r : Rect = camera.pixelRect;
	
	GUI.color = Color.red;
	GUI.color.a = tensionPoints/600;
	Debug.Log(GUI.color.a);
	GUI.DrawTexture(Rect(0,0, r.xMax,r.yMax), TantrumOverlay); 	
	
	GUI.color = Color.white;
	GUI.color.a = 1;
	//GUI.color = (1.0, 1.0, 1.0, tensionPoints/60);
	GUI.DrawTexture(Rect(r.xMax/2,r.yMax-200,200,200), TantrometerFaces);
	GUI.DrawTexture(Rect(r.xMax/2,r.yMax-200,200,200), TantrometerNeedle);
	GUI.color = Color.red;
	GUI.color.a = tensionPoints/60;
	
	//Debug.Log(r.yMin + "Is yMin");
	
}
