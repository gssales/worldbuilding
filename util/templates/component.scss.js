module.exports = (componentName) => ({
  content: `//Generated with util/create-component.js
@import "../typography.scss";
@import "../colors.scss";

.foo-bar {
  @include font-defaults;

  color: $dark-grey;
}

  `,
  extension: ".scss"
});
