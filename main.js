var app = new Vue({
  // マウントする要素
  el: "#app",

  // 用いるデータ
  data: {
    // numbers: 未使用・使用済みの数列を管理
    numbers: {
      unused: [],
      used: []
    },
    // chosenNum: 最後に抽選された数
    chosenNum: "",
    // clickCount: 「Click」ボタンが押された数
    clickCount: 0
  },

  computed: {
    isEnd: function () {
      return this.numbers.unused.length == 0
    }
  },

  // ライフサイクルハック
  // mounted: DOM構築直後
  mounted: function () {
    // シャッフル済みの1〜75の整数列を number.unused に
    // _ は lodash という便利ライブラリのインスタンス(jQuery の $ のようなもの)
    this.numbers.unused = _.shuffle(_.range(start = 1, end = 75 + 1))
  },

  // このアプリケーションで使うメソッド
  methods: {
    chooseNum: function () {
      // 未使用数列の先頭の数を chosenNum に
      this.chosenNum = this.numbers.unused.shift()
      // chosenNum を 使用済み数列の先頭に
      this.numbers.used.unshift(this.chosenNum)
      // clickCount をインクリメント
      this.clickCount++;
    }
  }
});
