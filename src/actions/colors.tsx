const randomColor = () => {
    const colors = ['#FF9AA2','#FFB7B2','#FFDAC1', '#E2F0CB', '#B5EAD7', '#C7CEEA', '#ffb3ba', '#ffdfba', '#ffffba', '#baffc9', '#bae1ff', '#CAB3C1']
    let usedColors = []
    const rand = Math.floor(Math.random() * colors.length)
    if(!usedColors.includes(colors[rand])){
        usedColors.push(colors[rand]);
        return colors[rand]
    }
    randomColor()
}

export default randomColor