# vue-ultra-sidenav

Implement a customizable sidenav component.

## Install
```
npm install --save vue-ultra-sidenav
```

## Import components
```
import {
  Sidenav,
  SidenavLink,
  SidenavOption,
  SidenavGroup
} from 'vue-ultra-sidenav';
```

## Basic usage

A propertie can define if sidenav is open or not.
When Close button or backdrop (is used) is clicked then close event is emitted.

```
<template>
  <sidenav
    :is-open="isOpenSidenav"
    @close="closeSidenav"
  >
    <sidenav-group title="Info Group">
      <sidenav-option
        @click="$router.push('/')"
      >
        Go Home
      </sidenav-option>
    </sidenav-group>

    <sidenav-group title="Links">
      <sidenav-link
        :url="'https://google.com'"
        :target="'blank'"
      >
        Google
      </sidenav-link>
      <sidenav-link
        :url="'https://github.com'"
        :target="'blank'"
      >
        Github
      </sidenav-link>
    </sidenav-group>
  </sidenav>
</template>

<script>
export default {
  name: 'sidenav',
  data() {
    return {
      isOpenSidenav: true
    };
  },
  methods: {
    closeSidenav() {
      this.isOpenSidenav = false;
    }
  }
};
</script>
```


## Props and events definition

#### Sidenav

|Prop       |Type                            |Default                        |Description                               |
|-----------|--------------------------------|-------------------------------|------------------------------------------|
|isOpen     |boolean                         |false                          |Defines if sidenav is open or not         |
|backdrop   |boolean                         |true                           |Defines if backdrop is used or not        |
|transition |string (Name of css transition) |fade (Defined on internal css) |Set css animation to open and close event |
|closeIcon  |string (Path to proyect image)  |null (Internal icon is used)   |Send icon to use on close button          |

## Contribution

All pull requests and suggestions are welcome.
