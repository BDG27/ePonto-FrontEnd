<template>
    <div class="dashboard">
        <v-card color="transparent" style="box-shadow: none">
            <v-tabs centered v-model="tab" background-color="primary" dark>
                <v-tab v-for="item in items" :key="item.tab">
                    {{ item.tab }}
                </v-tab>
            </v-tabs>

            <v-tabs-items style="background-color: transparent" v-model="tab">
                <v-tab-item v-for="item in items" :key="item.tab">
                    <v-card flat color="transparent">
                        <div class="dashboard-header">
                            <div>Horas trabalhadas</div>
                            <div>Horas Restantes</div>
                            <div>Total Semanal</div>
                        </div>
                        <div class="dashboard-button-div">
                            <v-dialog
                                transition="dialog-top-transition"
                                max-width="600"
                            >
                                <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    color="primary"
                                    v-bind="attrs"
                                    v-on="on"
                                    class="dashboard-button-div-button"
                                >+</v-btn>
                                </template>
                                <template v-slot:default="dialog">
                                <v-card>
                                    <v-toolbar
                                    color="primary"
                                    dark
                                    >Opening from the top</v-toolbar>
                                    <v-card-text>
                                    <div class="text-h2 pa-12">Hello world!</div>
                                    </v-card-text>
                                    <v-card-actions class="justify-end">
                                    <v-btn
                                        text
                                        @click="dialog.value = false"
                                    >Close</v-btn>
                                    </v-card-actions>
                                </v-card>
                                </template>
                            </v-dialog>
                        </div>
                        
                        <v-card-text>Teste {{ item.tab }}</v-card-text>
                    </v-card>
                </v-tab-item>
            </v-tabs-items>
        </v-card>
        
    </div>
</template>

<script>
export default {
    data(){
        return{
            tab: null,
            items: [
                { tab: 'Janeiro' },
                { tab: 'Fevereiro' },
                { tab: 'Março' },
                { tab: 'Abril' },
                { tab: 'Maio'},
                { tab: 'Junho' },
                { tab: 'Julho', },
                { tab: 'Agosto', },
                { tab: 'Setembro', },
                { tab: 'Outubro', },
                { tab: 'Novembro', },
                { tab: 'Dezembro', },
            ],
        }
    }
}
</script>

<style>
.dashboard{
    background-color: #e1e1e1;
    min-height: 100vh;
}
.dashboard-header{
    display: flex;
    justify-content: space-around;
    padding: 20px;
}
.dashboard-button-div{
    display: flex;
    justify-content: end;
    padding: 5px 15px;
}
.dashboard-button-div-button{
    min-width: 50px !important;
    width: 50px !important;
    height: 50px !important;
    border-radius: 50%;
}
</style>