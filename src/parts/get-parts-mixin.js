export default {
  created() {
    this.$store.dispatch('getParts');
  },
  computed: {
    parts() {
      const empty = {
        heads: [],
        arms: [],
        torsos: [],
        bases: [],
      };
      return this.$store.state.parts || empty;
    },
  },
};
