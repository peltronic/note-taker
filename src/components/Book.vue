<!-- 
TODO:
    Add commments
    Style
    Add boxes
    Add ability to change color
-->
<template>
    <b-container>
        <b-row>
            <b-col>
                <b-button v-if="!isCreateFormVisible" size="sm" variant="success" @click="createNote()">New Note</b-button>
                <b-form @submit="onSubmit" @reset="onReset" v-if="isCreateFormVisible">
                    <b-form-group id="note-contents-group" label="Contents:" label-for="note-content" description="Enter note contents">
                        <b-form-input id="note-content" type="text" v-model="createForm.contents" required placeholder="Type the note...">
                        </b-form-input>
                    </b-form-group>
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </b-form>
            </b-col>
            <b-col>
                <h2>List of Notes ({{ this.notes.length }})</h2>
                <ul id="list">
                    <li v-for="nobj,cnt in this.notes" v-bind:key="cnt">
                        <note :index="cnt" :contents="nobj.contents"></note>
                     </li>
                    <!--
                    <li v-for="nobj,cnt in this.notes" v-bind:key="cnt" class="">
                        <span class="contents">{{ nobj.contents }}</span> -
                        <span v-on:click="onEdit($event, nobj)" class="clickme_to_edit">Edit</span> |
                        <span v-on:click="onDelete($event, nobj)" class="clickme_to_delete">Delete</span>
                    </li>
                    -->
                </ul>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
import { store } from '../store.js';
import Note from './Note.vue';

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
        /*
        onEdit (e, nobj) {
            console.log('edit...');
            //this.form.textstr = cobj.cstring;
            //this.updateReader(cobj.cstring);
        },
        onDelete (e, nobj) {
            console.log('delete...');
            //this.form.textstr = cobj.cstring;
            //this.updateReader(cobj.cstring);
        },
        */
        onSubmit (e) {
            e.preventDefault();
            store.storeNote(this.createForm.contents);
            this.resetForm();
        },
        onReset (e) {
            e.preventDefault();
            this.resetForm();
        },
        resetForm () {
            this.createForm.contents = ''; // reset values
            this.isCreateFormVisible = false; // hide form
        }
    },
    components: {
        Note,
    }
}
</script>

<style scoped>
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
