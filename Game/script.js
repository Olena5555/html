var board = document.getElementByClassName('board')[0], // Игровое поле
	player = document.getElementByClassName('gamer')[0], // Строка хода
	element, innerElement,
	gamer1 = true, //Показывает, какой игрок сейчас ходит
	gameTable =[[null, null,null], [null,null,null], [null, null, null]], // Матрица игры