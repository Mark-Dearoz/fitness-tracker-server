


export const calculateBest = workouts =>{
    const maxes = workouts.map(workout => {
        if(workout.reps === 1) return workout.weight
        return Math.round(workout.weight * (1 + (workout.reps / 30)))
    })

    const best = {index: -1, max: 0}
    maxes.forEach((max, index) => {
        if(max > best.max){
            best.max = max
            best.index = index
        }
    })
    return best
}