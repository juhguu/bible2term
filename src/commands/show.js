const Bible = require('../nvi.json');

const command = {
    name: 'show',
    run: async toolbox => {
        const { print, parameters } = toolbox;
        const [ abbrev, chapter, verse ] = parameters.string.split('/');
        const book = Bible.filter((element) => {
            return element.abbrev === abbrev.toLowerCase();
        })

        print.info(book[0]['chapters'][parseInt(chapter) - 1][parseInt(verse) - 1]);
        print.info(print.colors.cyan(`${book[0]['name']} - Capítulo: ${chapter} | Versículo: ${verse}`));
    }
}

module.exports = command
