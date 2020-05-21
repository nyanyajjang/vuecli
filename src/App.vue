<template>
<div id="app" class="container">
  <!-- <p v-for="contact in contacts" :key="contact.id">
    {{ contact.data().first_name }} {{ contact.data().last_name }}
  </p> -->
  <contact-list :contacts="contacts"></contact-list>
</div>
</template>

<script>

import ContactList from './components/ContactList'
import db from '@/db.js'

export default {
  name: 'App',
  data: function() {
    return {
      contacts: []
    }
  },
  mounted: function() {

    // db.collection('contacts').orderBy('first_name', 'desc').get()
    // .then(snapshot => {
    //   this.contacts = snapshot.docs
    // });

    db.collection('contacts').onSnapshot(snapshot => {
      const changes = snapshot.docChanges();
      changes.forEach(change => {
      if ( change.type === 'added') {
        db.collection('contacts').orderBy('first_name', 'asc').get()
    .then(snapshot => {
      this.contacts = snapshot.docs
    });
      } else if (change.type === 'removed') {
        db.collection('contacts').orderBy('first_name', 'asc').get()
    .then(snapshot => {
      this.contacts = snapshot.docs
    });
      }
      })
    })
  },

  components: {
    ContactList
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
