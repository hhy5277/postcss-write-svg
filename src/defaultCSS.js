module.exports = `@svg square {
	@rect {
		fill: var(--color, black);
		width: 100%;
		height: 100%;
	}
}

#example {
	background: white svg(square param(--color #00b1ff));
}`;
