var chalk = require('chalk')

var color = (text, color) => {
    return !color ? chalk.green(text) : chalk.keyword(color)(text)
}

var bgcolor = (text, bgcolor) => {
	return !bgcolor ? chalk.green(text) : chalk.bgKeyword(bgcolor)(text)
}

module.exports = {
	color,
	bgcolor
}
