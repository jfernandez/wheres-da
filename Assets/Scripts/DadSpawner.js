#pragma strict

public var dadPrefab : GameObject;
private var y : int = 2.0;
private var maximumX : int = 30;
private var maximumZ : int = 30;
private var people : GameObject[];
private var dad : GameObject;

function Start () {
  while(dadCollision()) {
    SpawnDad();
  }
}

function SpawnDad() {
  if(dad) {
    Destroy(dad);
  }

  var x = Random.Range(-30, maximumX);
  var z = Random.Range(-30, maximumZ);
  var spawnLocation = Vector3(x, y, z);
  dad = Instantiate(dadPrefab, spawnLocation, Quaternion.identity);
}

// Check to see if the spawned dad is colliding with other people
function dadCollision() {
  if(dad) {
    var dadBounds = dad.renderer.bounds;
    people = GameObject.FindGameObjectsWithTag("NotDad");
    for (var person : GameObject in people) {
      var children = person.GetComponentsInChildren(typeof(Renderer));
      for (var child : Renderer in children) {
        if(dadBounds.Intersects(child.bounds)) {
          Debug.Log("there is a collission!!!");
          return true;
        }
      }
    }
    return false;
  } else {
    return true;
  }
}
