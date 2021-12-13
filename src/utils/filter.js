const Filter = {
  all: arr => arr.map(item => item),
  done: arr => arr.filter(item => item.checked),
  undo: arr => arr.filter(item => !item.checked)
}

export default Filter