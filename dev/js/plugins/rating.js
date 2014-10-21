/**
 * Плагин рейтинг
 * @return {Object} публичный метод
 */
var rating = (function() {
	var _item = $(".rating_i"),
		_itemActive = "rating_i__active",
		_view = $(".rating_count");

	/**
	 * Прослушка событий
	 * @description при наведении вызываем функцию addPaint,
	 *              когда убираем мышку вызываем функцию addPaint,
	 *              при клике функцию render
	 */
	function bind() {
		_item.hover(addPaint, removePaint).click(render);
	}

	/**
	 * Закрашиваем звездочки
	 */
	function addPaint() {
		$(this).addClass(_itemActive).prevAll().addClass(_itemActive);
	}

	/**
	 * Удаляем окрашивание звездочек
	 */
	function removePaint() {
		$(this).removeClass(_itemActive).prevAll().removeClass(_itemActive);
	}

	/**
	 * Показываем рейтинг
	 */
	function render() {
		unbind();
		_view.text($(this).text());
	}

	/**
	 * Отключаем прослушку событий
	 */
	function unbind() {
		_item.off("hover click");
	}

	return {
		bind: bind
	};
})();