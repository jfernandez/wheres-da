var TantrometerNeedle : Texture;
var TantrometerFaces : Texture;

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
			
	GUI.DrawTexture(Rect(r.xMax/2,r.yMax-200,200,200), TantrometerFaces);
	GUI.DrawTexture(Rect(r.xMax/2,r.yMax-200,200,200), TantrometerNeedle); 
	//Debug.Log(r.yMin + "Is yMin");
	
}
