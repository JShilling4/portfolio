module.exports = {
	configureWebpack: (config) => {
		config.devtool = "source-map";
	},
	css: {
		loaderOptions: {
			sass: {
				prependData: `
                    @import "@/assets/scss/variables.scss";
                    @import "@/assets/scss/mixins.scss";
                `,
				sourceMap: false,
			},
		},
		sourceMap: false,
	},

	devServer: {
		host: "localhost",
	},
};
