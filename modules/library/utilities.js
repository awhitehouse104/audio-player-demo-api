const filter = (library, q) => {
  return library.filter(song => song.name.toLowerCase().includes(q) || song.artist.toLowerCase().includes(q))
}

const shuffle = library => {
  let currentIndex = library.length, tempValue, randomIndex

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    tempValue = library[currentIndex]
    library[currentIndex] = library[randomIndex]
    library[randomIndex] = tempValue
  }

  return library
}

module.exports = { filter, shuffle }
