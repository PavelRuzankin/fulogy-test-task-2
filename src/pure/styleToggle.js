export function styleToggle(additional, state, ...otherClasses){
    if(state) otherClasses.push(additional)
    return otherClasses.join(" ")
}