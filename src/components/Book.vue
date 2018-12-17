<!-- 
TODO:
    Add commments
    Style
    Add boxes
    Add ability to change color
-->
<template>
    <b-container>
        <b-row class="justify-content-center">
            <b-col cols="9" id="list">
                <div id="heading">
                    <h2>List of Notes ({{ this.notes.length }})</h2>
                    <b-button v-if="!isCreateFormVisible" size="sm" variant="success" @click="createNote()">New Note</b-button>
                    <div v-if="isCreateFormVisible">
                        <b-row>
                            <b-col cols="9">
                                <b-form-input id="note-content" type="text" v-model="createForm.contents" required placeholder="Type the note..."> </b-form-input>
                            </b-col>
                            <b-col cols="3">
                                <span v-on:click="onStore($event)"> <content-save-icon /> </span>
                                <span v-on:click="resetForm()"> <close-icon /> </span>
                            </b-col>
                        </b-row>
                    </div>
                </div>
                <ul>
                    <li v-for="nobj,cnt in this.notes" v-bind:key="cnt">
                        <note :index="cnt" :contents="nobj.contents"></note>
                     </li>
                </ul>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { store } from '../store.js';
import Note from './Note.vue';
import ContentSaveIcon from "vue-material-design-icons/ContentSave.vue"
import CloseIcon from "vue-material-design-icons/Close.vue"

export default {
    name: 'Book',
    data () {
        return {
            isCreateFormVisible: false,
            notes: store.notes,
            createForm: {
                contents: '',
            },
        }
    },
    methods: {
        createNote () {
            console.log('create...');
            this.isCreateFormVisible = true;
        },
        onStore (e) {
            e.preventDefault();
            store.storeNote(this.createForm.contents);
            this.resetForm();
        },
        resetForm () {
            this.createForm.contents = ''; // reset values
            this.isCreateFormVisible = false; // hide form
        }
    },
    components: {
        Note,
        ContentSaveIcon,
        CloseIcon,
    }
}
</script>

<style scoped>
    span {
        display: inline-block;
    }
    #list #heading {
        margin-bottom: 1.1em;
    }
    #list #heading h2 {
        text-align: left;
        margin-bottom: 0.5em;
    }
    #list #heading button {
    }
    #list  ul {
        text-align: left;
    }
    #list  ul > li {
        margin-bottom: 0.9em;
    }
    h3 {
        margin: 40px 0 0;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        /*
        display: inline-block;
        margin: 0 10px;
        */
    }
    a {
        color: #42b983;
    }
</style>
