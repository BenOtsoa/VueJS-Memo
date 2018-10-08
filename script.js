new Vue({
  el: "#app",
  data: {
    memos: [],
    text: ""
  },
  computed: {
    divClasses: function() {
      return {
        red: this.attachRed,
        blue: !this.attachRed
      };
    }
  },
  methods: {
    submit: function() {
      // this.text = e.target.value;
      this.memos.push(this.text);
      this.text = "";
    }
  }
});
