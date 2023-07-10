<template>
    <v-form>
        <v-container>
            <v-row class="justify-center" dense>
                <v-col sm="6">
                    <v-select
                    v-model="topics"
                    :items="['Life', 'Career','Relegion','Digital']"
                    chips
                    label="Topic"
                    multiple
                    variant="outlined"
                  ></v-select>
                </v-col>
            </v-row>
            <v-row class="justify-center" dense>
                <v-col sm="10">
                    <v-text-field v-model="title" label="Title" variant="outlined" density="compact" style="font-weight: bold"></v-text-field>
                </v-col>
            </v-row>
            <v-row class="justify-center" dense>
                <v-col sm="10">
                    <v-text-field v-model="subTitle" label="Sub Title" variant="outlined" ></v-text-field>
                </v-col>
            </v-row>
            <v-row class="justify-center" dense>
                <v-col sm="10">
                    <v-textarea v-model="context" label="Context" variant="outlined"></v-textarea>
                </v-col>
            </v-row>
            <v-row dense>
                <v-btn @click="cancel()">Cancel</v-btn>
                <v-btn @click="submit()" color="primary">Submit</v-btn>
            </v-row>
        </v-container>
    </v-form>
</template>

<script lang="ts">
export default {
    data(){
        return{
            topics: [],
            title: null,
            subTitle: null,
            context: null,
        }
    },
    methods: {
        cancel() {
            this.$emit('cancelEvent', false)
            console.log('cancel click')
        },
        submit(){
            this.$emit('addPostEvent',{
                topic: this.topics,
                title: this.title,
                subTitle: this.subTitle,
                context :this.context
            })

        }
    }

}
</script>

<style></style>