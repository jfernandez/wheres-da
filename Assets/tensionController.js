#pragma strict

private var tensionPoints : float = 0;
private var tensionStep : float  = 1;
private var maxTension : float = 60;
private var timerInterval : float = 1;
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