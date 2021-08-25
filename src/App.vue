<template>
  <div id="app">
    <h1>請輸入網址</h1>
    <input type="text" v-model="url" />
    <button @click="getPicseeUrl">送出</button>

    <h1>歷史列表</h1>
    <ul>
      <li v-for="item in list" :key="item.key">
        短網址: <a :href="item.href" target="_blank">{{ item.href }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      url: '',
      list: [
        {
          href: 'https://user22695.pse.is/3mjmxp',
          key: '1'
        }
      ],
      feature: ''
    }
  },
  methods: {
    async getPicseeUrl () {
      let data = await this.$http({
        url: 'https://api.pics.ee/v1/links?access_token=20f07f91f3303b2f66ab6f61698d977d69b83d64&caller=client-simple&lang=zh-tw',
        method: 'POST',
        contentType: 'application/json',
        data: {
          url: this.url
        }
      })
      console.log(data)
      // 把用戶資訊儲存
    }
  },
  created () {
    this.feature = this.$route.query.feature
    let allList = this.$sessionStorage.get('picsee')
    if (this.feature && allList) {
      this.list = allList[this.feature]
    }
  }
}
</script>
