/* 

There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!

*/

function betterThanAverage(classPoints, yourPoints) {
    // Your code here
    //I have the total amount of points for the whoe entire class
    //Finding an average means that you take everyone's score and divide it by the amount
    let classamount = 0;
    
    for(let i = 0; i<classPoints.length; i++){
    
      
      classamount += classPoints[i];
    }
    let finalavg = (classamount + yourPoints)/(classPoints.length + 1) 
    
    if(yourPoints > finalavg){
      return true;
    }
    else if(yourPoints < finalavg){
      return false;
    }
  }