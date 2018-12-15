<template>
    <section>
        <div>
            <b-button :size="sm" :variant="success">New Note</b-button>
        </div>
        <ul id="list">
                <li v-for="nobj,cnt in this.notes" v-bind:key="cnt" class="">
                    <span class="contents">{{ nobj.contents }}</span> -
                    <span v-on:click="handleEdit($event, nobj)" class="clickme_to_edit">Edit</span> |
                    <span v-on:click="handleDelete($event, nobj)" class="clickme_to_delete">Delete</span>
                </li>
<!--
            <li class="note">
                <span class="contents">Note 1</span> -
                <span class="clickme_to_edit">Edit</span> |
                <span class="clickme_to_edit">Delete</span>
            </li>
            <li class="note">
                <span class="contents">Note 2</span> -
                <span class="clickme_to_edit">Edit</span> |
                <span class="clickme_to_edit">Delete</span>
            </li>
            <li class="note">
                <span class="contents">Note 3</span> -
                <span class="clickme_to_edit">Edit</span> |
                <span class="clickme_to_edit">Delete</span>
            </li>
-->
        </ul>
    </section>
</template>

<script>
import { store } from '../store.js';

export default {
    name: 'Book',
    data () {
        return {
            notes: store.notes
        }
    },
    props: {
        msg: String
    },
    handleEdit (e, nobj) {
        console.log('edit...');
        //this.form.textstr = cobj.cstring;
        //this.updateReader(cobj.cstring);
    },
    handleDelete (e, nobj) {
        console.log('delete...');
        //this.form.textstr = cobj.cstring;
        //this.updateReader(cobj.cstring);
    },
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
