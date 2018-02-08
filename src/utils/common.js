export default {
	install(Vue, options){
		/**
		 * [LS localstorage]
		 * @type {Object}
		 */
		Vue.prototype.LS = {
			isSupport: function() {
				return localStorage ? true: false
			},
			set: function(key, val) {
				if(!this.isSupport()) {
					return
				}
				val = val || []
				localStorage.setItem(key, JSON.stringify(val))
			},
			get: function(key) {
				if(!this.isSupport()) {
					return
				}
				return localStorage.getItem(key)
			},
			remove: function(key) {
				if(!this.isSupport()) {
					return
				}
				localStorage.removeItem(key)
			}
		}
		/**
		 * [api 一些mock数据的接口，操作本地存储]
		 * @type {Object}
		 */
		Vue.prototype.api = {
			LS: Vue.prototype.LS,
			addQuestion(data) {
				let question = JSON.parse(this.LS.get('question')) || []  
				question.push(data)
				this.LS.set('question', question)
			},
			addExam(data) {

			},
			getQuestionById(id) {

			},
			getAllExam() {

			},
			getExamById(id) {

			}

		}
	}
}
