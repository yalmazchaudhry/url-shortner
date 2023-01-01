import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    url: "",
    loading: false,
    err: false,
    clip: false,
  },

  actions: {
    getURL(context, longUrl) {
      const url = new URL("https://t.ly/api/v1/link/shorten");

      const params = {
        api_token:
          "6tYgHFFp17j9jFmFLRRNqp5138yFky8bDInLfqWAV5mVY5seZq0GWZmEhKkr",
      };
      Object.keys(params).forEach((key) =>
        url.searchParams.append(key, params[key])
      );

      const headers = {
        "Content-Type": "application/json",
        Accept: "application/json",
      };

      let body = {
        long_url: longUrl,
        domain: "https://t.ly/",
        include_qr_code: false,
      };
      if (
        /^(http(s):\/\/.)[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/g.test(
          longUrl
        )
      ) {
        this.state.loading = true;
      } else {
        this.state.loading = false;
      }
      // if (longUrl) {
      //   this.state.loading = true;
      // }

      fetch(url, {
        method: "POST",
        headers,
        body: JSON.stringify(body),
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);

          context.commit("getURL", data.short_url);
        });
    },
  },
  mutations: {
    getURL(state, url) {
      state.url = url;
      navigator.clipboard.writeText(url);

      if (url) {
        state.loading = false;
        state.clip = true;
      } else {
        state.err = true;
      }
    },
  },
});
