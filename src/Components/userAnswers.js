function randomQuote () {
    let quotes = ["Сложно сказать", "Светлый лик правового взаимодействия попахивает безумием",
"Все чаще появляется информация о том, что органический трафик связывает нас с нашим прошлым",
"Современная методология разработки стала доступной ширнармассам",
"Светлый лик правового взаимодействия определил дальнейшее развитие",
"Да", "Нет", "Почему", "Возможно"];
    let result = quotes[Math.floor(Math.random() * quotes.length)];
    return result;
}

export default randomQuote;