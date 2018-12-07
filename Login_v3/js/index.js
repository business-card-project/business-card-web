var app = new Vue({
	el: '#app',
	data: {
		identity: {
			name: '',
			profession: '',
			company: '',
			email: '',
			phone: '',
			socialMedia: '',
			imageSrc: '',
			gender: '',
		},
		showGender: false,
		genderGuess: false

	},

	methods: {
		guessGender: function () {
			axios({
				method: 'get',
				url: `https://api.genderize.io/?name=${this.identity.name}`,
			})
				.then((response) => {
					console.log(response)
					this.identity.gender = response.data.gender
				})
				.then((error) => {
					console.log(error)

				})
		},
		generate64: function () {
			var preview = document.querySelector('img');
			var file = document.querySelector('input[type=file]').files[0];
			var reader = new FileReader();

			reader.addEventListener("load", (result) => {
				preview.src = reader.result;

				this.identity.imageSrc = reader.result
				console.log("=>>", this.identity);

			}, false);

			if (file) {
				reader.readAsDataURL(file);
			}
		},


		hideGuess: function () {
			this.showGender = true
			this.genderGuess = false
		},

	},

})