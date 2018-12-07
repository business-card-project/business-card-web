var app = new Vue({
  el: '#app',
  data: {
		identity :{
			name : '',
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
  	guessGender: function(){
  		axios({
		  method:'get',
		  url:`https://api.genderize.io/?name=${this.identity.name}`,
		})
	    .then((response)=> {
	    	console.log(response)
	      this.identity.gender = response.data.gender
	  	})
	  	.then((error)=> {
	  		console.log(error)

	  	})
  	},

  	hideGuess: function(){
  		this.showGender= true
  		this.genderGuess= false
		},
		
  },

})