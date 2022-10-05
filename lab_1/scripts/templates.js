// Tetramino patterns
const tetraminos = {
    'I': [
      [0,0,0,0],
      [1,1,1,1],
      [0,0,0,0],
      [0,0,0,0]
    ],
    'J': [
      [1,0,0],
      [1,1,1],
      [0,0,0],
    ],
    'L': [
      [0,0,1],
      [1,1,1],
      [0,0,0],
    ],
    'O': [
      [1,1],
      [1,1],
    ],
    'S': [
      [0,1,1],
      [1,1,0],
      [0,0,0],
    ],
    'Z': [
      [1,1,0],
      [0,1,1],
      [0,0,0],
    ],
    'T': [
      [0,1,0],
      [1,1,1],
      [0,0,0],
    ]
};


// Tetramino coloring
const colors = {
    'I': '#82CCDD',
    'O': '#FAD390',
    'T': '#786FA6',
    'S': '#B8E994',
    'Z': '#E66767',
    'J': '#4A69BD',
    'L': '#F19066',
};


// Tetramino labels
const labels = ['I', 'O', 'T', 'S', 'Z', 'J', 'L']