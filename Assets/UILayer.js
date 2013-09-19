var TantrumOverlay : Texture;
private var tensionPoints : float = 0;
private var tensionStep : float  = 1;
private var maxTension : float = 19;
private var timerInterval : float = 3.15;
private var timer : float;
private var count : int;
private var tantrometer : Texture;
private var prompt : Texture;

function Start () {
  timer = timerInterval;
  count = 0;
  
  people = GameObject.FindGameObjectsWithTag("NotDad");
  for (var person : GameObject in people) {
    for (var child : Renderer in person.GetComponentsInChildren(typeof(Renderer))) {
       if(child.name == "Skirt") {
       	 child.renderer.material.mainTexture = RandomTaranMaterial();
       }
    }
  }
}

function RandomTaranMaterial() {
  return Resources.Load(RandomTartanName());
}
function RandomTartanName() {
  var name = "Tartans-";
  var number = Random.Range(1, 12);
  return name + number;
}

function Update () {
  timer -= Time.deltaTime;

  if(timer < 0) {
    tensionPoints += tensionStep;
    timer = timerInterval;
    Debug.Log(tensionPoints);       
  }

  

  if(tensionPoints >= maxTension) {
     Application.LoadLevel("ExitScene");
  }
}

function OnGUI() {
	
	var r : Rect = camera.pixelRect;
	
	GUI.color = Color.black;
	GUI.color.a = tensionPoints/19;
	GUI.DrawTexture(Rect(0,0, r.xMax,r.yMax), TantrumOverlay); 	
	
	//start tantrometer logic
	GUI.color = Color.white;
	GUI.color.a = 1;
	
	var countLabel = tensionPoints.ToString();
	tantrometer = Resources.Load(countLabel);
	prompt = Resources.Load("FullScreenResources");
	if(tensionPoints < 2){
		GUI.DrawTexture(Rect(300, 100, 400, 400), prompt);
	}
	count++;
	
	//GUI.color = (1.0, 1.0, 1.0, tensionPoints/60);
	GUI.DrawTexture(Rect(400,r.yMax-100,200,200), tantrometer);
	GUI.color = Color.black;
	GUI.color.a = tensionPoints/19;
	
	//Debug.Log(r.yMin + "Is yMin");
	
}
