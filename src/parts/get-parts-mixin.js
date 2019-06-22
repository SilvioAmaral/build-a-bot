export default {
  created() {
    this.$store.dispatch('robots/getParts');
  },
  computed: {
    parts() {
      const empty = {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
      return this.$store.state.robots.parts || empty;
    },
  },
};
