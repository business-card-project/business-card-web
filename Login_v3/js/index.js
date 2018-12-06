var app = new Vue({
  el: '#app',
  data: {
    name : '',
    profession: '',
    email: '',
    socialMedia: '',
    imageSrc: '',
    gender: '',
    showGender: false,
    genderGuess: false

  },

  methods: {
  	guessGender: function(){
  		axios({
		  method:'get',
		  url:`https://api.genderize.io/?name=${this.name}`,
		})
	    .then((response)=> {
	    	console.log(response)
	      this.gender = response.data.gender
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