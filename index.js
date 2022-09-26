function superbowlWin(games){
    let wins = games.find(game => game.result === "W")
    if (wins){
        return wins.year
    }
    
    }

