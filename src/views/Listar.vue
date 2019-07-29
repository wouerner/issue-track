<template>
    <div>
        <v-container>
            <v-btn color="green" dark @click="createDialog()">New Issue</v-btn>
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                <v-card>
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon>close</v-icon>
                        </v-btn>
                        <v-toolbar-title>{{  formType == 'create' ? 'Create' : 'Edit'}} Issue</v-toolbar-title>
                        <v-spacer></v-spacer>
                        <v-toolbar-items>
                            <v-btn dark flat @click="formType == 'create' ? save() : update()">Save</v-btn>
                        </v-toolbar-items>
                    </v-toolbar>

                    <v-container>
                        <v-flex xs6 sm6 md3>
                            <v-text-field
                                label="Title"
                                placeholder="Title"
                                outline
                                v-model="title"
                                ></v-text-field>
                        </v-flex>
                    </v-container>
                </v-card>
            </v-dialog>
        <v-layout column wrap>
            <v-data-table
                :headers="headers"
                :items="issuesGetter"
                class="elevation-1"
                :loading="loadingTable"
            >
                <v-progress-linear v-slot:progress color="blue" indeterminate></v-progress-linear>
                <template v-slot:items="props">
                    <td>{{ props.item.title }}</td>
                    <td class="text-xs-right">
                        <v-btn
                            v-if="props.item.locked == false"
                            color="danger" dark 
                            @click="lock(props.item)">Lock
                            <v-icon dark right>lock</v-icon> 
                        </v-btn>
                        <v-btn
                            v-if="props.item.locked == true"
                            color="danger" dark @click="unlock(props.item)">Unlock
                            <v-icon dark right>lock_open</v-icon> 
                        </v-btn>
                        <v-btn color="blue" dark @click="updateDialog(props.item)">edit</v-btn>
                    </td>
                </template>
            </v-data-table>
        </v-layout>
        </v-container>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
    name: 'Listar',
    data() {
        return {
            loadingTable: true,
            title: '',
            number: '',
            dialog: false,
            formType: 'create',
            headers:[
                {
                    text: 'Title',
                    align: 'left',
                    sortable: false,
                    value: 'title'
                },
                {
                    text: 'Actions',
                    align: 'right',
                    sortable: false,
                    value: 'title'
                },
            ]
        }
    },
    computed: {
        ...mapGetters({
            issuesGetter: 'github/issuesGetter',
        }),
    },
    created() {
        this.setIssuesAction()
    },
    methods: {
        ...mapActions({
            setIssuesAction: 'github/setIssuesAction',
            insertIssueAction: 'github/insertIssueAction',
            updateIssueAction: 'github/updateIssueAction',
            lockIssueAction: 'github/lockIssueAction',
            unlockIssueAction: 'github/unlockIssueAction',
        }),
        save(){
            this.dialog = false
            this.insertIssueAction({title: this.title});
            this.formType = 'create'
        },
        update(){
            this.dialog = false
            this.updateIssueAction({title: this.title, number: this.number});
        },
        lock(param) {
            this.lockIssueAction({ id: param.id, number: param.number, "locked": true, "active_lock_reason": "too heated" });
        },
        unlock(param) {
            this.unlockIssueAction({ id: param.id, number: param.number });
        },
        createDialog() {
            this.dialog = true
            this.title = ''
            this.number = ''
            this.formType = 'create'
        },
        updateDialog(item) {
            this.dialog = true
            this.title = item.title
            this.number = item.number
            this.formType = 'update'
        }
    },
    watch:{
        issuesGetter(val) {
            this.loadingTable = Object.keys(val).length > 0 ? false : true
        }
    }
}
</script>
