<template>
    
        <div class="container">

<div class="row justify-content-center">
<div class="col-md-6">
  
  <div class="card">
      <div class="card-header d-flex justify-content-center"><h2>Contact</h2><h2></h2></div>
      <div class="card-body">


 <ul class="list-group list-group-flush">
<li class="list-group-item d-flex align-items-center justify-content-between" :key="contact.id" v-for="(contact) in contacts" >
                            <div class="d-flex align-items-baseline">
                                <p>{{ contact.data().first_name }} {{ contact.data().last_name }}</p>  
                          </div>
                          <button class="btn btn-danger" @click="removeContact(contact)"><i class="fas fa-trash-alt"></i></button>
                                   
                        </li>
                        </ul>
                </div>
            </div>

        
              <!-- <div class="d-flex align-items-center justify-content-center mb-3">
             <div class="list-group-item text-left mx-5" :key="todo" v-for="(todo, index) in todoList">
               <span class="ml-3"></span> {{ todo.firstName }} {{todo.lastName}}
              
             <button class="btn btn-danger ml-5" @click="removeTodo(index)"><i class="fas fa-trash-alt"></i></button>
              
             </div>
          </div> -->
          
           </div>
  </div>






            <!-- <div class="col-md-6 offset-md-3">
            <h1 class="text-center mb-4">Todo </h1>
            
            <div class="list-group">
                <div class="list-group-item text-left" :key="todo" v-for="(todo, index) in todoList">
                {{ todo.firstName }} {{todo.lastName}}
                <button class="remove-item" @click="removeTodo(index)">
                    <i class="fas fa-trash-alt"></i>
                </button>
               </div>
            </div>
             -->
            <!-- <input type="text" class="form-control" v-model="firstName">
            <input type="text" class="form-control" v-model="lastName" @keyup.enter="addNewTodo" >
         -->
        
        <div class="row justify-content-center mt-5">
        <div class="col-md-6">
            <div class="card">
                <div class="card-header"><h2>New Contact</h2></div>
                <div class="card-body">
                    
                                             
                        <div class="row">
                           <div class="col">
                                <input class="form-control" type="text" 
                                v-model="first_name" placeholder="First_name">
                            </div>
                            <div class="col">
                                <input class="form-control" type="text" 
                                v-model="last_name" placeholder="last_name" @keyup.enter="addContact">
                         </div>
                        </div>
                        <div class="row mt-3">
                            <div class="col">
                                <button class="btn btn-success" @click="addContact">Add Contact</button>
                            </div>
                        </div>
                 
                </div>
            </div>
        </div>
    </div>

</div>
 
    
    
</template>


<script>

import db from '@/db.js'


export default {
  name: 'contact-list',
  props: ['contacts'],
  data() {
      return {
          
          first_name: '',
        last_name:'',
       
      
      }
  },
  
  
  methods: {
      addContact() {

        //     this.contacts.push({
              
        //       first_name:this.first_name,
        //       last_name:this.last_name
        //   })
         db.collection('contacts').add({
             first_name: this.first_name,
             last_name: this.last_name
         })
         this.first_name = '';
        this.last_name = '';
        
          
      }, 
      removeContact(contact) {
        //   this.contacts.splice(index,1)
        
        
        db.collection('contacts').doc(contact.id).delete();
      }
      


  }
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

div{
    color: black;
}
</style>
