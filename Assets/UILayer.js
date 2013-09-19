var TantrometerNeedle : Texture;
var TantrometerFaces : Texture;
var TantrumOverlay : Texture;
private var tensionPoints : float = 0;
private var tensionStep : float  = 1;
private var maxTension : float = 19;
private var timerInterval : float = 3.15;
private var timer : float;
private var count : int;
private var tantrometer : Texture;

function Start () {
  timer = timerInterval;
  count = 0;
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
	
	GUI.color = Color.black;
	GUI.color.a = tensionPoints/19;
	GUI.DrawTexture(Rect(0,0, r.xMax,r.yMax), TantrumOverlay); 	
	
	//start tantrometer logic
	GUI.color = Color.white;
	GUI.color.a = 1;
	
	var countLabel = tensionPoints.ToString();
	tantrometer = Resources.Load(countLabel);
	count++;
	
	//GUI.color = (1.0, 1.0, 1.0, tensionPoints/60);
	GUI.DrawTexture(Rect(r.xMax/2,r.yMax-100,200,200), tantrometer);
	GUI.color = Color.black;
	GUI.color.a = tensionPoints/19;
	
	//Debug.Log(r.yMin + "Is yMin");
	
}
