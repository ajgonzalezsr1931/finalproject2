function score( dice ) {
    let sums = {
      1:0,
      2:0,
      3:0,
      4:0,
      5:0,
      6:0
    }

    let scoretotal = 0;
    
    dice.map(ele => {
      if ( ele == 1){
        sums[1]+=1;
        scoretotal += 100;
      }else if (ele == 2) {
        sums[2]+=1;
      }else if (ele ==3) {
        sums[3]+=1;
      }else if (ele ==4) {
        sums[4]+=1
      }else if (ele ==5) {
        sums[5]+= 1
        scoretotal += 50
      }else if (ele ==6) {
        sums[6] += 1
      }
    })
    
    for (sum in sums){
        if (sum == 1 && sums[sum] >= 3){
            scoretotal += 700
        }else if ( sum ==2 && sums[sum] == 3){
            scoretotal += 200
        }else if ( sum ==3 && sums[sum] == 3){
            scoretotal += 300
        }else if ( sum ==4 && sums[sum] == 3){
            scoretotal += 400
        }else if ( sum ==5 && sums[sum] >= 3){
            scoretotal += 350
        }else if ( sum ==6 && sums[sum] == 3){
            scoretotal += 600
        }
    }

    return scoretotal;
  }

  console.log(score([1,1,1,1,4]))